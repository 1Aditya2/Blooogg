import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup/Signup';
import Signin from './pages/Signin/Signin';
import Landing from './pages/Landing/Landing';
import Protect from './components/ProtectedRoute/Protect';
import Home from './pages/Home/Home';
import NotLogged from './components/NotLogged/NotLogged';
import BlogView from './pages/BlogView/BlogView';
import Navbar from './components/Navbar/Navbar';
import WriteBlog from './pages/WriteBlog/WriteBlog';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Protect />}>
          <Route element={<Navbar />}>
            <Route path='/' element={<Home />} />
            <Route path='/:id' element={<BlogView />} />
            <Route path='/write' element={<WriteBlog />} />
            <Route path='/myBlogs' />

          </Route>
        </Route>
        <Route element={<NotLogged />}>
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />

        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
