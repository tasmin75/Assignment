import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Todo from './pages/Todo';
import Shopping from './pages/shopping/Shopping';
import ProductCart from './pages/productCart/ProductCart';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <Router>
    <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/todo' element={<Todo/>}/>
      <Route path='/shopping' element={<Shopping/>}/>
      <Route path='/cart' element={<ProductCart/>}/>
      <Route path='/contact' element={<Contact/>}/>

      </Routes>
    </Router>
  );
}

export default App;
