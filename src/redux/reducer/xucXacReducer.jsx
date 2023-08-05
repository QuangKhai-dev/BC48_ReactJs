// cách khởi tạo một state reducer cho redux
const initialState = {
  xucXac1: 2,
  xucXac2: 2,
  xucXac3: 6,
  soBanThang: 0,
  tongSoBanChoi: 0,
};

export const xucXacReducer = (state = initialState, action) => {
  // console.log(action);

  // switch case giúp bắt các action được gửi lên
  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'LACXUCXAC': {
      // tạo ra một object được clone từ state của reducer về
      const newState = { ...state };
      newState.xucXac1 = action.payload.xucXac1;
      newState.xucXac2 = action.payload.xucXac2;
      newState.xucXac3 = action.payload.xucXac3;

      // xử lí để trả kết quả cho người dùng
      // action.payload.luaChon
      let tong =
        action.payload.xucXac1 +
        action.payload.xucXac2 +
        action.payload.xucXac3;

      if (tong >= 11 && action.payload.luaChon) {
        newState.soBanThang += 1;
      }
      if (tong <= 10 && !action.payload.luaChon) {
        newState.soBanThang += 1;
      }

      // cộng tổng số bàn chơi lên thêm một giá trị khi người dùng play game
      newState.tongSoBanChoi += 1;

      // nếu như thay đổi giá trị cho state, thì sẽ bị lỗi vì trong redux yêu cầu khi state có sự thay đổi sẽ phải truyền trả về một state mới

      // return về state mới sau khi đã thay đổi dữ liệu
      return { ...newState };
    }
  }

  return { ...state };
};
