import gql from "graphql-tag";

const typeDefs = gql`
  # https://github.com/apollographql/graphql-tools/issues/764
  type Query {
    getUserIdFromSession: User
    getUserUsernameFromId(id: String!): User
  }

  type User {
    id: ID!
    username: String!
    password: String!
  }

  type Group {
    users: [User]
  }

  type Thing {
    id: ID!
    name: String!
    topic: String!
  }

  type Mutation {
    loginUser(username: String!, password: String!): User
    logoutUser: Boolean!
    addThing(name: String!, topic: String!): Boolean!
    toggleLed(toggle: String!): Boolean!
    toggleAbajur(toggle: String!): Boolean!
    toggleAC(toggle: String!): Boolean!
  }
`;

export default typeDefs;
