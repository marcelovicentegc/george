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
};

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
};


export type MutationLoginUserArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
};


export type MutationAddThingArgs = {
  space: Scalars['String'];
  component: Scalars['String'];
};


export type MutationToggleThingArgs = {
  toggle: Scalars['String'];
  topic: Scalars['String'];
};

export type Query = {
   __typename?: 'Query';
  getUserId?: Maybe<Scalars['String']>;
  getUsername?: Maybe<Scalars['String']>;
  getGroupId?: Maybe<Group>;
  getThings?: Maybe<Array<Maybe<Thing>>>;
  getThing?: Maybe<Thing>;
  getTriggerLog?: Maybe<Array<Maybe<TriggerLog>>>;
  getThingsWithTriggerLog?: Maybe<Array<Maybe<ThingWithTriggerLog>>>;
};


export type QueryGetUsernameArgs = {
  userId?: Maybe<Scalars['String']>;
};


export type QueryGetGroupIdArgs = {
  userId?: Maybe<Scalars['String']>;
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
  thingId: Scalars['String'];
};

export type User = {
   __typename?: 'User';
  id: Scalars['ID'];
  username: Scalars['String'];
  password: Scalars['String'];
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

export type AddThingMutationVariables = {
  space: Scalars['String'];
  component: Scalars['String'];
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
export const AddThingDocument = gql`
    mutation AddThing($space: String!, $component: String!) {
  addThing(space: $space, component: $component)
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