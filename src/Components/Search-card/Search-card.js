import React, { Component } from 'react'
import "./Search-card.css"
import cardImage1 from "../../Assets/nt-bill 1.png"
import StarOutlineIcon from '@mui/icons-material/StarOutline';

export default function SearchCard({data}) {
    return (
      <div className='basic'>
        <header className="main-header">
        <nav className="nav">
        </nav>
        </header>
        <main>
        <div className="card1" >
            <div className="cardContents">
                <div className="cardMain">
                
                <img className="eventImage" src={cardImage1}></img>
                <div className="cardBody">

                    <div className="cardHeader">{data.header}</div>
                    <div className="cardDetails">
                    <div className="name">{data.name}</div>
                    <div className="university">{data.uni}</div>
                    <div className="club">{data.club}</div></div>
                </div>
                <div className="starIcon">
                <StarOutlineIcon></StarOutlineIcon></div>
                </div>
        
                <div className="cardTags">
                <div className="tag"><div className="tagText">diversity</div></div>
                <div className="tag"><div className="tagText">inclusion</div></div>
                </div>
            </div> 
        </div>
        </main>
      </div>
    )
}