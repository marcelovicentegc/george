import { IResolvers } from "apollo-server-express";
import { User } from "../../database/entities/User.model";

export const users: IResolvers = {
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
  }
};
