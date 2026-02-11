import { useEffect, useState } from "react";
import { getTasks, deleteTask } from "../services/taskService";
import TaskForm from "../components/TaskForm";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const loadTasks = async () => {
    try {
      setLoading(true);
      const res = await getTasks();
      setTasks(Array.isArray(res.data) ? res.data : []);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Failed to load tasks");
      setTasks([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      loadTasks();
    } catch (err) {
      console.error(err);
      setError("Failed to delete task");
    }
  };

  const handleEdit = (task) => {
    setTaskToEdit(task);
  };

  const handleSuccess = () => {
    setTaskToEdit(null); // clear edit form
    loadTasks();
  };

  return (
    <div>
      <h2>Tasks</h2>
      <TaskForm onSuccess={handleSuccess} taskToEdit={taskToEdit} />

      {error && <p style={{ color: "red" }}>{error}</p>}

      {loading ? (
        <p>Loading tasks...</p>
      ) : (
        <ul>
          {tasks.length === 0 ? (
            <li>No tasks found.</li>
          ) : (
            tasks.map((task) => (
              <li key={task._id || task.id}>
                {task.title}{" "}
                <button onClick={() => handleEdit(task)}>Edit</button>{" "}
                <button onClick={() => handleDelete(task._id || task.id)}>
                  Delete
                </button>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}
