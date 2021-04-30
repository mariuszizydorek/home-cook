import React from "react";
import { createBrowserHistory } from "history";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
import { HomePage } from "./home/home";
import SignUp from "../components/user/SignUp";
import Login from "../components/user/Login";
import HeaderTop from "../components/HeaderTop.tsx";

const Container = styled.div`
  height: 100%;
  flex: 1;
`;

export const history = createBrowserHistory();

export default function Routes() {
  return (
    <Router history={history}>
      {
        <Container>
          <HeaderTop />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={SignUp} />
          </Switch>
        </Container>
      }
    </Router>
  );
}

/*
export default connect((state) => ({
  loaded: true,
  fatalError: state.app.fatalError ? state.app.fatalError : false,
  theme: state.app.theme,
}))(Routes);
*/

/*Routes.propTypes = {
  loaded: PropTypes.bool,
  fatalError: PropTypes.bool,
  theme: PropTypes.object,
};*/