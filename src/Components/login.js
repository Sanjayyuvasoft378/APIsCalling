import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { getLogin } from '../redux/Action/LoginAction';

export default function Login() {
  const {register,handleSubmit} = useForm();
  
   const dispatch = useDispatch()

  const onSubmit = (data)=>{
    dispatch(getLogin(data))
    
  }


  return (
    <div>
       <h1>Login Your Acount</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">Email</label><br />
        <input {...register("email", {required:"please enter your email"})} /><br /> 
        <label htmlFor="">Password</label><br />
        <input {...register("password", {required:"please enter password"})}/><br /><br />
        <button>Login</button>
        </form>
        <h3>you don't have an acount please sign up here</h3>
        <Link to='signup' >Signup</Link>
    </div>
  )
}
