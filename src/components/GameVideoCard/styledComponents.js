import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ItemLink = styled(Link)`
  text-decoration: none;
`

export const GamingListItem = styled.li`
  background: none;
  width: 100%;
  flex-direction: column;
  display: flex;
  @media screen and (min-width: 768px) {
    width: 200px;
    margin-right: 20px;
  }
`

export const GamingThumbNailImage = styled.img`
  width: 100vh;
  height: 100px;
  @media screen and (min-width: 768px) {
    width: 210px;
  }
`
export const GamingContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;
`

export const GamingTitle = styled.p`
  font-family: roboto;
  font-size: 15px;
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
  }
`

export const GamingViewsAndDate = styled.p`
  font-family: roboto;
  font-size: 12px;
  color: ${props => props.color};
`
