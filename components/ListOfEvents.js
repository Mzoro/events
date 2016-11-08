import React from 'react';
import request from 'superagent';
import Event from './Event';

class ListOfEvents extends React.Component {
  componentDidMount() {
    request
    .get('http://api.itboost.org:88/app_dev.php/api/community.getAll')
    .end( (err, res) => {
      this.props.loadEvents(res)
    });
  }
  render() {
    const events = this.props.events
    return (
      <div>
        {events.map((event,i) => <Event key={i} event={event} />)}
      </div>
    )
  }
}

export default ListOfEvents;

