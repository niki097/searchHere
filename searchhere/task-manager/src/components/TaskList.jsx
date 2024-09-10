import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../redux/taskSlice';

function TaskList() {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    {task.text}
                    <button onClick={() => dispatch(deleteTask(task.id))}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default TaskList;
