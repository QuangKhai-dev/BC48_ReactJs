import React, { Component } from 'react';

export default class DetailGiay extends Component {
  render() {
    console.log(this.props.detailGiay);
    const { image, name, price, shortDescription } = this.props.detailGiay;
    return (
      <div>
        <h2>Thông tin chi tiết giày</h2>
        <img src={image} alt="" />
        <h2>{name}</h2>
        <p>{shortDescription}</p>
        <p>{price}$</p>
      </div>
    );
  }
}
