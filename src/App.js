import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './views/Home.page'
import LoginPage from './views/Login.page'
import EpisodiosPage from './views/Episodios.page'
import PersonajesPage from './views/Personajes.page'
import UsuariosPage from './views/Usuarios.page'
import store from './redux/store'
import { Provider } from 'react-redux'
import PrivateRoute from './containers/Routes/PrivateRoute.container'
import Header from './containers/Header/Header.container'
import { Container } from 'react-bootstrap'

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Header />
          <Container>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/login' component={LoginPage} />
              <PrivateRoute exact path='/episodios' component={EpisodiosPage} />
              <PrivateRoute exact path='/personajes' component={PersonajesPage} />
              <PrivateRoute exact path='/usuarios' component={UsuariosPage} />
              <Route exact path='/error/403' render={() => <div>Error 403</div>} />
              <Route path='*' render={() => <div>Error 404</div>} />
            </Switch>
          </Container>
        </Router>
      </Provider>
    </>
  )
}

export default App
