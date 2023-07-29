import React, { Component } from 'react';

export default class DetailDienThoai extends Component {
  render() {
    // props để gọi ra các giá trị được truyền
    console.log(this.props);
    const {
      hinhAnh,
      tenSP,
      manHinh,
      heDieuHanh,
      cameraTruoc,
      cameraSau,
      ram,
      rom,
    } = this.props.phone;
    return (
      <div className="row">
        <div className="col-4">
          <img className="w-100" src={hinhAnh} alt="" />
        </div>
        <div className="col-8">
          <table className="table">
            <thead>
              <tr>
                <th>Thông số kỹ thuật</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Màn hình</td>
                <td>{manHinh}</td>
              </tr>
              <tr>
                <td>Hệ điều hành</td>
                <td>{heDieuHanh}</td>
              </tr>
              <tr>
                <td>Camera trước</td>
                <td>{cameraTruoc}</td>
              </tr>
              <tr>
                <td>Camera sau</td>
                <td>{cameraSau}</td>
              </tr>
              <tr>
                <td>Ram</td>
                <td>{ram}</td>
              </tr>
              <tr>
                <td>Rom</td>
                <td>{rom}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
