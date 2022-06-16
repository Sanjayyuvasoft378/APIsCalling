import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { SignupAction } from '../redux/Action/LoginAction';
export default function Signup() {

  const  { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(SignupAction(data))
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} >
        <h1>Create  Your Acount Here </h1>
        <label htmlFor="">Email</label><br />
        <input {...register('email',{required:"enter email address"})}/><br />
        <label htmlFor="">password</label><br />
        <input {...register('password', {required:"enter a password"})}/><br />
        <label htmlFor="">Confirm-Password</label><br />
        <input {...register('password_confirmation',{required:"please Re-enter password"})}/><br /><br /><br />
        <input type="submit" />
        </form>
        <h2>If you have already an acount </h2>
        <h3>Please signin here</h3>
        <Link to='/'>Signin</Link>
    </div>
  )
}
