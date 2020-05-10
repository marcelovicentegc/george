import { IResolvers } from "apollo-server-express";
import { User } from "../../database/entities/User.model";
import { QueryResolvers } from "../../gql";
import { Context } from "../../utils";

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

export const groups: IResolvers = {
  Query: { ...queries },
};
