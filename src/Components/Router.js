import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Header from "Components/Header";
import Home from "Routes/Home";
import Search from "Routes/Search";
import Controller from "Routes/Controller";
import Vehicle from "Routes/Vehicle";
import styled from "styled-components";
const Container = styled.div`
  padding-top: 55px;
`;
export default () => (
  <Router>
    <Container>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/controller" component={Controller} />
        <Route path="/search/:term" component={Search} />
        <Route path="/vehicle" component={Vehicle} />
        <Redirect from="*" to="/" />
      </Switch>
    </Container>
  </Router>
);
