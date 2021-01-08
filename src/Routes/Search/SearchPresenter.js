import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import { useQuery } from "@apollo/client";
import { SEARCH } from "./SearchQueries";

const Container = styled.div`
  padding: 10px;
  padding-top: 50px;
`;

const Table = styled.div`
  display: flex;
  flex-flow: column nowrap;
  font-size: 0.8rem;
  margin: 0.5rem;
  line-height: 1.5;
  border-bottom: 1px solid #d0d0d0;
  flex: 1 1 auto;
`;

const Th = styled.div`
  display: flex;
`;

const Tr = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  &: nth-of-type(even) {
    background-color: #262626;
  }
  &: nth-of-type(odd) {
    background-color: #404040;
    font-weight: bolder;
    color: #cccccc;
  }
`;

const Td = styled.div`
  display: flex;
  flex-flow: row nowrap;
  flex-grow: ${(props) => props.grow || 1};
  flex-basis: 0;
  padding: 0.5em;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0px;
  white-space: nowrap;
  border-bottom: 1px solid #d0d0d0;
`;

const SearchPresenter = ({ searchTerm }) => {
  const code = searchTerm;
  const { data, loading, error } = useQuery(SEARCH, {
    variables: {
      code,
    },
  });
  console.log(data);
  return !data ? (
    <>
      <Container>
        <Td>❌ There is no result : {searchTerm}</Td>

        <Td>❌ There is no result : {code}</Td>
      </Container>
    </>
  ) : (
    <>
      <Container>
        <Helmet>
          <title>Search | CodeFinder</title>
        </Helmet>
        ✅ You are loooking for CODE : {searchTerm}
        <Table>
          <Tr>
            <Td>Code</Td>
            <Td>Controller</Td>
            <Td grow={3}>Description</Td>
          </Tr>
          <Tr>
            <Td>{data.codeByCode.code}</Td>
            <Td>{data.codeByCode.controller}</Td>
            <Td grow={3}>{data.codeByCode.description}</Td>
          </Tr>
          <Tr>
            <Td>Condition</Td>
            <Td>ResetCondition</Td>
            <Td>Message(Kor)</Td>
            <Td>Message(Eng)</Td>
          </Tr>
          <Tr>
            <Td>{data.codeByCode.condition}</Td>
            <Td>{data.codeByCode.resetcondition}</Td>
            <Td>{data.codeByCode.msgkor}</Td>
            <Td>{data.codeByCode.msgeng}</Td>
          </Tr>
        </Table>
      </Container>
    </>
  );
};

SearchPresenter.propTypes = {
  error: PropTypes.string,
  data: PropTypes.string,
  searchTerm: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default SearchPresenter;
