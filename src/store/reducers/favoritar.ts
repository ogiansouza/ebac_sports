import { Produto } from './../../App'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type favoritoState = {
  itens: Produto[]
}

const initialState: favoritoState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      if (state.itens.find((produtos) => produtos.id === produto.id)) {
        const favoritosSemProduto = state.itens.filter(
          (produtos) => produtos.id !== produto.id
        )
        state.itens = favoritosSemProduto
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions

export default favoritosSlice.reducer
