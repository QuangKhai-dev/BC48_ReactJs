import React, { Component } from 'react';

export default class BaiTapChonXe extends Component {
  // 3 bước bắt đầu xây dựng 1 component
  // dàn layout cho trang
  // xác định các dữ liệu sẽ thay đổi để dùng state chứa và hiển thị
  // bắt đầu phân tích và xử lí các logic

  arrInfoButton = [
    {
      title: 'Crystal Black',
      subTitle: 'Pearl',
      img: './img/icon-black.jpg',
      linkImg: './img/black-car.jpg',
    },
    {
      title: 'Morden Steel',
      subTitle: 'Pearl',
      img: './img/icon-steel.jpg',
      linkImg: './img/steel-car.jpg',
    },
    {
      title: 'Lunar Silver',
      subTitle: 'Pearl',
      img: './img/icon-silver.jpg',
      linkImg: './img/silver-car.jpg',
    },
    {
      title: 'Rally Read',
      subTitle: 'Pearl',
      img: './img/icon-red.jpg',
      linkImg: './img/red-car.jpg',
    },
  ];

  state = {
    linkImg: './img/black-car.jpg',
  };

  render() {
    return (
      <div>
        <h1>Bài tập chọn xe</h1>
        <div className="row">
          <div className="col-8">
            <img className="w-100" src={this.state.linkImg} alt="" />
          </div>
          <div className="col-4">
            {/* // item  */}
            {this.arrInfoButton.map((item, index) => {
              // khi sử dụng map, thẻ jsx lớn nhất sẽ phải chứa 1 thuộc tính gọi là key
              const { title, subTitle, img, linkImg } = item;
              return (
                <button
                  className="btn btn-light d-flex align-items-center mb-3"
                  key={index}
                  onClick={() => {
                    // ở đây cần một đường dẫn hình ứng với nút mà ng dùng bấm
                    this.setState({
                      linkImg: linkImg,
                    });
                  }}
                >
                  <img
                    className="me-2"
                    width={50}
                    height={50}
                    src={img}
                    alt=""
                  />
                  <div>
                    <h3>{title}</h3>
                    <p>{subTitle}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
