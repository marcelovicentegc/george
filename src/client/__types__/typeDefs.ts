export type Maybe<T> = T | null;

// ====================================================
// Documents
// ====================================================

export type LoginUserVariables = {
  username: string;
  password: string;
};

export type LoginUserMutation = {
  __typename?: "Mutation";

  loginUser: Maybe<LoginUserLoginUser>;
};

export type LoginUserLoginUser = {
  __typename?: "User";

  username: string;
};

export type LogoutUserVariables = {};

export type LogoutUserMutation = {
  __typename?: "Mutation";

  logoutUser: boolean;
};

export type AddThingVariables = {
  space: string;
  component: string;
};

export type AddThingMutation = {
  __typename?: "Mutation";

  addThing: boolean;
};

export type ToggleThingVariables = {
  toggle: string;
  topic: string;
};

export type ToggleThingMutation = {
  __typename?: "Mutation";

  toggleThing: boolean;
};

export type GetUserIdFromSessionVariables = {};

export type GetUserIdFromSessionQuery = {
  __typename?: "Query";

  getUserIdFromSession: Maybe<GetUserIdFromSessionGetUserIdFromSession>;
};

export type GetUserIdFromSessionGetUserIdFromSession = {
  __typename?: "User";

  id: string;
};

export type GetUserUsernameFromIdVariables = {
  id: string;
};

export type GetUserUsernameFromIdQuery = {
  __typename?: "Query";

  getUserUsernameFromId: Maybe<GetUserUsernameFromIdGetUserUsernameFromId>;
};

export type GetUserUsernameFromIdGetUserUsernameFromId = {
  __typename?: "User";

  username: string;
};

export type GetGroupIdFromUserIdFromSessionVariables = {};

export type GetGroupIdFromUserIdFromSessionQuery = {
  __typename?: "Query";

  getGroupIdFromUserIdFromSession: Maybe<
    GetGroupIdFromUserIdFromSessionGetGroupIdFromUserIdFromSession
  >;
};

export type GetGroupIdFromUserIdFromSessionGetGroupIdFromUserIdFromSession = {
  __typename?: "Group";

  id: string;
};

export type GetGroupIdFromUserIdVariables = {
  id: string;
};

export type GetGroupIdFromUserIdQuery = {
  __typename?: "Query";

  getGroupIdFromUserId: Maybe<GetGroupIdFromUserIdGetGroupIdFromUserId>;
};

export type GetGroupIdFromUserIdGetGroupIdFromUserId = {
  __typename?: "Group";

  id: string;
};

export type GetThingsFromGroupIdVariables = {
  id: string;
};

export type GetThingsFromGroupIdQuery = {
  __typename?: "Query";

  getThingsFromGroupId: Maybe<
    (Maybe<GetThingsFromGroupIdGetThingsFromGroupId>)[]
  >;
};

export type GetThingsFromGroupIdGetThingsFromGroupId = {
  __typename?: "Thing";

  id: string;

  space: string;

  component: string;

  topic: Maybe<string>;
};

export type GetThingFromTopicVariables = {
  topic: string;
};

export type GetThingFromTopicQuery = {
  __typename?: "Query";

  getThingFromTopic: Maybe<GetThingFromTopicGetThingFromTopic>;
};

export type GetThingFromTopicGetThingFromTopic = {
  __typename?: "Thing";

  id: string;

  space: string;

  component: string;

  topic: Maybe<string>;

  triggered: Maybe<(Maybe<GetThingFromTopicTriggered>)[]>;
};

export type GetThingFromTopicTriggered = {
  __typename?: "Triggered";

  at: string;
};
