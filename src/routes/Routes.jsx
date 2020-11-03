import { getCookie } from "helpers/utils";
import Login from "pages/Auth/Login/Login";
import Dashboard from "pages/Dashboard/Dashboard";
import Inbox from "pages/Inbox/Inbox";
import Player from "pages/Player/Player";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Container,
  Content,
  Dropdown,
  Footer,
  Header,
  Icon,
  Nav,
  Navbar,
  Sidebar,
} from "rsuite";
import Navigation from "./Navigation";
import PageFooter from "./PageFooter";
import PageHeader from "./PageHeader";
export default function Routes(props) {
  const token = getCookie("ACCESS_TOKEN");

  return (
    <Router>
      {token ? (
        <Container>
          <Navigation />

          <Container style={{ padding: 24 }}>
            <Header>
              <PageHeader />
            </Header>
            <Content>
              <Switch>
                <Route path="/player">
                  <Player />
                </Route>
                <Route path="/inbox">
                  <Inbox />
                </Route>
                <Route path="/dashboard">
                  <Dashboard />
                </Route>
                <Route path="/">
                  <Dashboard />
                </Route>
              </Switch>
            </Content>
            <Footer>
              <PageFooter />
            </Footer>
          </Container>
        </Container>
      ) : (
        <Route path="/login">
          <Login />
        </Route>
      )}
    </Router>
  );
}
