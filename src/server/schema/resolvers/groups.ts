import { IResolvers } from "apollo-server-express";
import { User } from "../../database/entities/User.model";
import { QueryResolvers } from "../../@types/gql";

const queries: QueryResolvers = {
  getGroupIdFromUserIdFromSession: async (_, __, { req }) => {
    const userId = req.session.id;
    const user = await User.findOne({
      where: { userId },
      relations: ["group"],
    });
    const groupId = user.group;
    return groupId;
  },
  getGroupIdFromUserId: async (_, { id }) => {
    const user = await User.findOne({
      where: { id },
      relations: ["group"],
    });
    const groupId = user.group;
    return groupId;
  },
};

export const groups: IResolvers = {
  Query: { ...queries },
};
