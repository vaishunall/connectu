import React, { Component } from 'react'
import "./Search-card.css"
import cardImage1 from "../../Assets/nt-bill 1.png"
import StarOutlineIcon from '@mui/icons-material/StarOutline';

export default function SearchCard({ data }) {
  console.log(data.tags);
  
  const tags = ["Diversity", "Inclusion"];
  return (
    <div>
      <header className="main-header">
        <nav className="nav">
        </nav>
      </header>
      <main>
        <div className="card" >
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
              {data.tags.map((key, i) => (
                <div className="tag" key={i}>
                  <span className="tagText">{data.tags[i]}</span>
                </div>
              ))}
              

            </div>
          </div>
        </div>
      </main>
    </div>
  )
}