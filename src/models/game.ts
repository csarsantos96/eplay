class Game {
  category: string
  description: string
  image: string
  title: string
  system: string
  infos: string[]
  id: number

  constructor(
    id: number,
    category: string,
    description: string,
    image: string,
    infos: string,
    system: string,
    title: string
  ) {
    this.id = id
    this.category = category
    this.description = description
    this.image = image
    this.infos = infos.split(',')
    this.system = system
    this.title = title
  }
}

export default Game
