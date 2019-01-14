import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../containers/Home';
import Category from '../containers/Category';
import PostDetail from '../containers/PostDetail';

import Footer from '../components/Footer';
import Header from '../components/Header';

const AppRouter = () => (
  <Router>
    <div className="main">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/categories/:id" exact component={Category} />
        <Route path="/posts/:id" exact component={PostDetail} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default AppRouter;
