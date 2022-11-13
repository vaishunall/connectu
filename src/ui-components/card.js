import React, { Component } from 'react'
import "./card.css"

export default class Card extends Component {
  render() {
    return (
      <div>
        <header className="main-header">
        <nav className="nav">
        </nav>
        </header>
        <main>
        <div className="card" >
            <div className="cardContents">
                <div className="cardBody">
                    <div className="cardHeader">Women in the Tech World</div>
                    <div className="cardDetails">
                    <div className="name">Faiza Rahman</div>
                    <div className="university">The University of Texas at Dallas</div>
                    <div className="club">Society of Women Engineers</div></div>
                </div>
                <div className="cardDescription">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum sapien sed aliquet ultricies. Nulla at risus sit amet libero semper sodales. Duis molestie sollicitudin neque, non commodo neque porttitor ut. Nullam gravida, turpis </p>  
                </div>
            </div> 
        </div>
        </main>
      </div>
    )
  }
}
