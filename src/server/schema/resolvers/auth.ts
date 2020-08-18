import * as bcrypt from "bcrypt";
import { IResolvers } from "apollo-server-express";
import { User } from "../../database/entities/User.model";
import { MutationResolvers } from "../../gql";
import { Context } from "../../utils";

const mutations: MutationResolvers = {
  loginUser: async (_, { username, password }, { req }: Context) => {
    const user = await User.findOne({
      where: { username },
    });

    if (!user) {
      throw new Error("This user doesn't exist");
    }

    const valid = bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error("Wrong password.");
    }

    req.session.userId = user.id;

    delete user.password;

    return user;
  },
  logoutUser: async (_, __, { req, res }) => {
    await new Promise((res) => req.session.destroy(() => res()));
    res.clearCookie("cookie.sid");
    return true;
  },
};

export const auth: IResolvers = {
  Mutation: { ...mutations },
};
