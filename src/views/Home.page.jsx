import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const HomePage = () => {
  const { loggedIn } = useSelector(state => ({ loggedIn: state.privateRouteReducer.loggedIn }))

  return <Row>{loggedIn ? <Col>Bienvenido!, {loggedIn.name}</Col> : <Col>Bienvenido, por favor, inicia sesión para comenzar.</Col>}</Row>
}

export default HomePage
