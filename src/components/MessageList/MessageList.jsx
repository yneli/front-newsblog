import React from 'react';
import styles from './MessageList.module.scss';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

const MessageList = () => {
  return (
    <>
    <Link className={styles.link} to="/fullmessage/123">
    <div className={styles.root}>
    <Avatar
  alt="Remy Sharp"
  src="https://www.film.ru/sites/default/files/filefield_paths/212049.jpg"
  sx={{ width: 40, height: 40 }}
/>
        <div className={styles.text}>
        <h3>Леха Смернов</h3>
        <p>Последнее сообщение</p>
        </div>
    </div>
    </Link>
    </>
  )
}

export default MessageList
