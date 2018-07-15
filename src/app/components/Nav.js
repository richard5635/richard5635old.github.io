// Nav.js
import React from 'react'
import styled, { css } from 'styled-components'
import {Link} from 'react-router-dom'

//Logo
import Logo from './../assets/images/Logo01.png'

const Header = styled.header`
  z-index: 999;
  width: 100%;
  font-family: 'Roboto', sans-serif;
  background-color: rgba(255, 255, 255, 0.9);
  padding-top: 16px;
`

const NavWrapper = styled.nav`
  padding: 16px;
  display: flex;
  justify-content: space-between;

  li {
  }

  @media (max-width: 199px) {
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
  flex-direction: row;
  justify-content: flex-end;
  list-style-type: none;
  height: auto;
  padding-left:0px;

  @media (min-width: 400px) {
    flex-direction: row;
    justify-content: flex-end;
    max-height: 1000px;
  }
`

const NavLabel = styled.ul`
  justify-content: flex-start;
  padding-left:0px;
  margin: 0px;
  list-style-type: none;
  @media (max-width: 399px) {
  }
`

const NavText = styled.ul `
  justify-content: flex-start;
  font-size: 24px;
  font-weight: bold;
  margin:0;
  padding-left:0px;
  list-style-type: none;
  @media (max-width: 399px) {
    display: none;
  }
`

const LogoWrapper = styled.img`
  width: 24px;
  height: 24px;
  display:block;
`

const NavItem = styled.li`
  & + & {
    margin-top: 0px;
    padding-left: 32px;
  }

  @media (min-width: 400px) {
    & + & {
      margin-top: 0;
      padding-left: 32px;
    }
  }

  a {
    font-size: 16px;
    text-decoration: none;
    color: #000;
    transition: color .15s ease-in-out;

    &:hover {
      color: #6AC;
    }
  }
`

const NavButton = styled.button`
  padding: 8px 12px;
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

  @media (min-width: 200px) {
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

    render() {
        return (
            <Header>
                <NavWrapper isOpen={this.state.show}>
                    <NavButton onClick={this.toggleMenu}><LogoWrapper src={Logo}/></NavButton>
                    <NavText>
                        Richard Hartanto
                    </NavText>
                    <NavLabel>
                      <Link to="/"><LogoWrapper src={Logo}/></Link>
                      </NavLabel>
                    <NavList>
                        <NavItem>
                            <Link to="/">WORKS</Link>
                        </NavItem>

                        <NavItem>
                            <Link to="/about">ABOUT</Link>
                        </NavItem>
                    </NavList>
                </NavWrapper>
            </Header>
        )
    }
}