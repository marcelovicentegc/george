import { makeExecutableSchema } from "graphql-tools";
import { auth, users, groups, things } from "./resolvers";
import { typeDefs } from "./typeDefs";

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers: [auth, users, groups, things]
});
