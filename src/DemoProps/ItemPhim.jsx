import React, { Component } from 'react';

export default class ItemPhim extends Component {
  // ở đây ItemPhim vừa được component cha của nó là ListPhim gửi xuống 2 props là phim và hoTen

  render() {
    console.log(this.props);
    return (
      <div className="col-3">
        <img src={this.props.phim.hinhAnh} alt="" />
        <h2>{this.props.phim.tenPhim}</h2>
        <button className="btn btn-success">Xem chi tiết</button>
      </div>
    );
  }
}
