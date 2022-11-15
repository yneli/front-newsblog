import React from 'react';
import styles from './FriendsList.module.scss';
import {  Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createRoom } from '../../redux/slices/msgSlice';

const FriendsList = ({name,id}) => {

  const dispatch = useDispatch();
  return (
    <>
   
    <div className={styles.root}>
    <Avatar
  alt="Remy Sharp"
  src="https://www.film.ru/sites/default/files/filefield_paths/212049.jpg"
  sx={{ width: 56, height: 56 }}
/>
        <div className={styles.text}>
        <h3>{name}</h3>
        <Link className={styles.link} to={`/fullmessage/${id}`}>
        <p onClick={() => dispatch(createRoom(id))}>Написать сообщение...</p>
        </Link>
        </div>
    </div>
    
    </>
  )
}

export default FriendsList
