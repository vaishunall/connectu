import React, { Component } from 'react';
import SearchCard from '../../Components/Search-card/Search-card';

export default class LandingPage extends Component {
  render() {
    return (
      <div>LandingPage
        <SearchCard className="card" data={{header:"Women in Tech",name:"Faiza", uni:"The University of Texas at Dallas", club:"Society of Women Engineers", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum sapien sed aliquet ultricies. Nulla at risus sit amet libero semper sodales. Duis molestie sollicitudin neque, non commodo neque porttitor ut. Nullam gravida, turpis"}}/>
      </div>
    )
  }
}
