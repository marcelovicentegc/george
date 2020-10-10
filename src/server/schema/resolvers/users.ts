import * as bcrypt from "bcrypt";
import { IResolvers } from "apollo-server-express";
import { User } from "../../database/entities/User.model";
import { Context } from "../../utils";
import { QueryResolvers, Permission, MutationResolvers } from "../../gql";
import { isLoggedInUserAdmin } from "../utils/auth";
import { Group, Profile } from "../../database/entities";
import { v1 } from "uuid";
import { getUserFromSession } from "../utils/users";

const queries: QueryResolvers = {
  getUserId: async (_, __, { req, res }: Context) => {
    const user = await getUserFromSession({ req, res });
    return user.id;
  },
  getUsers: async (_, __, { req, res }: Context) => {
    const user = await getUserFromSession({ req, res });

    if (user.permission !== Permission.Admin) return null;

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
    user.password = await bcrypt.hash(password, 12);
    user.permission = permission as Permission;
    user.group = group;
    user.profile = profile;

    await user.save();

    return true;
  },
  changePassword: async (
    _,
    { password, passwordConfirmation },
    { req, res }: Context
  ) => {
    const user = await getUserFromSession({ req, res });

    if (password !== passwordConfirmation) {
      return false;
    }

    user.password = await bcrypt.hash(password, 12);

    await user.save();

    return true;
  },
  changeUsername: async (_, { username }, { req, res }: Context) => {
    const user = await getUserFromSession({ req, res });

    user.username = username;

    await user.save();

    return true;
  },
  deleteUser: async (_, { id }, { req, res }: Context) => {
    let user: User | null;

    if (id) {
      user = await User.findOne(id);
    } else {
      user = await getUserFromSession({ req, res });
    }

    if (!user) {
      return false;
    }

    await user.remove();

    return true;
  },
};

export const users: IResolvers = {
  Query: { ...queries },
  Mutation: { ...mutations },
};
