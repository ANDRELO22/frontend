import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';


import  Navbar  from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes }  from 'react-router-dom';
import VideoList from './components/videos/VideoList';
import VideoFrom from './components/videos/VideoForm';

ReactDOM.render(
    <BrowserRouter>
    <Navbar/>
    <div className="container">
    <Routes>
      <Route  path="/" element={ <VideoList/> } />
      <Route path="/new-video" element={ <VideoFrom/> } />
      <Route path="/update/:id" element={ <VideoFrom/> } />
    </Routes>
    <ToastContainer />

    </div>
    
    </BrowserRouter>,
  document.getElementById('root')
);


