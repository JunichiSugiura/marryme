import { createStore } from 'redux';
import reducer from '../reducers/index';

export default function configureStore() {
  return createStore(reducer, window.devToolsExtension && window.devToolsExtension());
}
