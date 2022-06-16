import logo from './logo.svg';
import './App.css';
import Login from './Components/login';
import Signup from './Components/signup';
import { Link,Route,Routes } from 'react-router-dom';
import GetPost from './Components/GetPost';
import AddPost from './Components/AddPost';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/getpost' element={<GetPost />} />
        <Route path='/addpost' element={<AddPost />} />
      </Routes>
      
      
    </div>
  );
}

export default App;
