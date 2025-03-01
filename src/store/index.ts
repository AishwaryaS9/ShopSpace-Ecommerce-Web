import { configureStore, ThunkAction, Action, createReducer } from '@reduxjs/toolkit';
import loginReducer from './slice/userSlice'
import productReducer from './slice/productsSlice'

export const store = configureStore({
    reducer: {
        login: loginReducer,
        products: productReducer
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