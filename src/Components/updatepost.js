import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { UpdatePost } from "../redux/Action/LoginAction";
import { useNavigate, useParams } from "react-router-dom";
export default function UpdatePosts() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigater = useNavigate();
  const {id} = useParams();
  console.log(id);
  const onSubmit = (data) => {
    dispatch(UpdatePost(data,id));
    navigater(`/dashboard`)
  };
  
function upt_post(id){
    dispatch(UpdatePost(id))
}
  return (
    <div>
      <h1>Cretae Your Post Here</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">Title</label>&nbsp;&nbsp;&nbsp;
        <input {...register("title", { required: "enter a title" })} />
        <br />
        <br />
        <label htmlFor="">Description</label>&nbsp;
        <input
          {...register("description", { required: "please enter description" })}
        />
        <br />
        <br />
        <button style={{backgroundColor:"green",padding:"7px"}} onClick={upt_post}>UpdatePost</button>&nbsp;&nbsp;&nbsp;
      <button onClick={()=>navigater("/dashboard")} style={{backgroundColor:"yellow",padding:"7px"}}>show post</button>
      </form>
    </div>
  );
}
