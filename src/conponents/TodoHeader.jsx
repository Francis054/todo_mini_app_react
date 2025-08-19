import { useEffect, useState } from "react";
import TodoTasks from "./TodoTasks";

const TodoHeader = () => {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

   // ✅ Load tasks from localStorage when the component mounts
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
      console.log("Loaded tasks from localStorage:", JSON.parse(savedTasks));
    }
  }, []);

  // ✅ Save tasks to localStorage whenever `tasks` changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      console.log("New Task Added:", newTask);
      setNewTask("");
    }
  };

  const handleTaskDelete = (taskToDelete) => {
    setTasks(tasks.filter((task) => task !== taskToDelete));
  };

  return (
    <div className="todo-header">
      <h1>
        To-Do List
        <img src="/images/icon.png" alt="To-Do Icon" className="todo-icon" />
      </h1>

      {/* form handles enter + button click */}
      <form onSubmit={handleSubmit} className="todo-label">
        <input
          type="text"
          id="new-todo"
          className="todo-input"
          placeholder="Add a new task"
          value={newTask}
          onChange={handleInputChange}
        />
        <button type="submit" className="todo-button">
          Add
        </button>
      </form>

      <TodoTasks tasks={tasks} onDelete={handleTaskDelete} />
    </div>
  );
};

export default TodoHeader;
