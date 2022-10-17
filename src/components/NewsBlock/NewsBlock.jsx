import React, { useEffect, useState } from 'react';
import styles from './News.module.scss';
import Card from '../Cards';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews,fetchAddInput } from '../../redux/slices/newsSlice';
import { TextField, Button } from '@mui/material';


function NewsBlock() {

const dispatch = useDispatch();
const dataNews = useSelector((state) => state.news.newsData);
const [ inputValue, setInputValue ] = useState('');


useEffect(() => {
  dispatch(fetchNews())
},[]);




const onClickFetch =  () => {
  if(inputValue){
    dispatch(fetchAddInput(inputValue))
    setInputValue('')
  }
}


  

  return (
    <div className={styles.root}>
      <div className={styles.buttons}>
      <TextField onChange={(e) => setInputValue(e.target.value)} value={inputValue} size='small' className={styles.textField} id="outlined-basic" label="Text" variant="outlined" />
      <Button onClick={onClickFetch} size='small' variant="contained">Search</Button></div>
      <div className={styles.block}>
      {dataNews ? dataNews.map((obj,index) => (
         <Card id={obj.publishedAt} key={index} className={styles.card} title={obj.title} image={obj.urlToImage} url={obj.url}></Card>
 )) : 'Loading...'} 
      </div>
    </div>
  )
}

export default NewsBlock


