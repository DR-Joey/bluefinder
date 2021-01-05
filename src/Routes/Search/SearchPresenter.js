import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import { useQuery } from "@apollo/client";
import { SEARCH } from "./SearchQueries";

const Container = styled.div`
  padding: 20px;
`;

const SearchPresenter = ({ searchTerm }) => {
  const code = searchTerm;
  const { data, loading, error } = useQuery(SEARCH, {
    variables: {
      code,
    },
  });
  console.log(searchTerm);

  console.log(data);
  console.log(loading);
  console.log(error);

  console.log("imhere");
  return (
    <Container>
      <Helmet>
        <title>Search | CodeFinder</title>
      </Helmet>
      You are loooking for {searchTerm}
    </Container>
  );
};

SearchPresenter.propTypes = {
  error: PropTypes.string,
  searchTerm: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default SearchPresenter;
