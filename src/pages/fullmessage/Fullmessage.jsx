import React, { useEffect, useState } from 'react';
import styles from './Fullmessage.module.scss';
import Panel from '../../components/Panel/Panel';
import SendList from '../../components/SendList/SendList';
import ReqMes from '../../components/ReqMes/ReqMes';
import { selectIsAuth } from '../../redux/slices/authSlice';
import { Navigate } from 'react-router-dom';
import {  useDispatch, useSelector } from 'react-redux';
import { getMessage } from '../../redux/slices/msgSlice';
import { io } from "socket.io-client";

const Fullmessage = () => {
  const [ text, setText ] = useState([]);
  const [ final, setFinal ] = useState([]);
  const idRoom = useSelector((state) => state.msg.url);
  const dispatch = useDispatch();

  
  const isAuth = useSelector(selectIsAuth);

  const userId = useSelector((state) => state.auth.user.userId);
  const socket = io("http://localhost:4000");
  let a = [];
  socket.on("connect", () => {
    });
    socket.on('message', data => {
      setText(data)
      a.push(text);
  });


  useEffect(() => {
    setFinal([text,...final])

  },[text])

  console.log(final);

  if (!isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <>
    <div className={styles.root}>
    <Panel></Panel>
        <div className={styles.fullMessageList}>
            <div>
              {final?.map((obj) => (
              <ReqMes  text={obj.text}></ReqMes>
            ))}</div>
            <SendList idRoo={idRoom} user={userId._id}></SendList>
        </div>
    </div>
    </>
  )
}

export default Fullmessage
