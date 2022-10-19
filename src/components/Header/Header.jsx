import React from 'react';
import { AppBar, Container,  Typography,  Button } from '@mui/material';
import styles from './Header.module.scss';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth, logOut, selectIsRole, isPage } from '../../redux/slices/authSlice';


const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const isRole = useSelector(selectIsRole);
  const isPagesData = useSelector((state) => state.auth.page);
  



  

  const logout = () => {
    dispatch(logOut());
    dispatch(isPage('home'))
    localStorage.removeItem('token');
    
  }
  return (
    <div className={styles.root}>
      
        <Container maxWidth="lg">
            <div className={styles.inner}>
            <Link className={styles.link}  to='/'><Typography color='white' variant='h3'><div onClick={() => dispatch(isPage('home'))} className={styles.text}>MyBlog</div></Typography></Link>
                <div className={styles.buttons}>
                {isRole === "Admin"? <Button variant="contained">Admin Panel</Button> : ''}
                {!isAuth? (<><Link to="/login"><Button  variant="contained">Log In</Button></Link>
                  <Link to="/register"><Button variant="contained">Registration</Button></Link></>) :<>
                  {isPagesData === 'messager'? "" : <Link to="/messages"><Button  onClick={() => dispatch(isPage('messager'))} variant="contained">Messenger</Button></Link>} 
                  <Button  onClick={logout} color="secondary" variant="contained">Log Out</Button></>
                  }
                </div>
            </div>
        </Container>
      
    </div>
  )
}

export default Header



// {isAuth? (<><Link to="/login"><Button  variant="contained">Log In</Button></Link>
//                   <Link to="/register"><Button variant="contained">Registration</Button></Link></>) : <Button  variant="contained">Log Out</Button>
//                   }