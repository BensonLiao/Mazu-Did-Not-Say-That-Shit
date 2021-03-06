import styled from 'styled-components'
import rightMenu from '../assets/img/relevant.png'

export const RightInfo = styled.div`
  background-image: url(${rightMenu});
  background-repeat: no-repeat;
  background-size: 500px 287px;
  background-position: -242px -245px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  &:hover {
    background-position: -284px -245px;
  }
`
