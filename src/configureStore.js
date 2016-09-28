import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const configureStore = () => (
  // return createStore(reducers, applyMiddleware(thunk));
  createStore(reducers,
    window.devToolsExtension && window.devToolsExtension(),
    applyMiddleware(thunk))
);

export default configureStore;
