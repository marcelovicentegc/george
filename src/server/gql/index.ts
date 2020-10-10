import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
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
  String: ResolverTypeWrapper<Scalars['String']>,
  User: ResolverTypeWrapper<User>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  Profile: ResolverTypeWrapper<Profile>,
  Upload: ResolverTypeWrapper<Scalars['Upload']>,
  Permission: Permission,
  TriggerLog: ResolverTypeWrapper<TriggerLog>,
  Group: ResolverTypeWrapper<Group>,
  Thing: ResolverTypeWrapper<Thing>,
  Controller: Controller,
  ThingWithTriggerLog: ResolverTypeWrapper<ThingWithTriggerLog>,
  Mutation: ResolverTypeWrapper<{}>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  String: Scalars['String'],
  User: User,
  ID: Scalars['ID'],
  Profile: Profile,
  Upload: Scalars['Upload'],
  Permission: Permission,
  TriggerLog: TriggerLog,
  Group: Group,
  Thing: Thing,
  Controller: Controller,
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
  addThing?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationAddThingArgs, 'space' | 'component' | 'controller'>>,
  toggleThing?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationToggleThingArgs, 'toggle' | 'topic'>>,
  createGroup?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationCreateGroupArgs, 'name'>>,
  updateGroup?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationUpdateGroupArgs, 'groupId'>>,
  deleteGroup?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteGroupArgs, 'id'>>,
  createUser?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'username' | 'password' | 'group' | 'permission'>>,
  changePassword?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationChangePasswordArgs, 'password' | 'passwordConfirmation'>>,
  deleteUser?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteUserArgs, never>>,
  changeUsername?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationChangeUsernameArgs, 'username'>>,
};

export type ProfileResolvers<ContextType = any, ParentType extends ResolversParentTypes['Profile'] = ResolversParentTypes['Profile']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  avatar?: Resolver<Maybe<ResolversTypes['Upload']>, ParentType, ContextType>,
  avatarUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getUserId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  getUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>,
  getUsername?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryGetUsernameArgs, never>>,
  getPermission?: Resolver<ResolversTypes['Permission'], ParentType, ContextType, RequireFields<QueryGetPermissionArgs, never>>,
  getProfileAvatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryGetProfileAvatarArgs, never>>,
  getGroupId?: Resolver<Maybe<ResolversTypes['Group']>, ParentType, ContextType, RequireFields<QueryGetGroupIdArgs, never>>,
  getGroup?: Resolver<Maybe<ResolversTypes['Group']>, ParentType, ContextType, RequireFields<QueryGetGroupArgs, 'id'>>,
  getThings?: Resolver<Maybe<Array<Maybe<ResolversTypes['Thing']>>>, ParentType, ContextType, RequireFields<QueryGetThingsArgs, 'groupId'>>,
  groups?: Resolver<Maybe<Array<ResolversTypes['Group']>>, ParentType, ContextType>,
  groupNames?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>,
  getThing?: Resolver<Maybe<ResolversTypes['Thing']>, ParentType, ContextType, RequireFields<QueryGetThingArgs, 'topic'>>,
  getTriggerLog?: Resolver<Maybe<Array<Maybe<ResolversTypes['TriggerLog']>>>, ParentType, ContextType, RequireFields<QueryGetTriggerLogArgs, 'groupId'>>,
  getThingsWithTriggerLog?: Resolver<Maybe<Array<Maybe<ResolversTypes['ThingWithTriggerLog']>>>, ParentType, ContextType, RequireFields<QueryGetThingsWithTriggerLogArgs, 'id'>>,
};

export type ThingResolvers<ContextType = any, ParentType extends ResolversParentTypes['Thing'] = ResolversParentTypes['Thing']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  space?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  component?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  controller?: Resolver<ResolversTypes['Controller'], ParentType, ContextType>,
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
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  thingId?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload'
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  profile?: Resolver<ResolversTypes['Profile'], ParentType, ContextType>,
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  permission?: Resolver<ResolversTypes['Permission'], ParentType, ContextType>,
  activity?: Resolver<Maybe<Array<Maybe<ResolversTypes['TriggerLog']>>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type Resolvers<ContextType = any> = {
  Group?: GroupResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  Profile?: ProfileResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  Thing?: ThingResolvers<ContextType>,
  ThingWithTriggerLog?: ThingWithTriggerLogResolvers<ContextType>,
  TriggerLog?: TriggerLogResolvers<ContextType>,
  Upload?: GraphQLScalarType,
  User?: UserResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
