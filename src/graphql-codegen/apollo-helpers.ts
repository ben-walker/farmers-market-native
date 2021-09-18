import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type AggregateProductKeySpecifier = ('_count' | '_max' | '_min' | AggregateProductKeySpecifier)[];
export type AggregateProductFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateShopKeySpecifier = ('_avg' | '_count' | '_max' | '_min' | '_sum' | AggregateShopKeySpecifier)[];
export type AggregateShopFieldPolicy = {
	_avg?: FieldPolicy<any> | FieldReadFunction<any>,
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	_sum?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateUserKeySpecifier = ('_count' | '_max' | '_min' | AggregateUserKeySpecifier)[];
export type AggregateUserFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('logIn' | 'signUp' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	logIn?: FieldPolicy<any> | FieldReadFunction<any>,
	signUp?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductKeySpecifier = ('createdAt' | 'id' | 'name' | 'shop' | 'shopId' | ProductKeySpecifier)[];
export type ProductFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	shop?: FieldPolicy<any> | FieldReadFunction<any>,
	shopId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductCountAggregateKeySpecifier = ('_all' | 'createdAt' | 'id' | 'name' | 'shopId' | ProductCountAggregateKeySpecifier)[];
export type ProductCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	shopId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductGroupByKeySpecifier = ('_count' | '_max' | '_min' | 'createdAt' | 'id' | 'name' | 'shopId' | ProductGroupByKeySpecifier)[];
export type ProductGroupByFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	shopId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductMaxAggregateKeySpecifier = ('createdAt' | 'id' | 'name' | 'shopId' | ProductMaxAggregateKeySpecifier)[];
export type ProductMaxAggregateFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	shopId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductMinAggregateKeySpecifier = ('createdAt' | 'id' | 'name' | 'shopId' | ProductMinAggregateKeySpecifier)[];
export type ProductMinAggregateFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	shopId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('aggregateProduct' | 'aggregateShop' | 'aggregateUser' | 'findFirstProduct' | 'findFirstShop' | 'findFirstUser' | 'groupByProduct' | 'groupByShop' | 'groupByUser' | 'product' | 'products' | 'shop' | 'shopGetNearbyLocations' | 'shops' | 'user' | 'users' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	aggregateProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregateShop?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregateUser?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstShop?: FieldPolicy<any> | FieldReadFunction<any>,
	findFirstUser?: FieldPolicy<any> | FieldReadFunction<any>,
	groupByProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	groupByShop?: FieldPolicy<any> | FieldReadFunction<any>,
	groupByUser?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	products?: FieldPolicy<any> | FieldReadFunction<any>,
	shop?: FieldPolicy<any> | FieldReadFunction<any>,
	shopGetNearbyLocations?: FieldPolicy<any> | FieldReadFunction<any>,
	shops?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShopKeySpecifier = ('_count' | 'coordinates' | 'createdAt' | 'id' | 'name' | 'owner' | 'ownerId' | 'products' | 'serveRadius' | ShopKeySpecifier)[];
export type ShopFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	coordinates?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	owner?: FieldPolicy<any> | FieldReadFunction<any>,
	ownerId?: FieldPolicy<any> | FieldReadFunction<any>,
	products?: FieldPolicy<any> | FieldReadFunction<any>,
	serveRadius?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShopAvgAggregateKeySpecifier = ('serveRadius' | ShopAvgAggregateKeySpecifier)[];
export type ShopAvgAggregateFieldPolicy = {
	serveRadius?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShopCoordinatesKeySpecifier = ('id' | 'latitude' | 'longitude' | 'shopId' | ShopCoordinatesKeySpecifier)[];
export type ShopCoordinatesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	latitude?: FieldPolicy<any> | FieldReadFunction<any>,
	longitude?: FieldPolicy<any> | FieldReadFunction<any>,
	shopId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShopCountKeySpecifier = ('products' | ShopCountKeySpecifier)[];
export type ShopCountFieldPolicy = {
	products?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShopCountAggregateKeySpecifier = ('_all' | 'createdAt' | 'id' | 'name' | 'ownerId' | 'serveRadius' | ShopCountAggregateKeySpecifier)[];
export type ShopCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	ownerId?: FieldPolicy<any> | FieldReadFunction<any>,
	serveRadius?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShopGroupByKeySpecifier = ('_avg' | '_count' | '_max' | '_min' | '_sum' | 'createdAt' | 'id' | 'name' | 'ownerId' | 'serveRadius' | ShopGroupByKeySpecifier)[];
export type ShopGroupByFieldPolicy = {
	_avg?: FieldPolicy<any> | FieldReadFunction<any>,
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	_sum?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	ownerId?: FieldPolicy<any> | FieldReadFunction<any>,
	serveRadius?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShopMaxAggregateKeySpecifier = ('createdAt' | 'id' | 'name' | 'ownerId' | 'serveRadius' | ShopMaxAggregateKeySpecifier)[];
export type ShopMaxAggregateFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	ownerId?: FieldPolicy<any> | FieldReadFunction<any>,
	serveRadius?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShopMinAggregateKeySpecifier = ('createdAt' | 'id' | 'name' | 'ownerId' | 'serveRadius' | ShopMinAggregateKeySpecifier)[];
export type ShopMinAggregateFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	ownerId?: FieldPolicy<any> | FieldReadFunction<any>,
	serveRadius?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ShopSumAggregateKeySpecifier = ('serveRadius' | ShopSumAggregateKeySpecifier)[];
export type ShopSumAggregateFieldPolicy = {
	serveRadius?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('_count' | 'createdAt' | 'email' | 'emailVerified' | 'fullName' | 'id' | 'shops' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	emailVerified?: FieldPolicy<any> | FieldReadFunction<any>,
	fullName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	shops?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserCountKeySpecifier = ('shops' | UserCountKeySpecifier)[];
export type UserCountFieldPolicy = {
	shops?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserCountAggregateKeySpecifier = ('_all' | 'createdAt' | 'email' | 'emailVerified' | 'fullName' | 'id' | 'passwordHash' | UserCountAggregateKeySpecifier)[];
export type UserCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	emailVerified?: FieldPolicy<any> | FieldReadFunction<any>,
	fullName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	passwordHash?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserGroupByKeySpecifier = ('_count' | '_max' | '_min' | 'createdAt' | 'email' | 'emailVerified' | 'fullName' | 'id' | 'passwordHash' | UserGroupByKeySpecifier)[];
export type UserGroupByFieldPolicy = {
	_count?: FieldPolicy<any> | FieldReadFunction<any>,
	_max?: FieldPolicy<any> | FieldReadFunction<any>,
	_min?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	emailVerified?: FieldPolicy<any> | FieldReadFunction<any>,
	fullName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	passwordHash?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserMaxAggregateKeySpecifier = ('createdAt' | 'email' | 'emailVerified' | 'fullName' | 'id' | 'passwordHash' | UserMaxAggregateKeySpecifier)[];
export type UserMaxAggregateFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	emailVerified?: FieldPolicy<any> | FieldReadFunction<any>,
	fullName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	passwordHash?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserMinAggregateKeySpecifier = ('createdAt' | 'email' | 'emailVerified' | 'fullName' | 'id' | 'passwordHash' | UserMinAggregateKeySpecifier)[];
export type UserMinAggregateFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	emailVerified?: FieldPolicy<any> | FieldReadFunction<any>,
	fullName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	passwordHash?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	AggregateProduct?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateProductKeySpecifier | (() => undefined | AggregateProductKeySpecifier),
		fields?: AggregateProductFieldPolicy,
	},
	AggregateShop?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateShopKeySpecifier | (() => undefined | AggregateShopKeySpecifier),
		fields?: AggregateShopFieldPolicy,
	},
	AggregateUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateUserKeySpecifier | (() => undefined | AggregateUserKeySpecifier),
		fields?: AggregateUserFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Product?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductKeySpecifier | (() => undefined | ProductKeySpecifier),
		fields?: ProductFieldPolicy,
	},
	ProductCountAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductCountAggregateKeySpecifier | (() => undefined | ProductCountAggregateKeySpecifier),
		fields?: ProductCountAggregateFieldPolicy,
	},
	ProductGroupBy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductGroupByKeySpecifier | (() => undefined | ProductGroupByKeySpecifier),
		fields?: ProductGroupByFieldPolicy,
	},
	ProductMaxAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductMaxAggregateKeySpecifier | (() => undefined | ProductMaxAggregateKeySpecifier),
		fields?: ProductMaxAggregateFieldPolicy,
	},
	ProductMinAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductMinAggregateKeySpecifier | (() => undefined | ProductMinAggregateKeySpecifier),
		fields?: ProductMinAggregateFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	Shop?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShopKeySpecifier | (() => undefined | ShopKeySpecifier),
		fields?: ShopFieldPolicy,
	},
	ShopAvgAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShopAvgAggregateKeySpecifier | (() => undefined | ShopAvgAggregateKeySpecifier),
		fields?: ShopAvgAggregateFieldPolicy,
	},
	ShopCoordinates?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShopCoordinatesKeySpecifier | (() => undefined | ShopCoordinatesKeySpecifier),
		fields?: ShopCoordinatesFieldPolicy,
	},
	ShopCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShopCountKeySpecifier | (() => undefined | ShopCountKeySpecifier),
		fields?: ShopCountFieldPolicy,
	},
	ShopCountAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShopCountAggregateKeySpecifier | (() => undefined | ShopCountAggregateKeySpecifier),
		fields?: ShopCountAggregateFieldPolicy,
	},
	ShopGroupBy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShopGroupByKeySpecifier | (() => undefined | ShopGroupByKeySpecifier),
		fields?: ShopGroupByFieldPolicy,
	},
	ShopMaxAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShopMaxAggregateKeySpecifier | (() => undefined | ShopMaxAggregateKeySpecifier),
		fields?: ShopMaxAggregateFieldPolicy,
	},
	ShopMinAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShopMinAggregateKeySpecifier | (() => undefined | ShopMinAggregateKeySpecifier),
		fields?: ShopMinAggregateFieldPolicy,
	},
	ShopSumAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ShopSumAggregateKeySpecifier | (() => undefined | ShopSumAggregateKeySpecifier),
		fields?: ShopSumAggregateFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	},
	UserCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserCountKeySpecifier | (() => undefined | UserCountKeySpecifier),
		fields?: UserCountFieldPolicy,
	},
	UserCountAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserCountAggregateKeySpecifier | (() => undefined | UserCountAggregateKeySpecifier),
		fields?: UserCountAggregateFieldPolicy,
	},
	UserGroupBy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserGroupByKeySpecifier | (() => undefined | UserGroupByKeySpecifier),
		fields?: UserGroupByFieldPolicy,
	},
	UserMaxAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserMaxAggregateKeySpecifier | (() => undefined | UserMaxAggregateKeySpecifier),
		fields?: UserMaxAggregateFieldPolicy,
	},
	UserMinAggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserMinAggregateKeySpecifier | (() => undefined | UserMinAggregateKeySpecifier),
		fields?: UserMinAggregateFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;