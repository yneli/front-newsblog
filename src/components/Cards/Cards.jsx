import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styles from "./Cards.module.scss";


function Cards({url,image,title,id}) {

  const [ timer, setTimer ] = useState('');
  

  const newUrl = url.slice(8,24);
 useEffect(() => {
  setTimeout(() => {
    setTimer('1')
  },6000);
  setTimeout(() => {
    setTimer('2')
  },5000);
  setTimeout(() => {
    setTimer('3')
  },4000);
  setTimeout(() => {
    setTimer('4')
  },3000);
  setTimeout(() => {
    setTimer('5')
  },2000)
 },[])

console.log(timer);
  

  const dispatch = useDispatch();
  return (
    <div className={styles.rot}>
      <div className={styles.root}>
        <img className={styles.img} src={image} alt="" />
       <a className={styles.a} href={url}><div className={styles.title}>{newUrl}</div></a>
       <Link to={`/fullnews/${id}`}>
        <div className={styles.text}>{timer === '1' ? title : `please wait ${timer} sec`}</div>
        </Link>
      </div>
    </div>
  )
}

export default Cards


