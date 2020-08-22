import { IResolvers } from "apollo-server-express";
import { User } from "../../database/entities/User.model";
import { Context } from "../../utils";
import { QueryResolvers, Permission } from "../../gql";

const queries: QueryResolvers = {
  getUserId: async (_, __, { req, res }: Context) => {
    const userIdFromSession = req.session.userId;

    if (userIdFromSession === undefined) return null;

    const user = await User.findOne(userIdFromSession);

    if (!user) return null;

    return user.id;
  },
  getUsername: async (_, { userId }, { req }: Context) => {
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
  getPermission: async (_, { userId }, { req }: Context) => {
    let permission: Permission;

    if (userId) {
      permission = (await User.findOne(userId)).permission;
    } else {
      const user = req.session.userId;

      if (user === undefined) return null;

      permission = (await User.findOne(user)).permission;
    }

    return permission;
  },
};

export const users: IResolvers = {
  Query: { ...queries },
};
