// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // 假设你的reducers已经通过createSlice创建或者以其他方式合并

const store = configureStore({
  reducer: rootReducer,
  // 中间件和DevTools配置是默认包含的，无需额外配置
});

export default store;
