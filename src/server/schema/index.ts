import { makeExecutableSchema } from "graphql-tools";
import { auth, users, groups, things } from "./resolvers";
import { types, queries, mutations } from "./types";

export const schema = makeExecutableSchema({
  typeDefs: [types, queries, mutations],
  resolvers: [auth, users, groups, things],
});
