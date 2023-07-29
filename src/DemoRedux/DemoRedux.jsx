import React, { Component } from 'react';
import { connect } from 'react-redux';
class DemoRedux extends Component {
  render() {
    console.log(this.props);
    return <div>DemoRedux</div>;
  }
}
// nên đặt là mapStateToProps vì khi gặp lỗi có thể lợi dụng tên này để tìm các bài viết sửa lỗi nhanh hơn
const mapStateToProps = (state) => {
  return {
    // state ở đây đại diện cho reducer trên store của redux
    huhu: state.hoTen,
  };
};

// connect này có 2 tham số,
// mapStateToProps giúp lấy dữ liệu từ trên redux về
// mapDispatchToProps giúp gửi dữ liệu lên redux
export default connect(mapStateToProps)(DemoRedux);
