import { IResolvers } from "apollo-server-express";
import { User } from "../../database/entities/User.model";
import { Context } from "../../utils";
import { QueryResolvers } from "../../gql";

const queries: QueryResolvers = {
  getUserIdFromSession: async (_, __, { req }: Context) => {
    const userIdFromSession = req.session.userId;

    if (userIdFromSession === undefined) return null;

    const userId = await User.findOne(userIdFromSession);

    if (!userId) return null;

    return userId;
  },
  getUsername: async (_, { id }, { req }: Context): Promise<string> => {
    let username: string;

    if (id) {
      username = (await User.findOne(id)).username;
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
