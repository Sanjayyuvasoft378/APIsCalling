import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getLogin } from "../redux/Action/LoginAction";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { register, handleSubmit ,formState: { errors },} = useForm();
  const navigater = useNavigate();
  const dispatch = useDispatch();
const user = useSelector(state => state.userData)

console.log("3333333333",user);
const onSubmit = (data) => {
  dispatch(getLogin(data));
  };
  useEffect(()=>{
    if (user && user.length!==0){
    window.location.href=("/dashboard")
    
    }
  })

  return (
    <div>
      <h1>Login Your Acount</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">Email</label>
        <br />
        <input
          {...register("email", { required: "please enter your email" })}
        />
         {errors.email && <p>Email  is required.</p>}
        <br />
        <label htmlFor="">Password</label>
        <br />
        <input
          {...register("password", { required: "please enter password" })}
        />
         {errors.password && <p>Password  is required.</p>}
        <br />
        <br />
        <button >Login</button>
      </form>
      <h3>you don't have an acount please sign up here -   <Link to="/signup">Signup</Link></h3>
    </div>
  );
}
