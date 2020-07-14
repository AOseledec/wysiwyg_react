import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import { PostsStoreProvider } from './posts-store-service-context';
import { postsStoreService } from './services/posts-store';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <PostsStoreProvider value={postsStoreService}>
        <Router>
          <App />
        </Router>
      </PostsStoreProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')); 