import { IResolvers } from "graphql-tools";
import { Group } from "../../database/entities/Group.model";
import { Thing } from "../../database/entities/Thing.model";
import { slugify, Context } from "../../utils";
import { TriggerLog } from "../../database/entities/TriggerLog.model";
import { ThingWithTriggerLog } from "../../gql";
import { QueryResolvers, MutationResolvers } from "../../gql";
import { User } from "../../database/entities/User.model";

const queries: QueryResolvers = {
  getThings: async (_, { groupId }) => {
    const group = await Group.findOne(groupId);

    if (!group) {
      throw new Error("This group doesn't exist");
    }

    const things = await Thing.find({
      where: { groupId },
      relations: ["triggerLog"],
    });

    things.map(
      (thing) =>
        (thing.triggerLog = thing.triggerLog.sort(
          (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
        ))
    );

    return things;
  },
  getThing: async (_, { topic }) => {
    const thing = await Thing.findOne({
      where: { topic },
      relations: ["triggerLog", "triggerLog.user"],
    });

    return thing;
  },
  getThingsWithTriggerLog: async (_, { id }) => {
    const group = await Group.findOne(id);

    if (!group) {
      throw new Error("This group doesn't exist");
    }

    const groupId = group.id;

    const things = await Thing.find({
      where: { groupId },
      relations: ["triggerLog"],
    });

    const thingsWithTriggerLog: Pick<
      ThingWithTriggerLog,
      "space" | "component" | "state" | "date"
    >[] = [];

    things.map((thing) =>
      thing.triggerLog.map((log) =>
        thingsWithTriggerLog.push({
          date: log.date,
          state: log.state,
          space: thing.space,
          component: thing.component,
        })
      )
    );

    return thingsWithTriggerLog;
  },
};

const mutations: MutationResolvers = {
  addThing: async (_, { space, component, controller }, { req }: Context) => {
    const userId = req.session.userId;

    if (!userId) {
      return false;
    }

    const user = await User.findOne(userId);

    if (!user) {
      return false;
    }

    const spaceSlug = slugify(space);
    const componentSlug = slugify(component);

    const thing = Thing.create({
      space,
      component,
      controller,
      topic: spaceSlug + "/" + componentSlug,
      user: userId as any,
      triggerLog: [],
    });

    const group = await Group.findOne({
      where: { userId },
      relations: ["things"],
    });

    if (!group) {
      return false;
    }

    await thing.save();
    group.things.push(thing);
    await group.save();

    return true;
  },
  toggleThing: async (_, { toggle, topic }, { req }: Context) => {
    const state = toggle === "true" ? "on" : "off";
    const userId = req.session.userId;

    if (!userId) {
      return false;
    }

    const thing = await Thing.findOne({
      where: { topic },
      relations: ["triggerLog"],
    });

    const date = new Date()
      .toISOString()
      .replace(/T/, " ")
      .replace(/\..+/, "");

    const triggerLog = TriggerLog.create({
      state,
      date,
      thing,
      thingId: thing.id,
      user: userId as any,
    });

    await triggerLog.save();
    thing.triggerLog.push(triggerLog);
    await thing.save();

    // mqttClient.publish(topic, toggle);

    return true;
  },
};

export const things: IResolvers = {
  Query: { ...queries },
  Mutation: { ...mutations },
};
