const TodoTasks = ({ tasks, onDelete }) => {
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="todo-task-list">
           <div className="todo-task-item">
            <img
              src="/images/unchecked.png"
              alt={`Task ${index + 1}`}
              className="todo-task-unchecked-icon"
            />
            <span className="todo-task-label">{task}</span>
           </div>
            <button
              className="todo-task-delete-btn"
              onClick={() => onDelete(task)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoTasks;
