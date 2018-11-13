import tasksReducer from '../reducer_tasks'
import * as types from '../../actions/type'

it('handle action CREATE_NEW_TASK', () => {
    const check = tasksReducer([], { type: types.default.CREATE_NEW_TASK, payload: 'new task' })
    expect(check).toEqual(['new task'])
});
it('handle action ASKS_LIST', () => {
    const check = tasksReducer(['task 1', 'task 2'], { action: types.default.TASKS_LIST, payload: 'new task' })
    expect(check).toEqual(['task 1', 'task 2'])
})

it('handle action with no type', () => {
    const check = tasksReducer([], {});
    expect(check).toEqual([]);
})