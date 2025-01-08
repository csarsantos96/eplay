import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/game'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'
import streetFighter from '../../assets/images/streetFighter.png'
import fifa23 from '../../assets/images/fifa23.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil',
    system: 'Windows',
    infos: ['R$ 250,OO', '-10%'],
    image: resident
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil',
    system: 'PS5',
    infos: ['R$ 290,OO', '-5%'],
    image: resident
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    title: 'EA SPORTS™ FIFA 23',
    system: 'Windows',
    infos: ['R$ 250,OO', '-50%'],
    image: fifa23
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    title: 'EA SPORTS™ FIFA 23',
    system: 'PS5',
    infos: ['R$ 99,0O', '-10%'],
    image: fifa23
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment...',
    title: 'Diablo',
    system: 'Windows',
    infos: ['05/04'],
    image: diablo
  },
  {
    id: 6,
    category: 'Aventura',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    title: 'Star Wars Jedi: Survivor',
    system: 'Windows',
    infos: ['05/04'],
    image: starWars
  },
  {
    id: 7,
    category: 'Luta',
    description:
      'Street Fighter 6 é um próximo jogo de luta desenvolvido e publicado pela Capcom.',
    title: 'Street Fighter 6',
    system: 'Windows',
    infos: ['05/04'],
    image: streetFighter
  },
  {
    id: 8,
    category: 'RPG',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    title: 'The Legend of Zelda - TOK',
    system: 'Switch',
    infos: ['05/04'],
    image: zelda
  }
]
const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} title="Promoções" background="gray" />
    <ProductsList games={emBreve} title="Em breve" background="black" />
  </>
)

export default Home
