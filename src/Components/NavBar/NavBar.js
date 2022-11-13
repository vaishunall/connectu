import React from 'react'
import './NavBar.css'
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
          <ul className="list">
              
              <li className="items">
              <Link className='link' to="/">logo</Link>
              </li>
              <li className="items" style={{marginLeft:'65%'}}>
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