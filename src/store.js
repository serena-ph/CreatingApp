import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth";
import { storeApi } from "./reducers/api";

const store = configureStore({
    reducer: {
        [storeApi.reducerPath]: storeApi.reducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(storeApi.middleware),
});

export default store;