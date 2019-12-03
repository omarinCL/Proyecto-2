import { LOADING_EPISODES, LOAD_EPISODES_SUCCESS, LOAD_EPISODES_ERROR } from './Episodios.actions'

const initialState = {
  loading: false,
  response: null,
  error: false,
  episodes: []
}

const episodiosReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_EPISODES:
      return {
        ...state,
        loading: true
      }

    case LOAD_EPISODES_SUCCESS:
      return {
        ...state,
        response: action.payload,
        episodes: state.episodes.concat(action.payload.results),
        loading: false,
        error: false
      }
    case LOAD_EPISODES_ERROR:
      return {
        ...state,
        error: true
      }
    default:
      return state
  }
}

export default episodiosReducer
