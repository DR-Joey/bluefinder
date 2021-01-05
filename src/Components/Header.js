import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { FaSearchengin } from "react-icons/fa";
import Search from "./Search";

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const Item = styled.div`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom: 3px solid
    ${(props) => (props.current ? "#3498db" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 27px;
  letter-spacing: -1px;
  margin-bottom: 5px;
  margin-left: 3px;
  margin-right: 15px;
`;

//Header - Left
const Left = styled.div`
  display: flex;
`;
//Header - Center
const Center = styled.div`
  display: flex;
  width: 300px;
`;

//Header - Right
const Right = styled.div`
  display: flex;
  justify-content: space-around;
  width: 300px;
`;
//Header - Left,Center,Right
const Nav = styled.div`
  height: 55px;
  background-color: #202020;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <Nav>
      <Left>
        <SLink to="/">
          <LogoContainer>
            <FaSearchengin />
            <Logo>CodeFinder</Logo>
          </LogoContainer>
        </SLink>
      </Left>
      <Center>
        <Search />
      </Center>
      <Right>
        <Item current={pathname === "/"}>
          <SLink to="/">Home</SLink>
        </Item>
        <Item current={pathname.substr(0, 7) === "/search"}>
          <SLink to="/search">Search</SLink>
        </Item>
        <Item current={pathname === "/controller"}>
          <SLink to="/controller">Controller</SLink>
        </Item>
        <Item current={pathname === "/vehicle"}>
          <SLink to="/vehicle">Vehicle</SLink>
        </Item>
      </Right>
    </Nav>
  </Header>
));
