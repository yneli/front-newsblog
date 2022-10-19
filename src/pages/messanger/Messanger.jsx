import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../../redux/slices/authSlice';
import styles from './Messanger.module.scss';
import Messanges from '../../components/Messanges/Messanges';
import { Navigate } from 'react-router-dom';
import Panel from '../../components/Panel/Panel';

const Messanger = () => {
  const isAuth = useSelector(selectIsAuth);
  
  if (!isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <>  
      <div className={styles.root}>
        <Panel></Panel>
        <Messanges></Messanges>
      </div>
    </>
  )
}

export default Messanger
