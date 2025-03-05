import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const initialState = {
    address: [],
};


export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserAddress: (state, action: PayloadAction<any>) => {
            state.address = action.payload;
        },
        clearAddress(state) {
            state.address = [];
        },
    }
})

export const { setUserAddress, clearAddress } = userSlice.actions;

export default userSlice.reducer;