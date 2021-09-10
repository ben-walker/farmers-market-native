/* This file was generated by graphql-codegen.
Do not modify it manually. */

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: string;
};

export type AggregateProduct = {
  __typename?: 'AggregateProduct';
  _count?: Maybe<ProductCountAggregate>;
  _max?: Maybe<ProductMaxAggregate>;
  _min?: Maybe<ProductMinAggregate>;
};

export type AggregateShop = {
  __typename?: 'AggregateShop';
  _count?: Maybe<ShopCountAggregate>;
  _max?: Maybe<ShopMaxAggregate>;
  _min?: Maybe<ShopMinAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedDateTimeNullableFilter>;
  _min?: Maybe<NestedDateTimeNullableFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedDateTimeFilter>;
  _min?: Maybe<NestedDateTimeFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type LogInInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  logIn: User;
  signUp: User;
};


export type MutationLogInArgs = {
  input: LogInInput;
};


export type MutationSignUpArgs = {
  input: SignUpInput;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedDateTimeNullableFilter>;
  _min?: Maybe<NestedDateTimeNullableFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedDateTimeFilter>;
  _min?: Maybe<NestedDateTimeFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedStringFilter>;
  _min?: Maybe<NestedStringFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type Product = {
  __typename?: 'Product';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  name: Scalars['String'];
  shop: Shop;
  shopId: Scalars['String'];
};

export type ProductCountAggregate = {
  __typename?: 'ProductCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  shopId: Scalars['Int'];
};

export type ProductCountOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  shopId?: Maybe<SortOrder>;
};

export type ProductGroupBy = {
  __typename?: 'ProductGroupBy';
  _count?: Maybe<ProductCountAggregate>;
  _max?: Maybe<ProductMaxAggregate>;
  _min?: Maybe<ProductMinAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  name: Scalars['String'];
  shopId: Scalars['String'];
};

export type ProductListRelationFilter = {
  every?: Maybe<ProductWhereInput>;
  none?: Maybe<ProductWhereInput>;
  some?: Maybe<ProductWhereInput>;
};

export type ProductMaxAggregate = {
  __typename?: 'ProductMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  shopId?: Maybe<Scalars['String']>;
};

export type ProductMaxOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  shopId?: Maybe<SortOrder>;
};

export type ProductMinAggregate = {
  __typename?: 'ProductMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  shopId?: Maybe<Scalars['String']>;
};

export type ProductMinOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  shopId?: Maybe<SortOrder>;
};

export type ProductOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type ProductOrderByWithAggregationInput = {
  _count?: Maybe<ProductCountOrderByAggregateInput>;
  _max?: Maybe<ProductMaxOrderByAggregateInput>;
  _min?: Maybe<ProductMinOrderByAggregateInput>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  shopId?: Maybe<SortOrder>;
};

export type ProductOrderByWithRelationInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  shop?: Maybe<ShopOrderByWithRelationInput>;
  shopId?: Maybe<SortOrder>;
};

export enum ProductScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  ShopId = 'shopId'
}

export type ProductScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<ProductScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<ProductScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<ProductScalarWhereWithAggregatesInput>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<StringWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  shopId?: Maybe<StringWithAggregatesFilter>;
};

export type ProductWhereInput = {
  AND?: Maybe<Array<ProductWhereInput>>;
  NOT?: Maybe<Array<ProductWhereInput>>;
  OR?: Maybe<Array<ProductWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  shop?: Maybe<ShopRelationFilter>;
  shopId?: Maybe<StringFilter>;
};

export type ProductWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateProduct: AggregateProduct;
  aggregateShop: AggregateShop;
  aggregateUser: AggregateUser;
  findFirstProduct?: Maybe<Product>;
  findFirstShop?: Maybe<Shop>;
  findFirstUser?: Maybe<User>;
  groupByProduct: Array<ProductGroupBy>;
  groupByShop: Array<ShopGroupBy>;
  groupByUser: Array<UserGroupBy>;
  product?: Maybe<Product>;
  products: Array<Product>;
  shop?: Maybe<Shop>;
  shops: Array<Shop>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryAggregateProductArgs = {
  cursor?: Maybe<ProductWhereUniqueInput>;
  orderBy?: Maybe<Array<ProductOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProductWhereInput>;
};


export type QueryAggregateShopArgs = {
  cursor?: Maybe<ShopWhereUniqueInput>;
  orderBy?: Maybe<Array<ShopOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ShopWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  orderBy?: Maybe<Array<UserOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindFirstProductArgs = {
  cursor?: Maybe<ProductWhereUniqueInput>;
  distinct?: Maybe<Array<ProductScalarFieldEnum>>;
  orderBy?: Maybe<Array<ProductOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProductWhereInput>;
};


export type QueryFindFirstShopArgs = {
  cursor?: Maybe<ShopWhereUniqueInput>;
  distinct?: Maybe<Array<ShopScalarFieldEnum>>;
  orderBy?: Maybe<Array<ShopOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ShopWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
  orderBy?: Maybe<Array<UserOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryGroupByProductArgs = {
  by: Array<ProductScalarFieldEnum>;
  having?: Maybe<ProductScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<ProductOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProductWhereInput>;
};


export type QueryGroupByShopArgs = {
  by: Array<ShopScalarFieldEnum>;
  having?: Maybe<ShopScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<ShopOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ShopWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: Maybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<UserOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryProductArgs = {
  where: ProductWhereUniqueInput;
};


export type QueryProductsArgs = {
  cursor?: Maybe<ProductWhereUniqueInput>;
  distinct?: Maybe<Array<ProductScalarFieldEnum>>;
  orderBy?: Maybe<Array<ProductOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProductWhereInput>;
};


export type QueryShopArgs = {
  where: ShopWhereUniqueInput;
};


export type QueryShopsArgs = {
  cursor?: Maybe<ShopWhereUniqueInput>;
  distinct?: Maybe<Array<ShopScalarFieldEnum>>;
  orderBy?: Maybe<Array<ShopOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ShopWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
  orderBy?: Maybe<Array<UserOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Shop = {
  __typename?: 'Shop';
  _count?: Maybe<ShopCount>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  name: Scalars['String'];
  owner: User;
  ownerId: Scalars['String'];
  products: Array<Product>;
};


export type ShopProductsArgs = {
  cursor?: Maybe<ProductWhereUniqueInput>;
  distinct?: Maybe<Array<ProductScalarFieldEnum>>;
  orderBy?: Maybe<Array<ProductOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProductWhereInput>;
};

export type ShopCount = {
  __typename?: 'ShopCount';
  products: Scalars['Int'];
};

export type ShopCountAggregate = {
  __typename?: 'ShopCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  ownerId: Scalars['Int'];
};

export type ShopCountOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  ownerId?: Maybe<SortOrder>;
};

export type ShopGroupBy = {
  __typename?: 'ShopGroupBy';
  _count?: Maybe<ShopCountAggregate>;
  _max?: Maybe<ShopMaxAggregate>;
  _min?: Maybe<ShopMinAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  name: Scalars['String'];
  ownerId: Scalars['String'];
};

export type ShopListRelationFilter = {
  every?: Maybe<ShopWhereInput>;
  none?: Maybe<ShopWhereInput>;
  some?: Maybe<ShopWhereInput>;
};

export type ShopMaxAggregate = {
  __typename?: 'ShopMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  ownerId?: Maybe<Scalars['String']>;
};

export type ShopMaxOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  ownerId?: Maybe<SortOrder>;
};

export type ShopMinAggregate = {
  __typename?: 'ShopMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  ownerId?: Maybe<Scalars['String']>;
};

export type ShopMinOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  ownerId?: Maybe<SortOrder>;
};

export type ShopOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type ShopOrderByWithAggregationInput = {
  _count?: Maybe<ShopCountOrderByAggregateInput>;
  _max?: Maybe<ShopMaxOrderByAggregateInput>;
  _min?: Maybe<ShopMinOrderByAggregateInput>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  ownerId?: Maybe<SortOrder>;
};

export type ShopOrderByWithRelationInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  owner?: Maybe<UserOrderByWithRelationInput>;
  ownerId?: Maybe<SortOrder>;
  products?: Maybe<ProductOrderByRelationAggregateInput>;
};

export type ShopRelationFilter = {
  is?: Maybe<ShopWhereInput>;
  isNot?: Maybe<ShopWhereInput>;
};

export enum ShopScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  OwnerId = 'ownerId'
}

export type ShopScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<ShopScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<ShopScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<ShopScalarWhereWithAggregatesInput>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<StringWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  ownerId?: Maybe<StringWithAggregatesFilter>;
};

export type ShopWhereInput = {
  AND?: Maybe<Array<ShopWhereInput>>;
  NOT?: Maybe<Array<ShopWhereInput>>;
  OR?: Maybe<Array<ShopWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  owner?: Maybe<UserRelationFilter>;
  ownerId?: Maybe<StringFilter>;
  products?: Maybe<ProductListRelationFilter>;
};

export type ShopWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type SignUpInput = {
  email: Scalars['String'];
  fullName: Scalars['String'];
  password: Scalars['String'];
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedStringFilter>;
  _min?: Maybe<NestedStringFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCount>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  emailVerified?: Maybe<Scalars['DateTime']>;
  fullName: Scalars['String'];
  id: Scalars['String'];
  shops: Array<Shop>;
};


export type UserShopsArgs = {
  cursor?: Maybe<ShopWhereUniqueInput>;
  distinct?: Maybe<Array<ShopScalarFieldEnum>>;
  orderBy?: Maybe<Array<ShopOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ShopWhereInput>;
};

export type UserCount = {
  __typename?: 'UserCount';
  shops: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  email: Scalars['Int'];
  emailVerified: Scalars['Int'];
  fullName: Scalars['Int'];
  id: Scalars['Int'];
  passwordHash: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  emailVerified?: Maybe<SortOrder>;
  fullName?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  emailVerified?: Maybe<Scalars['DateTime']>;
  fullName: Scalars['String'];
  id: Scalars['String'];
  passwordHash: Scalars['String'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  fullName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
};

export type UserMaxOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  emailVerified?: Maybe<SortOrder>;
  fullName?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  fullName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
};

export type UserMinOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  emailVerified?: Maybe<SortOrder>;
  fullName?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _count?: Maybe<UserCountOrderByAggregateInput>;
  _max?: Maybe<UserMaxOrderByAggregateInput>;
  _min?: Maybe<UserMinOrderByAggregateInput>;
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  emailVerified?: Maybe<SortOrder>;
  fullName?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  emailVerified?: Maybe<SortOrder>;
  fullName?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  shops?: Maybe<ShopOrderByRelationAggregateInput>;
};

export type UserRelationFilter = {
  is?: Maybe<UserWhereInput>;
  isNot?: Maybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Email = 'email',
  EmailVerified = 'emailVerified',
  FullName = 'fullName',
  Id = 'id',
  PasswordHash = 'passwordHash'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<UserScalarWhereWithAggregatesInput>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  email?: Maybe<StringWithAggregatesFilter>;
  emailVerified?: Maybe<DateTimeNullableWithAggregatesFilter>;
  fullName?: Maybe<StringWithAggregatesFilter>;
  id?: Maybe<StringWithAggregatesFilter>;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringFilter>;
  emailVerified?: Maybe<DateTimeNullableFilter>;
  fullName?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  shops?: Maybe<ShopListRelationFilter>;
};

export type UserWhereUniqueInput = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type GetShopFeedQueryVariables = Exact<{ [key: string]: never; }>;


export type GetShopFeedQuery = { __typename?: 'Query', shops: Array<{ __typename?: 'Shop', createdAt: string, id: string, name: string }> };

export type GetShopQueryVariables = Exact<{
  shopWhere: ShopWhereUniqueInput;
}>;


export type GetShopQuery = { __typename?: 'Query', shop?: Maybe<{ __typename?: 'Shop', createdAt: string, id: string, name: string, owner: { __typename?: 'User', createdAt: string, fullName: string, id: string }, products: Array<{ __typename?: 'Product', createdAt: string, id: string, name: string }> }> };


export const GetShopFeedDocument = gql`
    query GetShopFeed {
  shops {
    createdAt
    id
    name
  }
}
    `;

/**
 * __useGetShopFeedQuery__
 *
 * To run a query within a React component, call `useGetShopFeedQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetShopFeedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetShopFeedQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetShopFeedQuery(baseOptions?: Apollo.QueryHookOptions<GetShopFeedQuery, GetShopFeedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetShopFeedQuery, GetShopFeedQueryVariables>(GetShopFeedDocument, options);
      }
export function useGetShopFeedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetShopFeedQuery, GetShopFeedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetShopFeedQuery, GetShopFeedQueryVariables>(GetShopFeedDocument, options);
        }
export type GetShopFeedQueryHookResult = ReturnType<typeof useGetShopFeedQuery>;
export type GetShopFeedLazyQueryHookResult = ReturnType<typeof useGetShopFeedLazyQuery>;
export type GetShopFeedQueryResult = Apollo.QueryResult<GetShopFeedQuery, GetShopFeedQueryVariables>;
export const GetShopDocument = gql`
    query GetShop($shopWhere: ShopWhereUniqueInput!) {
  shop(where: $shopWhere) {
    createdAt
    id
    name
    owner {
      createdAt
      fullName
      id
    }
    products {
      createdAt
      id
      name
    }
  }
}
    `;

/**
 * __useGetShopQuery__
 *
 * To run a query within a React component, call `useGetShopQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetShopQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetShopQuery({
 *   variables: {
 *      shopWhere: // value for 'shopWhere'
 *   },
 * });
 */
export function useGetShopQuery(baseOptions: Apollo.QueryHookOptions<GetShopQuery, GetShopQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetShopQuery, GetShopQueryVariables>(GetShopDocument, options);
      }
export function useGetShopLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetShopQuery, GetShopQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetShopQuery, GetShopQueryVariables>(GetShopDocument, options);
        }
export type GetShopQueryHookResult = ReturnType<typeof useGetShopQuery>;
export type GetShopLazyQueryHookResult = ReturnType<typeof useGetShopLazyQuery>;
export type GetShopQueryResult = Apollo.QueryResult<GetShopQuery, GetShopQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    