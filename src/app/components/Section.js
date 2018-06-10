// Section.js
import styled, { css } from 'styled-components'

// Import Container component
import Container from './Container'

const Section = styled.section`
  ${props => props.centered && css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width:100%;
    padding-top: 120px;
    padding-left: 32px;
    padding-right: 32px;
  `}

  ${Container} {
    position: relative;
    z-index: 2;
  }
`

export default Section