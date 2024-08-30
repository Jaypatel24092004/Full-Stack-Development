import React, { useState } from 'react';

function Todolist() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="min-h-screen bg-purple-900 flex items-center justify-center p-4">
      <div className="bg-purple-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-white text-2xl font-bold mb-4">Get Things Done!</h1>
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="What is the task today?"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-grow p-2 rounded-l-md border-0"
          />
          <button
            onClick={addTask}
            className="bg-purple-500 text-white px-4 rounded-r-md hover:bg-purple-600"
          >
            Add Task
          </button>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className="bg-purple-600 text-white p-2 rounded-md mb-2 flex justify-between items-center">
              {task}
              <div>
                <button
                  onClick={() => deleteTask(index)}
                  className="ml-2 text-white hover:text-red-400"
                >
                  🗑️
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todolist;
