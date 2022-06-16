import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../redux/Action/LoginAction";
import AddPosts from "./AddPost";
export default function GetPost() {
  const posts = useSelector((state) => state.userData);
  console.log("gdsdghdfj", posts);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("121221");
    dispatch(getPost());
  }, []);
  return (
    <div className="App">
     
      <table>
      {/* <button onClick={AddPosts}>AddPost</button> */}
        <tr>
          <th>id</th>
          <th>Title</th>
          <th>Description</th>
          <th>User_Id</th>
          <th>Action</th>
        </tr>
        {posts?.posts?.map((item, index) => {
          return (
            <tr key={index}>
              <td><p>{item.id}</p></td>
              <td><p>{item.title}</p></td>
              <td><p>{item.description}</p></td>
              <td><p>{item.user_id}</p></td>
              <button>View</button>&nbsp;
              <button>Edit</button>&nbsp;
              <button>delete</button>&nbsp;
            </tr>
          )})}
      </table>
    </div>
  );
}
