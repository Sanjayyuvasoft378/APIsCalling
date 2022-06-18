import axios from "axios";
export const SignupAction = (data) => {
  console.log("object", data);
  return (dispatch) => {
    const body = {
      user: {
        email: data.email,
        password: data.password,
        password_confirmation: data.password_confirmation,
      },
    };
    axios
      .post("https://react-rails-api-demo.herokuapp.com/api/v1/signup/", body)
      .then((res) => {
        localStorage.setItem("user-info", JSON.stringify(res.data));
        dispatch({
          type: "GET_SIGNUP",
          payload: res.data,
        });
      });
  };
};

export const AddPost = (data) => {
  return (dispatch) => {
    const Token = localStorage.getItem("token");
    const user_id = localStorage.getItem("user_id");
    console.log("object", Token);
    const body = {
      post: {
        title: data.title,
        description: data.description,
        user_id: user_id,
      },
    };

    axios
      .post("https://react-rails-api-demo.herokuapp.com/api/v1/posts", body, {
        headers: { Authorization: `Bearer ${Token}` },
      })
      .then((res) => {
        dispatch({
          type: "ADD_POST",
          payload: res.data,
        });
      });
  };
};
export const getLogin = (data) => {
  console.log(5656, data);
  return (dispatch) => {
    const body = {
      user: {
        email: data.email,
        password: data.password,
      },
    };
    axios
      .post(`https://react-rails-api-demo.herokuapp.com/api/v1/signin`, body)
      .then((res) => {
        console.log(34534, res.data);
        localStorage.setItem("user-info", JSON.stringify(res.data));
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user_id", res.data.user.id);
        dispatch({
          type: "GET_LOGIN",
          payload: res.data,
        });
      });
  };
};
export const getPostById = (id) => {
  console.log("getpostby id call hua");
  const Token = localStorage.getItem("token");
  return (dispatch) => {
    axios
      .get(`https://react-rails-api-demo.herokuapp.com/api/v1/posts/ ${id}`, {
        headers: { Authorization: `Bearer ${Token}` },
      })
      .then((res) => {
        console.log("object", res.data);
        dispatch({
          type: "GET_POST_BY_ID",
          payload: res.data,
        });
      });
  };
};

export const deletePost = (id) => {
  console.log("post has been deleted");
  const Token = localStorage.getItem("token");
  return (dispatch) => {
    axios
      .delete(
        `https://react-rails-api-demo.herokuapp.com/api/v1/posts/ ${id}`,
        {
          headers: { Authorization: `Bearer ${Token}` },
        }
      )
      .then((res) => {
        console.log("object", res.data);

        dispatch({
          type: "DELETE_POST",
          payload: res.data,
        });
      });
  };
};
export const getPost = () => {
  console.log("object");
  return (dispatch) => {
    const Token = localStorage.getItem("token");
    console.log("object,1", Token);
    axios
      .get("https://react-rails-api-demo.herokuapp.com/api/v1/posts", {
        headers: { Authorization: `Bearer ${Token}` },
      })
      .then((res) => {
        console.log("123456789", res.data);
        dispatch({
          type: "GET_POST",
          payload: res.data,
        });
      });
  };
};

export const UpdatePost = (data,id) => {
  return (dispatch) => {
    const Token = localStorage.getItem("token");
    const user_id = localStorage.getItem("user_id");
    console.log("object", Token);
    const body = {
      post: {
        title: data.title,
        description: data.description,
        user_id: user_id,
      },
    };
    axios
      .put(`https://react-rails-api-demo.herokuapp.com/api/v1/posts/${id}`, body, {
        headers: { Authorization: `Bearer ${Token}` },
      })
      .then((res) => {
        dispatch({
          type: "UPT_POST",
          payload: res.data,
        });
      });
  };
};
