import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import TodoContainer from '../components/TodoContainer';

describe('TodoContainer Component', () => {
  it('renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <TodoContainer />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
