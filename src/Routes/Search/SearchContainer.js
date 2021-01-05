import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchPresenter from "./SearchPresenter";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
const cache = new InMemoryCache();
const link = createHttpLink({
  uri: "http://localhost:4000/",
});
const client = new ApolloClient({
  // Provide required constructor fields
  cache: cache,
  link: link,

  // Provide some optional constructor fields
  name: "react-web-client",
  version: "1.3",
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network",
    },
  },
});

const SearchContainer = () => {
  //states

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  //uri param
  const { term } = useParams();

  return (
    <ApolloProvider client={client}>
      <SearchPresenter searchTerm={term} error={error} loading={loading} />
    </ApolloProvider>
  );
};

export default SearchContainer;
