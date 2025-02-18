import Tag from '../Tag'

import { Card, Descricao, Infos, Titulo } from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  id: number
}

const Product = ({
  title,
  category,
  system,
  description,
  infos,
  image,
  id
}: Props) => {
  const getDescricao = (Descricao: string) => {
    if (Descricao.length > 95) {
      return Descricao.slice(0, 92) + '...'
    }
    return Descricao
  }

  return (
    <Card to={`/product/${id}`}>
      <img src={image} alt={title} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info} size={'small'}>
            {info}
          </Tag>
        ))}
      </Infos>
      <Titulo>{title}</Titulo>
      <Tag size={'small'}>{category}</Tag>
      <Tag size={'small'}>{system}</Tag>
      <Descricao>{getDescricao(description)}</Descricao>
    </Card>
  )
}

export default Product
