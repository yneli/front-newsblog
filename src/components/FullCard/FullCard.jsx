import React from 'react';
import styles from './FullCard.module.scss';

const FullCard = ({image, url, title}) => {
  return (
    <>
    <div className={styles.root}>
        <img className={styles.img} src={image} alt="" />
        <div className={styles.text}>{title}</div>
    </div>
    </>
  )
}

export default FullCard
