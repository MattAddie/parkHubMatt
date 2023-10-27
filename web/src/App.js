import './app.css'

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./components/pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import UserList from "./components/pages/userList/UserList";
import User from "./components/pages/user/User";
import NewUser from "./components/pages/newUser/NewUser";
import Analytics from './components/pages/analytics/Analytics';
import Login from './components/pages/auth/login/Login';
import { MainLayout } from './components/layout/MainLayout';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />      
        <Route path="home" element={<MainLayout/>}>
          <Route path="dashboard" element={<Home />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="users" element={<UserList />} />
          <Route path="user/:userId" element={<User/>} />
          <Route path="newUser" element={<NewUser/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
