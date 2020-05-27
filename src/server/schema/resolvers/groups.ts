import { IResolvers } from "apollo-server-express";
import { User } from "../../database/entities/User.model";
import { QueryResolvers, MutationResolvers } from "../../gql";
import { Context } from "../../utils";
import { Group } from "../../database/entities";

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
};

export const groups: IResolvers = {
  Query: { ...queries },
  Mutation: { ...mutations },
};
