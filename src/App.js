import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home";
import { Container } from '@mui/material';
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { fetchGetMe, isPage } from "./redux/slices/authSlice.js";
import  Fullnews  from "./pages/fullnews/Fullnews.js";
import Messanger from "./pages/messanger/Messanger.jsx";
import Messanges from "./components/Messanges/Messanges.jsx";
import Panel from "./components/Panel/Panel.jsx";
import './index.scss'

function App() {

  const isPageData = useSelector((state) => state.auth.page);
  const dispatch = useDispatch();
  console.log(isPageData);


  React.useEffect(() => {
    dispatch(fetchGetMe())
    dispatch(isPage('home'))
  },[]);
  


  return (
    <div className="App">
     <Header/>
     <Container maxWidth="lg">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Registration/>}/>
        <Route path="/fullnews/:id" element={<Fullnews/>}/>
        <Route path="/messages" element={<Messanger/>}/>
        {/* <Route path="/friends" element={<Friends/>}/> */}
      </Routes>
      </Container>
    </div>

  );
}

export default App;
