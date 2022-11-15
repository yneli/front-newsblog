import React from 'react';
import styles from './Messanges.module.scss';
import MessageList from '../MessageList/MessageList';

const Messanges = () => {
  return (
    <>
    <div className={styles.root}>
      <MessageList></MessageList>
      <MessageList></MessageList>
      <MessageList></MessageList>
      <MessageList></MessageList>   
    </div>
    </>
  )
}

export default Messanges
