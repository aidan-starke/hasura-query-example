import { GraphQLClient } from "graphql-request";
import { RequestInit } from "graphql-request/dist/types.dom";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>;
};

export function fetcher<TData, TVariables>(
	client: GraphQLClient,
	query: string,
	variables?: TVariables,
	headers?: RequestInit["headers"]
) {
	return async (): Promise<TData> =>
		client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
	timestamptz: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
	_eq?: InputMaybe<Scalars["Boolean"]>;
	_gt?: InputMaybe<Scalars["Boolean"]>;
	_gte?: InputMaybe<Scalars["Boolean"]>;
	_in?: InputMaybe<Array<Scalars["Boolean"]>>;
	_is_null?: InputMaybe<Scalars["Boolean"]>;
	_lt?: InputMaybe<Scalars["Boolean"]>;
	_lte?: InputMaybe<Scalars["Boolean"]>;
	_neq?: InputMaybe<Scalars["Boolean"]>;
	_nin?: InputMaybe<Array<Scalars["Boolean"]>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
	_eq?: InputMaybe<Scalars["Int"]>;
	_gt?: InputMaybe<Scalars["Int"]>;
	_gte?: InputMaybe<Scalars["Int"]>;
	_in?: InputMaybe<Array<Scalars["Int"]>>;
	_is_null?: InputMaybe<Scalars["Boolean"]>;
	_lt?: InputMaybe<Scalars["Int"]>;
	_lte?: InputMaybe<Scalars["Int"]>;
	_neq?: InputMaybe<Scalars["Int"]>;
	_nin?: InputMaybe<Array<Scalars["Int"]>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
	_eq?: InputMaybe<Scalars["String"]>;
	_gt?: InputMaybe<Scalars["String"]>;
	_gte?: InputMaybe<Scalars["String"]>;
	/** does the column match the given case-insensitive pattern */
	_ilike?: InputMaybe<Scalars["String"]>;
	_in?: InputMaybe<Array<Scalars["String"]>>;
	/** does the column match the given POSIX regular expression, case insensitive */
	_iregex?: InputMaybe<Scalars["String"]>;
	_is_null?: InputMaybe<Scalars["Boolean"]>;
	/** does the column match the given pattern */
	_like?: InputMaybe<Scalars["String"]>;
	_lt?: InputMaybe<Scalars["String"]>;
	_lte?: InputMaybe<Scalars["String"]>;
	_neq?: InputMaybe<Scalars["String"]>;
	/** does the column NOT match the given case-insensitive pattern */
	_nilike?: InputMaybe<Scalars["String"]>;
	_nin?: InputMaybe<Array<Scalars["String"]>>;
	/** does the column NOT match the given POSIX regular expression, case insensitive */
	_niregex?: InputMaybe<Scalars["String"]>;
	/** does the column NOT match the given pattern */
	_nlike?: InputMaybe<Scalars["String"]>;
	/** does the column NOT match the given POSIX regular expression, case sensitive */
	_nregex?: InputMaybe<Scalars["String"]>;
	/** does the column NOT match the given SQL regular expression */
	_nsimilar?: InputMaybe<Scalars["String"]>;
	/** does the column match the given POSIX regular expression, case sensitive */
	_regex?: InputMaybe<Scalars["String"]>;
	/** does the column match the given SQL regular expression */
	_similar?: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "comments" */
export type Comments = {
	__typename?: "comments";
	content: Scalars["String"];
	created_at: Scalars["timestamptz"];
	id: Scalars["Int"];
	/** An object relationship */
	post: Posts;
	post_id: Scalars["Int"];
	updated_at: Scalars["timestamptz"];
	/** An object relationship */
	user: Users;
	user_id: Scalars["Int"];
};

/** aggregated selection of "comments" */
export type Comments_Aggregate = {
	__typename?: "comments_aggregate";
	aggregate?: Maybe<Comments_Aggregate_Fields>;
	nodes: Array<Comments>;
};

/** aggregate fields of "comments" */
export type Comments_Aggregate_Fields = {
	__typename?: "comments_aggregate_fields";
	avg?: Maybe<Comments_Avg_Fields>;
	count: Scalars["Int"];
	max?: Maybe<Comments_Max_Fields>;
	min?: Maybe<Comments_Min_Fields>;
	stddev?: Maybe<Comments_Stddev_Fields>;
	stddev_pop?: Maybe<Comments_Stddev_Pop_Fields>;
	stddev_samp?: Maybe<Comments_Stddev_Samp_Fields>;
	sum?: Maybe<Comments_Sum_Fields>;
	var_pop?: Maybe<Comments_Var_Pop_Fields>;
	var_samp?: Maybe<Comments_Var_Samp_Fields>;
	variance?: Maybe<Comments_Variance_Fields>;
};

/** aggregate fields of "comments" */
export type Comments_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<Comments_Select_Column>>;
	distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "comments" */
export type Comments_Aggregate_Order_By = {
	avg?: InputMaybe<Comments_Avg_Order_By>;
	count?: InputMaybe<Order_By>;
	max?: InputMaybe<Comments_Max_Order_By>;
	min?: InputMaybe<Comments_Min_Order_By>;
	stddev?: InputMaybe<Comments_Stddev_Order_By>;
	stddev_pop?: InputMaybe<Comments_Stddev_Pop_Order_By>;
	stddev_samp?: InputMaybe<Comments_Stddev_Samp_Order_By>;
	sum?: InputMaybe<Comments_Sum_Order_By>;
	var_pop?: InputMaybe<Comments_Var_Pop_Order_By>;
	var_samp?: InputMaybe<Comments_Var_Samp_Order_By>;
	variance?: InputMaybe<Comments_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "comments" */
export type Comments_Arr_Rel_Insert_Input = {
	data: Array<Comments_Insert_Input>;
	/** upsert condition */
	on_conflict?: InputMaybe<Comments_On_Conflict>;
};

/** aggregate avg on columns */
export type Comments_Avg_Fields = {
	__typename?: "comments_avg_fields";
	id?: Maybe<Scalars["Float"]>;
	post_id?: Maybe<Scalars["Float"]>;
	user_id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "comments" */
export type Comments_Avg_Order_By = {
	id?: InputMaybe<Order_By>;
	post_id?: InputMaybe<Order_By>;
	user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "comments". All fields are combined with a logical 'AND'. */
export type Comments_Bool_Exp = {
	_and?: InputMaybe<Array<Comments_Bool_Exp>>;
	_not?: InputMaybe<Comments_Bool_Exp>;
	_or?: InputMaybe<Array<Comments_Bool_Exp>>;
	content?: InputMaybe<String_Comparison_Exp>;
	created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
	id?: InputMaybe<Int_Comparison_Exp>;
	post?: InputMaybe<Posts_Bool_Exp>;
	post_id?: InputMaybe<Int_Comparison_Exp>;
	updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
	user?: InputMaybe<Users_Bool_Exp>;
	user_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "comments" */
export enum Comments_Constraint {
	/** unique or primary key constraint on columns "id" */
	CommentsPkey = "comments_pkey",
}

/** input type for incrementing numeric columns in table "comments" */
export type Comments_Inc_Input = {
	id?: InputMaybe<Scalars["Int"]>;
	post_id?: InputMaybe<Scalars["Int"]>;
	user_id?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "comments" */
export type Comments_Insert_Input = {
	content?: InputMaybe<Scalars["String"]>;
	created_at?: InputMaybe<Scalars["timestamptz"]>;
	id?: InputMaybe<Scalars["Int"]>;
	post?: InputMaybe<Posts_Obj_Rel_Insert_Input>;
	post_id?: InputMaybe<Scalars["Int"]>;
	updated_at?: InputMaybe<Scalars["timestamptz"]>;
	user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
	user_id?: InputMaybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type Comments_Max_Fields = {
	__typename?: "comments_max_fields";
	content?: Maybe<Scalars["String"]>;
	created_at?: Maybe<Scalars["timestamptz"]>;
	id?: Maybe<Scalars["Int"]>;
	post_id?: Maybe<Scalars["Int"]>;
	updated_at?: Maybe<Scalars["timestamptz"]>;
	user_id?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "comments" */
export type Comments_Max_Order_By = {
	content?: InputMaybe<Order_By>;
	created_at?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	post_id?: InputMaybe<Order_By>;
	updated_at?: InputMaybe<Order_By>;
	user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Comments_Min_Fields = {
	__typename?: "comments_min_fields";
	content?: Maybe<Scalars["String"]>;
	created_at?: Maybe<Scalars["timestamptz"]>;
	id?: Maybe<Scalars["Int"]>;
	post_id?: Maybe<Scalars["Int"]>;
	updated_at?: Maybe<Scalars["timestamptz"]>;
	user_id?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "comments" */
export type Comments_Min_Order_By = {
	content?: InputMaybe<Order_By>;
	created_at?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	post_id?: InputMaybe<Order_By>;
	updated_at?: InputMaybe<Order_By>;
	user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "comments" */
export type Comments_Mutation_Response = {
	__typename?: "comments_mutation_response";
	/** number of rows affected by the mutation */
	affected_rows: Scalars["Int"];
	/** data from the rows affected by the mutation */
	returning: Array<Comments>;
};

/** on_conflict condition type for table "comments" */
export type Comments_On_Conflict = {
	constraint: Comments_Constraint;
	update_columns?: Array<Comments_Update_Column>;
	where?: InputMaybe<Comments_Bool_Exp>;
};

/** Ordering options when selecting data from "comments". */
export type Comments_Order_By = {
	content?: InputMaybe<Order_By>;
	created_at?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	post?: InputMaybe<Posts_Order_By>;
	post_id?: InputMaybe<Order_By>;
	updated_at?: InputMaybe<Order_By>;
	user?: InputMaybe<Users_Order_By>;
	user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: comments */
export type Comments_Pk_Columns_Input = {
	id: Scalars["Int"];
};

/** select columns of table "comments" */
export enum Comments_Select_Column {
	/** column name */
	Content = "content",
	/** column name */
	CreatedAt = "created_at",
	/** column name */
	Id = "id",
	/** column name */
	PostId = "post_id",
	/** column name */
	UpdatedAt = "updated_at",
	/** column name */
	UserId = "user_id",
}

/** input type for updating data in table "comments" */
export type Comments_Set_Input = {
	content?: InputMaybe<Scalars["String"]>;
	created_at?: InputMaybe<Scalars["timestamptz"]>;
	id?: InputMaybe<Scalars["Int"]>;
	post_id?: InputMaybe<Scalars["Int"]>;
	updated_at?: InputMaybe<Scalars["timestamptz"]>;
	user_id?: InputMaybe<Scalars["Int"]>;
};

/** aggregate stddev on columns */
export type Comments_Stddev_Fields = {
	__typename?: "comments_stddev_fields";
	id?: Maybe<Scalars["Float"]>;
	post_id?: Maybe<Scalars["Float"]>;
	user_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "comments" */
export type Comments_Stddev_Order_By = {
	id?: InputMaybe<Order_By>;
	post_id?: InputMaybe<Order_By>;
	user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Comments_Stddev_Pop_Fields = {
	__typename?: "comments_stddev_pop_fields";
	id?: Maybe<Scalars["Float"]>;
	post_id?: Maybe<Scalars["Float"]>;
	user_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "comments" */
export type Comments_Stddev_Pop_Order_By = {
	id?: InputMaybe<Order_By>;
	post_id?: InputMaybe<Order_By>;
	user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Comments_Stddev_Samp_Fields = {
	__typename?: "comments_stddev_samp_fields";
	id?: Maybe<Scalars["Float"]>;
	post_id?: Maybe<Scalars["Float"]>;
	user_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "comments" */
export type Comments_Stddev_Samp_Order_By = {
	id?: InputMaybe<Order_By>;
	post_id?: InputMaybe<Order_By>;
	user_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Comments_Sum_Fields = {
	__typename?: "comments_sum_fields";
	id?: Maybe<Scalars["Int"]>;
	post_id?: Maybe<Scalars["Int"]>;
	user_id?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "comments" */
export type Comments_Sum_Order_By = {
	id?: InputMaybe<Order_By>;
	post_id?: InputMaybe<Order_By>;
	user_id?: InputMaybe<Order_By>;
};

/** update columns of table "comments" */
export enum Comments_Update_Column {
	/** column name */
	Content = "content",
	/** column name */
	CreatedAt = "created_at",
	/** column name */
	Id = "id",
	/** column name */
	PostId = "post_id",
	/** column name */
	UpdatedAt = "updated_at",
	/** column name */
	UserId = "user_id",
}

/** aggregate var_pop on columns */
export type Comments_Var_Pop_Fields = {
	__typename?: "comments_var_pop_fields";
	id?: Maybe<Scalars["Float"]>;
	post_id?: Maybe<Scalars["Float"]>;
	user_id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "comments" */
export type Comments_Var_Pop_Order_By = {
	id?: InputMaybe<Order_By>;
	post_id?: InputMaybe<Order_By>;
	user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Comments_Var_Samp_Fields = {
	__typename?: "comments_var_samp_fields";
	id?: Maybe<Scalars["Float"]>;
	post_id?: Maybe<Scalars["Float"]>;
	user_id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "comments" */
export type Comments_Var_Samp_Order_By = {
	id?: InputMaybe<Order_By>;
	post_id?: InputMaybe<Order_By>;
	user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Comments_Variance_Fields = {
	__typename?: "comments_variance_fields";
	id?: Maybe<Scalars["Float"]>;
	post_id?: Maybe<Scalars["Float"]>;
	user_id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "comments" */
export type Comments_Variance_Order_By = {
	id?: InputMaybe<Order_By>;
	post_id?: InputMaybe<Order_By>;
	user_id?: InputMaybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
	__typename?: "mutation_root";
	/** delete data from the table: "comments" */
	delete_comments?: Maybe<Comments_Mutation_Response>;
	/** delete single row from the table: "comments" */
	delete_comments_by_pk?: Maybe<Comments>;
	/** delete data from the table: "posts" */
	delete_posts?: Maybe<Posts_Mutation_Response>;
	/** delete single row from the table: "posts" */
	delete_posts_by_pk?: Maybe<Posts>;
	/** delete data from the table: "users" */
	delete_users?: Maybe<Users_Mutation_Response>;
	/** delete single row from the table: "users" */
	delete_users_by_pk?: Maybe<Users>;
	/** insert data into the table: "comments" */
	insert_comments?: Maybe<Comments_Mutation_Response>;
	/** insert a single row into the table: "comments" */
	insert_comments_one?: Maybe<Comments>;
	/** insert data into the table: "posts" */
	insert_posts?: Maybe<Posts_Mutation_Response>;
	/** insert a single row into the table: "posts" */
	insert_posts_one?: Maybe<Posts>;
	/** insert data into the table: "users" */
	insert_users?: Maybe<Users_Mutation_Response>;
	/** insert a single row into the table: "users" */
	insert_users_one?: Maybe<Users>;
	/** update data of the table: "comments" */
	update_comments?: Maybe<Comments_Mutation_Response>;
	/** update single row of the table: "comments" */
	update_comments_by_pk?: Maybe<Comments>;
	/** update data of the table: "posts" */
	update_posts?: Maybe<Posts_Mutation_Response>;
	/** update single row of the table: "posts" */
	update_posts_by_pk?: Maybe<Posts>;
	/** update data of the table: "users" */
	update_users?: Maybe<Users_Mutation_Response>;
	/** update single row of the table: "users" */
	update_users_by_pk?: Maybe<Users>;
};

/** mutation root */
export type Mutation_RootDelete_CommentsArgs = {
	where: Comments_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Comments_By_PkArgs = {
	id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_PostsArgs = {
	where: Posts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Posts_By_PkArgs = {
	id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
	where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
	id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootInsert_CommentsArgs = {
	objects: Array<Comments_Insert_Input>;
	on_conflict?: InputMaybe<Comments_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Comments_OneArgs = {
	object: Comments_Insert_Input;
	on_conflict?: InputMaybe<Comments_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_PostsArgs = {
	objects: Array<Posts_Insert_Input>;
	on_conflict?: InputMaybe<Posts_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Posts_OneArgs = {
	object: Posts_Insert_Input;
	on_conflict?: InputMaybe<Posts_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
	objects: Array<Users_Insert_Input>;
	on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
	object: Users_Insert_Input;
	on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_CommentsArgs = {
	_inc?: InputMaybe<Comments_Inc_Input>;
	_set?: InputMaybe<Comments_Set_Input>;
	where: Comments_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Comments_By_PkArgs = {
	_inc?: InputMaybe<Comments_Inc_Input>;
	_set?: InputMaybe<Comments_Set_Input>;
	pk_columns: Comments_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_PostsArgs = {
	_inc?: InputMaybe<Posts_Inc_Input>;
	_set?: InputMaybe<Posts_Set_Input>;
	where: Posts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Posts_By_PkArgs = {
	_inc?: InputMaybe<Posts_Inc_Input>;
	_set?: InputMaybe<Posts_Set_Input>;
	pk_columns: Posts_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
	_inc?: InputMaybe<Users_Inc_Input>;
	_set?: InputMaybe<Users_Set_Input>;
	where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
	_inc?: InputMaybe<Users_Inc_Input>;
	_set?: InputMaybe<Users_Set_Input>;
	pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
	/** in ascending order, nulls last */
	Asc = "asc",
	/** in ascending order, nulls first */
	AscNullsFirst = "asc_nulls_first",
	/** in ascending order, nulls last */
	AscNullsLast = "asc_nulls_last",
	/** in descending order, nulls first */
	Desc = "desc",
	/** in descending order, nulls first */
	DescNullsFirst = "desc_nulls_first",
	/** in descending order, nulls last */
	DescNullsLast = "desc_nulls_last",
}

/** columns and relationships of "posts" */
export type Posts = {
	__typename?: "posts";
	/** An array relationship */
	comments: Array<Comments>;
	/** An aggregate relationship */
	comments_aggregate: Comments_Aggregate;
	content: Scalars["String"];
	created_at: Scalars["timestamptz"];
	id: Scalars["Int"];
	title: Scalars["String"];
	updated_at: Scalars["timestamptz"];
	/** An object relationship */
	user: Users;
	user_id: Scalars["Int"];
};

/** columns and relationships of "posts" */
export type PostsCommentsArgs = {
	distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Comments_Order_By>>;
	where?: InputMaybe<Comments_Bool_Exp>;
};

/** columns and relationships of "posts" */
export type PostsComments_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Comments_Order_By>>;
	where?: InputMaybe<Comments_Bool_Exp>;
};

/** aggregated selection of "posts" */
export type Posts_Aggregate = {
	__typename?: "posts_aggregate";
	aggregate?: Maybe<Posts_Aggregate_Fields>;
	nodes: Array<Posts>;
};

/** aggregate fields of "posts" */
export type Posts_Aggregate_Fields = {
	__typename?: "posts_aggregate_fields";
	avg?: Maybe<Posts_Avg_Fields>;
	count: Scalars["Int"];
	max?: Maybe<Posts_Max_Fields>;
	min?: Maybe<Posts_Min_Fields>;
	stddev?: Maybe<Posts_Stddev_Fields>;
	stddev_pop?: Maybe<Posts_Stddev_Pop_Fields>;
	stddev_samp?: Maybe<Posts_Stddev_Samp_Fields>;
	sum?: Maybe<Posts_Sum_Fields>;
	var_pop?: Maybe<Posts_Var_Pop_Fields>;
	var_samp?: Maybe<Posts_Var_Samp_Fields>;
	variance?: Maybe<Posts_Variance_Fields>;
};

/** aggregate fields of "posts" */
export type Posts_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<Posts_Select_Column>>;
	distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "posts" */
export type Posts_Aggregate_Order_By = {
	avg?: InputMaybe<Posts_Avg_Order_By>;
	count?: InputMaybe<Order_By>;
	max?: InputMaybe<Posts_Max_Order_By>;
	min?: InputMaybe<Posts_Min_Order_By>;
	stddev?: InputMaybe<Posts_Stddev_Order_By>;
	stddev_pop?: InputMaybe<Posts_Stddev_Pop_Order_By>;
	stddev_samp?: InputMaybe<Posts_Stddev_Samp_Order_By>;
	sum?: InputMaybe<Posts_Sum_Order_By>;
	var_pop?: InputMaybe<Posts_Var_Pop_Order_By>;
	var_samp?: InputMaybe<Posts_Var_Samp_Order_By>;
	variance?: InputMaybe<Posts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "posts" */
export type Posts_Arr_Rel_Insert_Input = {
	data: Array<Posts_Insert_Input>;
	/** upsert condition */
	on_conflict?: InputMaybe<Posts_On_Conflict>;
};

/** aggregate avg on columns */
export type Posts_Avg_Fields = {
	__typename?: "posts_avg_fields";
	id?: Maybe<Scalars["Float"]>;
	user_id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "posts" */
export type Posts_Avg_Order_By = {
	id?: InputMaybe<Order_By>;
	user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "posts". All fields are combined with a logical 'AND'. */
export type Posts_Bool_Exp = {
	_and?: InputMaybe<Array<Posts_Bool_Exp>>;
	_not?: InputMaybe<Posts_Bool_Exp>;
	_or?: InputMaybe<Array<Posts_Bool_Exp>>;
	comments?: InputMaybe<Comments_Bool_Exp>;
	content?: InputMaybe<String_Comparison_Exp>;
	created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
	id?: InputMaybe<Int_Comparison_Exp>;
	title?: InputMaybe<String_Comparison_Exp>;
	updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
	user?: InputMaybe<Users_Bool_Exp>;
	user_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "posts" */
export enum Posts_Constraint {
	/** unique or primary key constraint on columns "id" */
	PostsPkey = "posts_pkey",
}

/** input type for incrementing numeric columns in table "posts" */
export type Posts_Inc_Input = {
	id?: InputMaybe<Scalars["Int"]>;
	user_id?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "posts" */
export type Posts_Insert_Input = {
	comments?: InputMaybe<Comments_Arr_Rel_Insert_Input>;
	content?: InputMaybe<Scalars["String"]>;
	created_at?: InputMaybe<Scalars["timestamptz"]>;
	id?: InputMaybe<Scalars["Int"]>;
	title?: InputMaybe<Scalars["String"]>;
	updated_at?: InputMaybe<Scalars["timestamptz"]>;
	user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
	user_id?: InputMaybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type Posts_Max_Fields = {
	__typename?: "posts_max_fields";
	content?: Maybe<Scalars["String"]>;
	created_at?: Maybe<Scalars["timestamptz"]>;
	id?: Maybe<Scalars["Int"]>;
	title?: Maybe<Scalars["String"]>;
	updated_at?: Maybe<Scalars["timestamptz"]>;
	user_id?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "posts" */
export type Posts_Max_Order_By = {
	content?: InputMaybe<Order_By>;
	created_at?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	title?: InputMaybe<Order_By>;
	updated_at?: InputMaybe<Order_By>;
	user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Posts_Min_Fields = {
	__typename?: "posts_min_fields";
	content?: Maybe<Scalars["String"]>;
	created_at?: Maybe<Scalars["timestamptz"]>;
	id?: Maybe<Scalars["Int"]>;
	title?: Maybe<Scalars["String"]>;
	updated_at?: Maybe<Scalars["timestamptz"]>;
	user_id?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "posts" */
export type Posts_Min_Order_By = {
	content?: InputMaybe<Order_By>;
	created_at?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	title?: InputMaybe<Order_By>;
	updated_at?: InputMaybe<Order_By>;
	user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "posts" */
export type Posts_Mutation_Response = {
	__typename?: "posts_mutation_response";
	/** number of rows affected by the mutation */
	affected_rows: Scalars["Int"];
	/** data from the rows affected by the mutation */
	returning: Array<Posts>;
};

/** input type for inserting object relation for remote table "posts" */
export type Posts_Obj_Rel_Insert_Input = {
	data: Posts_Insert_Input;
	/** upsert condition */
	on_conflict?: InputMaybe<Posts_On_Conflict>;
};

/** on_conflict condition type for table "posts" */
export type Posts_On_Conflict = {
	constraint: Posts_Constraint;
	update_columns?: Array<Posts_Update_Column>;
	where?: InputMaybe<Posts_Bool_Exp>;
};

/** Ordering options when selecting data from "posts". */
export type Posts_Order_By = {
	comments_aggregate?: InputMaybe<Comments_Aggregate_Order_By>;
	content?: InputMaybe<Order_By>;
	created_at?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	title?: InputMaybe<Order_By>;
	updated_at?: InputMaybe<Order_By>;
	user?: InputMaybe<Users_Order_By>;
	user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: posts */
export type Posts_Pk_Columns_Input = {
	id: Scalars["Int"];
};

/** select columns of table "posts" */
export enum Posts_Select_Column {
	/** column name */
	Content = "content",
	/** column name */
	CreatedAt = "created_at",
	/** column name */
	Id = "id",
	/** column name */
	Title = "title",
	/** column name */
	UpdatedAt = "updated_at",
	/** column name */
	UserId = "user_id",
}

/** input type for updating data in table "posts" */
export type Posts_Set_Input = {
	content?: InputMaybe<Scalars["String"]>;
	created_at?: InputMaybe<Scalars["timestamptz"]>;
	id?: InputMaybe<Scalars["Int"]>;
	title?: InputMaybe<Scalars["String"]>;
	updated_at?: InputMaybe<Scalars["timestamptz"]>;
	user_id?: InputMaybe<Scalars["Int"]>;
};

/** aggregate stddev on columns */
export type Posts_Stddev_Fields = {
	__typename?: "posts_stddev_fields";
	id?: Maybe<Scalars["Float"]>;
	user_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "posts" */
export type Posts_Stddev_Order_By = {
	id?: InputMaybe<Order_By>;
	user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Posts_Stddev_Pop_Fields = {
	__typename?: "posts_stddev_pop_fields";
	id?: Maybe<Scalars["Float"]>;
	user_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "posts" */
export type Posts_Stddev_Pop_Order_By = {
	id?: InputMaybe<Order_By>;
	user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Posts_Stddev_Samp_Fields = {
	__typename?: "posts_stddev_samp_fields";
	id?: Maybe<Scalars["Float"]>;
	user_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "posts" */
export type Posts_Stddev_Samp_Order_By = {
	id?: InputMaybe<Order_By>;
	user_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Posts_Sum_Fields = {
	__typename?: "posts_sum_fields";
	id?: Maybe<Scalars["Int"]>;
	user_id?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "posts" */
export type Posts_Sum_Order_By = {
	id?: InputMaybe<Order_By>;
	user_id?: InputMaybe<Order_By>;
};

/** update columns of table "posts" */
export enum Posts_Update_Column {
	/** column name */
	Content = "content",
	/** column name */
	CreatedAt = "created_at",
	/** column name */
	Id = "id",
	/** column name */
	Title = "title",
	/** column name */
	UpdatedAt = "updated_at",
	/** column name */
	UserId = "user_id",
}

/** aggregate var_pop on columns */
export type Posts_Var_Pop_Fields = {
	__typename?: "posts_var_pop_fields";
	id?: Maybe<Scalars["Float"]>;
	user_id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "posts" */
export type Posts_Var_Pop_Order_By = {
	id?: InputMaybe<Order_By>;
	user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Posts_Var_Samp_Fields = {
	__typename?: "posts_var_samp_fields";
	id?: Maybe<Scalars["Float"]>;
	user_id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "posts" */
export type Posts_Var_Samp_Order_By = {
	id?: InputMaybe<Order_By>;
	user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Posts_Variance_Fields = {
	__typename?: "posts_variance_fields";
	id?: Maybe<Scalars["Float"]>;
	user_id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "posts" */
export type Posts_Variance_Order_By = {
	id?: InputMaybe<Order_By>;
	user_id?: InputMaybe<Order_By>;
};

export type Query_Root = {
	__typename?: "query_root";
	/** An array relationship */
	comments: Array<Comments>;
	/** An aggregate relationship */
	comments_aggregate: Comments_Aggregate;
	/** fetch data from the table: "comments" using primary key columns */
	comments_by_pk?: Maybe<Comments>;
	/** An array relationship */
	posts: Array<Posts>;
	/** An aggregate relationship */
	posts_aggregate: Posts_Aggregate;
	/** fetch data from the table: "posts" using primary key columns */
	posts_by_pk?: Maybe<Posts>;
	/** fetch data from the table: "users" */
	users: Array<Users>;
	/** fetch aggregated fields from the table: "users" */
	users_aggregate: Users_Aggregate;
	/** fetch data from the table: "users" using primary key columns */
	users_by_pk?: Maybe<Users>;
};

export type Query_RootCommentsArgs = {
	distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Comments_Order_By>>;
	where?: InputMaybe<Comments_Bool_Exp>;
};

export type Query_RootComments_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Comments_Order_By>>;
	where?: InputMaybe<Comments_Bool_Exp>;
};

export type Query_RootComments_By_PkArgs = {
	id: Scalars["Int"];
};

export type Query_RootPostsArgs = {
	distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Posts_Order_By>>;
	where?: InputMaybe<Posts_Bool_Exp>;
};

export type Query_RootPosts_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Posts_Order_By>>;
	where?: InputMaybe<Posts_Bool_Exp>;
};

export type Query_RootPosts_By_PkArgs = {
	id: Scalars["Int"];
};

export type Query_RootUsersArgs = {
	distinct_on?: InputMaybe<Array<Users_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Users_Order_By>>;
	where?: InputMaybe<Users_Bool_Exp>;
};

export type Query_RootUsers_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Users_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Users_Order_By>>;
	where?: InputMaybe<Users_Bool_Exp>;
};

export type Query_RootUsers_By_PkArgs = {
	id: Scalars["Int"];
};

export type Subscription_Root = {
	__typename?: "subscription_root";
	/** An array relationship */
	comments: Array<Comments>;
	/** An aggregate relationship */
	comments_aggregate: Comments_Aggregate;
	/** fetch data from the table: "comments" using primary key columns */
	comments_by_pk?: Maybe<Comments>;
	/** An array relationship */
	posts: Array<Posts>;
	/** An aggregate relationship */
	posts_aggregate: Posts_Aggregate;
	/** fetch data from the table: "posts" using primary key columns */
	posts_by_pk?: Maybe<Posts>;
	/** fetch data from the table: "users" */
	users: Array<Users>;
	/** fetch aggregated fields from the table: "users" */
	users_aggregate: Users_Aggregate;
	/** fetch data from the table: "users" using primary key columns */
	users_by_pk?: Maybe<Users>;
};

export type Subscription_RootCommentsArgs = {
	distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Comments_Order_By>>;
	where?: InputMaybe<Comments_Bool_Exp>;
};

export type Subscription_RootComments_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Comments_Order_By>>;
	where?: InputMaybe<Comments_Bool_Exp>;
};

export type Subscription_RootComments_By_PkArgs = {
	id: Scalars["Int"];
};

export type Subscription_RootPostsArgs = {
	distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Posts_Order_By>>;
	where?: InputMaybe<Posts_Bool_Exp>;
};

export type Subscription_RootPosts_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Posts_Order_By>>;
	where?: InputMaybe<Posts_Bool_Exp>;
};

export type Subscription_RootPosts_By_PkArgs = {
	id: Scalars["Int"];
};

export type Subscription_RootUsersArgs = {
	distinct_on?: InputMaybe<Array<Users_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Users_Order_By>>;
	where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Users_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Users_Order_By>>;
	where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_By_PkArgs = {
	id: Scalars["Int"];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
	_eq?: InputMaybe<Scalars["timestamptz"]>;
	_gt?: InputMaybe<Scalars["timestamptz"]>;
	_gte?: InputMaybe<Scalars["timestamptz"]>;
	_in?: InputMaybe<Array<Scalars["timestamptz"]>>;
	_is_null?: InputMaybe<Scalars["Boolean"]>;
	_lt?: InputMaybe<Scalars["timestamptz"]>;
	_lte?: InputMaybe<Scalars["timestamptz"]>;
	_neq?: InputMaybe<Scalars["timestamptz"]>;
	_nin?: InputMaybe<Array<Scalars["timestamptz"]>>;
};

/** columns and relationships of "users" */
export type Users = {
	__typename?: "users";
	age: Scalars["Int"];
	/** An array relationship */
	comments: Array<Comments>;
	/** An aggregate relationship */
	comments_aggregate: Comments_Aggregate;
	gender?: Maybe<Scalars["Boolean"]>;
	id: Scalars["Int"];
	/** An array relationship */
	posts: Array<Posts>;
	/** An aggregate relationship */
	posts_aggregate: Posts_Aggregate;
	username: Scalars["String"];
};

/** columns and relationships of "users" */
export type UsersCommentsArgs = {
	distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Comments_Order_By>>;
	where?: InputMaybe<Comments_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersComments_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Comments_Order_By>>;
	where?: InputMaybe<Comments_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersPostsArgs = {
	distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Posts_Order_By>>;
	where?: InputMaybe<Posts_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersPosts_AggregateArgs = {
	distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
	limit?: InputMaybe<Scalars["Int"]>;
	offset?: InputMaybe<Scalars["Int"]>;
	order_by?: InputMaybe<Array<Posts_Order_By>>;
	where?: InputMaybe<Posts_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
	__typename?: "users_aggregate";
	aggregate?: Maybe<Users_Aggregate_Fields>;
	nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
	__typename?: "users_aggregate_fields";
	avg?: Maybe<Users_Avg_Fields>;
	count: Scalars["Int"];
	max?: Maybe<Users_Max_Fields>;
	min?: Maybe<Users_Min_Fields>;
	stddev?: Maybe<Users_Stddev_Fields>;
	stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
	stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
	sum?: Maybe<Users_Sum_Fields>;
	var_pop?: Maybe<Users_Var_Pop_Fields>;
	var_samp?: Maybe<Users_Var_Samp_Fields>;
	variance?: Maybe<Users_Variance_Fields>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
	columns?: InputMaybe<Array<Users_Select_Column>>;
	distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
	__typename?: "users_avg_fields";
	age?: Maybe<Scalars["Float"]>;
	id?: Maybe<Scalars["Float"]>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
	_and?: InputMaybe<Array<Users_Bool_Exp>>;
	_not?: InputMaybe<Users_Bool_Exp>;
	_or?: InputMaybe<Array<Users_Bool_Exp>>;
	age?: InputMaybe<Int_Comparison_Exp>;
	comments?: InputMaybe<Comments_Bool_Exp>;
	gender?: InputMaybe<Boolean_Comparison_Exp>;
	id?: InputMaybe<Int_Comparison_Exp>;
	posts?: InputMaybe<Posts_Bool_Exp>;
	username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
	/** unique or primary key constraint on columns "id" */
	UsersPkey = "users_pkey",
	/** unique or primary key constraint on columns "username" */
	UsersUsernameKey = "users_username_key",
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
	age?: InputMaybe<Scalars["Int"]>;
	id?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
	age?: InputMaybe<Scalars["Int"]>;
	comments?: InputMaybe<Comments_Arr_Rel_Insert_Input>;
	gender?: InputMaybe<Scalars["Boolean"]>;
	id?: InputMaybe<Scalars["Int"]>;
	posts?: InputMaybe<Posts_Arr_Rel_Insert_Input>;
	username?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
	__typename?: "users_max_fields";
	age?: Maybe<Scalars["Int"]>;
	id?: Maybe<Scalars["Int"]>;
	username?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
	__typename?: "users_min_fields";
	age?: Maybe<Scalars["Int"]>;
	id?: Maybe<Scalars["Int"]>;
	username?: Maybe<Scalars["String"]>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
	__typename?: "users_mutation_response";
	/** number of rows affected by the mutation */
	affected_rows: Scalars["Int"];
	/** data from the rows affected by the mutation */
	returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
	data: Users_Insert_Input;
	/** upsert condition */
	on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
	constraint: Users_Constraint;
	update_columns?: Array<Users_Update_Column>;
	where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
	age?: InputMaybe<Order_By>;
	comments_aggregate?: InputMaybe<Comments_Aggregate_Order_By>;
	gender?: InputMaybe<Order_By>;
	id?: InputMaybe<Order_By>;
	posts_aggregate?: InputMaybe<Posts_Aggregate_Order_By>;
	username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
	id: Scalars["Int"];
};

/** select columns of table "users" */
export enum Users_Select_Column {
	/** column name */
	Age = "age",
	/** column name */
	Gender = "gender",
	/** column name */
	Id = "id",
	/** column name */
	Username = "username",
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
	age?: InputMaybe<Scalars["Int"]>;
	gender?: InputMaybe<Scalars["Boolean"]>;
	id?: InputMaybe<Scalars["Int"]>;
	username?: InputMaybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
	__typename?: "users_stddev_fields";
	age?: Maybe<Scalars["Float"]>;
	id?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
	__typename?: "users_stddev_pop_fields";
	age?: Maybe<Scalars["Float"]>;
	id?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
	__typename?: "users_stddev_samp_fields";
	age?: Maybe<Scalars["Float"]>;
	id?: Maybe<Scalars["Float"]>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
	__typename?: "users_sum_fields";
	age?: Maybe<Scalars["Int"]>;
	id?: Maybe<Scalars["Int"]>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
	/** column name */
	Age = "age",
	/** column name */
	Gender = "gender",
	/** column name */
	Id = "id",
	/** column name */
	Username = "username",
}

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
	__typename?: "users_var_pop_fields";
	age?: Maybe<Scalars["Float"]>;
	id?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
	__typename?: "users_var_samp_fields";
	age?: Maybe<Scalars["Float"]>;
	id?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
	__typename?: "users_variance_fields";
	age?: Maybe<Scalars["Float"]>;
	id?: Maybe<Scalars["Float"]>;
};

export type GetPostsQueryVariables = Exact<{ [key: string]: never }>;

export type GetPostsQuery = {
	__typename?: "query_root";
	posts: Array<{
		__typename?: "posts";
		id: number;
		title: string;
		content: string;
		created_at: any;
		user: { __typename?: "users"; id: number; username: string };
		comments: Array<{
			__typename?: "comments";
			id: number;
			user_id: number;
			content: string;
			created_at: any;
			user: { __typename?: "users"; id: number; username: string };
		}>;
	}>;
};

export const GetPostsDocument = `
    query GetPosts {
  posts {
    id
    title
    content
    created_at
    user {
      id
      username
    }
    comments(order_by: {created_at: desc}) {
      id
      user_id
      content
      created_at
      user {
        id
        username
      }
    }
  }
}
    `;
export const useGetPostsQuery = <TData = GetPostsQuery, TError = unknown>(
	client: GraphQLClient,
	variables?: GetPostsQueryVariables,
	options?: UseQueryOptions<GetPostsQuery, TError, TData>,
	headers?: RequestInit["headers"]
) =>
	useQuery<GetPostsQuery, TError, TData>(
		variables === undefined ? ["GetPosts"] : ["GetPosts", variables],
		fetcher<GetPostsQuery, GetPostsQueryVariables>(
			client,
			GetPostsDocument,
			variables,
			headers
		),
		options
	);
