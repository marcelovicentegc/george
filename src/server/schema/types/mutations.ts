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
  }
`;
