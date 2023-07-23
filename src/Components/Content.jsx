import React, { Component } from 'react';

export default class Content extends Component {
  hoTen = 'Quốc Cường Đô La';

  styleDiv = 'bg-dark py-5 text-white';

  sinhVien = {
    mssv: 'FE45',
    tenSinhVien: 'Quỳnh Giao',
    tuoi: 24,
  };

  // hienThiTen = () => {
  //   document.querySelector('.bg-dark').innerHTML = this.hoTen;
  // };

  // Cơ chế binding dữ liệu
  // binding dữ liệu giúp truyền động các giá trị vào bên trong layout jsx
  // lồng dữ liệu biến vào layout

  // nếu như thuộc tính họ tên mà có giá trị Quốc Cường thì bg-dark sẽ là bg warning
  // binding phương thức vào layout

  hienThiLoiNhac = () => {
    // lưu ý khi viết phương thức binding dữ liệu
    // yêu cầu các phương thức này phải trả về jsx, string, number,
    // lưu ý đối với array có thể trả về string hoặc number array hoặc jsx array
    // return <p>Xin chào bc48</p>;
    return [<p>Xin chào</p>, <div>Hello</div>];
  };

  render() {
    return (
      <div
        className={
          this.hoTen == 'Quốc Cường'
            ? 'bg-warning py-5 text-white'
            : this.hoTen == 'Mỹ Linh'
            ? 'bg-danger py-5 text-white'
            : this.styleDiv
        }
      >
        {this.hoTen}
        {this.hienThiLoiNhac()}
        {this.sinhVien.tenSinhVien}
      </div>
    );
  }
}
