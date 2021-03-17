import http from "./httpService";
import config from "./config.json";

export const registerUser = (user) => {
  return http.post(`${config.localApi}/api/register`, JSON.stringify(user));
};

export const loginUser = (user) => {
  return http.post(`${config.localApi}/api/login`, JSON.stringify(user));
};


