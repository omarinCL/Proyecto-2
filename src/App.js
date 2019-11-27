import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginContainer from './containers/Login/Login.container'
import EpisodiosContainer from './containers/Episodios/Episodios.container'
import PersonajesContainer from './containers/Personajes/Personajes.container'
import UsuariosContainer from './containers/Usuarios/Usuarios.container'

function App () {
  return (
    <Router>
      <Switch>
        <Route exact path='/login' component={LoginContainer} />
        <Route exact path='/episodios' component={EpisodiosContainer} />
        <Route exact path='/personajes' component={PersonajesContainer} />
        <Route exact path='/usuarios' component={UsuariosContainer} />
      </Switch>
    </Router>
  )
}

export default App
