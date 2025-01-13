import { Game } from '../../Pages/Home'
import Button from '../Button'
import Tag from '../Tag'

import { formataPreco } from '../ProductsList'

import { Banner, Infos } from './styles'

type Props = {
  game: Game
}
const Hero = ({ game }: Props) => (
  <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
    <div className="container">
      <div>
        <Tag size={'small'}>{game.details.category}</Tag>
        <Tag size={'small'}>{game.details.system}</Tag>
      </div>

      <Infos>
        <h2>{game.name}</h2>
        <p>
          {game.prices.discount && (
            <span>De {formataPreco(game?.prices.old)}</span>
          )}
          {game.prices.current && <>Por {formataPreco(game?.prices.current)}</>}
        </p>
        {game.prices.current && (
          <Button
            type="button"
            title="Clique aqui para adicionar esse jogo ao carrinho"
            variant="primary"
          >
            Adicionar ao carrinho
          </Button>
        )}
      </Infos>
    </div>
  </Banner>
)

export default Hero
