import React, { Component } from 'react';

export default class HandleOnClick extends Component {
  canhBaoDangNhap = () => {
    alert('bạn đã đăng nhập');
  };

  hienThiLoiChao = () => {
    console.log('Hello Quách Khải');
  };

  nguoiNaoDangNhap = (tenDangNhap) => {
    alert(`Bạn ${tenDangNhap} đã đăng nhập`);
  };

  render() {
    return (
      <div>
        <h1>Demo OnClick React</h1>
        <button
          // onClick={() => {
          //   this.canhBaoDangNhap();
          //   this.hienThiLoiChao();
          // }}

          // khi sử dụng hàm cần truyền tham số sẽ lấy một arrow function ẩn danh bọc lại để tránh hàm chạy khi vừa load trang
          onClick={() => {
            this.nguoiNaoDangNhap('Long');
          }}
        >
          Bấm nào
        </button>
      </div>
    );
  }
}
