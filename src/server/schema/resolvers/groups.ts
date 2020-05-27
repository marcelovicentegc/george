import { IResolvers } from "apollo-server-express";
import { User } from "../../database/entities/User.model";
import { QueryResolvers, MutationResolvers, Permission } from "../../gql";
import { Context } from "../../utils";
import { Group, Thing } from "../../database/entities";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";

const queries: QueryResolvers = {
  getGroupId: async (_, { userId }, { req }: Context) => {
    let user: User;

    if (userId) {
      user = await User.findOne({
        where: { userId },
        relations: ["group"],
      });
    } else if (req.session.userId) {
      user = await User.findOne({
        where: { userId: req.session.userId },
        relations: ["group"],
      });
    }

    const group = user.group;

    return group;
  },
};

const mutations: MutationResolvers = {
  createGroup: async (_, { name }, { req }: Context) => {
    const user = await User.findOne(req.session.userId);

    if (!user) {
      return false;
    }

    if (user.permission !== Permission.Admin) {
      return false;
    }

    const group = Group.create({
      name,
      users: [],
      things: [],
    });

    try {
      await group.save();
      return true;
    } catch (error) {
      console.log(error.message);
      return false;
    }
  },
  updateGroup: async (
    _,
    { groupId, name, userIds, thingIds },
    { req }: Context
  ) => {
    const user = await User.findOne(req.session.userId);

    if (!user) {
      return false;
    }

    if (user.permission !== Permission.Admin) {
      return false;
    }

    if (groupId) {
      return false;
    }

    try {
      await Group.update(
        {
          id: groupId,
        },
        {
          name,
          users: userIds as QueryDeepPartialEntity<Thing>[],
          things: thingIds as QueryDeepPartialEntity<Thing>[],
        }
      );
      return true;
    } catch (error) {
      console.log(error.message);
      return false;
    }
  },
  deleteGroup: async (_, { id }, { req }: Context) => {
    const user = await User.findOne(req.session.userId);

    if (!user) {
      return false;
    }

    if (user.permission !== Permission.Admin) {
      return false;
    }

    try {
      await Group.delete(id);
      return true;
    } catch (error) {
      console.log(error.message);
      return false;
    }
  },
};

export const groups: IResolvers = {
  Query: { ...queries },
  Mutation: { ...mutations },
};
