import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

//Styles
const Form = styled.form`
  display: flex;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  height: 30px;
  color: white;
  border: solid 1px #303030;
  border-radius: 2px;
  background-color: #121212;
  padding: 5px;
`;

const SearchBox = styled.button`
  width: 50px;
  background-color: #303030;
  border: none;
  border-radius: 2px;
  padding: 5px;
  margin-left: 3px;
`;

//Logic

const Search = () => {
  //Hooks
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState("");

  //hadle from
  const updateTerm = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm !== "") {
      history.push(`/search/${searchTerm}`);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="type DTC Code..."
        value={searchTerm}
        onChange={updateTerm}
      />
      <SearchBox type="submit">
        <FaSearch />
      </SearchBox>
    </Form>
  );
};

export default Search;
