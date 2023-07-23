import React, { Component } from 'react';

export default class HandleOnChange extends Component {
  render() {
    return (
      <div>
        <h1>Demo OnChange</h1>
        <p id="renderTen"></p>
        <input
          type="text"
          id="txtHoTen"
          onChange={(event) => {
            const { id, value } = event.target;
            console.log(value);
            document.getElementById('renderTen').innerHTML = value;
          }}
        />
      </div>
    );
  }
}
