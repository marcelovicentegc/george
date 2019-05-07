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
