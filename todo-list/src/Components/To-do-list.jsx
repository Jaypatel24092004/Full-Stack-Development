import React, { useState } from 'react';

function Todolist() {
  const [tasks, setTasks] = useState([]); // State for tasks
  const [newTask, setNewTask] = useState(''); // State for new task input
  const [newDueDate, setNewDueDate] = useState(''); // State for due date input
  const [filter, setFilter] = useState('all'); // State for task filter (all, completed, pending)

  // Function to add a new task with due date, initially marked as pending
  const addTask = () => {
    if (newTask.trim() !== '' && newDueDate !== '') {
      setTasks([...tasks, { text: newTask, completed: false, dueDate: newDueDate }]);
      setNewTask('');
      setNewDueDate('');
    }
  };

  // Function to toggle a task's completion status
  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Function to delete a task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // Function to filter tasks based on their status
  const getFilteredTasks = () => {
    if (filter === 'completed') {
      return tasks.filter(task => task.completed);
    } else if (filter === 'pending') {
      return tasks.filter(task => !task.completed);
    }
    return tasks;
  };

  return (
    <div className="min-h-screen bg-purple-900 flex items-center justify-center p-4">
      <div className="bg-purple-800 p-6 rounded-lg shadow-lg w-full max-w-screen-md">
        <h1 className="text-white text-2xl font-bold mb-4">Get Things Done!</h1>
        
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="What is the task today?"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-grow p-2 rounded-md border-0"
          />
          <input
            type="date"
            value={newDueDate}
            onChange={(e) => setNewDueDate(e.target.value)}
            className="ml-2 p-2 rounded-md border-0"
          />
          <button
            onClick={addTask}
            className="bg-purple-500 text-white px-5 rounded-md ml-2 hover:bg-purple-600"
          >
            Add Task
          </button>
        </div>

        <div className="flex justify-between mb-4">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-md ${
              filter === 'all' ? 'bg-purple-700 text-white' : 'bg-gray-200 text-black'
            }`}
          >
            All Tasks
          </button>
          <button
            onClick={() => setFilter('pending')}
            className={`px-4 py-2 rounded-md ${
              filter === 'pending' ? 'bg-purple-700 text-white' : 'bg-gray-200 text-black'
            }`}
          >
            Pending Tasks
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`px-4 py-2 rounded-md ${
              filter === 'completed' ? 'bg-purple-700 text-white' : 'bg-gray-200 text-black'
            }`}
          >
            Completed Tasks
          </button>
        </div>

        <ul>
          {getFilteredTasks().map((task, index) => (
            <li
              key={index}
              className={`p-2 rounded-md mb-2 flex justify-between items-center ${
                task.completed ? 'bg-green-500' : 'bg-orange-500'
              } text-white`}
            >
              <div>
                <div>{task.text}</div>
                <div className="text-sm text-gray-300">
                  Due: {new Date(task.dueDate).toLocaleDateString()}
                </div>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => toggleTaskCompletion(index)}
                  className="ml-2 text-white hover:text-gray-200"
                >
                  {task.completed ? 'Mark Pending' : 'Mark Completed'}
                </button>
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
