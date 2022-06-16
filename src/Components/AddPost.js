import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AddPost } from "../redux/Action/LoginAction";

export default function AddPosts() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(AddPost(data));
  };

  return (
    <div>
      <h1>Cretae Your Post Here</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">Title</label>&nbsp;&nbsp;&nbsp;
        <input {...register("title", { required: "enter a title" })} /><br /><br />
        <label htmlFor="">Description</label>&nbsp;
        <input
          {...register("description", { required: "please enter description" })}
        /><br /><br />
        <label htmlFor="">UserId</label>&nbsp;&nbsp;&nbsp;
        <input {...register("user_id", { required: "enter userId" })} /><br /><br />
        <button onClick={AddPosts}>AddPost</button>
      </form>
      
    </div>
  );
}
