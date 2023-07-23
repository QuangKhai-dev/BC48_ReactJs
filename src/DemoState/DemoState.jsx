import React, { Component } from 'react';

export default class DemoState extends Component {
  hoTen = 'Cường';

  // thuộc tính giúp quản lí các dữ liệu thay đổi trong component tên là state
  state = {
    hoTen: '',
    login: false,
  };

  thayDoiNoiDung = (event) => {
    const { value, id } = event.target;
    // document.querySelector('.renderTen').innerHTML = value;
    //abc
    // this.state.hoTen = value;
    // console.log(this.hoTen);

    // phương thức setState giúp cập nhập dữ liệu mới cho state và render lại giao diện
    this.setState({
      hoTen: value,
    });
  };

  renderTenNguoiDung = () => {
    document.querySelector('.renderTen').innerHTML = 'Gia Bảo';
  };

  render() {
    // this.renderTenNguoiDung();
    console.log('render');
    console.log(this.state.hoTen);
    return (
      <div>
        <h1>Demo về state và setState trong react</h1>
        <p className="renderTen">{this.state.hoTen}</p>
        <div className="mb-3">
          <label className="form-label">Họ tên</label>
          <input
            type="text"
            onChange={this.thayDoiNoiDung}
            className="form-control"
            aria-describedby="helpId"
          />
        </div>

        <h2>Demo sử dụng state để đăng nhập và có tài khoản</h2>
        {/* // viết 1 toán tử 3 ngôi check nếu như giá trị login là false sẽ hiển thị nút button đăng nhập, còn nếu là true thì sẽ hiển thị một dòng chữ xin chào Quách Khải  */}
        {!this.state.login ? (
          <button
            onClick={() => {
              this.setState({
                login: true,
              });
            }}
          >
            Bấm vào để đăng nhập
          </button>
        ) : (
          <p>Xin chào Quách Khải</p>
        )}
      </div>
    );
  }
}
