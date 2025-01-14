import styled from 'styled-components'
import { Cores } from '../../styles'
import { TagContainer } from '../Tag/styled'
import { ButtonContainer } from '../Button/styles'

export const OverLay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
`

export const Sidebar = styled.aside`
  background-color: ${Cores.cinza};
  z-index: 1;
  padding: 40px 16px 0;
  max-width: 360px;
  width: 100%;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${Cores.branca};
  margin-bottom: 24px;

  span {
    display: block;
    font-size: 12px;
    color: ${Cores.cinzaClaro};
  }
`

export const Quantity = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${Cores.branca};
  margin-top: 32px;
  margin-bottom: 16px;
`

export const CartItem = styled.li`
  display: flex;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 24px;
  }
  h3 {
    color: ${Cores.branca};
    font-weight: bold;
    font-size: 16px;
  }

  span {
    display: block;
    color: ${Cores.branca};
    font-weight: bold;
    font-size: 14px;
  }

  ${TagContainer} {
    margin-right: 8px;
    margin-top: 8px;
    margin-bottom: 16px;
  }
`
