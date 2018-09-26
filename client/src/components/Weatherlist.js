import React, { Component } from 'react';

const SingleListItem = (props) => {
    const weatherId = 200;
    const iconClass = getIconClassName(weatherId);
  
    return (
      <div className="single-list-item">
        <div className="li-info-container">
          <div className="li-day">
            {props.day}
          </div>
          <div className="li-temp-text">24&#x00B0;</div>
          <div className="li-desc">Sky is clear</div>
        </div>
        <div className="li-weather-icon">
          <i className={`wi wi-owm-${weatherId} ${iconClass}`}></i>
        </div>
      </div>
    );
  }

class ListComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']
      };
    }
    render() {
      const items = this.state.data.map(day => (<SingleListItem key={day} day={day} />))
      return (
        <div className="list-container">
          {items}
        </div>
      );
    }
  }
  
  export default ListComponent;