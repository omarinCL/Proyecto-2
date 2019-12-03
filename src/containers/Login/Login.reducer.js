import { ADD_FAVORITE_EPISODE, REMOVE_FAVORITE_EPISODE } from '../Episodios/Episodios.actions'

const initialState = {
  users: [
    {
      id: 1,
      name: 'Orlando',
      email: 'orlando@chilecompra.cl',
      password: 'orlando123',
      favoriteEpisodes: [],
      favoriteCharacters: []
    },
    {
      id: 2,
      name: 'Oscar',
      email: 'oscar@chilecompra.cl',
      password: 'oscar123',
      favoriteEpisodes: [],
      favoriteCharacters: []
    }
  ]
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE_EPISODE: {
      const user = state.users.find(user => user.id === action.payload.userId)
      user.favoriteEpisodes = user.favoriteEpisodes.concat([action.payload.episodeId])
      // console.log(user)
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload.userId).concat(user)
      }
    }
    case REMOVE_FAVORITE_EPISODE: {
      const user = state.users.find(user => user.id === action.payload.userId)
      user.favoriteEpisodes = user.favoriteEpisodes.filter(epId => epId !== action.payload.episodeId)
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload.userId).concat(user)
      }
    }
    default: {
      return state
    }
  }
}

export default loginReducer
