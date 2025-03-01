import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const initialState = {
    token: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state: any, action: PayloadAction<{ token: string; }>) => {
            state.token = action.payload.token;
        },
        clearLogin(state) {
            state.token = null;
        },
    }
})

export const { login, clearLogin } = userSlice.actions;

export default userSlice.reducer;