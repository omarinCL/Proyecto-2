import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const { isLoggedIn } = useSelector(state => ({ isLoggedIn: Boolean(state.privateRouteReducer.loggedIn) }))

  return (
    <Navbar bg='dark' variant='dark' expand='md' style={{ marginBottom: '20px' }}>
      <Navbar.Brand>Rick and Morty</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <NavLink exact to='/' activeClassName='active' className='nav-link'>
            Home
          </NavLink>
          {isLoggedIn && (
            <>
              <NavLink exact to='/episodios' activeClassName='active' className='nav-link'>
                Episodios
              </NavLink>
              <NavLink exact to='/personajes' activeClassName='active' className='nav-link'>
                Personajes
              </NavLink>
              <NavLink exact to='/usuarios' activeClassName='active' className='nav-link'>
                Usuarios
              </NavLink>
            </>
          )}
          {!isLoggedIn && (
            <NavLink exact to='/login' activeClassName='active' className='nav-link'>
              Iniciar Sesión
            </NavLink>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
