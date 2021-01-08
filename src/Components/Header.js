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
  z-index: 1;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;
const Routes = styled.header`
  color: white;
  position: fixed;
  top: 50;
  left: 0;
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const Item = styled.div`
  width: 60px;
  font-size: 12px;
  height: 40px;
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
  padding: 10px;
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
  flex: 1 1;
`;
//Header - Center
const Center = styled.div`
  display: flex;
  flex: 1 1;
`;

//Header - Right
const Right = styled.div`
  display: flex;
  justify-content: space-around;
  flex-grow: 1;
`;
//Header - Left,Center,Right
const Nav = styled.div`
  height: 55px;
  background-color: #202020;
  display: flex;

  align-items: center;
  color: white;
`;

export default withRouter(({ location: { pathname } }) => (
  <>
    <Header>
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
    </Header>
    <Routes>
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
    </Routes>
  </>
));
