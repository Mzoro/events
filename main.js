import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store/configureStore';

import App from './components/App';
import FullEvent from './components/FullEvent';
import ListOfEvents from './components/ListOfEvents';

render((
  <Provider store={store}>
    <Router history = {history}>
      <Route path="/" component={App}>
        <IndexRoute component={ListOfEvents}/>
        <Route path="/events/:eventId" component={FullEvent}/>
      </Route>  
    </Router>  
  </Provider>  
), document.getElementById('app'));
