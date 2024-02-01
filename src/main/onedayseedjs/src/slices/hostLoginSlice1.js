import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const hostLoginSlice = createSlice({
    name: 'hostLogin',
    initialState: {
        isHostLoggedIn: false,
        hostNum: null,
    },
    reducers: {
        login: (state, action) => {
            state.isHostLoggedIn = true;
            state.hostNum = action.payload.hostNum;
            // 로그인 성공 시 로컬 스토리지에 로그인 상태 저장
            localStorage.setItem('isHostLoggedIn', true);

        },
        logout: (state) => {
            state.isHostLoggedIn = false;
            state.hostNum = null;
            // 로그아웃 시 로컬 스토리지에서 로그인 상태 제거
            localStorage.removeItem('isHostLoggedIn');
        },
    },
});

export const { login, logout } = hostLoginSlice.actions;
export default hostLoginSlice.reducer;


