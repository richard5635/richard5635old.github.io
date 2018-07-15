// Container.js
import styled from 'styled-components'

const Container = styled.div`
  padding-right: 16px;
  padding-left: 16px;
  margin-right: auto;
  margin-left: auto;
  width: 100%;

  /* Breakpoint for tablets */
  @media (min-width: 576px) {
    max-width: 100%;
  }

  /* Breakpoint for small desktops */
  @media (min-width: 768px) {
    max-width: 100%;
  }

  /* Breakpoint for medium desktops */
  @media (min-width: 992px) {
    max-width: 100%;
  }

  /* Breakpoint for large desktops and HD devices */
  @media (min-width: 1200px) {
    max-width: 100%;
  }
`

export default Container