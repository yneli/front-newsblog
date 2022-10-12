import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home";
import { Container } from '@mui/material';
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import React from "react";
import { fetchGetMe } from "./redux/slices/authSlice.js";

function App() {

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchGetMe())
  },[])


  return (
    <div className="App">
     <Header/>
     <Container maxWidth="lg">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Registration/>}/>
      </Routes>
      </Container>
    </div>
  );
}

export default App;
