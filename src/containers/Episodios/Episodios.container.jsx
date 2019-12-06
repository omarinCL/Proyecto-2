import React, { useEffect } from 'react'
import { Table, Row, Col, Button } from 'react-bootstrap'
import Favorite from '../../components/Favorite'
import { useDispatch, useSelector } from 'react-redux'
import { getEpisodes, addFavoriteEpisode, removeFavoriteEpisode } from './Episodios.actions'
import Spinner from '../../components/Spinner'

const EpisodiosContainer = () => {
  const { episodes, favoriteEpisodes, nextUrl, loading } = useSelector(state => ({
    episodes: state.episodiosReducer.episodes,
    favoriteEpisodes: state.privateRouteReducer.loggedIn.favoriteEpisodes,
    nextUrl: state.episodiosReducer.response ? state.episodiosReducer.response.info.next : null,
    loading: state.episodiosReducer.loading
  }))

  const dispatch = useDispatch()
  useEffect(() => {
    if (episodes.length === 0) dispatch(getEpisodes())
    // eslint-disable-next-line
  }, [])

  const handleOnAddFavorite = episodeId => e => {
    dispatch(addFavoriteEpisode(episodeId))
  }

  const handleOnRemoveFavorite = episodeId => e => {
    dispatch(removeFavoriteEpisode(episodeId))
  }

  const handleVerMas = () => {
    dispatch(getEpisodes(nextUrl))
  }

  return (
    <>
      <Row>
        <Col>
          <h2>Episodios</h2>
          <hr />
          <Spinner show={loading} />
          <Table size='sm'>
            <tbody>
              {episodes.map(e => (
                <tr key={e.id + '-episodio'}>
                  <td>
                    {e.episode} - {e.name} - <em>Fecha de emisión: {e.air_date}</em>
                  </td>
                  <td>
                    <Favorite
                      isFavorite={favoriteEpisodes.some(id => id === e.id)}
                      onAddFavorite={handleOnAddFavorite(e.id)}
                      onRemoveFavorite={handleOnRemoveFavorite(e.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      {nextUrl && (
        <Row className='text-right'>
          <Col>
            <Button variant='outline-primary' onClick={handleVerMas} disabled={loading}>
              {loading ? 'Cargando episodios..' : 'Ver más'}
            </Button>
          </Col>
        </Row>
      )}
      <br />
      <br />
    </>
  )
}

export default EpisodiosContainer
