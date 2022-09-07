import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { SignupAction } from "../redux/Action/LoginAction";
export default function Signup() {
  const { register, handleSubmit,formState : { errors } } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(SignupAction(data));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Create Your Acount Here </h1>

        <label htmlFor="">First Name</label>
        <br />
        <input {...register("firstName", { required: "enter firstname" })} />
        {errors.firstName && <p>first name   is required.</p>}

        <br />

        <label htmlFor="">lastName</label>
        <br />
        <input {...register("lastName", { required: "enter last name" })} />
        {errors.lastName && <p>last name  is required.</p>}

        <br />


        <label htmlFor="">Email</label>
        <br />
        <input {...register("email", { required: "enter email address" })} />
        {errors.email && <p>Email  is required.</p>}

        <br />

        <label htmlFor="">Mobile No</label>
        <br />
        <input {...register("mobileNo", { required: "enter Mobile NO " })} />
        {errors.mobileNo && <p>Mobile No  is required.</p>}

        <br />

        <label htmlFor="">Address</label>
        <br />
        <input {...register("Address", { required: "enter address" })} />
        {errors.Address && <p>Address  is required.</p>}

        <br />


        <label htmlFor="">password</label>
        <br />
        <input {...register("password", { required: "enter a password" })} />
        {errors.password && <p>Password  is required.</p>}

        <br />
        {/* <label htmlFor="">Confirm-Password</label>
        <br />
        <input
          {...register("password_confirmation", {
            required: "please Re-enter password",
          })}
        />
         {errors.password_confirmation && <p>password_confirmation  is required.</p>} */}

        <br />
        <br />
        <br />
        <input type="submit" />
      </form>
      <h2>If you have already an acount </h2>
      <h3>Please signin here  -<Link to="/"><strong>Signin</strong></Link></h3>
     
    </div>
  );
}
