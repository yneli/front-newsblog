import React from 'react';
import { AppBar, Container, Toolbar, IconButton, Typography, Box, Button } from '@mui/material';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth, logOut, selectIsRole } from '../../redux/slices/authSlice';

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const isRole = useSelector(selectIsRole);

  console.log(isRole)

  const logout = () => {
    dispatch(logOut());
    localStorage.removeItem('token');
  }
  return (
    <div className={styles.root}>
      
        <Container maxWidth="lg">
            <div className={styles.inner}>
            <Link className={styles.link}  to='/'><Typography color='white' variant='h4'><div className={styles.text}>Web News</div></Typography></Link>
                <div className={styles.buttons}>
                {isRole === "Admin"? <Button variant="contained">Admin Panel</Button> : ''}
                {!isAuth? (<><Link to="/login"><Button  variant="contained">Log In</Button></Link>
                  <Link to="/register"><Button variant="contained">Registration</Button></Link></>) : <Button onClick={logout}  variant="contained">Log Out</Button>
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