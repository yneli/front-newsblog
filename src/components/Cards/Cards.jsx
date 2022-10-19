import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styles from "./Cards.module.scss";


function Cards({url,image,title,id}) {
  

  const newUrl = url.slice(8,24);
  

  const dispatch = useDispatch();
  return (
    <div className={styles.rot}>
      <div className={styles.root}>
        <img className={styles.img} src={image} alt="" />
       <a className={styles.a} href={url}><div className={styles.title}>{newUrl}</div></a>
       <Link to={`/fullnews/${id}`}>
        <div className={styles.text}>{title}</div>
        </Link>
      </div>
    </div>
  )
}

export default Cards


