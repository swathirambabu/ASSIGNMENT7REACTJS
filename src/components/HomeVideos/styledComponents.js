import styled from 'styled-components'

export const NoVideosView = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  background: none;
`

export const NoVideoImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`

export const NoVideoHeading = styled.h1`
  font-family: roboto;
  font-size: 25px;
  color: ${props => props.headingColor};
`

export const NoVideoNote = styled.p`
  font-family: roboto;
  font-size: 18px;
  color: ${props => props.noteColor};
`

export const RetryButton = styled.button`
  border: none;
  background-color: #4f46e5;
  border-radius: 3px;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-family: roboto;
  font-size: 15px;
`
export const VideoCardList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`
