import Button from '../Button'

import starWars from '../../assets/images/star_wars.png'

import {
  OverLay,
  CartContainer,
  Sidebar,
  Prices,
  Quantity,
  CartItem
} from './styles'
import Tag from '../Tag'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <OverLay onClick={closeCart} />
      <Sidebar>
        <ul>
          <CartItem>
            <img src={starWars} alt="star wars banner" />
            <div>
              <h3>Nome do Jogo</h3>
              <Tag size={'small'}>RPG</Tag>
              <Tag size={'small'}>ps5</Tag>
              <span>R$ 150,00</span>
            </div>
            <button type="button" />
          </CartItem>
          <CartItem>
            <img src={starWars} alt="star wars banner" />
            <div>
              <h3>Nome do Jogo</h3>
              <Tag size={'small'}>RPG</Tag>
              <Tag size={'small'}>ps5</Tag>
              <span>R$ 150,00</span>
            </div>
            <button type="button" />
          </CartItem>
        </ul>
        <Quantity> 2 jogo(s) no carrinho</Quantity>
        <Prices>
          Total de R$ 250,00 <span>Em até 6x sem juros</span>
        </Prices>
        <Button title="Clique aqui para continuar com a compra" type="button">
          Continuar com a compra
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
