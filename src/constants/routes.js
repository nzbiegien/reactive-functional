import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import App from "core/app";
import Mouse from "core/mouse";

const Browser = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">App</Link>
        </li>
        <li>
          <Link to="/mouse">Mouse</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={App} />
      <Route path="/mouse" component={Mouse} />

    </div>
  </Router>
);

export default Browser;
