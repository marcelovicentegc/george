import gql from "graphql-tag";

const typeDefs = gql`
  # https://github.com/apollographql/graphql-tools/issues/764
  type Query {
    dummy: String
  }

  type User {
    id: ID!
    username: String!
    password: String!
  }

  type Mutation {
    loginUser(username: String!, password: String!): User
    toggleLed(toggle: String!): Boolean!
    toggleAbajur(toggle: String!): Boolean!
    toggleAC(toggle: String!): Boolean!
  }
`;

export default typeDefs;
