import { IResolvers } from "apollo-server-express";
import { Context } from "../../utils";
import { QueryResolvers } from "../../gql";
import { User } from "../../database/entities";

const queries: QueryResolvers = {
  getProfileAvatar: async (_, { userId }, { req }: Context) => {
    const id = userId || req.session.userId;

    if (!id) {
      throw new Error("User not found.");
    }

    const user = await User.findOne(id, {
      relations: ["profiles"],
    });

    return user.profile.avatarUrl;
  },
};

export const profiles: IResolvers = {
  Query: { ...queries },
};
