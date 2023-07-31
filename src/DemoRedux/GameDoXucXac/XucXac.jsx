import React, { Component } from 'react';
import { connect } from 'react-redux';
class XucXac extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="row">
        <div className="col-3">
          <button
            onClick={() => {
              this.props.setLuaChon(true);
            }}
            className="btn btn-success"
          >
            Tài
          </button>
        </div>
        <div className="col-6">
          <img src={`./gameXucXac/${this.props.xucXac.xucXac1}.png`} alt="" />
          <img src={`./gameXucXac/${this.props.xucXac.xucXac2}.png`} alt="" />
          <img src={`./gameXucXac/${this.props.xucXac.xucXac3}.png`} alt="" />
        </div>
        <div className="col-3">
          <button
            onClick={() => {
              this.props.setLuaChon(false);
            }}
            className="btn btn-danger"
          >
            Xỉu
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    xucXac: state.xucXacReducer,
  };
};

export default connect(mapStateToProps)(XucXac);
