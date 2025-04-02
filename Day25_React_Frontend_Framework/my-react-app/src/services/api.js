import axios from "axios";

const getToken = () => {
  let token = "";
  if (typeof localStorage !== "undefined") {
    token = localStorage.getItem("token") || "";
  }
  return token;
};
const api = axios.create({
  url: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getToken()}`,
  },
});

// dummy api calls
const getAllUsers = async () => {
  try {
    const response = await api.get("/users");
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

// dummy api call to get a user by id
const getUserById = async (id) => {
  try {
    const response = await api.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

export { getAllUsers, getUserById };
