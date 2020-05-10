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
  getUserIdFromSession?: Maybe<User>;
  getUsername?: Maybe<Scalars['String']>;
  getGroupIdFromUserIdFromSession?: Maybe<Group>;
  getGroupIdFromUserId?: Maybe<Group>;
  getThingsFromGroupId?: Maybe<Array<Maybe<Thing>>>;
  getThingFromTopic?: Maybe<Thing>;
  getTriggerLog?: Maybe<Array<Maybe<TriggerLog>>>;
  getThingsWithTriggerLog?: Maybe<Array<Maybe<ThingWithTriggerLog>>>;
};


export type QueryGetUsernameArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryGetGroupIdFromUserIdArgs = {
  id: Scalars['String'];
};


export type QueryGetThingsFromGroupIdArgs = {
  id: Scalars['String'];
};


export type QueryGetThingFromTopicArgs = {
  topic: Scalars['String'];
};


export type QueryGetTriggerLogArgs = {
  id: Scalars['String'];
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

export type GetUserIdFromSessionQueryVariables = {};


export type GetUserIdFromSessionQuery = (
  { __typename?: 'Query' }
  & { getUserIdFromSession?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
  )> }
);

export type GetUsernameQueryVariables = {
  id?: Maybe<Scalars['String']>;
};


export type GetUsernameQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'getUsername'>
);

export type GetGroupIdFromUserIdFromSessionQueryVariables = {};


export type GetGroupIdFromUserIdFromSessionQuery = (
  { __typename?: 'Query' }
  & { getGroupIdFromUserIdFromSession?: Maybe<(
    { __typename?: 'Group' }
    & Pick<Group, 'id'>
  )> }
);

export type GetGroupIdFromUserIdQueryVariables = {
  id: Scalars['String'];
};


export type GetGroupIdFromUserIdQuery = (
  { __typename?: 'Query' }
  & { getGroupIdFromUserId?: Maybe<(
    { __typename?: 'Group' }
    & Pick<Group, 'id'>
  )> }
);

export type GetThingsFromGroupIdQueryVariables = {
  id: Scalars['String'];
};


export type GetThingsFromGroupIdQuery = (
  { __typename?: 'Query' }
  & { getThingsFromGroupId?: Maybe<Array<Maybe<(
    { __typename?: 'Thing' }
    & Pick<Thing, 'id' | 'space' | 'component' | 'topic'>
    & { triggerLog?: Maybe<Array<Maybe<(
      { __typename?: 'TriggerLog' }
      & Pick<TriggerLog, 'date' | 'state' | 'thingId'>
    )>>> }
  )>>> }
);

export type GetThingFromTopicQueryVariables = {
  topic: Scalars['String'];
};


export type GetThingFromTopicQuery = (
  { __typename?: 'Query' }
  & { getThingFromTopic?: Maybe<(
    { __typename?: 'Thing' }
    & Pick<Thing, 'id' | 'space' | 'component' | 'topic'>
    & { triggerLog?: Maybe<Array<Maybe<(
      { __typename?: 'TriggerLog' }
      & Pick<TriggerLog, 'id' | 'state' | 'date' | 'thingId'>
    )>>> }
  )> }
);

export type GetTriggerLogQueryVariables = {
  id: Scalars['String'];
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
export const GetUserIdFromSessionDocument = gql`
    query GetUserIdFromSession {
  getUserIdFromSession {
    id
  }
}
    `;
export type GetUserIdFromSessionComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetUserIdFromSessionQuery, GetUserIdFromSessionQueryVariables>, 'query'>;

    export const GetUserIdFromSessionComponent = (props: GetUserIdFromSessionComponentProps) => (
      <ApolloReactComponents.Query<GetUserIdFromSessionQuery, GetUserIdFromSessionQueryVariables> query={GetUserIdFromSessionDocument} {...props} />
    );
    
export type GetUserIdFromSessionProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetUserIdFromSessionQuery, GetUserIdFromSessionQueryVariables> & TChildProps;
export function withGetUserIdFromSession<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetUserIdFromSessionQuery,
  GetUserIdFromSessionQueryVariables,
  GetUserIdFromSessionProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetUserIdFromSessionQuery, GetUserIdFromSessionQueryVariables, GetUserIdFromSessionProps<TChildProps>>(GetUserIdFromSessionDocument, {
      alias: 'getUserIdFromSession',
      ...operationOptions
    });
};

/**
 * __useGetUserIdFromSessionQuery__
 *
 * To run a query within a React component, call `useGetUserIdFromSessionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserIdFromSessionQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserIdFromSessionQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserIdFromSessionQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUserIdFromSessionQuery, GetUserIdFromSessionQueryVariables>) {
        return ApolloReactHooks.useQuery<GetUserIdFromSessionQuery, GetUserIdFromSessionQueryVariables>(GetUserIdFromSessionDocument, baseOptions);
      }
export function useGetUserIdFromSessionLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUserIdFromSessionQuery, GetUserIdFromSessionQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetUserIdFromSessionQuery, GetUserIdFromSessionQueryVariables>(GetUserIdFromSessionDocument, baseOptions);
        }
export type GetUserIdFromSessionQueryHookResult = ReturnType<typeof useGetUserIdFromSessionQuery>;
export type GetUserIdFromSessionLazyQueryHookResult = ReturnType<typeof useGetUserIdFromSessionLazyQuery>;
export type GetUserIdFromSessionQueryResult = ApolloReactCommon.QueryResult<GetUserIdFromSessionQuery, GetUserIdFromSessionQueryVariables>;
export const GetUsernameDocument = gql`
    query GetUsername($id: String) {
  getUsername(id: $id)
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
 *      id: // value for 'id'
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
export const GetGroupIdFromUserIdFromSessionDocument = gql`
    query GetGroupIdFromUserIdFromSession {
  getGroupIdFromUserIdFromSession {
    id
  }
}
    `;
export type GetGroupIdFromUserIdFromSessionComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetGroupIdFromUserIdFromSessionQuery, GetGroupIdFromUserIdFromSessionQueryVariables>, 'query'>;

    export const GetGroupIdFromUserIdFromSessionComponent = (props: GetGroupIdFromUserIdFromSessionComponentProps) => (
      <ApolloReactComponents.Query<GetGroupIdFromUserIdFromSessionQuery, GetGroupIdFromUserIdFromSessionQueryVariables> query={GetGroupIdFromUserIdFromSessionDocument} {...props} />
    );
    
export type GetGroupIdFromUserIdFromSessionProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetGroupIdFromUserIdFromSessionQuery, GetGroupIdFromUserIdFromSessionQueryVariables> & TChildProps;
export function withGetGroupIdFromUserIdFromSession<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetGroupIdFromUserIdFromSessionQuery,
  GetGroupIdFromUserIdFromSessionQueryVariables,
  GetGroupIdFromUserIdFromSessionProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetGroupIdFromUserIdFromSessionQuery, GetGroupIdFromUserIdFromSessionQueryVariables, GetGroupIdFromUserIdFromSessionProps<TChildProps>>(GetGroupIdFromUserIdFromSessionDocument, {
      alias: 'getGroupIdFromUserIdFromSession',
      ...operationOptions
    });
};

/**
 * __useGetGroupIdFromUserIdFromSessionQuery__
 *
 * To run a query within a React component, call `useGetGroupIdFromUserIdFromSessionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGroupIdFromUserIdFromSessionQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGroupIdFromUserIdFromSessionQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetGroupIdFromUserIdFromSessionQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetGroupIdFromUserIdFromSessionQuery, GetGroupIdFromUserIdFromSessionQueryVariables>) {
        return ApolloReactHooks.useQuery<GetGroupIdFromUserIdFromSessionQuery, GetGroupIdFromUserIdFromSessionQueryVariables>(GetGroupIdFromUserIdFromSessionDocument, baseOptions);
      }
export function useGetGroupIdFromUserIdFromSessionLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetGroupIdFromUserIdFromSessionQuery, GetGroupIdFromUserIdFromSessionQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetGroupIdFromUserIdFromSessionQuery, GetGroupIdFromUserIdFromSessionQueryVariables>(GetGroupIdFromUserIdFromSessionDocument, baseOptions);
        }
export type GetGroupIdFromUserIdFromSessionQueryHookResult = ReturnType<typeof useGetGroupIdFromUserIdFromSessionQuery>;
export type GetGroupIdFromUserIdFromSessionLazyQueryHookResult = ReturnType<typeof useGetGroupIdFromUserIdFromSessionLazyQuery>;
export type GetGroupIdFromUserIdFromSessionQueryResult = ApolloReactCommon.QueryResult<GetGroupIdFromUserIdFromSessionQuery, GetGroupIdFromUserIdFromSessionQueryVariables>;
export const GetGroupIdFromUserIdDocument = gql`
    query GetGroupIdFromUserId($id: String!) {
  getGroupIdFromUserId(id: $id) {
    id
  }
}
    `;
export type GetGroupIdFromUserIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetGroupIdFromUserIdQuery, GetGroupIdFromUserIdQueryVariables>, 'query'> & ({ variables: GetGroupIdFromUserIdQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetGroupIdFromUserIdComponent = (props: GetGroupIdFromUserIdComponentProps) => (
      <ApolloReactComponents.Query<GetGroupIdFromUserIdQuery, GetGroupIdFromUserIdQueryVariables> query={GetGroupIdFromUserIdDocument} {...props} />
    );
    
export type GetGroupIdFromUserIdProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetGroupIdFromUserIdQuery, GetGroupIdFromUserIdQueryVariables> & TChildProps;
export function withGetGroupIdFromUserId<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetGroupIdFromUserIdQuery,
  GetGroupIdFromUserIdQueryVariables,
  GetGroupIdFromUserIdProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetGroupIdFromUserIdQuery, GetGroupIdFromUserIdQueryVariables, GetGroupIdFromUserIdProps<TChildProps>>(GetGroupIdFromUserIdDocument, {
      alias: 'getGroupIdFromUserId',
      ...operationOptions
    });
};

/**
 * __useGetGroupIdFromUserIdQuery__
 *
 * To run a query within a React component, call `useGetGroupIdFromUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGroupIdFromUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGroupIdFromUserIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetGroupIdFromUserIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetGroupIdFromUserIdQuery, GetGroupIdFromUserIdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetGroupIdFromUserIdQuery, GetGroupIdFromUserIdQueryVariables>(GetGroupIdFromUserIdDocument, baseOptions);
      }
export function useGetGroupIdFromUserIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetGroupIdFromUserIdQuery, GetGroupIdFromUserIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetGroupIdFromUserIdQuery, GetGroupIdFromUserIdQueryVariables>(GetGroupIdFromUserIdDocument, baseOptions);
        }
export type GetGroupIdFromUserIdQueryHookResult = ReturnType<typeof useGetGroupIdFromUserIdQuery>;
export type GetGroupIdFromUserIdLazyQueryHookResult = ReturnType<typeof useGetGroupIdFromUserIdLazyQuery>;
export type GetGroupIdFromUserIdQueryResult = ApolloReactCommon.QueryResult<GetGroupIdFromUserIdQuery, GetGroupIdFromUserIdQueryVariables>;
export const GetThingsFromGroupIdDocument = gql`
    query GetThingsFromGroupId($id: String!) {
  getThingsFromGroupId(id: $id) {
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
export type GetThingsFromGroupIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetThingsFromGroupIdQuery, GetThingsFromGroupIdQueryVariables>, 'query'> & ({ variables: GetThingsFromGroupIdQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetThingsFromGroupIdComponent = (props: GetThingsFromGroupIdComponentProps) => (
      <ApolloReactComponents.Query<GetThingsFromGroupIdQuery, GetThingsFromGroupIdQueryVariables> query={GetThingsFromGroupIdDocument} {...props} />
    );
    
export type GetThingsFromGroupIdProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetThingsFromGroupIdQuery, GetThingsFromGroupIdQueryVariables> & TChildProps;
export function withGetThingsFromGroupId<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetThingsFromGroupIdQuery,
  GetThingsFromGroupIdQueryVariables,
  GetThingsFromGroupIdProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetThingsFromGroupIdQuery, GetThingsFromGroupIdQueryVariables, GetThingsFromGroupIdProps<TChildProps>>(GetThingsFromGroupIdDocument, {
      alias: 'getThingsFromGroupId',
      ...operationOptions
    });
};

/**
 * __useGetThingsFromGroupIdQuery__
 *
 * To run a query within a React component, call `useGetThingsFromGroupIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetThingsFromGroupIdQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetThingsFromGroupIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetThingsFromGroupIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetThingsFromGroupIdQuery, GetThingsFromGroupIdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetThingsFromGroupIdQuery, GetThingsFromGroupIdQueryVariables>(GetThingsFromGroupIdDocument, baseOptions);
      }
export function useGetThingsFromGroupIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetThingsFromGroupIdQuery, GetThingsFromGroupIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetThingsFromGroupIdQuery, GetThingsFromGroupIdQueryVariables>(GetThingsFromGroupIdDocument, baseOptions);
        }
export type GetThingsFromGroupIdQueryHookResult = ReturnType<typeof useGetThingsFromGroupIdQuery>;
export type GetThingsFromGroupIdLazyQueryHookResult = ReturnType<typeof useGetThingsFromGroupIdLazyQuery>;
export type GetThingsFromGroupIdQueryResult = ApolloReactCommon.QueryResult<GetThingsFromGroupIdQuery, GetThingsFromGroupIdQueryVariables>;
export const GetThingFromTopicDocument = gql`
    query GetThingFromTopic($topic: String!) {
  getThingFromTopic(topic: $topic) {
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
export type GetThingFromTopicComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetThingFromTopicQuery, GetThingFromTopicQueryVariables>, 'query'> & ({ variables: GetThingFromTopicQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetThingFromTopicComponent = (props: GetThingFromTopicComponentProps) => (
      <ApolloReactComponents.Query<GetThingFromTopicQuery, GetThingFromTopicQueryVariables> query={GetThingFromTopicDocument} {...props} />
    );
    
export type GetThingFromTopicProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetThingFromTopicQuery, GetThingFromTopicQueryVariables> & TChildProps;
export function withGetThingFromTopic<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetThingFromTopicQuery,
  GetThingFromTopicQueryVariables,
  GetThingFromTopicProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetThingFromTopicQuery, GetThingFromTopicQueryVariables, GetThingFromTopicProps<TChildProps>>(GetThingFromTopicDocument, {
      alias: 'getThingFromTopic',
      ...operationOptions
    });
};

/**
 * __useGetThingFromTopicQuery__
 *
 * To run a query within a React component, call `useGetThingFromTopicQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetThingFromTopicQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetThingFromTopicQuery({
 *   variables: {
 *      topic: // value for 'topic'
 *   },
 * });
 */
export function useGetThingFromTopicQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetThingFromTopicQuery, GetThingFromTopicQueryVariables>) {
        return ApolloReactHooks.useQuery<GetThingFromTopicQuery, GetThingFromTopicQueryVariables>(GetThingFromTopicDocument, baseOptions);
      }
export function useGetThingFromTopicLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetThingFromTopicQuery, GetThingFromTopicQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetThingFromTopicQuery, GetThingFromTopicQueryVariables>(GetThingFromTopicDocument, baseOptions);
        }
export type GetThingFromTopicQueryHookResult = ReturnType<typeof useGetThingFromTopicQuery>;
export type GetThingFromTopicLazyQueryHookResult = ReturnType<typeof useGetThingFromTopicLazyQuery>;
export type GetThingFromTopicQueryResult = ApolloReactCommon.QueryResult<GetThingFromTopicQuery, GetThingFromTopicQueryVariables>;
export const GetTriggerLogDocument = gql`
    query GetTriggerLog($id: String!) {
  getTriggerLog(id: $id) {
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
 *      id: // value for 'id'
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