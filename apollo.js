import {
    ApolloClient,
    InMemoryCache,
  } from "@apollo/client";

const apollo = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_WEB_API_URL+'/graphql',
    cache: new InMemoryCache()
});

export default apollo;