import Axios from 'axios'

export const LOAD_EPISODES_SUCCESS = 'LOAD_EPISODES_SUCCESS'
export const LOAD_EPISODES_ERROR = 'LOAD_EPISODES_ERROR'
export const LOADING_EPISODES = 'LOADING_EPISODES'
export const ADD_FAVORITE_EPISODE = 'ADD_FAVORITE_EPISODE'
export const REMOVE_FAVORITE_EPISODE = 'REMOVE_FAVORITE_EPISODE'

export const getEpisodes = url => async dispatch => {
  dispatch(loadingEpisodes())
  try {
    const response = await Axios.get(!url ? 'https://rickandmortyapi.com/api/episode' : url)
    dispatch(loadEpisodesSuccess(response.data))
  } catch (error) {
    dispatch(loadEpisodesError())
  }
}

export const addFavoriteEpisode = id => (dispatch, getState) => {
  const state = getState()
  const user = state.privateRouteReducer.loggedIn
  dispatch(createAction(ADD_FAVORITE_EPISODE, { userId: user.id, episodeId: id }))
}

export const removeFavoriteEpisode = id => (dispatch, getState) => {
  const state = getState()
  const user = state.privateRouteReducer.loggedIn
  dispatch(createAction(REMOVE_FAVORITE_EPISODE, { userId: user.id, episodeId: id }))
}

const createAction = (type, payload) => {
  if (payload) {
    return {
      type,
      payload
    }
  } else return { type }
}

const loadingEpisodes = () => ({
  type: LOADING_EPISODES
})

const loadEpisodesSuccess = payload => ({
  payload,
  type: LOAD_EPISODES_SUCCESS
})

const loadEpisodesError = () => ({
  type: LOAD_EPISODES_ERROR
})
