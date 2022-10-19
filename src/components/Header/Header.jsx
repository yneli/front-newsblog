import React from 'react';
import { AppBar, Container,  Typography,  Button } from '@mui/material';
import styles from './Header.module.scss';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth, logOut, selectIsRole } from '../../redux/slices/authSlice';

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const isRole = useSelector(selectIsRole);
  const {id} = useParams();

  

  const logout = () => {
    dispatch(logOut());
    localStorage.removeItem('token');
  }
  return (
    <div className={styles.root}>
      
        <Container maxWidth="lg">
            <div className={styles.inner}>
            <Link className={styles.link}  to='/'><Typography color='white' variant='h3'><div className={styles.text}>MyBlog</div></Typography></Link>
                <div className={styles.buttons}>
                {isRole === "Admin"? <Button variant="contained">Admin Panel</Button> : ''}
                {!isAuth? (<><Link to="/login"><Button  variant="contained">Log In</Button></Link>
                  <Link to="/register"><Button variant="contained">Registration</Button></Link></>) :<><Button variant="contained">Messenger</Button> <Button onClick={logout} color="secondary" variant="contained">Log Out</Button></>
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