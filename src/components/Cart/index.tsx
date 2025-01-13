import Button from '../Button'
import { OverLay, CartContainer, Sidebar } from './styles'

const Cart = () => (
  <CartContainer>
    <OverLay />
    <Sidebar>
      <ul>
        <li>
          <h3>Nome do Jogo</h3>
        </li>
      </ul>
      <p> 2 jogo(s) no carrinho</p>
      <p>
        Total de R$ 250,00 <span>Em até 6x sem juros</span>
      </p>
      <Button title="Clique aqui para continuar com a compra" type="button">
        Continuar com a compra
      </Button>
    </Sidebar>
  </CartContainer>
)

export default Cart
