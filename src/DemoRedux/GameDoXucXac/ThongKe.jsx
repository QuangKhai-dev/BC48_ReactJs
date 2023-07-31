import React, { Component } from 'react';
import { connect } from 'react-redux';
class ThongKe extends Component {
  render() {
    return (
      <div className="text-center">
        <p>
          bạn chọn:{' '}
          <span className="text-danger">
            {this.props.luaChon ? 'Tài' : 'Xỉu'}
          </span>
        </p>
        <p>
          Số bàn thắng:{' '}
          <span className="text-success">{this.props.soBanThang}</span>
        </p>
        <p>
          Tổng số bàn chơi:{' '}
          <span className="primary">{this.props.tongSoBanChoi}</span>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    soBanThang: state.xucXacReducer.soBanThang,
    tongSoBanChoi: state.xucXacReducer.tongSoBanChoi,
  };
};

export default connect(mapStateToProps)(ThongKe);
