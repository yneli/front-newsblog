import React from 'react';
import styles from './Friends.module.scss';
import Panel from '../../components/Panel/Panel';
import { selectIsAuth } from '../../redux/slices/authSlice';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FriendsList from '../../components/friendsList/FriendsList';
import { getFriends } from '../../redux/slices/msgSlice';

const Friends = () => {
  
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getFriends());
  },[])
  const friednsData = useSelector((state) => state.msg.data);
  console.log(friednsData);

  

  
  if (!isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <>
    <div className={styles.root}>
    <Panel></Panel>
    <div className={styles.fullMessageList}>
    {friednsData?.map((obj) =>
  <FriendsList key={obj._id} id={obj._id}  name={obj.fullName}></FriendsList>
)
    }
    </div>
    
    </div>
    </>
  )
}

export default Friends


