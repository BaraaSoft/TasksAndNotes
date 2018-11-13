import * as types from '../type'
import * as action from '../index'

describe('adding new task', () => {
    it('has correct action type', () => {
        const check = action.addNewTask('Task One')
        expect(check.type).toEqual(types.default.CREATE_NEW_TASK)
    });
    it('has correct payload', () => {
        const check = action.addNewTask('Task One')
        expect(check.payload).toEqual('Task One')
    })
})
