import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductsList = ({ background, title }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        <Product
          category="Ação"
          description="teste"
          image="//placehold.it/222x250"
          title="Nome do Jogo"
          system="Windows"
          infos={['R$ 150', '-10%']}
        />
        <Product
          category="Ação"
          description="teste"
          image="//placehold.it/222x250"
          title="Nome do Jogo"
          system="Windows"
          infos={['R$ 150', '-10%']}
        />
        <Product
          category="Ação"
          description="teste"
          image="//placehold.it/222x250"
          title="Nome do Jogo"
          system="Windows"
          infos={['R$ 150', '-10%']}
        />
        <Product
          category="Ação"
          description="teste"
          image="//placehold.it/222x250"
          title="Nome do Jogo"
          system="Windows"
          infos={['R$ 150', '-10%']}
        />
      </List>
    </div>
  </Container>
)

export default ProductsList
