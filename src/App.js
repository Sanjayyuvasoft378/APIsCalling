import "./App.css";
import Signup from "./Components/signup";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import GetPost from "./Components/GetPost";
import AddPost from "./Components/AddPost";
import Home from "./Components/Home";
import Logout from "./Components/Logout";
import Aboutus from "./Components/Aboutus";
import ViewById from "./Components/ViewById";
import UpdatePosts from "./Components/updatepost";


function App() {
  const user_token = localStorage.getItem("token")
  return (
    <>
    <>
    <div>
      {user_token ?
      <>
      <Link to="/"><strong>Home</strong></Link>&nbsp;&nbsp;
    <Link to="/dashboard"><strong>Dashboard</strong></Link>&nbsp;&nbsp;
    <Link to="/logout"><strong>Logout</strong></Link>&nbsp;&nbsp;

      </>
      :
      <>
    <Link to="/"><strong>login</strong></Link>&nbsp;&nbsp;
    <Link to="/signup"><strong>Signup</strong></Link>&nbsp;&nbsp;
    <Link to="/about"><strong>About Us</strong></Link>&nbsp;&nbsp;
    {/* <Link to="/signup"><strong>Signup</strong></Link>&nbsp;&nbsp; */}

      </>
      }
    </div>
    </>
    <div className="App">
      <Routes>
        { user_token ?
        <>
         <Route path="/dashboard" element={<GetPost />} />
         <Route path="/about" element={<Aboutus />} />
        <Route path="/addpost" element={<AddPost />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/view/:id" element={<ViewById />} />
        <Route path="/delete/:id" element={<GetPost />} />
        <Route path="/update/:id" element={<UpdatePosts />} />
        </>
        :
        <>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<Aboutus />} />
        </>
}
      </Routes>
    </div>
    </>
  );
}
export default App;