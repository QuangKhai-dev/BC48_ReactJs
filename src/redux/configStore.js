import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    hoTen: () => {
      return {
        hoTen: 'Long',
        lop: 'lớp 1',
      };
    },
  },
});
