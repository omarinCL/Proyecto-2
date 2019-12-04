import React, { useEffect } from 'react'
import { CardColumns, Card, Row, Col, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getCharacters, addFavoriteCharacter, removeFavoriteCharacter } from './Personajes.actions'
import Favorite from './../../components/Favorite'

const PersonajesContainer = () => {
  const { characters, favoriteCharacters, nextUrl, loading } = useSelector(state => ({
    characters: state.personajesReducer.characters,
    favoriteCharacters: state.privateRouteReducer.loggedIn.favoriteCharacters,
    nextUrl: state.personajesReducer.response ? state.personajesReducer.response.info.next : null,
    loading: state.personajesReducer.loading
  }))

  const dispatch = useDispatch()
  useEffect(() => {
    if (characters.length === 0) dispatch(getCharacters())
    // eslint-disable-next-line
  }, [])

  const handleOnAddFavorite = characterId => e => {
    dispatch(addFavoriteCharacter(characterId))
  }

  const handleOnRemoveFavorite = characterId => e => {
    dispatch(removeFavoriteCharacter(characterId))
  }

  const handleVerMas = () => {
    dispatch(getCharacters(nextUrl))
  }

  return (
    <>
      <h2>Personajes</h2>
      <hr />
      <CardColumns>
        {characters.map(character => (
          <Card key={character.id + '-character'}>
            <Card.Img variant='top' src={character.image} />
            <Card.Body>
              <Card.Title>{character.name}</Card.Title>
              <Card.Text>
                {character.gender}
                <br />
                {character.species}
                <br />
                <Favorite
                  isFavorite={favoriteCharacters.some(id => id === character.id)}
                  onAddFavorite={handleOnAddFavorite(character.id)}
                  onRemoveFavorite={handleOnRemoveFavorite(character.id)}
                />
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </CardColumns>
      {nextUrl && (
        <Row className='text-right'>
          <Col>
            <Button variant='outline-primary' onClick={handleVerMas} disabled={loading}>
              {loading ? 'Cargando personajes..' : 'Ver más'}
            </Button>
          </Col>
        </Row>
      )}
      <br />
      <br />
    </>
  )
}

export default PersonajesContainer
