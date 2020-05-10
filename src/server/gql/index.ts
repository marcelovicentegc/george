import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  User: ResolverTypeWrapper<User>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Group: ResolverTypeWrapper<Group>,
  Thing: ResolverTypeWrapper<Thing>,
  TriggerLog: ResolverTypeWrapper<TriggerLog>,
  ThingWithTriggerLog: ResolverTypeWrapper<ThingWithTriggerLog>,
  Mutation: ResolverTypeWrapper<{}>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  User: User,
  ID: Scalars['ID'],
  String: Scalars['String'],
  Group: Group,
  Thing: Thing,
  TriggerLog: TriggerLog,
  ThingWithTriggerLog: ThingWithTriggerLog,
  Mutation: {},
  Boolean: Scalars['Boolean'],
};

export type GroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['Group'] = ResolversParentTypes['Group']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>,
  things?: Resolver<Maybe<Array<Maybe<ResolversTypes['Thing']>>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  loginUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationLoginUserArgs, 'username' | 'password'>>,
  logoutUser?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  addThing?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationAddThingArgs, 'space' | 'component'>>,
  toggleThing?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationToggleThingArgs, 'toggle' | 'topic'>>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getUserIdFromSession?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  getUsername?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryGetUsernameArgs, never>>,
  getGroupIdFromUserIdFromSession?: Resolver<Maybe<ResolversTypes['Group']>, ParentType, ContextType>,
  getGroupIdFromUserId?: Resolver<Maybe<ResolversTypes['Group']>, ParentType, ContextType, RequireFields<QueryGetGroupIdFromUserIdArgs, 'id'>>,
  getThingsFromGroupId?: Resolver<Maybe<Array<Maybe<ResolversTypes['Thing']>>>, ParentType, ContextType, RequireFields<QueryGetThingsFromGroupIdArgs, 'id'>>,
  getThingFromTopic?: Resolver<Maybe<ResolversTypes['Thing']>, ParentType, ContextType, RequireFields<QueryGetThingFromTopicArgs, 'topic'>>,
  getTriggerLog?: Resolver<Maybe<Array<Maybe<ResolversTypes['TriggerLog']>>>, ParentType, ContextType, RequireFields<QueryGetTriggerLogArgs, 'id'>>,
  getThingsWithTriggerLog?: Resolver<Maybe<Array<Maybe<ResolversTypes['ThingWithTriggerLog']>>>, ParentType, ContextType, RequireFields<QueryGetThingsWithTriggerLogArgs, 'id'>>,
};

export type ThingResolvers<ContextType = any, ParentType extends ResolversParentTypes['Thing'] = ResolversParentTypes['Thing']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  space?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  component?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  topic?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  triggerLog?: Resolver<Maybe<Array<Maybe<ResolversTypes['TriggerLog']>>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type ThingWithTriggerLogResolvers<ContextType = any, ParentType extends ResolversParentTypes['ThingWithTriggerLog'] = ResolversParentTypes['ThingWithTriggerLog']> = {
  space?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  component?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  state?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type TriggerLogResolvers<ContextType = any, ParentType extends ResolversParentTypes['TriggerLog'] = ResolversParentTypes['TriggerLog']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  state?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  thingId?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type Resolvers<ContextType = any> = {
  Group?: GroupResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  Thing?: ThingResolvers<ContextType>,
  ThingWithTriggerLog?: ThingWithTriggerLogResolvers<ContextType>,
  TriggerLog?: TriggerLogResolvers<ContextType>,
  User?: UserResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
