import { createSlice} from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        isLoggedIn: false,
        userId: null,
    },
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.userId = action.payload.userId;
            // 로그인 성공 시 로컬 스토리지에 로그인 상태 저장
            localStorage.setItem('isLoggedIn', true);

        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.userId = null;
            // 로그아웃 시 로컬 스토리지에서 로그인 상태 제거
            localStorage.removeItem('isLoggedIn');
        },
    },
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;

