import React from 'react'
import style from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext';

const Navbar = () => {
  const { state} = useCartContext();
  //console.log(state.cartItems.length);
  return (
    <div className={style.container}>
        <div className={style.logo}><h1>UI</h1><p>React developer</p></div>
        <div>
            <NavLink to='/' className={style.item}>Home</NavLink>
            <NavLink to='/about' className={style.item}>About</NavLink>
            <NavLink to='/todo' className={style.item}>Todo-Task</NavLink>
            <NavLink to='/shopping' className={style.item}>Shopping</NavLink>
            <NavLink to='/cart' className={style.item}>Cart <span>{state.cartItems.length}</span></NavLink>
            <NavLink to='/contact' className={style.btn}>Contact</NavLink>
        </div>
    </div>
  )
}

export default Navbar