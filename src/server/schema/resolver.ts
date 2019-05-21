import * as bcrypt from "bcrypt";
import { IResolvers } from "graphql-tools";
import Group from "../database/entities/Group.model";
import Thing from "../database/entities/Thing.model";
import User from "../database/entities/User.model";
import slugify from "../utils/slugify";
// import * as Five from 'johnny-five';

// const board = new Five.Board();

const resolvers: IResolvers = {
  Query: {
    getUserIdFromSession: async (_, __, { req }) => {
      const userIdFromSession = req.session.userId;

      if (userIdFromSession === undefined) return null;

      const userId = await User.findOne(userIdFromSession);

      if (!userId) return null;

      return userId;
    },
    getUserUsernameFromId: async (_, { id }) => {
      const username = await User.findOne(id);

      if (!username) return null;

      return username;
    },
    getGroupIdFromUserIdFromSession: async (_, __, { req }) => {
      const userId = req.session.id;
      const user = await User.findOne({
        where: { userId },
        relations: ["group"]
      });
      const groupId = user.group;
      return groupId;
    },
    getGroupIdFromUserId: async (_, { id }) => {
      const user = await User.findOne({
        where: { id },
        relations: ["group"]
      });
      const groupId = user.group;
      return groupId;
    },
    getThingsFromGroupId: async (_, { id }) => {
      const group = await Group.findOne(id);
      if (!group) {
        throw new Error("This group doesn't exist");
      }

      const groupId = group.id;
      const things = await Thing.find({
        where: { groupId }
      });

      return things;
    },
    getThingFromTopic: async (_, { topic }) => {
      const thing = await Thing.findOne({
        where: { topic }
      });

      if (!thing) return new Error("This component doesn't exist.");

      return thing;
    }
  },
  Mutation: {
    loginUser: async (_, { username, password }, { req }) => {
      const user = await User.findOne({
        where: { username }
      });

      if (!user) {
        throw new Error("This user doesn't exist");
      }

      const valid = bcrypt.compare(password, user.password);
      if (!valid) {
        throw new Error("Wrong password.");
      }

      req.session.userId = user.id;
      return user;
    },
    logoutUser: async (_, __, { req, res }) => {
      await new Promise(res => req.session.destroy(() => res()));
      res.clearCookie("cookie.sid");
      return true;
    },
    addThing: async (_, { space, component }, { req }) => {
      const userId = req.session.userId;

      if (!userId) {
        return false;
      }

      const spaceSlug = slugify(space);
      const componentSlug = slugify(component);
      const thing = await Thing.create({
        space: space,
        component: component,
        topic: spaceSlug + "/" + componentSlug,
        user: userId
      });

      const group = await Group.findOne({
        where: { userId },
        relations: ["things"]
      });

      if (!group) {
        return false;
      }

      await thing.save();
      await group.things.push(thing);
      await group.save();
      return true;
    },
    toggleThing: async (_, { toggle, topic }) => {
      toggle === "true"
        ? console.log(`Component subscribed to topic ${topic} is on`)
        : console.log(`Component subscribed to topic ${topic} is off`);

      // mqttClient.publish(topic, toggle);

      return true;
    }
  }
};

export default resolvers;
