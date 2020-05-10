import * as bcrypt from "bcrypt";
import { IResolvers } from "apollo-server-express";
import { User } from "../../database/entities/User.model";
import { MutationResolvers } from "../../gql";

const mutations: MutationResolvers = {
  loginUser: async (_, { username, password }, { req }) => {
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
