import * as bcrypt from "bcrypt";
import { IResolvers } from "graphql-tools";
import { Group } from "../../database/entities/Group.model";
import { Thing } from "../../database/entities/Thing.model";
import { slugify } from "../../utils";
import { TriggerLog } from "../../database/entities/TriggerLog.model";
import { ThingWithTriggerLog } from "../../../client/gql";

export const things: IResolvers = {
  Query: {
    getThingsFromGroupId: async (_, { id }) => {
      const group = await Group.findOne(id);
      if (!group) {
        throw new Error("This group doesn't exist");
      }

      const groupId = group.id;
      const things = await Thing.find({
        where: { groupId },
        relations: ["triggerLog"]
      });

      return things;
    },
    getThingFromTopic: async (_, { topic }) => {
      const thing = await Thing.findOne({
        where: { topic },
        relations: ["triggerLog"]
      });

      if (!thing) return new Error("This component doesn't exist.");

      return thing;
    },
    getTriggerLog: async (_, { id }) => {
      const group = await Group.findOne(id);
      if (!group) {
        throw new Error("This group doesn't exist");
      }

      const groupId = group.id;
      const things = await Thing.find({
        where: { groupId },
        relations: ["triggerLog"]
      });

      const triggerLog: TriggerLog[] = [];

      things.map(thing => thing.triggerLog.map(log => triggerLog.push(log)));

      return triggerLog;
    },
    getThingsWithTriggerLog: async (_, { id }) => {
      const group = await Group.findOne(id);
      if (!group) {
        throw new Error("This group doesn't exist");
      }

      const groupId = group.id;
      const things = await Thing.find({
        where: { groupId },
        relations: ["triggerLog"]
      });

      const thingsWithTriggerLog: Pick<
        ThingWithTriggerLog,
        "space" | "component" | "state" | "date"
      >[] = [];

      things.map(thing =>
        thing.triggerLog.map(log =>
          thingsWithTriggerLog.push({
            date: log.date,
            state: log.state,
            space: thing.space,
            component: thing.component
          })
        )
      );

      console.log(thingsWithTriggerLog);

      return thingsWithTriggerLog;
    }
  },
  Mutation: {
    addThing: async (_, { space, component }, { req }) => {
      const userId = req.session.userId;

      if (!userId) {
        return false;
      }

      const spaceSlug = slugify(space);
      const componentSlug = slugify(component);
      const thing = await Thing.create({
        space,
        component,
        topic: spaceSlug + "/" + componentSlug,
        user: userId,
        triggerLog: []
      });

      const group = await Group.findOne({
        where: { userId },
        relations: ["things"]
      });

      if (!group) {
        return false;
      }

      await thing.save();
      group.things.push(thing);
      await group.save();
      return true;
    },
    toggleThing: async (_, { toggle, topic }) => {
      const state = toggle === "true" ? "on" : "off";

      const thing = await Thing.findOne({
        where: { topic },
        relations: ["triggerLog"]
      });

      const date = new Date()
        .toISOString()
        .replace(/T/, " ")
        .replace(/\..+/, "");

      const triggerLog = await TriggerLog.create({
        state,
        date,
        thing,
        thingId: thing.id
      });

      await triggerLog.save();
      thing.triggerLog.push(triggerLog);
      await thing.save();
      // mqttClient.publish(topic, toggle);

      return true;
    }
  }
};
