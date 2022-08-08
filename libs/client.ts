import { GraphQLClient } from "graphql-request";
import { QueryClient } from "@tanstack/react-query";
import { GRAPHQL_ENDPOINT } from "@/libs//constants";

export const client = new GraphQLClient(GRAPHQL_ENDPOINT);

export const queryClient = new QueryClient();
