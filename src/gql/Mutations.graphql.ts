import gql from "graphql-tag";

export const loginUser = gql`
  mutation LoginUser($username: String!, $password: String!) {
    loginUser(username: $username, password: $password) {
      username
    }
  }
`;

export const logoutUser = gql`
  mutation LogoutUser {
    logoutUser
  }
`;

export const createUser = gql`
  mutation CreateUser(
    $username: String!
    $password: String!
    $group: String!
    $permission: Permission!
  ) {
    createUser(
      username: $username
      password: $password
      group: $group
      permission: $permission
    )
  }
`;

export const addThing = gql`
  mutation AddThing(
    $space: String!
    $component: String!
    $controller: Controller!
  ) {
    addThing(space: $space, component: $component, controller: $controller)
  }
`;

export const toggleThing = gql`
  mutation ToggleThing($toggle: String!, $topic: String!) {
    toggleThing(toggle: $toggle, topic: $topic)
  }
`;

export const createGroup = gql`
  mutation CreateGroup($name: String!) {
    createGroup(name: $name)
  }
`;

export const updateGroup = gql`
  mutation UpdateGroup(
    $groupId: String!
    $name: String
    $userIds: [String]
    $thingIds: [String]
  ) {
    updateGroup(
      groupId: $groupId
      name: $name
      userIds: $userIds
      thingIds: $thingIds
    )
  }
`;

export const deleteGroup = gql`
  mutation DeleteGroup($id: String!) {
    deleteGroup(id: $id)
  }
`;

export const changePassword = gql`
  mutation ChangePassword($password: String!, $passwordConfirmation: String!) {
    changePassword(
      password: $password
      passwordConfirmation: $passwordConfirmation
    )
  }
`;
