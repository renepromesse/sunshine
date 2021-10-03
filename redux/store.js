import { compose, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const allStoreEnhancers = compose(applyMiddleware(thunk));

const store = createStore(rootReducer, {}, allStoreEnhancers);

export default store;