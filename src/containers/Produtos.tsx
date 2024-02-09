import { useSelector } from 'react-redux'

import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { useGetProdutoQuery } from '../services/api'

import * as S from './styles'
import { RootReducer } from '../store'

const ProdutosComponent = () => {
  const { data: produtos, isLoading } = useGetProdutoQuery()
  if (isLoading) return <h2>Carregando...</h2>
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const favoritos = useSelector((state: RootReducer) => state.favoritos.itens)
  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const idsDosFavoritos = favoritos.map((f) => f.id)
    return idsDosFavoritos.includes(produtoId)
  }

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
