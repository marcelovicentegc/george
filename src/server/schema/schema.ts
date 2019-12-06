import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolver";
import { typeDefs } from "./typeDefs";

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});
