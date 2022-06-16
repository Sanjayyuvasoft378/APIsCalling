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
        console.log("object",Token);
        const body = {
            post:{
                title:data.title,
                description:data.description,
                user_id:data.user_id
            }
        }
        axios.post('https://react-rails-api-demo.herokuapp.com/api/v1/posts',body,{ headers: {"Authorization" : `Bearer ${Token}`} })
        .then((res) => {
        localStorage.setItem("user-info", JSON.stringify(res.data));
        localStorage.setItem("token", res.data.token);
        dispatch({
            type: "ADD_POST",
            payload: res.data,
          }); 
        })
    }
}
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
        dispatch({
          type: "GET_LOGIN",
          payload: res.data,
        });
      });
  };
};




export const getPost = () => {
  console.log("object");
  return (dispatch) => {
    const Token = localStorage.getItem("token");
    console.log("object,1",Token);
    axios
      .get("https://react-rails-api-demo.herokuapp.com/api/v1/posts",{ headers: {"Authorization" : `Bearer ${Token}`} })
      .then((res) => {
        console.log("123456789", res.data);
        dispatch({
          type: "GET_POST",
          payload: res.data,
        });
      });
  };
};
