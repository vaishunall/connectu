import React from 'react'
import './NavBar.css'
import { Link } from "react-router-dom";
import logoImg from "../../Assets/connectulogo1.png"

export default function NavBar() {
    return (
        <nav>
          <ul className="list">
              
              <li className="items">
              <Link className='link' to="/">
                <img className='logo-styling' src={logoImg}></img>
              </Link>
              </li>
              <li className="items" style={{marginLeft:'30%'}}>
              <Link className='link' to="search">search</Link>
              </li>
              <li className="items">
              <Link className='link' to="dashboard">dashboard</Link>
              </li>
              <li className="items">
              <Link className='link' to="profile">profile</Link>
              </li>
              <li className="button" >
              <Link className='buttonlink' to="login">login</Link>
              </li>
              
            </ul>
        </nav>
      )
   
  
}