import React from 'react';

export default class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={() => alert(`click on ${this.props.value}`) }>
        { this.props.value }
      </button>
    );
  }
}
