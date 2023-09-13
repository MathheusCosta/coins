import axios from "axios";

export const request = axios.create({
  baseURL: "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1",
  timeout: 30000,
});
