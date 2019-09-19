import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import posts from '../reducers/posts';

const store = createStore(posts, applyMiddleware(thunk));

export default store;
