import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

const composeEnhancers = composeWithDevTools({ trace: true })

const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(thunk)))

export default store
