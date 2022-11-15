import React, { useState } from 'react';
import styles from './SendList.module.scss';
import { Avatar, TextField, Button} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { createMessage, getMessage } from '../../redux/slices/msgSlice';
import { io } from "socket.io-client";



const SendList = ({user, idRoo}) => {
  const [ response, setRespons ] = React.useState("");

  const [ text, setText ] = useState('');
  const idRoom = useSelector((state) => state.msg.url);
  const dispatch = useDispatch();
  const socket = io("http://localhost:4000");


  React.useEffect(() => {
    dispatch(getMessage("01112223333333445555556666667777999abbbccdddffff"))

  },[response]);

  const sendMsges = () => {
    let obj = {
      text : text,
      userId : user,
      idRoom : "01112223333333445555556666667777999abbbccdddffff",
    }
      socket.emit("SendMsg", obj, (response) => {
        setRespons(response); 
      });
    
  };

  return (
    <>
      <div className={styles.root}>
       
        <div className={styles.form}>
          <TextField
            label="Написать сообщение"
            variant="outlined"
            maxRows={10}
            multiline
            fullWidth
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button onClick={sendMsges} variant="contained">Отправить</Button>
        </div>
      </div>
    </>
  )
}

export default SendList
