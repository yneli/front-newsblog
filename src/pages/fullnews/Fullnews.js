import React from 'react';
import { Comments } from '../../components/Comments/Comments';
import { AddComment } from '../../components/AddComment/AddComment';
import { useDispatch, useSelector } from 'react-redux';
import { getComment } from '../../redux/slices/commentSlice';
import { selectIsAuth } from '../../redux/slices/authSlice';
import { Navigate, useParams } from 'react-router-dom';
import { fetchSingleNew } from '../../redux/slices/newsSlice';
import FullCard from '../../components/FullCard/FullCard';



const Fullnews = () => {

  const comentData = useSelector((state) => state.comment.comment);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.comment.status);
  const isAuth = useSelector(selectIsAuth);
  const {id} = useParams();
  const newsDataSingl = useSelector((state) => state.news.singlNewsData);
  const text = useSelector((state) => state.news.input);
  const status = useSelector((state) => state.news.status);

  console.log(newsDataSingl);
  React.useEffect(() => {
    dispatch(fetchSingleNew({id:id,text:text}))
  },[])
 

  React.useEffect(() => {
    dispatch(getComment(id))
    
  },[])
  if (!isAuth) {
    return <Navigate to="/" />;
  }
  
  return (
    <>
     {status === "loaded"? <> <FullCard image={newsDataSingl[0].urlToImage} url={newsDataSingl[0].url} title={newsDataSingl[0].title} id={id} ></FullCard>
      <Comments isLoading={isLoading === "loaded"? false : true} items={comentData}>
      <AddComment url={id}/>
      </Comments></> : 'loading'}
    </>
  )
}

export default Fullnews
