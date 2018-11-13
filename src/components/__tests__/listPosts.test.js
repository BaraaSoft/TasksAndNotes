
import React from 'react';
import ListPosts from '../listPosts';
import Root from '../../root';
import { mount } from 'enzyme';
import App from '../App';


let wrapper;
beforeEach(() => {
    const initialState = {
        tasksList: [{ title: 'task 1' }, { title: 'task 2' }]
    }
    wrapper = mount(
        <Root initialState={initialState}>
            <ListPosts />
        </Root>
    );
})
afterEach(() => {
    wrapper.unmount();
});
it('shows card element for every list item', () => {
    expect(wrapper.find('.card-list-item').length).toEqual(2)
})

it('has a correct text content on every card element', () => {
    const checkList = wrapper.find('.card-list-item')
        .find('.card-title').map((node) => node.text())

    expect(checkList).toEqual(['task 1', 'task 2'])
})