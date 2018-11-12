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

describe('Input element', () => {

    beforeEach(() => {
        wrapper.find(AddPost).find('input').simulate('change', {
            target: {
                value: 'adding new text'
            }
        });
        wrapper.update();
    })


    it('input element does exist and text appear onChange', () => {

        expect(wrapper.find(AddPost).find('input').prop('value')).toEqual('adding new text');
    });

    it('input text clear after submit', () => {

        wrapper.find(AddPost).find('form').simulate('submit');
        wrapper.update();
        expect(wrapper.find(AddPost).find('input').prop('value')).toEqual('')

    });

});


afterEach(() => {
    wrapper.unmount();
});