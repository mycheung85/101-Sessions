import React from 'react';
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './app';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const defaultState = {
      counter: {
        count: 0,
      },
      colorpicker: {
        color: "#000000",
      }
    };
    const rootReducer = state => state;
    const store = createStore(rootReducer, defaultState);
    ReactDOM.render(
      <Provider store={store}><App /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
