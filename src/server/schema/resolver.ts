import * as bcrypt from "bcrypt";
import { IResolvers } from "graphql-tools";
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
