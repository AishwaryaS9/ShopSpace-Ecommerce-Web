import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import loginReducer from './slice/userSlice'

export const store = configureStore({
    reducer: {
        login: loginReducer,
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