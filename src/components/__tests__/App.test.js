
import ReactDOM from 'react-dom';
import React from 'react'
import App from '../App';

/**** wiring up redux ****/
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from '../../reducers/index';

/* Using Enzyme */
import { shallow, mount } from 'enzyme'
import ListPosts from '../listPosts';
import AddPost from '../addPost';
import HeaderPost from '../headerApp';

let wrapped;

beforeEach(() => {
    wrapped = shallow(<App />);
});
it('show ListPost component', () => {
    expect(wrapped.find(ListPosts).length).toEqual(1);
});

it('shows HeaderPost Component', () => {
    expect(wrapped.find(HeaderPost).length).toEqual(1);
});

