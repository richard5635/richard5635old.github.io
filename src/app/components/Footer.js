// Nav.js
import React from 'react'
import styled, { css } from 'styled-components'

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
`

const Footer = styled.footer`
  position: bottom;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  background-color: #fff;
`

  const FootWrapper = styled.nav`
  padding: 32px;
  display: flex;
  justify-content: space-around;

`


const NavWrapper = styled.nav`
  padding: 16px;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 479px) {
    flex-direction: column;
    align-items: flex-end;

    /* If navigation is open (show is true) */
    ${props => props.isOpen && css`
      ul {
        position: absolute;
        top: 64px;
        max-height: 1000px;
      }
    `}
  }
`

const NavList = styled.ul`
  margin: 0;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-end;
  list-style-type: none;
  height: auto;
  max-height: 0;

  @media (min-width: 480px) {
    flex-direction: row;
    justify-content: flex-end;
    max-height: 1000px;
  }
`

const NavItem = styled.li`
  & + & {
    margin-top: 12px;
  }

  @media (min-width: 480px) {
    & + & {
      margin-top: 0;
      margin-left: 32px;
    }
  }

  a {
    font-size: 16px;
    font-weight: regular;
    text-decoration: none;
    color: #FFF;
    transition: color .15s ease-in-out;

    &:hover {
      color: #6AC;
    }
  }
`

const NavButton = styled.button`
  padding: 8px 12px;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  background: transparent;
  border: 2px solid;
  cursor: pointer;
  transition: color .25s ease-in-out;

  &:hover {
    color: #888;
  }

  @media (min-width: 479px) {
    display: none;
  }
`

export default class Nav extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false
    }

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {
    this.setState({
      show: !this.state.show
    })
  }

  render () {
    return (
      <Footer>
        <FootWrapper>
            Copyright © 2018, Richard Hartanto
        </FootWrapper>
      </Footer>
    )
  }
}