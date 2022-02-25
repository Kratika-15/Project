import React from "react";
import Login from "./Components/Login";
import "./App.css";

import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import Home from "./Components/Home";
//import Main from "./Pages/Main";
const App = () => {
  const user = useSelector(selectUser);
  console.log(user);

  return <div>{user ? <Home /> : <Login />}</div>;
};

export default App;
