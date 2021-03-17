import { createContext } from "react";

export const context = createContext({
  fullname: "",
  setFullname: () => {},
  email: "",
  setEmail: () => {},
  psaaword: "",
  setPassword: () => {},
  policy: "",
  setPolicy: () => {},
  validator: null,
  handleLogin: () => {},
  handleRegister: () => {},
});
