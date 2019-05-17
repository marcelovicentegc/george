import * as bcrypt from "bcrypt";
import { IResolvers } from "graphql-tools";
import Group from "../database/entities/Group.model";
import Thing from "../database/entities/Thing.model";
import User from "../database/entities/User.model";
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
    addThing: async (_, { name, topic }, { req }) => {
      const userId = req.session.userId;

      if (!userId) {
        return false;
      }

      const thing = await Thing.create({
        name: name,
        topic: topic,
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
      return true;
    },
    toggleLed: async (_, { toggle }) => {
      toggle === "true" ? console.log("Led is on") : console.log("Led is off");
      // board.on('ready', () => {
      //   Five.Led() receives a pin number
      // const led = new Five.Led(10);
      //     toggle ? led.on() : led.off();
      //   });
    },
    toggleAbajur: async (_, { toggle }) => {
      toggle === "true"
        ? console.log("Abajur is on")
        : console.log("Abajur is off");
    },
    toggleAC: async (_, { toggle }) => {
      toggle === "true" ? console.log("AC is on") : console.log("AC is off");
    }
  }
};

export default resolvers;
