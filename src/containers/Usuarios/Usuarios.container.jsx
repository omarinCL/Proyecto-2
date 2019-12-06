import React from 'react'
import { Row, Col, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const UsuariosContainer = () => {
  const { users, loggedIn } = useSelector(state => ({ users: state.loginReducer.users, loggedIn: state.privateRouteReducer.loggedIn }))
  const relatedUsers = users.filter(user => user.id !== loggedIn.id && user.favoriteEpisodes.some(epId => loggedIn.favoriteEpisodes.indexOf(epId) !== -1))

  return (
    <>
      <Row>
        <Col>
          <h2>Usuarios con gustos similares</h2>
          <hr />
          <Table size='sm'>
            <tbody>
              {relatedUsers.map(e => (
                <tr key={e.id + '-episodio'}>
                  <td>{e.name}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      <br />
      <br />
    </>
  )
}

export default UsuariosContainer
