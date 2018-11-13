import React from 'react';
import { shallow, mount } from 'enzyme';

import moxios from 'moxios'
import App from '../components/App';
import Root from '../root';
import headerApp from '../components/headerApp';
import { getRandomTasks } from '../actions/index';
import listPosts from '../components/listPosts';



let wrapper;
beforeEach(() => {
    wrapper = mount(
        <Root>
            <App />
        </Root>
    );

    moxios.install();
    moxios.stubRequest('http://reduxblog.herokuapp.com/api/posts?key=123', {
        status: 200,
        response: [{ title: 'task1' }, { title: 'task2' }, { title: 'task3' }]
    })
})

afterEach(() => {
    wrapper.unmount();
    moxios.uninstall()
})

it('it can fetch list of commets and display them', (done) => {

    wrapper.find('.btn-random').simulate('click');

    moxios.wait(() => {
        wrapper.update();
        expect(wrapper.find(listPosts).find('.card-list-item').length).toEqual(3)
        done()
    })


});
