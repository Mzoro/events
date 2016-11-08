import React from 'react';
import { Link } from 'react-router'

class Event extends React.Component {
  render() {
    const { event } = this.props;
    const show_path = `/events/${event.id}`;
    return (
        <div>
          {event.name}
          <Link to={show_path}><button>Show full view</button></Link>
        </div>  
    )
  }
}

export default Event;
