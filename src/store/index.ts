import { configureStore, ThunkAction, Action, createReducer } from '@reduxjs/toolkit';
import loginReducer from './slice/userSlice'
import productReducer from './slice/productsSlice'
import cartReducer from './slice/cartSlice'

export const store = configureStore({
    reducer: {
        login: loginReducer,
        products: productReducer,
        cart: cartReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>