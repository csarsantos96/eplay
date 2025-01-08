import styled from 'styled-components'
import { Cores } from '../../styles'
import { TagContainer } from '../Tag/styled'

export const Card = styled.div`
  background-color: ${Cores.cinza};
  border-radius: 8px;
  padding: 8px;

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`
export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-bottom: 16px;
`
