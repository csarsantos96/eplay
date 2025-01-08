import Tag from '../Tag'

import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" />
    <Titulo>Nome do Jogo</Titulo>
    <Tag size={'small'}>Categoria</Tag>
    <Tag size={'small'}>Windows</Tag>
    <Descricao>
      Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico
      de survival horror..
    </Descricao>
  </Card>
)

export default Product
