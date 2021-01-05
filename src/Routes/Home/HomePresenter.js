import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";

const Container = styled.div`
  padding: 20px;
`;

const HomePresenter = ({ loading, error }) => (
  <>
    <Helmet>
      <title>BlueFinder | XCient</title>
    </Helmet>
  </>
);

HomePresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default HomePresenter;
