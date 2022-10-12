import React from 'react';
import styles from "./Registration.module.scss";
import { Paper, Typography, TextField, Button,Avatar } from '@mui/material';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { fetchRegister, selectIsAuth } from '../../redux/slices/authSlice';
import { Navigate } from 'react-router-dom';

const Registration = () => {

  const dispatch = useDispatch();

  const isAuth = useSelector(selectIsAuth);
  

  const { register, handleSubmit, serError, formState: {errors, isValid} } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: ""
    },
    mode: 'onChange',
  });


  const onSubmit = async  (value) => {
    const data = await dispatch(fetchRegister(value));

    if(!data.payload){
      alert("не удалось зарегистрироваться")

    }
    if('token' in data.payload){
      window.localStorage.setItem('token', data.payload.token);
    }else {
      alert('не удалось')
    }
  };
  if(isAuth) {
    return <Navigate to="/"/>
  }



  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Создание аккаунта
      </Typography>
      <div className={styles.avatar}>
        <Avatar sx={{ width: 100, height: 100 }} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          error={Boolean(errors.fullName?.message)}
          helperText={errors.fullName?.message}
          {...register('fullName', { required: 'Укажите полное имя' })}
          className={styles.field}
          label="Полное имя"
          fullWidth
        />
        <TextField
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          type="email"
          {...register('email', { required: 'Укажите почту' })}
          className={styles.field}
          label="E-Mail"
          fullWidth
        />
        <TextField
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
          type="password"
          {...register('password', { required: 'Укажите пароль' })}
          className={styles.field}
          label="Пароль"
          fullWidth
        />
        <Button disabled={!isValid}  type="submit" size="large" variant="contained" fullWidth>
          Зарегистрироваться
        </Button>
      </form>
    </Paper>
  )
}

export default Registration
