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
  DateTime: any;
};

export type AggregateProduct = {
  __typename?: 'AggregateProduct';
  _count?: Maybe<ProductCountAggregate>;
  _min?: Maybe<ProductMinAggregate>;
  _max?: Maybe<ProductMaxAggregate>;
};

export type AggregateShop = {
  __typename?: 'AggregateShop';
  _count?: Maybe<ShopCountAggregate>;
  _min?: Maybe<ShopMinAggregate>;
  _max?: Maybe<ShopMaxAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _count?: Maybe<UserCountAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _max?: Maybe<UserMaxAggregate>;
};


export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type DateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
};

export type DateTimeNullableWithAggregatesFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableWithAggregatesFilter>;
  _count?: Maybe<NestedIntNullableFilter>;
  _min?: Maybe<NestedDateTimeNullableFilter>;
  _max?: Maybe<NestedDateTimeNullableFilter>;
};

export type DateTimeWithAggregatesFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  _count?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedDateTimeFilter>;
  _max?: Maybe<NestedDateTimeFilter>;
};

export type LogInInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  signUp: User;
  logIn: User;
};


export type MutationSignUpArgs = {
  input: SignUpInput;
};


export type MutationLogInArgs = {
  input: LogInInput;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type NestedDateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableWithAggregatesFilter>;
  _count?: Maybe<NestedIntNullableFilter>;
  _min?: Maybe<NestedDateTimeNullableFilter>;
  _max?: Maybe<NestedDateTimeNullableFilter>;
};

export type NestedDateTimeWithAggregatesFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  _count?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedDateTimeFilter>;
  _max?: Maybe<NestedDateTimeFilter>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
};

export type NestedStringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type NestedStringWithAggregatesFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  _count?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedStringFilter>;
  _max?: Maybe<NestedStringFilter>;
};

export type Product = {
  __typename?: 'Product';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  name: Scalars['String'];
  shopId: Scalars['String'];
  shop: Shop;
};

export type ProductCountAggregate = {
  __typename?: 'ProductCountAggregate';
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  shopId: Scalars['Int'];
  _all: Scalars['Int'];
};

export type ProductGroupBy = {
  __typename?: 'ProductGroupBy';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  name: Scalars['String'];
  shopId: Scalars['String'];
  _count?: Maybe<ProductCountAggregate>;
  _min?: Maybe<ProductMinAggregate>;
  _max?: Maybe<ProductMaxAggregate>;
};

export type ProductListRelationFilter = {
  every?: Maybe<ProductWhereInput>;
  some?: Maybe<ProductWhereInput>;
  none?: Maybe<ProductWhereInput>;
};

export type ProductMaxAggregate = {
  __typename?: 'ProductMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  shopId?: Maybe<Scalars['String']>;
};

export type ProductMinAggregate = {
  __typename?: 'ProductMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  shopId?: Maybe<Scalars['String']>;
};

export type ProductOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
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
  OR?: Maybe<Array<ProductScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<ProductScalarWhereWithAggregatesInput>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<StringWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  shopId?: Maybe<StringWithAggregatesFilter>;
};

export type ProductWhereInput = {
  AND?: Maybe<Array<ProductWhereInput>>;
  OR?: Maybe<Array<ProductWhereInput>>;
  NOT?: Maybe<Array<ProductWhereInput>>;
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
  product?: Maybe<Product>;
  findFirstProduct?: Maybe<Product>;
  products: Array<Product>;
  aggregateProduct: AggregateProduct;
  groupByProduct: Array<ProductGroupBy>;
  shop?: Maybe<Shop>;
  findFirstShop?: Maybe<Shop>;
  shops: Array<Shop>;
  aggregateShop: AggregateShop;
  groupByShop: Array<ShopGroupBy>;
  user?: Maybe<User>;
  findFirstUser?: Maybe<User>;
  users: Array<User>;
  aggregateUser: AggregateUser;
  groupByUser: Array<UserGroupBy>;
};


export type QueryProductArgs = {
  where: ProductWhereUniqueInput;
};


export type QueryFindFirstProductArgs = {
  where?: Maybe<ProductWhereInput>;
  orderBy?: Maybe<Array<ProductOrderByInput>>;
  cursor?: Maybe<ProductWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<ProductScalarFieldEnum>>;
};


export type QueryProductsArgs = {
  where?: Maybe<ProductWhereInput>;
  orderBy?: Maybe<Array<ProductOrderByInput>>;
  cursor?: Maybe<ProductWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<ProductScalarFieldEnum>>;
};


export type QueryAggregateProductArgs = {
  where?: Maybe<ProductWhereInput>;
  orderBy?: Maybe<Array<ProductOrderByInput>>;
  cursor?: Maybe<ProductWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryGroupByProductArgs = {
  where?: Maybe<ProductWhereInput>;
  orderBy?: Maybe<Array<ProductOrderByInput>>;
  by: Array<ProductScalarFieldEnum>;
  having?: Maybe<ProductScalarWhereWithAggregatesInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryShopArgs = {
  where: ShopWhereUniqueInput;
};


export type QueryFindFirstShopArgs = {
  where?: Maybe<ShopWhereInput>;
  orderBy?: Maybe<Array<ShopOrderByInput>>;
  cursor?: Maybe<ShopWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<ShopScalarFieldEnum>>;
};


export type QueryShopsArgs = {
  where?: Maybe<ShopWhereInput>;
  orderBy?: Maybe<Array<ShopOrderByInput>>;
  cursor?: Maybe<ShopWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<ShopScalarFieldEnum>>;
};


export type QueryAggregateShopArgs = {
  where?: Maybe<ShopWhereInput>;
  orderBy?: Maybe<Array<ShopOrderByInput>>;
  cursor?: Maybe<ShopWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryGroupByShopArgs = {
  where?: Maybe<ShopWhereInput>;
  orderBy?: Maybe<Array<ShopOrderByInput>>;
  by: Array<ShopScalarFieldEnum>;
  having?: Maybe<ShopScalarWhereWithAggregatesInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryFindFirstUserArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  cursor?: Maybe<UserWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
};


export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  cursor?: Maybe<UserWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
};


export type QueryAggregateUserArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  cursor?: Maybe<UserWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryGroupByUserArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  by: Array<UserScalarFieldEnum>;
  having?: Maybe<UserScalarWhereWithAggregatesInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Shop = {
  __typename?: 'Shop';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  name: Scalars['String'];
  ownerId: Scalars['String'];
  owner: User;
  products: Array<Product>;
};


export type ShopProductsArgs = {
  where?: Maybe<ProductWhereInput>;
  orderBy?: Maybe<Array<ProductOrderByInput>>;
  cursor?: Maybe<ProductWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<ProductScalarFieldEnum>>;
};

export type ShopCountAggregate = {
  __typename?: 'ShopCountAggregate';
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  ownerId: Scalars['Int'];
  _all: Scalars['Int'];
};

export type ShopGroupBy = {
  __typename?: 'ShopGroupBy';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  name: Scalars['String'];
  ownerId: Scalars['String'];
  _count?: Maybe<ShopCountAggregate>;
  _min?: Maybe<ShopMinAggregate>;
  _max?: Maybe<ShopMaxAggregate>;
};

export type ShopListRelationFilter = {
  every?: Maybe<ShopWhereInput>;
  some?: Maybe<ShopWhereInput>;
  none?: Maybe<ShopWhereInput>;
};

export type ShopMaxAggregate = {
  __typename?: 'ShopMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  ownerId?: Maybe<Scalars['String']>;
};

export type ShopMinAggregate = {
  __typename?: 'ShopMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  ownerId?: Maybe<Scalars['String']>;
};

export type ShopOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  ownerId?: Maybe<SortOrder>;
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
  OR?: Maybe<Array<ShopScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<ShopScalarWhereWithAggregatesInput>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<StringWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  ownerId?: Maybe<StringWithAggregatesFilter>;
};

export type ShopWhereInput = {
  AND?: Maybe<Array<ShopWhereInput>>;
  OR?: Maybe<Array<ShopWhereInput>>;
  NOT?: Maybe<Array<ShopWhereInput>>;
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
  password: Scalars['String'];
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
};

export type StringWithAggregatesFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  _count?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedStringFilter>;
  _max?: Maybe<NestedStringFilter>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  emailVerified?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  shops: Array<Shop>;
};


export type UserShopsArgs = {
  where?: Maybe<ShopWhereInput>;
  orderBy?: Maybe<Array<ShopOrderByInput>>;
  cursor?: Maybe<ShopWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<ShopScalarFieldEnum>>;
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  createdAt: Scalars['Int'];
  email: Scalars['Int'];
  emailVerified: Scalars['Int'];
  id: Scalars['Int'];
  passwordHash: Scalars['Int'];
  _all: Scalars['Int'];
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  emailVerified?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  passwordHash: Scalars['String'];
  _count?: Maybe<UserCountAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _max?: Maybe<UserMaxAggregate>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
};

export type UserOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  emailVerified?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  passwordHash?: Maybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: Maybe<UserWhereInput>;
  isNot?: Maybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Email = 'email',
  EmailVerified = 'emailVerified',
  Id = 'id',
  PasswordHash = 'passwordHash'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<UserScalarWhereWithAggregatesInput>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  email?: Maybe<StringWithAggregatesFilter>;
  emailVerified?: Maybe<DateTimeNullableWithAggregatesFilter>;
  id?: Maybe<StringWithAggregatesFilter>;
  passwordHash?: Maybe<StringWithAggregatesFilter>;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringFilter>;
  emailVerified?: Maybe<DateTimeNullableFilter>;
  id?: Maybe<StringFilter>;
  passwordHash?: Maybe<StringFilter>;
  shops?: Maybe<ShopListRelationFilter>;
};

export type UserWhereUniqueInput = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type GetShopFeedQueryVariables = Exact<{ [key: string]: never; }>;


export type GetShopFeedQuery = { __typename?: 'Query', shops: Array<{ __typename?: 'Shop', createdAt: any, id: string, name: string }> };


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

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    