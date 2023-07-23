import React, { Component } from 'react';
// import './demoCss.css';
import style from './demoCss.module.css';
export default class DemoCss extends Component {
  render() {
    return (
      // <div
      //   style={{
      //     backgroundColor: 'red',
      //     height: '500px',
      //   }}
      // >
      //   DemoCss
      //   <p style={{ backgroundColor: 'yellow', color: 'red', height: '300px' }}>
      //     Tui muốn màu vàng chữ đỏ và chiều cao 300px
      //   </p>
      // </div>

      // tạo ra một id đặc trưng cho component này và các css viết sẽ được lồng vào bên trong id của thẻ cha chứa nó để tránh việc css của mình ảnh hưởng tới các component khác

      <div id="DemoCss">
        <p id={style.demo}>Demo dùng file css trong component</p>
        <button className={style.styleButton}>Bấm</button>
      </div>
    );
  }
}
