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
import AddPost from '../addPost';

let wrapper;
beforeEach(() => {
    const createStoreWithMiddleware = applyMiddleware()(createStore);
    wrapper = mount(
        <Provider store={createStoreWithMiddleware(reducers)}>
            <App />
        </Provider>
    );
});

it('shows AddPost Component', () => {

    expect(wrapper.find(AddPost).length).toEqual(1);
    expect(wrapper.find(AddPost).length).toBeDefined();
    expect(wrapper.find(AddPost)).toHaveLength(1)

});

it('input element does exist', () => {
    let obj = wrapper.find(AddPost).find('input').simulate('change', {
        target: {
            value: 'adding new text'
        }
    })
    expect(wrapper.find(AddPost).find('input').simulate('change'))
})

afterEach(() => {
    wrapper.unmount();
});