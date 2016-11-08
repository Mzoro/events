import React from 'react';
import { Link } from 'react-router';
import request from 'superagent';

import config from '../superagent-mock-config.js';
import mock from 'superagent-mock';

const logger = (log) => {
  console.log('superagent call', log);
};
const superagentMock = mock(request, config, logger);

class Wrapper extends React.Component{
  render() {
    const { events, event } = this.props
    const { loadEvents, loadEvent } = this.props.eventActions
    return (
      <div>
        <h1>
          <Link to="/">EVENTS</Link>
        </h1>
        { React.cloneElement(this.props.children, {
          events     : events, 
          event      : event, 
          loadEvents : loadEvents, 
          loadEvent  : loadEvent})
        }
      </div>
    );
  }
}

export default Wrapper;