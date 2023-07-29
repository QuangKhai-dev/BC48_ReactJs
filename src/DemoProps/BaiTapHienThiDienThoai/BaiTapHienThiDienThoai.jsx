import React, { Component } from 'react';
import DetailDienThoai from './DetailDienThoai';

export default class BaiTapHienThiDienThoai extends Component {
  arrPhone = [
    {
      maSP: 1,
      tenSP: 'VinSmart Live',
      manHinh: 'AMOLED, 6.2, Full HD+',
      heDieuHanh: 'Android 9.0 (Pie)',
      cameraTruoc: '20 MP',
      cameraSau: 'Chính 48 MP & Phụ 8 MP, 5 MP',
      ram: '4 GB',
      rom: '64 GB',
      giaBan: 5700000,
      hinhAnh: './img/vsphone.jpg',
    },
    {
      maSP: 2,
      tenSP: 'Meizu 16Xs',
      manHinh: 'AMOLED, FHD+ 2232 x 1080 pixels',
      heDieuHanh: 'Android 9.0 (Pie); Flyme',
      cameraTruoc: '20 MP',
      cameraSau: 'Chính 48 MP & Phụ 8 MP, 5 MP',
      ram: '4 GB',
      rom: '64 GB',
      giaBan: 7600000,
      hinhAnh: './img/meizuphone.jpg',
    },
    {
      maSP: 3,
      tenSP: 'Iphone XS Max',
      manHinh: 'OLED, 6.5, 1242 x 2688 Pixels',
      heDieuHanh: 'iOS 12',
      cameraSau: 'Chính 12 MP & Phụ 12 MP',
      cameraTruoc: '7 MP',
      ram: '4 GB',
      rom: '64 GB',
      giaBan: 27000000,
      hinhAnh: './img/applephone.jpg',
    },
  ];

  state = {
    phone: {},
  };

  renderArrPhone = () => {
    return this.arrPhone.map((item, index) => {
      const { hinhAnh, tenSP, giaBan } = item;
      return (
        <div className="col-4" key={index}>
          <div class="card text-start">
            <img class="card-img-top" src={hinhAnh} alt="Title" />
            <div class="card-body">
              <h4 class="card-title">{tenSP}</h4>
              <p class="card-text">{giaBan}</p>
              <button
                onClick={() => {
                  this.setState({
                    phone: item,
                  });
                }}
                className="btn btn-success"
              >
                Xem chi tiết
              </button>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    console.log(this.state.phone);
    return (
      <div className="container">
        <div className="row">
          {/* // item dien thoai  */}
          {this.renderArrPhone()}
        </div>
        <DetailDienThoai phone={this.state.phone} />
      </div>
    );
  }
}
