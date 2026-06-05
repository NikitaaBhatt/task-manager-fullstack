import axios from "axios";

const API_URL = "https://taskflow-backend-c7p9.onrender.com/api/tasks";

export const fetchTasks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createTask = async (taskData) => {
  const response = await axios.post(API_URL, taskData);
  return response.data;
};

export const updateTask = async (id, taskData) => {
  const response = await axios.put(`${API_URL}/${id}`, taskData);

  return response.data;
};

export const toggleTask = async (id) => {
  const response = await axios.patch(`${API_URL}/${id}/toggle`);

  return response.data;
};

export const deleteTask = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);

  return response.data;
};
