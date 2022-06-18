import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, getPost, getPostById } from "../redux/Action/LoginAction";
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";
import UpdatePosts from "./updatepost";
export default function GetPost() {
  const navigater = useNavigate();
  const posts = useSelector((state) => state.userData);
  const dlt_data = useSelector((state) => state.deleteData);
  console.log("gdsdghdfj", posts);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("121221");
    dispatch(getPost());

    
  }, [dlt_data]);

  function singlePost(id){
    dispatch(getPostById(id))
    navigater (`/view/${id}`)
  }
  function deletepost(id){
    dispatch(deletePost(id))
  }

  // function upt_post(id){
  //   dispatch(UpdatePosts(id))
  // }

  return (
    <>
    <div className="App">
      <Table striped bordered hover className="table">
    
      <button style={{backgroundColor:"green",padding:"7px"} } onClick={()=>navigater("/addpost")}>AddPost</button>
        <thead>
        <tr>
          <th>PostId</th>
          <th>User_Id</th>
          <th>Title</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
        </thead>
        {posts?.posts?.map((item, index) => {
          return (
            <tbody>
            <tr key={index}>
              <td><p>{item.id}</p></td>
              <td><p>{item.user_id}</p></td>
              <td><p>{item.title}</p></td>
              <td><p>{item.description}</p></td>
             <td> <button style={{backgroundColor:"green",padding:"7px"}} onClick={()=>singlePost(item.id)}>View</button>&nbsp;
              <button style={{backgroundColor:"yellow",padding:"7px"}} onClick={()=>navigater(`/update/${item.id}`)}>Edit</button> &nbsp;
              <button style={{backgroundColor:"red",padding:"7px"}} onClick={()=> deletepost(item.id)}>delete</button>&nbsp;
              </td>
              
            </tr>
            </tbody>
          );
        })}
      </Table>
    </div>
    </>
  );
}
