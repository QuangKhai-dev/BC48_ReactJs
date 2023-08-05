import React, { Component } from 'react';

export default class TableUser extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div class="table-responsive">
          <table
            class="table table-striped
        table-hover	
        table-borderless
        table-primary
        align-middle"
          >
            <thead class="table-light">
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Số điện thoại</th>
                <th>Email</th>
                <th>Điểm trung bình</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
              <tr class="table-primary">
                <td>1</td>
                <td>Tiến</td>
                <td>0909666666</td>
                <td>tien@gmail.com</td>
                <td>8</td>
                <td>
                  <button className="btn btn-danger me-3">Xoá</button>
                  <button className="btn btn-dark">Sửa</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
