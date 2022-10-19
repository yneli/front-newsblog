import React from 'react';
import styles from "./Login.module.scss";
import { Paper, Typography, TextField, Button } from '@mui/material';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogin, selectIsAuth } from '../../redux/slices/authSlice';
import { Navigate } from 'react-router-dom';

const Login = () => {

  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const { register, handleSubmit, setError, formState: {errors, isValid} } = useForm({
    defaultValues: {
      email: 'Admin@gmail.com',
      password: 'Admin'
    },
    mode: 'onChange',
  });
  console.log(isAuth);

  

  const onSubmit = async (values) => {
    const data = await dispatch(fetchLogin(values));

    
    if (!data.payload) {
      return alert('Не удалось авторизоваться!');
    }

    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }
  



  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Вход в аккаунт
      </Typography>
    <form onSubmit={handleSubmit(onSubmit)}>
    <TextField
        className={styles.field}
        label="E-Mail"
        error={Boolean(errors.email?.message)}
        helperText={errors.email?.message}
        {...register('email',{ required: 'Укажите почту'})}
        fullWidth
      />
      <TextField 
       className={styles.field}
       label="Пароль" 
       error={Boolean(errors.email?.message)}
       helperText={errors.password?.message}
      {...register('password', { required: 'Укажите почту'})}
      fullWidth />



      <Button disabled={!isValid} type="submit" size="large" variant="contained" fullWidth>
        Войти
      </Button>
    </form>
    </Paper>
  );
};

export default Login
