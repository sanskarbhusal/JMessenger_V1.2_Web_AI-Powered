import React from "react";
import Login from "../Login";
import Register from "../Register";
import EmailVerification from "../EmailVerification";
import Chat from "../Chat";

import { BrowserRouter as Router, Route } from "react-router-dom";
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="h-full w-full flex flex-col justify-center items-left sm:items-center bg-custom-blue/2">
          {/* <h1>&#128679;Under construction</h1> <div className="mt-2"></div>*/}

          <div className="min-h-10 w-1"></div>

          <Route exact path="/" component={Login} />
          <Route path="/otp" component={EmailVerification} />
          <Route path="/register" component={Register} />
          <Route path="/chat" component={Chat} />
        </div>
      </Router>
    );
  }
}
