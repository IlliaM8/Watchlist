import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cinemaReducer from "./cinemaSlise";
import storage from "redux-persist/lib/storage";
import castReducer from "./castSlice";
import modalReducer from "./modalSlice";
import listReduser from "./listSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const rootReducer = combineReducers({
  cinema: cinemaReducer,
  cast: castReducer,
  modal: modalReducer,
  lists: listReduser,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cinema", "lists"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
