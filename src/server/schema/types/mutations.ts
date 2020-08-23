import gql from "graphql-tag";

export const mutations = gql`
  type Mutation {
    loginUser(username: String!, password: String!): User
    logoutUser: Boolean!
    addThing(
      space: String!
      component: String!
      controller: Controller!
    ): Boolean!
    toggleThing(toggle: String!, topic: String!): Boolean!
    createGroup(name: String!): Boolean!
    updateGroup(
      groupId: String!
      name: String
      userIds: [String]
      thingIds: [String]
    ): Boolean!
    deleteGroup(id: String!): Boolean!
    createUser(
      username: String!
      password: String!
      group: String!
      permission: String!
    ): Boolean!
  }
`;
