import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import CreatePost from "./pages/CreatePost";
import Posts from "./pages/Posts";
import Layout from "./pages/Layout";
import Login from "./pages/Login";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Posts}></IndexRoute>
      <Route path="createPost" component={CreatePost}></Route>
      <Route path="login" component={Login}></Route>
    </Route>
  </Router>,
app);
