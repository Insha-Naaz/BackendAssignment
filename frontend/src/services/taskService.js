import api from "./api";

// GET all tasks
export const getTasks = async () => {
  const response = await api.get("/tasks");
  return response.data;
};

// CREATE new task
export const createTask = async (task) => {
  const response = await api.post("/tasks", task);
  return response.data;
};

// UPDATE existing task
export const updateTask = async (id, task) => {
  const response = await api.put(`/tasks/${id}`, task);
  return response.data;
};

// DELETE task
export const deleteTask = async (id) => {
  const response = await api.delete(`/tasks/${id}`);
  return response.data;
};
