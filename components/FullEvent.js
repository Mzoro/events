import React from 'react';
import { Link } from 'react-router'
import request from 'superagent';

export default class FullEvent extends React.Component {

  componentDidMount() {
    request
    .get(`http://api.itboost.org:88/app_dev.php/api/community.get?community_id=${this.props.params.eventId}`)
    .end( (err, res) => {
      this.props.loadEvent(res[0])
    });
  }

  render(){
    const { event } = this.props;
    return (
      <div>
        {Object.keys(event).map((key) => <div key={key}>{key + " : " + event[key]}</div>)}
      </div>
    )
  }
}

