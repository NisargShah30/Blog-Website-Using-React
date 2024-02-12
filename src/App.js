import './App.css';
import Home from './Pages/Home/Home'
import Blog from './Pages/Blog/Blog'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const App = () => (
  <div className='cointainer'>
    <Routes>
      <Route path='/' exact Component={Home} />
      <Route path='/blog/:id' Component={Blog} />
    </Routes>
  </div>
);


export default App
// Route ma na btave to aene Routes ma wrap krvu // 
// and index.js ma app.js ne <BrowserRouter> ma wrap krvu // 

