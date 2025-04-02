import axios from "axios";

const API_BASE_URL = "https://fe-task-api.mainstack.io";

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchTransactions = async () => {
  const response = await api.get("/transactions");
  return response.data;
};

export const fetchWalletBalance = async () => {
  const response = await api.get("/wallet");
  return response.data;
};

export const fetchUserProfile = async () => {
  const response = await api.get("/user");
  return response.data;
};
