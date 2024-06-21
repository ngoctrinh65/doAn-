import React, { Component } from 'react';

class CurrentDateTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date()
    };
  }

  componentDidMount() {
    // Cập nhật thời gian mỗi giây
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      currentDate: new Date()
    });
  }

  render() {
    return <div>{this.state.currentDate.toLocaleString()}</div>;
  }
}

export default CurrentDateTime;
