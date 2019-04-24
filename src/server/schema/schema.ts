import { makeExecutableSchema } from "graphql-tools";
import resolvers from "./resolver";
import typeDefs from "./typeDefs";

const schema = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})

export default schema;