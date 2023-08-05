import React, { Component } from 'react';
import TableUser from './TableUser';

export default class DemoForm extends Component {
  state = {
    values: {
      id: '',
      name: '',
      sdt: '',
      email: '',
      diemToan: 0,
      diemLy: 0,
      diemHoa: 0,
    },
    errors: {
      id: '',
      name: '',
      sdt: '',
      email: '',
      diemToan: '',
      diemLy: '',
      diemHoa: '',
    },
    isSubmit: true,
  };

  handleSubmit = (event) => {
    // gọi preventDefault để ngăn chặn reload trang khi submit
    event.preventDefault();
    console.log('hello');
  };

  checkDinhDangSdt = (phone) => {
    const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    // console.log(regexPhoneNumber.test(phone));
    return regexPhoneNumber.test(phone) ? true : false;
  };

  checkDinhDangEmail = (email) => {
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return regexEmail.test(email) ? true : false;
  };

  // xử lí dữ liệu người dùng khi nhập vào
  handleChange = (event) => {
    // const value = event.target.value
    const { value, name } = event.target;
    // clone lại state để dữ lại các dữ liệu cũ
    const newValues = { ...this.state.values };
    // cập nhật dữ liệu mới
    newValues[name] = value;

    // nơi xử lí các lỗi từ người dùng
    const newErrors = { ...this.state.errors };
    // dùng newValues để kiểm tra xem input đã có dữ liệu hay chưa
    if (newValues[name] == '') {
      newErrors[name] = 'Vui lòng không để trống';
    } else {
      newErrors[name] = '';
    }

    if (newValues[name] !== '') {
      if (name == 'sdt' && !this.checkDinhDangSdt(newValues[name])) {
        // check xem sdt đúng hay sai
        newErrors.sdt = 'Định dạng sdt không đúng';
      } else {
        newErrors.sdt = '';
      }
      if (name == 'email' && !this.checkDinhDangEmail(newValues[name])) {
        newErrors.email = 'Định dạng email không đúng';
      } else {
        newErrors.email = '';
      }
    }

    // xử lí mở nút thêm học viên cho người dùng thêm vào
    // check dữ liệu đã có hết
    // check không còn một lỗi nào hết
    // sử dụng vòng lặp for..in để kiểm tra hết các thuộc tính trong values
    // tạo 1 biến để kiểm tra
    let isActive = true;
    let camCo = false;
    for (let key in newValues) {
      if (newValues[key] == '') {
        camCo = true;
      }
    }

    isActive = isActive && camCo;
    // console.log(isActive);

    // newErrors
    // for (let key in newErrors) {
    //   if (newErrors[key] == '') {
    //     isActive &= true;
    //   } else {
    //     isActive &= false;
    //   }
    // }

    // setState để cập nhật dữ liệu mới lên giao diện
    this.setState({
      values: newValues,
      errors: newErrors,
      isSubmit: isActive,
    });
    // kiểm tra xem dữ liệu có rỗng hay không oke
    // kiểm tra xem đúng định dạng sdt hay không
    // kiểm tra email đúng định dạng hay không
  };

  render() {
    console.log(this.state.values);
    return (
      // id,name,sdt,email,diemToan,diemLy,diemHoa
      // onClick ==> Dom tới và lấy dữ liệu
      <div>
        <h1>Bài tập về Form trong React</h1>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-6">
                <div className="mb-3">
                  <label className="form-label">Id</label>
                  <input
                    type="text"
                    className="form-control"
                    name="id"
                    aria-describedby="helpId"
                    placeholder
                    // onChange={(event) => {
                    //   // event.target
                    //   // console.log(event.target.value);
                    //   // cách 2
                    //   // this.setState({
                    //   //   values: {
                    //   //     ...this.state.values,
                    //   //     id: event.target.value,
                    //   //   },
                    //   // });
                    //   // cách 1
                    //   // let newValues = { ...this.state.values };
                    //   // newValues.id = event.target.value;
                    //   // this.setState({
                    //   //   values: newValues,
                    //   // });
                    // }}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger mt-2">{this.state.errors.id}</p>
                </div>
              </div>
              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    aria-describedby="helpId"
                    placeholder
                    // onChange={(event) => {
                    //   // event.target
                    //   // console.log(event.target.value);

                    //   this.setState({
                    //     values: {
                    //       ...this.state.values,
                    //       name: event.target.value,
                    //     },
                    //   });
                    // }}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger mt-2">{this.state.errors.name}</p>
                </div>
              </div>
              <div className="col-12">
                <div className="mb-3">
                  <label htmlFor className="form-label">
                    Số điện thoại
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="sdt"
                    aria-describedby="helpId"
                    placeholder
                    onChange={this.handleChange}
                  />
                  <p className="text-danger mt-2">{this.state.errors.sdt}</p>
                </div>
              </div>
              <div className="col-12">
                <div className="mb-3">
                  <label htmlFor className="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    aria-describedby="helpId"
                    placeholder
                    onChange={this.handleChange}
                  />
                  <p className="text-danger mt-2">{this.state.errors.email}</p>
                </div>
              </div>
              <div className="col-4">
                <div className="mb-3">
                  <label htmlFor className="form-label">
                    Điểm toán
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="diemToan"
                    aria-describedby="helpId"
                    placeholder
                    onChange={this.handleChange}
                  />
                  <p className="text-danger mt-2">
                    {this.state.errors.diemToan}
                  </p>
                </div>
              </div>
              <div className="col-4">
                <div className="mb-3">
                  <label htmlFor className="form-label">
                    Điểm lý
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="diemLy"
                    aria-describedby="helpId"
                    placeholder
                    onChange={this.handleChange}
                  />
                  <p className="text-danger mt-2">{this.state.errors.diemLy}</p>
                </div>
              </div>
              <div className="col-4">
                <div className="mb-3">
                  <label htmlFor className="form-label">
                    Điểm hoá
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="diemHoa"
                    aria-describedby="helpId"
                    placeholder
                    onChange={this.handleChange}
                  />
                  <p className="text-danger mt-2">
                    {this.state.errors.diemHoa}
                  </p>
                </div>
              </div>
              <div className="text-center">
                <button
                  disabled={this.state.isSubmit}
                  type="submit"
                  className="btn btn-success me-3"
                >
                  Thêm học viên
                </button>
                <button type="button" className="btn btn-warning">
                  Cập nhật
                </button>
              </div>
            </div>
          </form>
        </div>
        <TableUser />
      </div>
    );
  }
}
