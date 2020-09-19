import { IResolvers } from "apollo-server-express";
import { User } from "../../database/entities/User.model";
import { Context } from "../../utils";
import { QueryResolvers, Permission, MutationResolvers } from "../../gql";
import { isLoggedInUserAdmin } from "../utils/auth";
import { Group, Profile } from "../../database/entities";
import { v1 } from "uuid";

const queries: QueryResolvers = {
  getUserId: async (_, __, { req }: Context) => {
    const userIdFromSession = req.session.userId;

    if (userIdFromSession === undefined) return null;

    const user = await User.findOne(userIdFromSession);

    if (!user) return null;

    return user.id;
  },
  getUsers: async (_, __, { req }: Context) => {
    const userIdFromSession = req.session.userId;

    if (userIdFromSession === undefined) return null;

    const user = await User.findOne(userIdFromSession);

    if (!user || user.permission !== Permission.Admin) return null;

    const users = await User.find({ relations: ["profile"] });

    return users;
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

const mutations: MutationResolvers = {
  createUser: async (
    _,
    { username, password, permission, group: groupName },
    { req, res }: Context
  ) => {
    await isLoggedInUserAdmin({ req, res });

    const group = await Group.findOne({ where: { name: groupName } });

    const profile = Profile.create({
      avatarUrl: `https://avatars.dicebear.com/v2/jdenticon/${v1()}.svg`,
    });
    await profile.save();

    const user = new User();

    user.username = username;
    user.password = password;
    user.permission = permission as Permission;
    user.group = group;
    user.profile = profile;

    await user.save();

    return true;
  },
};

export const users: IResolvers = {
  Query: { ...queries },
  Mutation: { ...mutations },
};
