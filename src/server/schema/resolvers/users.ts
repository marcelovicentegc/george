import { IResolvers } from "apollo-server-express";
import { User } from "../../database/entities/User.model";
import { Context } from "../../utils";
import { QueryResolvers } from "../../gql";

const queries: QueryResolvers = {
  getUserId: async (_, __, { req }: Context) => {
    const userIdFromSession = req.session.userId;

    if (userIdFromSession === undefined) return null;

    const user = await User.findOne(userIdFromSession);

    if (!user) return null;

    return user.id;
  },
  getUsername: async (_, { userId }, { req }: Context): Promise<string> => {
    let username: string;

    if (userId) {
      username = (await User.findOne(userId)).username;
    } else {
      const user = req.session.userId;

      if (user === undefined) return null;

      username = (await User.findOne(user)).username;
    }

    if (!username) return null;

    return username;
  },
};

export const users: IResolvers = {
  Query: { ...queries },
};
