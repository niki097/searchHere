import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';

function AddTask() {
    const [taskText, setTaskText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskText.trim()) {
            dispatch(addTask(taskText));
            setTaskText('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                placeholder="Enter a new task"
            />
            <button type="submit">Add Task</button>
        </form>
    );
}

export default AddTask;
