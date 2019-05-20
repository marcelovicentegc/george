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

export type ToggleLedVariables = {
  toggle: string;
};

export type ToggleLedMutation = {
  __typename?: "Mutation";

  toggleLed: boolean;
};

export type ToggleAbajurVariables = {
  toggle: string;
};

export type ToggleAbajurMutation = {
  __typename?: "Mutation";

  toggleAbajur: boolean;
};

export type ToggleAcVariables = {
  toggle: string;
};

export type ToggleAcMutation = {
  __typename?: "Mutation";

  toggleAC: boolean;
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
