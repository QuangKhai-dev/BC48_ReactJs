import React, { Component } from 'react';
import XucXac from './XucXac';
import ThongKe from './ThongKe';
import './gameXucXac.css';
import { connect } from 'react-redux';
class GameDoXucXac extends Component {
  // state này sẽ lưu lại lựa chọn của người dùng
  state = {
    luaChon: true,
  };

  setLuaChon = (luaChon) => {
    this.setState({
      luaChon,
    });
  };

  render() {
    console.log('GameDoXucXac', this.props);
    return (
      <div className="bg-gameXucXac">
        <div className="container">
          <h1 className="text-center fs-1">Game đổ xúc xắc</h1>
          <XucXac setLuaChon={this.setLuaChon} />
          <ThongKe luaChon={this.state.luaChon} />
          <button
            onClick={() => {
              this.props.lacXucXac(this.state.luaChon);
            }}
            className="btn btn-success"
          >
            Play game
          </button>
        </div>
      </div>
    );
  }
}

const randomXucXac = () => {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  // console.log(randomNumber);
  return randomNumber;
};

randomXucXac();

// đây là hàm giúp tạo các xử lí đẩy dữ liệu lên redux
const mapDispatchToProps = (dispatch) => {
  return {
    // trả về những hàm hỗ trợ gửi dữ liệu lên redux
    lacXucXac: (luaChon) => {
      // giúp random một con xí ngầu bất kì cho 3 xúc xắc
      const action = {
        type: 'LACXUCXAC',
        payload: {
          xucXac1: randomXucXac(),
          xucXac2: randomXucXac(),
          xucXac3: randomXucXac(),
          luaChon,
        },
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(GameDoXucXac);
