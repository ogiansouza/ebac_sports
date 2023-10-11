import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/carrinho'
import favoritosSlice from './reducers/favoritos'

import api from '../services/api'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favoritos: favoritosSlice,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
