import { useState, useEffect } from "react";
import { createTask, updateTask } from "../services/taskService";

export default function TaskForm({ onSuccess, taskToEdit }) {
  const [title, setTitle] = useState("");

  // Fill form if editing
  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title || "");
    }
  }, [taskToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (taskToEdit) {
        await updateTask(taskToEdit._id || taskToEdit.id, { title });
      } else {
        await createTask({ title });
      }
      setTitle("");
      onSuccess(); // reload tasks
    } catch (err) {
      console.error(err);
      alert("Failed to save task");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task title"
        required
      />
      <button type="submit">{taskToEdit ? "Update Task" : "Add Task"}</button>
    </form>
  );
}
