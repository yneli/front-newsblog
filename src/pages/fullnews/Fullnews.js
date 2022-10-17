import React, { useEffect } from 'react';
import { Comments } from '../../components/Comments/Comments';
import { AddComment } from '../../components/AddComment/AddComment';
import { useDispatch, useSelector } from 'react-redux';
import { getComment } from '../../redux/slices/commentSlice';
import { selectIsAuth } from '../../redux/slices/authSlice';
import { Navigate, useParams } from 'react-router-dom';
import Cards from '../../components/Cards';
import { fetchSingleNew } from '../../redux/slices/newsSlice';



const Fullnews = () => {

  const comentData = useSelector((state) => state.comment.comment);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.comment.status);
  const isAuth = useSelector(selectIsAuth);
  const {id} = useParams();
  const newsDataSingl = useSelector((state) => state.news.singlNewsData);


  React.useEffect(() => {
    dispatch(fetchSingleNew(id))
  },id)
 
  console.log(comentData);


  

  React.useEffect(() => {
    dispatch(getComment(id))
    
  },[])
  if (!isAuth) {
    return <Navigate to="/" />;
  }
  

  return (
    <>
      
      <Cards image={newsDataSingl[0].urlToImage
} url={newsDataSingl[0].url} title={newsDataSingl[0].title} id={id} ></Cards>
      <Comments isLoading={isLoading === "loaded"? false : true} items={comentData}>
      <AddComment url={id}/>
      </Comments>
      
    </>
  )
}

export default Fullnews
