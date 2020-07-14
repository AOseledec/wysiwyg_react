import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { AddPost, Post, Main } from '../pages';
import PostHeader from '../post-header';

import './app.css';

const App = () => {

  return (
    <main role='main' className="container-fluid">
      <PostHeader />
      <Switch>     
        <Route path='/wysiwyg_react/' component={Main} exact></Route>
        <Route path='/add-post/' component={AddPost}></Route>
        <Route path='/post/:id' component={Post}></Route>
        
        <Route render={() => <h2>Page not found</h2>} />
      </Switch>
    </main>
  );
};

export default App;
