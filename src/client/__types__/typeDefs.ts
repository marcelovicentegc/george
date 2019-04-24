export type Maybe<T> = T | null;

// ====================================================
// Documents
// ====================================================

export type ToggleLedVariables = {
  toggle: string;
};

export type ToggleLedMutation = {
  __typename?: "Mutation";

  toggleLed: boolean;
};
