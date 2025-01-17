import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.example.com/graphql", // Replace with your actual GraphQL endpoint
  cache: new InMemoryCache(),
});

export default client;
