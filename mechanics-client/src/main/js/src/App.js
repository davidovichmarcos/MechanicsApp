import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Content } from "rsuite";

import HomePage from "./components/Pages/HomePage";
import LoginPage from "./components/Pages/LoginPage";
import CarPage from "./components/Pages/CarPage";
import ClientPage from "./components/Pages/ClientPage";
import RepairPage from "./components/Pages/RepairPage";
import Page404 from "./components/Pages/Page404";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "rsuite/dist/styles/rsuite.min.css";
import "./App.css";
//import "custom-theme.less";

const Style = styled.div``;

export default function App() {
  return (
    <Router>
      <Container>
        <Style>
          <Header />
          <Content>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/clients" component={ClientPage} />
              <Route exact path="/cars" component={CarPage} />
              <Route exact path="/repair" component={RepairPage} />
              <Route component={Page404} />
            </Switch>
          </Content>
          <Footer />
        </Style>
      </Container>
    </Router>
  );
}
