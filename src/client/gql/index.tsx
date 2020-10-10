import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export enum Controller {
  Switch = 'SWITCH'
}

export type Group = {
   __typename?: 'Group';
  id: Scalars['String'];
  name: Scalars['String'];
  users?: Maybe<Array<Maybe<User>>>;
  things?: Maybe<Array<Maybe<Thing>>>;
};

export type Mutation = {
   __typename?: 'Mutation';
  loginUser?: Maybe<User>;
  logoutUser: Scalars['Boolean'];
  addThing: Scalars['Boolean'];
  toggleThing: Scalars['Boolean'];
  createGroup: Scalars['Boolean'];
  updateGroup: Scalars['Boolean'];
  deleteGroup: Scalars['Boolean'];
  createUser: Scalars['Boolean'];
  changePassword: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  changeUsername: Scalars['Boolean'];
};


export type MutationLoginUserArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
};


export type MutationAddThingArgs = {
  space: Scalars['String'];
  component: Scalars['String'];
  controller: Controller;
};


export type MutationToggleThingArgs = {
  toggle: Scalars['String'];
  topic: Scalars['String'];
};


export type MutationCreateGroupArgs = {
  name: Scalars['String'];
};


export type MutationUpdateGroupArgs = {
  groupId: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  userIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  thingIds?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type MutationDeleteGroupArgs = {
  id: Scalars['String'];
};


export type MutationCreateUserArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
  group: Scalars['String'];
  permission: Permission;
};


export type MutationChangePasswordArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  id?: Maybe<Scalars['String']>;
};


export type MutationChangeUsernameArgs = {
  username: Scalars['String'];
};

export enum Permission {
  Admin = 'ADMIN',
  Common = 'COMMON'
}

export type Profile = {
   __typename?: 'Profile';
  id: Scalars['ID'];
  avatar?: Maybe<Scalars['Upload']>;
  avatarUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Query = {
   __typename?: 'Query';
  getUserId?: Maybe<Scalars['String']>;
  getUsers?: Maybe<Array<Maybe<User>>>;
  getUsername?: Maybe<Scalars['String']>;
  getPermission: Permission;
  getProfileAvatar?: Maybe<Scalars['String']>;
  getGroupId?: Maybe<Group>;
  getGroup?: Maybe<Group>;
  getThings?: Maybe<Array<Maybe<Thing>>>;
  groups?: Maybe<Array<Group>>;
  groupNames?: Maybe<Array<Scalars['String']>>;
  getThing?: Maybe<Thing>;
  getTriggerLog?: Maybe<Array<Maybe<TriggerLog>>>;
  getThingsWithTriggerLog?: Maybe<Array<Maybe<ThingWithTriggerLog>>>;
};


export type QueryGetUsernameArgs = {
  userId?: Maybe<Scalars['String']>;
};


export type QueryGetPermissionArgs = {
  userId?: Maybe<Scalars['String']>;
};


export type QueryGetProfileAvatarArgs = {
  userId?: Maybe<Scalars['String']>;
};


export type QueryGetGroupIdArgs = {
  userId?: Maybe<Scalars['String']>;
};


export type QueryGetGroupArgs = {
  id: Scalars['String'];
};


export type QueryGetThingsArgs = {
  groupId: Scalars['String'];
};


export type QueryGetThingArgs = {
  topic: Scalars['String'];
};


export type QueryGetTriggerLogArgs = {
  groupId: Scalars['String'];
};


export type QueryGetThingsWithTriggerLogArgs = {
  id: Scalars['String'];
};

export type Thing = {
   __typename?: 'Thing';
  id: Scalars['ID'];
  space: Scalars['String'];
  component: Scalars['String'];
  controller: Controller;
  topic?: Maybe<Scalars['String']>;
  triggerLog?: Maybe<Array<Maybe<TriggerLog>>>;
};

export type ThingWithTriggerLog = {
   __typename?: 'ThingWithTriggerLog';
  space: Scalars['String'];
  component: Scalars['String'];
  state: Scalars['String'];
  date: Scalars['String'];
};

export type TriggerLog = {
   __typename?: 'TriggerLog';
  id: Scalars['ID'];
  state: Scalars['String'];
  date: Scalars['String'];
  user: User;
  thingId: Scalars['String'];
};


export type User = {
   __typename?: 'User';
  id: Scalars['ID'];
  profile: Profile;
  username: Scalars['String'];
  password: Scalars['String'];
  permission: Permission;
  activity?: Maybe<Array<Maybe<TriggerLog>>>;
};

export type LoginUserMutationVariables = {
  username: Scalars['String'];
  password: Scalars['String'];
};


export type LoginUserMutation = (
  { __typename?: 'Mutation' }
  & { loginUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'username'>
  )> }
);

export type LogoutUserMutationVariables = {};


export type LogoutUserMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logoutUser'>
);

export type CreateUserMutationVariables = {
  username: Scalars['String'];
  password: Scalars['String'];
  group: Scalars['String'];
  permission: Permission;
};


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'createUser'>
);

export type AddThingMutationVariables = {
  space: Scalars['String'];
  component: Scalars['String'];
  controller: Controller;
};


export type AddThingMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'addThing'>
);

export type ToggleThingMutationVariables = {
  toggle: Scalars['String'];
  topic: Scalars['String'];
};


export type ToggleThingMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'toggleThing'>
);

export type CreateGroupMutationVariables = {
  name: Scalars['String'];
};


export type CreateGroupMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'createGroup'>
);

export type UpdateGroupMutationVariables = {
  groupId: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  userIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  thingIds?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type UpdateGroupMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'updateGroup'>
);

export type DeleteGroupMutationVariables = {
  id: Scalars['String'];
};


export type DeleteGroupMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteGroup'>
);

export type ChangePasswordMutationVariables = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type ChangePasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'changePassword'>
);

export type DeleteUserMutationVariables = {
  id?: Maybe<Scalars['String']>;
};


export type DeleteUserMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteUser'>
);

export type ChangeUsernameMutationVariables = {
  username: Scalars['String'];
};


export type ChangeUsernameMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'changeUsername'>
);

export type GetUserIdQueryVariables = {};


export type GetUserIdQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'getUserId'>
);

export type GetUsernameQueryVariables = {
  userId?: Maybe<Scalars['String']>;
};


export type GetUsernameQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'getUsername'>
);

export type GetUsersQueryVariables = {};


export type GetUsersQuery = (
  { __typename?: 'Query' }
  & { getUsers?: Maybe<Array<Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'username' | 'permission'>
    & { profile: (
      { __typename?: 'Profile' }
      & Pick<Profile, 'avatarUrl'>
    ) }
  )>>> }
);

export type GetPermissionQueryVariables = {
  userId?: Maybe<Scalars['String']>;
};


export type GetPermissionQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'getPermission'>
);

export type GetProfileAvatarQueryVariables = {
  userId?: Maybe<Scalars['String']>;
};


export type GetProfileAvatarQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'getProfileAvatar'>
);

export type GetGroupIdQueryVariables = {
  userId?: Maybe<Scalars['String']>;
};


export type GetGroupIdQuery = (
  { __typename?: 'Query' }
  & { getGroupId?: Maybe<(
    { __typename?: 'Group' }
    & Pick<Group, 'id'>
  )> }
);

export type GetGroupQueryVariables = {
  id: Scalars['String'];
};


export type GetGroupQuery = (
  { __typename?: 'Query' }
  & { getGroup?: Maybe<(
    { __typename?: 'Group' }
    & Pick<Group, 'name'>
    & { users?: Maybe<Array<Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
      & { profile: (
        { __typename?: 'Profile' }
        & Pick<Profile, 'avatarUrl'>
      ) }
    )>>>, things?: Maybe<Array<Maybe<(
      { __typename?: 'Thing' }
      & Pick<Thing, 'id' | 'space' | 'component'>
    )>>> }
  )> }
);

export type GroupNamesQueryVariables = {};


export type GroupNamesQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'groupNames'>
);

export type GroupsQueryVariables = {};


export type GroupsQuery = (
  { __typename?: 'Query' }
  & { groups?: Maybe<Array<(
    { __typename?: 'Group' }
    & Pick<Group, 'name'>
    & { users?: Maybe<Array<Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
      & { profile: (
        { __typename?: 'Profile' }
        & Pick<Profile, 'avatarUrl'>
      ) }
    )>>>, things?: Maybe<Array<Maybe<(
      { __typename?: 'Thing' }
      & Pick<Thing, 'id' | 'space' | 'component'>
    )>>> }
  )>> }
);

export type GetThingsQueryVariables = {
  groupId: Scalars['String'];
};


export type GetThingsQuery = (
  { __typename?: 'Query' }
  & { getThings?: Maybe<Array<Maybe<(
    { __typename?: 'Thing' }
    & Pick<Thing, 'id' | 'space' | 'component' | 'topic'>
    & { triggerLog?: Maybe<Array<Maybe<(
      { __typename?: 'TriggerLog' }
      & Pick<TriggerLog, 'date' | 'state' | 'thingId'>
    )>>> }
  )>>> }
);

export type GetThingQueryVariables = {
  topic: Scalars['String'];
};


export type GetThingQuery = (
  { __typename?: 'Query' }
  & { getThing?: Maybe<(
    { __typename?: 'Thing' }
    & Pick<Thing, 'id' | 'space' | 'component' | 'topic'>
    & { triggerLog?: Maybe<Array<Maybe<(
      { __typename?: 'TriggerLog' }
      & Pick<TriggerLog, 'id' | 'state' | 'date' | 'thingId'>
      & { user: (
        { __typename?: 'User' }
        & Pick<User, 'username'>
      ) }
    )>>> }
  )> }
);

export type GetTriggerLogQueryVariables = {
  groupId: Scalars['String'];
};


export type GetTriggerLogQuery = (
  { __typename?: 'Query' }
  & { getTriggerLog?: Maybe<Array<Maybe<(
    { __typename?: 'TriggerLog' }
    & Pick<TriggerLog, 'id' | 'state' | 'date' | 'thingId'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'username'>
    ) }
  )>>> }
);

export type GetThingsWithTriggerLogQueryVariables = {
  id: Scalars['String'];
};


export type GetThingsWithTriggerLogQuery = (
  { __typename?: 'Query' }
  & { getThingsWithTriggerLog?: Maybe<Array<Maybe<(
    { __typename?: 'ThingWithTriggerLog' }
    & Pick<ThingWithTriggerLog, 'space' | 'component' | 'state' | 'date'>
  )>>> }
);


export const LoginUserDocument = gql`
    mutation LoginUser($username: String!, $password: String!) {
  loginUser(username: $username, password: $password) {
    username
  }
}
    `;
export type LoginUserMutationFn = ApolloReactCommon.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;
export type LoginUserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LoginUserMutation, LoginUserMutationVariables>, 'mutation'>;

    export const LoginUserComponent = (props: LoginUserComponentProps) => (
      <ApolloReactComponents.Mutation<LoginUserMutation, LoginUserMutationVariables> mutation={LoginUserDocument} {...props} />
    );
    
export type LoginUserProps<TChildProps = {}> = ApolloReactHoc.MutateProps<LoginUserMutation, LoginUserMutationVariables> & TChildProps;
export function withLoginUser<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  LoginUserMutation,
  LoginUserMutationVariables,
  LoginUserProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, LoginUserMutation, LoginUserMutationVariables, LoginUserProps<TChildProps>>(LoginUserDocument, {
      alias: 'loginUser',
      ...operationOptions
    });
};

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, baseOptions);
      }
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = ApolloReactCommon.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;
export const LogoutUserDocument = gql`
    mutation LogoutUser {
  logoutUser
}
    `;
export type LogoutUserMutationFn = ApolloReactCommon.MutationFunction<LogoutUserMutation, LogoutUserMutationVariables>;
export type LogoutUserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LogoutUserMutation, LogoutUserMutationVariables>, 'mutation'>;

    export const LogoutUserComponent = (props: LogoutUserComponentProps) => (
      <ApolloReactComponents.Mutation<LogoutUserMutation, LogoutUserMutationVariables> mutation={LogoutUserDocument} {...props} />
    );
    
export type LogoutUserProps<TChildProps = {}> = ApolloReactHoc.MutateProps<LogoutUserMutation, LogoutUserMutationVariables> & TChildProps;
export function withLogoutUser<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  LogoutUserMutation,
  LogoutUserMutationVariables,
  LogoutUserProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, LogoutUserMutation, LogoutUserMutationVariables, LogoutUserProps<TChildProps>>(LogoutUserDocument, {
      alias: 'logoutUser',
      ...operationOptions
    });
};

/**
 * __useLogoutUserMutation__
 *
 * To run a mutation, you first call `useLogoutUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutUserMutation, { data, loading, error }] = useLogoutUserMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LogoutUserMutation, LogoutUserMutationVariables>) {
        return ApolloReactHooks.useMutation<LogoutUserMutation, LogoutUserMutationVariables>(LogoutUserDocument, baseOptions);
      }
export type LogoutUserMutationHookResult = ReturnType<typeof useLogoutUserMutation>;
export type LogoutUserMutationResult = ApolloReactCommon.MutationResult<LogoutUserMutation>;
export type LogoutUserMutationOptions = ApolloReactCommon.BaseMutationOptions<LogoutUserMutation, LogoutUserMutationVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($username: String!, $password: String!, $group: String!, $permission: Permission!) {
  createUser(username: $username, password: $password, group: $group, permission: $permission)
}
    `;
export type CreateUserMutationFn = ApolloReactCommon.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;
export type CreateUserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateUserMutation, CreateUserMutationVariables>, 'mutation'>;

    export const CreateUserComponent = (props: CreateUserComponentProps) => (
      <ApolloReactComponents.Mutation<CreateUserMutation, CreateUserMutationVariables> mutation={CreateUserDocument} {...props} />
    );
    
export type CreateUserProps<TChildProps = {}> = ApolloReactHoc.MutateProps<CreateUserMutation, CreateUserMutationVariables> & TChildProps;
export function withCreateUser<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateUserMutation,
  CreateUserMutationVariables,
  CreateUserProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, CreateUserMutation, CreateUserMutationVariables, CreateUserProps<TChildProps>>(CreateUserDocument, {
      alias: 'createUser',
      ...operationOptions
    });
};

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *      group: // value for 'group'
 *      permission: // value for 'permission'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, baseOptions);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = ApolloReactCommon.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const AddThingDocument = gql`
    mutation AddThing($space: String!, $component: String!, $controller: Controller!) {
  addThing(space: $space, component: $component, controller: $controller)
}
    `;
export type AddThingMutationFn = ApolloReactCommon.MutationFunction<AddThingMutation, AddThingMutationVariables>;
export type AddThingComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddThingMutation, AddThingMutationVariables>, 'mutation'>;

    export const AddThingComponent = (props: AddThingComponentProps) => (
      <ApolloReactComponents.Mutation<AddThingMutation, AddThingMutationVariables> mutation={AddThingDocument} {...props} />
    );
    
export type AddThingProps<TChildProps = {}> = ApolloReactHoc.MutateProps<AddThingMutation, AddThingMutationVariables> & TChildProps;
export function withAddThing<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddThingMutation,
  AddThingMutationVariables,
  AddThingProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, AddThingMutation, AddThingMutationVariables, AddThingProps<TChildProps>>(AddThingDocument, {
      alias: 'addThing',
      ...operationOptions
    });
};

/**
 * __useAddThingMutation__
 *
 * To run a mutation, you first call `useAddThingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddThingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addThingMutation, { data, loading, error }] = useAddThingMutation({
 *   variables: {
 *      space: // value for 'space'
 *      component: // value for 'component'
 *      controller: // value for 'controller'
 *   },
 * });
 */
export function useAddThingMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddThingMutation, AddThingMutationVariables>) {
        return ApolloReactHooks.useMutation<AddThingMutation, AddThingMutationVariables>(AddThingDocument, baseOptions);
      }
export type AddThingMutationHookResult = ReturnType<typeof useAddThingMutation>;
export type AddThingMutationResult = ApolloReactCommon.MutationResult<AddThingMutation>;
export type AddThingMutationOptions = ApolloReactCommon.BaseMutationOptions<AddThingMutation, AddThingMutationVariables>;
export const ToggleThingDocument = gql`
    mutation ToggleThing($toggle: String!, $topic: String!) {
  toggleThing(toggle: $toggle, topic: $topic)
}
    `;
export type ToggleThingMutationFn = ApolloReactCommon.MutationFunction<ToggleThingMutation, ToggleThingMutationVariables>;
export type ToggleThingComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<ToggleThingMutation, ToggleThingMutationVariables>, 'mutation'>;

    export const ToggleThingComponent = (props: ToggleThingComponentProps) => (
      <ApolloReactComponents.Mutation<ToggleThingMutation, ToggleThingMutationVariables> mutation={ToggleThingDocument} {...props} />
    );
    
export type ToggleThingProps<TChildProps = {}> = ApolloReactHoc.MutateProps<ToggleThingMutation, ToggleThingMutationVariables> & TChildProps;
export function withToggleThing<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ToggleThingMutation,
  ToggleThingMutationVariables,
  ToggleThingProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, ToggleThingMutation, ToggleThingMutationVariables, ToggleThingProps<TChildProps>>(ToggleThingDocument, {
      alias: 'toggleThing',
      ...operationOptions
    });
};

/**
 * __useToggleThingMutation__
 *
 * To run a mutation, you first call `useToggleThingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleThingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleThingMutation, { data, loading, error }] = useToggleThingMutation({
 *   variables: {
 *      toggle: // value for 'toggle'
 *      topic: // value for 'topic'
 *   },
 * });
 */
export function useToggleThingMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ToggleThingMutation, ToggleThingMutationVariables>) {
        return ApolloReactHooks.useMutation<ToggleThingMutation, ToggleThingMutationVariables>(ToggleThingDocument, baseOptions);
      }
export type ToggleThingMutationHookResult = ReturnType<typeof useToggleThingMutation>;
export type ToggleThingMutationResult = ApolloReactCommon.MutationResult<ToggleThingMutation>;
export type ToggleThingMutationOptions = ApolloReactCommon.BaseMutationOptions<ToggleThingMutation, ToggleThingMutationVariables>;
export const CreateGroupDocument = gql`
    mutation CreateGroup($name: String!) {
  createGroup(name: $name)
}
    `;
export type CreateGroupMutationFn = ApolloReactCommon.MutationFunction<CreateGroupMutation, CreateGroupMutationVariables>;
export type CreateGroupComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateGroupMutation, CreateGroupMutationVariables>, 'mutation'>;

    export const CreateGroupComponent = (props: CreateGroupComponentProps) => (
      <ApolloReactComponents.Mutation<CreateGroupMutation, CreateGroupMutationVariables> mutation={CreateGroupDocument} {...props} />
    );
    
export type CreateGroupProps<TChildProps = {}> = ApolloReactHoc.MutateProps<CreateGroupMutation, CreateGroupMutationVariables> & TChildProps;
export function withCreateGroup<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateGroupMutation,
  CreateGroupMutationVariables,
  CreateGroupProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, CreateGroupMutation, CreateGroupMutationVariables, CreateGroupProps<TChildProps>>(CreateGroupDocument, {
      alias: 'createGroup',
      ...operationOptions
    });
};

/**
 * __useCreateGroupMutation__
 *
 * To run a mutation, you first call `useCreateGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGroupMutation, { data, loading, error }] = useCreateGroupMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateGroupMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateGroupMutation, CreateGroupMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateGroupMutation, CreateGroupMutationVariables>(CreateGroupDocument, baseOptions);
      }
export type CreateGroupMutationHookResult = ReturnType<typeof useCreateGroupMutation>;
export type CreateGroupMutationResult = ApolloReactCommon.MutationResult<CreateGroupMutation>;
export type CreateGroupMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateGroupMutation, CreateGroupMutationVariables>;
export const UpdateGroupDocument = gql`
    mutation UpdateGroup($groupId: String!, $name: String, $userIds: [String], $thingIds: [String]) {
  updateGroup(groupId: $groupId, name: $name, userIds: $userIds, thingIds: $thingIds)
}
    `;
export type UpdateGroupMutationFn = ApolloReactCommon.MutationFunction<UpdateGroupMutation, UpdateGroupMutationVariables>;
export type UpdateGroupComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateGroupMutation, UpdateGroupMutationVariables>, 'mutation'>;

    export const UpdateGroupComponent = (props: UpdateGroupComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateGroupMutation, UpdateGroupMutationVariables> mutation={UpdateGroupDocument} {...props} />
    );
    
export type UpdateGroupProps<TChildProps = {}> = ApolloReactHoc.MutateProps<UpdateGroupMutation, UpdateGroupMutationVariables> & TChildProps;
export function withUpdateGroup<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateGroupMutation,
  UpdateGroupMutationVariables,
  UpdateGroupProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateGroupMutation, UpdateGroupMutationVariables, UpdateGroupProps<TChildProps>>(UpdateGroupDocument, {
      alias: 'updateGroup',
      ...operationOptions
    });
};

/**
 * __useUpdateGroupMutation__
 *
 * To run a mutation, you first call `useUpdateGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGroupMutation, { data, loading, error }] = useUpdateGroupMutation({
 *   variables: {
 *      groupId: // value for 'groupId'
 *      name: // value for 'name'
 *      userIds: // value for 'userIds'
 *      thingIds: // value for 'thingIds'
 *   },
 * });
 */
export function useUpdateGroupMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateGroupMutation, UpdateGroupMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateGroupMutation, UpdateGroupMutationVariables>(UpdateGroupDocument, baseOptions);
      }
export type UpdateGroupMutationHookResult = ReturnType<typeof useUpdateGroupMutation>;
export type UpdateGroupMutationResult = ApolloReactCommon.MutationResult<UpdateGroupMutation>;
export type UpdateGroupMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateGroupMutation, UpdateGroupMutationVariables>;
export const DeleteGroupDocument = gql`
    mutation DeleteGroup($id: String!) {
  deleteGroup(id: $id)
}
    `;
export type DeleteGroupMutationFn = ApolloReactCommon.MutationFunction<DeleteGroupMutation, DeleteGroupMutationVariables>;
export type DeleteGroupComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteGroupMutation, DeleteGroupMutationVariables>, 'mutation'>;

    export const DeleteGroupComponent = (props: DeleteGroupComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteGroupMutation, DeleteGroupMutationVariables> mutation={DeleteGroupDocument} {...props} />
    );
    
export type DeleteGroupProps<TChildProps = {}> = ApolloReactHoc.MutateProps<DeleteGroupMutation, DeleteGroupMutationVariables> & TChildProps;
export function withDeleteGroup<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteGroupMutation,
  DeleteGroupMutationVariables,
  DeleteGroupProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteGroupMutation, DeleteGroupMutationVariables, DeleteGroupProps<TChildProps>>(DeleteGroupDocument, {
      alias: 'deleteGroup',
      ...operationOptions
    });
};

/**
 * __useDeleteGroupMutation__
 *
 * To run a mutation, you first call `useDeleteGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteGroupMutation, { data, loading, error }] = useDeleteGroupMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteGroupMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteGroupMutation, DeleteGroupMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteGroupMutation, DeleteGroupMutationVariables>(DeleteGroupDocument, baseOptions);
      }
export type DeleteGroupMutationHookResult = ReturnType<typeof useDeleteGroupMutation>;
export type DeleteGroupMutationResult = ApolloReactCommon.MutationResult<DeleteGroupMutation>;
export type DeleteGroupMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteGroupMutation, DeleteGroupMutationVariables>;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($password: String!, $passwordConfirmation: String!) {
  changePassword(password: $password, passwordConfirmation: $passwordConfirmation)
}
    `;
export type ChangePasswordMutationFn = ApolloReactCommon.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;
export type ChangePasswordComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<ChangePasswordMutation, ChangePasswordMutationVariables>, 'mutation'>;

    export const ChangePasswordComponent = (props: ChangePasswordComponentProps) => (
      <ApolloReactComponents.Mutation<ChangePasswordMutation, ChangePasswordMutationVariables> mutation={ChangePasswordDocument} {...props} />
    );
    
export type ChangePasswordProps<TChildProps = {}> = ApolloReactHoc.MutateProps<ChangePasswordMutation, ChangePasswordMutationVariables> & TChildProps;
export function withChangePassword<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ChangePasswordMutation,
  ChangePasswordMutationVariables,
  ChangePasswordProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, ChangePasswordMutation, ChangePasswordMutationVariables, ChangePasswordProps<TChildProps>>(ChangePasswordDocument, {
      alias: 'changePassword',
      ...operationOptions
    });
};

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      password: // value for 'password'
 *      passwordConfirmation: // value for 'passwordConfirmation'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        return ApolloReactHooks.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, baseOptions);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = ApolloReactCommon.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const DeleteUserDocument = gql`
    mutation DeleteUser($id: String) {
  deleteUser(id: $id)
}
    `;
export type DeleteUserMutationFn = ApolloReactCommon.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;
export type DeleteUserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteUserMutation, DeleteUserMutationVariables>, 'mutation'>;

    export const DeleteUserComponent = (props: DeleteUserComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteUserMutation, DeleteUserMutationVariables> mutation={DeleteUserDocument} {...props} />
    );
    
export type DeleteUserProps<TChildProps = {}> = ApolloReactHoc.MutateProps<DeleteUserMutation, DeleteUserMutationVariables> & TChildProps;
export function withDeleteUser<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteUserMutation,
  DeleteUserMutationVariables,
  DeleteUserProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteUserMutation, DeleteUserMutationVariables, DeleteUserProps<TChildProps>>(DeleteUserDocument, {
      alias: 'deleteUser',
      ...operationOptions
    });
};

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, baseOptions);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = ApolloReactCommon.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
export const ChangeUsernameDocument = gql`
    mutation ChangeUsername($username: String!) {
  changeUsername(username: $username)
}
    `;
export type ChangeUsernameMutationFn = ApolloReactCommon.MutationFunction<ChangeUsernameMutation, ChangeUsernameMutationVariables>;
export type ChangeUsernameComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<ChangeUsernameMutation, ChangeUsernameMutationVariables>, 'mutation'>;

    export const ChangeUsernameComponent = (props: ChangeUsernameComponentProps) => (
      <ApolloReactComponents.Mutation<ChangeUsernameMutation, ChangeUsernameMutationVariables> mutation={ChangeUsernameDocument} {...props} />
    );
    
export type ChangeUsernameProps<TChildProps = {}> = ApolloReactHoc.MutateProps<ChangeUsernameMutation, ChangeUsernameMutationVariables> & TChildProps;
export function withChangeUsername<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ChangeUsernameMutation,
  ChangeUsernameMutationVariables,
  ChangeUsernameProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, ChangeUsernameMutation, ChangeUsernameMutationVariables, ChangeUsernameProps<TChildProps>>(ChangeUsernameDocument, {
      alias: 'changeUsername',
      ...operationOptions
    });
};

/**
 * __useChangeUsernameMutation__
 *
 * To run a mutation, you first call `useChangeUsernameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeUsernameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeUsernameMutation, { data, loading, error }] = useChangeUsernameMutation({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useChangeUsernameMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ChangeUsernameMutation, ChangeUsernameMutationVariables>) {
        return ApolloReactHooks.useMutation<ChangeUsernameMutation, ChangeUsernameMutationVariables>(ChangeUsernameDocument, baseOptions);
      }
export type ChangeUsernameMutationHookResult = ReturnType<typeof useChangeUsernameMutation>;
export type ChangeUsernameMutationResult = ApolloReactCommon.MutationResult<ChangeUsernameMutation>;
export type ChangeUsernameMutationOptions = ApolloReactCommon.BaseMutationOptions<ChangeUsernameMutation, ChangeUsernameMutationVariables>;
export const GetUserIdDocument = gql`
    query GetUserId {
  getUserId
}
    `;
export type GetUserIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetUserIdQuery, GetUserIdQueryVariables>, 'query'>;

    export const GetUserIdComponent = (props: GetUserIdComponentProps) => (
      <ApolloReactComponents.Query<GetUserIdQuery, GetUserIdQueryVariables> query={GetUserIdDocument} {...props} />
    );
    
export type GetUserIdProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetUserIdQuery, GetUserIdQueryVariables> & TChildProps;
export function withGetUserId<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetUserIdQuery,
  GetUserIdQueryVariables,
  GetUserIdProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetUserIdQuery, GetUserIdQueryVariables, GetUserIdProps<TChildProps>>(GetUserIdDocument, {
      alias: 'getUserId',
      ...operationOptions
    });
};

/**
 * __useGetUserIdQuery__
 *
 * To run a query within a React component, call `useGetUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserIdQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUserIdQuery, GetUserIdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetUserIdQuery, GetUserIdQueryVariables>(GetUserIdDocument, baseOptions);
      }
export function useGetUserIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUserIdQuery, GetUserIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetUserIdQuery, GetUserIdQueryVariables>(GetUserIdDocument, baseOptions);
        }
export type GetUserIdQueryHookResult = ReturnType<typeof useGetUserIdQuery>;
export type GetUserIdLazyQueryHookResult = ReturnType<typeof useGetUserIdLazyQuery>;
export type GetUserIdQueryResult = ApolloReactCommon.QueryResult<GetUserIdQuery, GetUserIdQueryVariables>;
export const GetUsernameDocument = gql`
    query GetUsername($userId: String) {
  getUsername(userId: $userId)
}
    `;
export type GetUsernameComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetUsernameQuery, GetUsernameQueryVariables>, 'query'>;

    export const GetUsernameComponent = (props: GetUsernameComponentProps) => (
      <ApolloReactComponents.Query<GetUsernameQuery, GetUsernameQueryVariables> query={GetUsernameDocument} {...props} />
    );
    
export type GetUsernameProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetUsernameQuery, GetUsernameQueryVariables> & TChildProps;
export function withGetUsername<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetUsernameQuery,
  GetUsernameQueryVariables,
  GetUsernameProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetUsernameQuery, GetUsernameQueryVariables, GetUsernameProps<TChildProps>>(GetUsernameDocument, {
      alias: 'getUsername',
      ...operationOptions
    });
};

/**
 * __useGetUsernameQuery__
 *
 * To run a query within a React component, call `useGetUsernameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsernameQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsernameQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUsernameQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUsernameQuery, GetUsernameQueryVariables>) {
        return ApolloReactHooks.useQuery<GetUsernameQuery, GetUsernameQueryVariables>(GetUsernameDocument, baseOptions);
      }
export function useGetUsernameLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUsernameQuery, GetUsernameQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetUsernameQuery, GetUsernameQueryVariables>(GetUsernameDocument, baseOptions);
        }
export type GetUsernameQueryHookResult = ReturnType<typeof useGetUsernameQuery>;
export type GetUsernameLazyQueryHookResult = ReturnType<typeof useGetUsernameLazyQuery>;
export type GetUsernameQueryResult = ApolloReactCommon.QueryResult<GetUsernameQuery, GetUsernameQueryVariables>;
export const GetUsersDocument = gql`
    query GetUsers {
  getUsers {
    username
    permission
    profile {
      avatarUrl
    }
  }
}
    `;
export type GetUsersComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetUsersQuery, GetUsersQueryVariables>, 'query'>;

    export const GetUsersComponent = (props: GetUsersComponentProps) => (
      <ApolloReactComponents.Query<GetUsersQuery, GetUsersQueryVariables> query={GetUsersDocument} {...props} />
    );
    
export type GetUsersProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetUsersQuery, GetUsersQueryVariables> & TChildProps;
export function withGetUsers<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetUsersQuery,
  GetUsersQueryVariables,
  GetUsersProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetUsersQuery, GetUsersQueryVariables, GetUsersProps<TChildProps>>(GetUsersDocument, {
      alias: 'getUsers',
      ...operationOptions
    });
};

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        return ApolloReactHooks.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, baseOptions);
      }
export function useGetUsersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, baseOptions);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = ApolloReactCommon.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const GetPermissionDocument = gql`
    query GetPermission($userId: String) {
  getPermission(userId: $userId)
}
    `;
export type GetPermissionComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetPermissionQuery, GetPermissionQueryVariables>, 'query'>;

    export const GetPermissionComponent = (props: GetPermissionComponentProps) => (
      <ApolloReactComponents.Query<GetPermissionQuery, GetPermissionQueryVariables> query={GetPermissionDocument} {...props} />
    );
    
export type GetPermissionProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetPermissionQuery, GetPermissionQueryVariables> & TChildProps;
export function withGetPermission<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetPermissionQuery,
  GetPermissionQueryVariables,
  GetPermissionProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetPermissionQuery, GetPermissionQueryVariables, GetPermissionProps<TChildProps>>(GetPermissionDocument, {
      alias: 'getPermission',
      ...operationOptions
    });
};

/**
 * __useGetPermissionQuery__
 *
 * To run a query within a React component, call `useGetPermissionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPermissionQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPermissionQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetPermissionQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetPermissionQuery, GetPermissionQueryVariables>) {
        return ApolloReactHooks.useQuery<GetPermissionQuery, GetPermissionQueryVariables>(GetPermissionDocument, baseOptions);
      }
export function useGetPermissionLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetPermissionQuery, GetPermissionQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetPermissionQuery, GetPermissionQueryVariables>(GetPermissionDocument, baseOptions);
        }
export type GetPermissionQueryHookResult = ReturnType<typeof useGetPermissionQuery>;
export type GetPermissionLazyQueryHookResult = ReturnType<typeof useGetPermissionLazyQuery>;
export type GetPermissionQueryResult = ApolloReactCommon.QueryResult<GetPermissionQuery, GetPermissionQueryVariables>;
export const GetProfileAvatarDocument = gql`
    query GetProfileAvatar($userId: String) {
  getProfileAvatar(userId: $userId)
}
    `;
export type GetProfileAvatarComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetProfileAvatarQuery, GetProfileAvatarQueryVariables>, 'query'>;

    export const GetProfileAvatarComponent = (props: GetProfileAvatarComponentProps) => (
      <ApolloReactComponents.Query<GetProfileAvatarQuery, GetProfileAvatarQueryVariables> query={GetProfileAvatarDocument} {...props} />
    );
    
export type GetProfileAvatarProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetProfileAvatarQuery, GetProfileAvatarQueryVariables> & TChildProps;
export function withGetProfileAvatar<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetProfileAvatarQuery,
  GetProfileAvatarQueryVariables,
  GetProfileAvatarProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetProfileAvatarQuery, GetProfileAvatarQueryVariables, GetProfileAvatarProps<TChildProps>>(GetProfileAvatarDocument, {
      alias: 'getProfileAvatar',
      ...operationOptions
    });
};

/**
 * __useGetProfileAvatarQuery__
 *
 * To run a query within a React component, call `useGetProfileAvatarQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileAvatarQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileAvatarQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetProfileAvatarQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetProfileAvatarQuery, GetProfileAvatarQueryVariables>) {
        return ApolloReactHooks.useQuery<GetProfileAvatarQuery, GetProfileAvatarQueryVariables>(GetProfileAvatarDocument, baseOptions);
      }
export function useGetProfileAvatarLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetProfileAvatarQuery, GetProfileAvatarQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetProfileAvatarQuery, GetProfileAvatarQueryVariables>(GetProfileAvatarDocument, baseOptions);
        }
export type GetProfileAvatarQueryHookResult = ReturnType<typeof useGetProfileAvatarQuery>;
export type GetProfileAvatarLazyQueryHookResult = ReturnType<typeof useGetProfileAvatarLazyQuery>;
export type GetProfileAvatarQueryResult = ApolloReactCommon.QueryResult<GetProfileAvatarQuery, GetProfileAvatarQueryVariables>;
export const GetGroupIdDocument = gql`
    query GetGroupId($userId: String) {
  getGroupId(userId: $userId) {
    id
  }
}
    `;
export type GetGroupIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetGroupIdQuery, GetGroupIdQueryVariables>, 'query'>;

    export const GetGroupIdComponent = (props: GetGroupIdComponentProps) => (
      <ApolloReactComponents.Query<GetGroupIdQuery, GetGroupIdQueryVariables> query={GetGroupIdDocument} {...props} />
    );
    
export type GetGroupIdProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetGroupIdQuery, GetGroupIdQueryVariables> & TChildProps;
export function withGetGroupId<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetGroupIdQuery,
  GetGroupIdQueryVariables,
  GetGroupIdProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetGroupIdQuery, GetGroupIdQueryVariables, GetGroupIdProps<TChildProps>>(GetGroupIdDocument, {
      alias: 'getGroupId',
      ...operationOptions
    });
};

/**
 * __useGetGroupIdQuery__
 *
 * To run a query within a React component, call `useGetGroupIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGroupIdQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGroupIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetGroupIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetGroupIdQuery, GetGroupIdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetGroupIdQuery, GetGroupIdQueryVariables>(GetGroupIdDocument, baseOptions);
      }
export function useGetGroupIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetGroupIdQuery, GetGroupIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetGroupIdQuery, GetGroupIdQueryVariables>(GetGroupIdDocument, baseOptions);
        }
export type GetGroupIdQueryHookResult = ReturnType<typeof useGetGroupIdQuery>;
export type GetGroupIdLazyQueryHookResult = ReturnType<typeof useGetGroupIdLazyQuery>;
export type GetGroupIdQueryResult = ApolloReactCommon.QueryResult<GetGroupIdQuery, GetGroupIdQueryVariables>;
export const GetGroupDocument = gql`
    query GetGroup($id: String!) {
  getGroup(id: $id) {
    name
    users {
      id
      username
      profile {
        avatarUrl
      }
    }
    things {
      id
      space
      component
    }
  }
}
    `;
export type GetGroupComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetGroupQuery, GetGroupQueryVariables>, 'query'> & ({ variables: GetGroupQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetGroupComponent = (props: GetGroupComponentProps) => (
      <ApolloReactComponents.Query<GetGroupQuery, GetGroupQueryVariables> query={GetGroupDocument} {...props} />
    );
    
export type GetGroupProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetGroupQuery, GetGroupQueryVariables> & TChildProps;
export function withGetGroup<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetGroupQuery,
  GetGroupQueryVariables,
  GetGroupProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetGroupQuery, GetGroupQueryVariables, GetGroupProps<TChildProps>>(GetGroupDocument, {
      alias: 'getGroup',
      ...operationOptions
    });
};

/**
 * __useGetGroupQuery__
 *
 * To run a query within a React component, call `useGetGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGroupQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGroupQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetGroupQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetGroupQuery, GetGroupQueryVariables>) {
        return ApolloReactHooks.useQuery<GetGroupQuery, GetGroupQueryVariables>(GetGroupDocument, baseOptions);
      }
export function useGetGroupLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetGroupQuery, GetGroupQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetGroupQuery, GetGroupQueryVariables>(GetGroupDocument, baseOptions);
        }
export type GetGroupQueryHookResult = ReturnType<typeof useGetGroupQuery>;
export type GetGroupLazyQueryHookResult = ReturnType<typeof useGetGroupLazyQuery>;
export type GetGroupQueryResult = ApolloReactCommon.QueryResult<GetGroupQuery, GetGroupQueryVariables>;
export const GroupNamesDocument = gql`
    query GroupNames {
  groupNames
}
    `;
export type GroupNamesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GroupNamesQuery, GroupNamesQueryVariables>, 'query'>;

    export const GroupNamesComponent = (props: GroupNamesComponentProps) => (
      <ApolloReactComponents.Query<GroupNamesQuery, GroupNamesQueryVariables> query={GroupNamesDocument} {...props} />
    );
    
export type GroupNamesProps<TChildProps = {}> = ApolloReactHoc.DataProps<GroupNamesQuery, GroupNamesQueryVariables> & TChildProps;
export function withGroupNames<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GroupNamesQuery,
  GroupNamesQueryVariables,
  GroupNamesProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GroupNamesQuery, GroupNamesQueryVariables, GroupNamesProps<TChildProps>>(GroupNamesDocument, {
      alias: 'groupNames',
      ...operationOptions
    });
};

/**
 * __useGroupNamesQuery__
 *
 * To run a query within a React component, call `useGroupNamesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGroupNamesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGroupNamesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGroupNamesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GroupNamesQuery, GroupNamesQueryVariables>) {
        return ApolloReactHooks.useQuery<GroupNamesQuery, GroupNamesQueryVariables>(GroupNamesDocument, baseOptions);
      }
export function useGroupNamesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GroupNamesQuery, GroupNamesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GroupNamesQuery, GroupNamesQueryVariables>(GroupNamesDocument, baseOptions);
        }
export type GroupNamesQueryHookResult = ReturnType<typeof useGroupNamesQuery>;
export type GroupNamesLazyQueryHookResult = ReturnType<typeof useGroupNamesLazyQuery>;
export type GroupNamesQueryResult = ApolloReactCommon.QueryResult<GroupNamesQuery, GroupNamesQueryVariables>;
export const GroupsDocument = gql`
    query Groups {
  groups {
    name
    users {
      id
      username
      profile {
        avatarUrl
      }
    }
    things {
      id
      space
      component
    }
  }
}
    `;
export type GroupsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GroupsQuery, GroupsQueryVariables>, 'query'>;

    export const GroupsComponent = (props: GroupsComponentProps) => (
      <ApolloReactComponents.Query<GroupsQuery, GroupsQueryVariables> query={GroupsDocument} {...props} />
    );
    
export type GroupsProps<TChildProps = {}> = ApolloReactHoc.DataProps<GroupsQuery, GroupsQueryVariables> & TChildProps;
export function withGroups<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GroupsQuery,
  GroupsQueryVariables,
  GroupsProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GroupsQuery, GroupsQueryVariables, GroupsProps<TChildProps>>(GroupsDocument, {
      alias: 'groups',
      ...operationOptions
    });
};

/**
 * __useGroupsQuery__
 *
 * To run a query within a React component, call `useGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGroupsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGroupsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GroupsQuery, GroupsQueryVariables>) {
        return ApolloReactHooks.useQuery<GroupsQuery, GroupsQueryVariables>(GroupsDocument, baseOptions);
      }
export function useGroupsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GroupsQuery, GroupsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GroupsQuery, GroupsQueryVariables>(GroupsDocument, baseOptions);
        }
export type GroupsQueryHookResult = ReturnType<typeof useGroupsQuery>;
export type GroupsLazyQueryHookResult = ReturnType<typeof useGroupsLazyQuery>;
export type GroupsQueryResult = ApolloReactCommon.QueryResult<GroupsQuery, GroupsQueryVariables>;
export const GetThingsDocument = gql`
    query GetThings($groupId: String!) {
  getThings(groupId: $groupId) {
    id
    space
    component
    topic
    triggerLog {
      date
      state
      thingId
    }
  }
}
    `;
export type GetThingsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetThingsQuery, GetThingsQueryVariables>, 'query'> & ({ variables: GetThingsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetThingsComponent = (props: GetThingsComponentProps) => (
      <ApolloReactComponents.Query<GetThingsQuery, GetThingsQueryVariables> query={GetThingsDocument} {...props} />
    );
    
export type GetThingsProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetThingsQuery, GetThingsQueryVariables> & TChildProps;
export function withGetThings<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetThingsQuery,
  GetThingsQueryVariables,
  GetThingsProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetThingsQuery, GetThingsQueryVariables, GetThingsProps<TChildProps>>(GetThingsDocument, {
      alias: 'getThings',
      ...operationOptions
    });
};

/**
 * __useGetThingsQuery__
 *
 * To run a query within a React component, call `useGetThingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetThingsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetThingsQuery({
 *   variables: {
 *      groupId: // value for 'groupId'
 *   },
 * });
 */
export function useGetThingsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetThingsQuery, GetThingsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetThingsQuery, GetThingsQueryVariables>(GetThingsDocument, baseOptions);
      }
export function useGetThingsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetThingsQuery, GetThingsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetThingsQuery, GetThingsQueryVariables>(GetThingsDocument, baseOptions);
        }
export type GetThingsQueryHookResult = ReturnType<typeof useGetThingsQuery>;
export type GetThingsLazyQueryHookResult = ReturnType<typeof useGetThingsLazyQuery>;
export type GetThingsQueryResult = ApolloReactCommon.QueryResult<GetThingsQuery, GetThingsQueryVariables>;
export const GetThingDocument = gql`
    query GetThing($topic: String!) {
  getThing(topic: $topic) {
    id
    space
    component
    topic
    triggerLog {
      id
      state
      date
      thingId
      user {
        username
      }
    }
  }
}
    `;
export type GetThingComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetThingQuery, GetThingQueryVariables>, 'query'> & ({ variables: GetThingQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetThingComponent = (props: GetThingComponentProps) => (
      <ApolloReactComponents.Query<GetThingQuery, GetThingQueryVariables> query={GetThingDocument} {...props} />
    );
    
export type GetThingProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetThingQuery, GetThingQueryVariables> & TChildProps;
export function withGetThing<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetThingQuery,
  GetThingQueryVariables,
  GetThingProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetThingQuery, GetThingQueryVariables, GetThingProps<TChildProps>>(GetThingDocument, {
      alias: 'getThing',
      ...operationOptions
    });
};

/**
 * __useGetThingQuery__
 *
 * To run a query within a React component, call `useGetThingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetThingQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetThingQuery({
 *   variables: {
 *      topic: // value for 'topic'
 *   },
 * });
 */
export function useGetThingQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetThingQuery, GetThingQueryVariables>) {
        return ApolloReactHooks.useQuery<GetThingQuery, GetThingQueryVariables>(GetThingDocument, baseOptions);
      }
export function useGetThingLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetThingQuery, GetThingQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetThingQuery, GetThingQueryVariables>(GetThingDocument, baseOptions);
        }
export type GetThingQueryHookResult = ReturnType<typeof useGetThingQuery>;
export type GetThingLazyQueryHookResult = ReturnType<typeof useGetThingLazyQuery>;
export type GetThingQueryResult = ApolloReactCommon.QueryResult<GetThingQuery, GetThingQueryVariables>;
export const GetTriggerLogDocument = gql`
    query GetTriggerLog($groupId: String!) {
  getTriggerLog(groupId: $groupId) {
    id
    state
    date
    thingId
    user {
      username
    }
  }
}
    `;
export type GetTriggerLogComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetTriggerLogQuery, GetTriggerLogQueryVariables>, 'query'> & ({ variables: GetTriggerLogQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetTriggerLogComponent = (props: GetTriggerLogComponentProps) => (
      <ApolloReactComponents.Query<GetTriggerLogQuery, GetTriggerLogQueryVariables> query={GetTriggerLogDocument} {...props} />
    );
    
export type GetTriggerLogProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetTriggerLogQuery, GetTriggerLogQueryVariables> & TChildProps;
export function withGetTriggerLog<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetTriggerLogQuery,
  GetTriggerLogQueryVariables,
  GetTriggerLogProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetTriggerLogQuery, GetTriggerLogQueryVariables, GetTriggerLogProps<TChildProps>>(GetTriggerLogDocument, {
      alias: 'getTriggerLog',
      ...operationOptions
    });
};

/**
 * __useGetTriggerLogQuery__
 *
 * To run a query within a React component, call `useGetTriggerLogQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTriggerLogQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTriggerLogQuery({
 *   variables: {
 *      groupId: // value for 'groupId'
 *   },
 * });
 */
export function useGetTriggerLogQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetTriggerLogQuery, GetTriggerLogQueryVariables>) {
        return ApolloReactHooks.useQuery<GetTriggerLogQuery, GetTriggerLogQueryVariables>(GetTriggerLogDocument, baseOptions);
      }
export function useGetTriggerLogLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTriggerLogQuery, GetTriggerLogQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetTriggerLogQuery, GetTriggerLogQueryVariables>(GetTriggerLogDocument, baseOptions);
        }
export type GetTriggerLogQueryHookResult = ReturnType<typeof useGetTriggerLogQuery>;
export type GetTriggerLogLazyQueryHookResult = ReturnType<typeof useGetTriggerLogLazyQuery>;
export type GetTriggerLogQueryResult = ApolloReactCommon.QueryResult<GetTriggerLogQuery, GetTriggerLogQueryVariables>;
export const GetThingsWithTriggerLogDocument = gql`
    query GetThingsWithTriggerLog($id: String!) {
  getThingsWithTriggerLog(id: $id) {
    space
    component
    state
    date
  }
}
    `;
export type GetThingsWithTriggerLogComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetThingsWithTriggerLogQuery, GetThingsWithTriggerLogQueryVariables>, 'query'> & ({ variables: GetThingsWithTriggerLogQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetThingsWithTriggerLogComponent = (props: GetThingsWithTriggerLogComponentProps) => (
      <ApolloReactComponents.Query<GetThingsWithTriggerLogQuery, GetThingsWithTriggerLogQueryVariables> query={GetThingsWithTriggerLogDocument} {...props} />
    );
    
export type GetThingsWithTriggerLogProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetThingsWithTriggerLogQuery, GetThingsWithTriggerLogQueryVariables> & TChildProps;
export function withGetThingsWithTriggerLog<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetThingsWithTriggerLogQuery,
  GetThingsWithTriggerLogQueryVariables,
  GetThingsWithTriggerLogProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetThingsWithTriggerLogQuery, GetThingsWithTriggerLogQueryVariables, GetThingsWithTriggerLogProps<TChildProps>>(GetThingsWithTriggerLogDocument, {
      alias: 'getThingsWithTriggerLog',
      ...operationOptions
    });
};

/**
 * __useGetThingsWithTriggerLogQuery__
 *
 * To run a query within a React component, call `useGetThingsWithTriggerLogQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetThingsWithTriggerLogQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetThingsWithTriggerLogQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetThingsWithTriggerLogQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetThingsWithTriggerLogQuery, GetThingsWithTriggerLogQueryVariables>) {
        return ApolloReactHooks.useQuery<GetThingsWithTriggerLogQuery, GetThingsWithTriggerLogQueryVariables>(GetThingsWithTriggerLogDocument, baseOptions);
      }
export function useGetThingsWithTriggerLogLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetThingsWithTriggerLogQuery, GetThingsWithTriggerLogQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetThingsWithTriggerLogQuery, GetThingsWithTriggerLogQueryVariables>(GetThingsWithTriggerLogDocument, baseOptions);
        }
export type GetThingsWithTriggerLogQueryHookResult = ReturnType<typeof useGetThingsWithTriggerLogQuery>;
export type GetThingsWithTriggerLogLazyQueryHookResult = ReturnType<typeof useGetThingsWithTriggerLogLazyQuery>;
export type GetThingsWithTriggerLogQueryResult = ApolloReactCommon.QueryResult<GetThingsWithTriggerLogQuery, GetThingsWithTriggerLogQueryVariables>;