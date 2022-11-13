import React, { Component, useState } from 'react'
import "./SearchPage.css"
import { Multiselect } from 'multiselect-react-dropdown';
import SearchCard from '../../Components/Search-card/Search-card'


export default function SearchPage() {
    const [temp, setTemp] = useState(["A", "B", "C"]);

    return (
        <div>


            <div className="search-input-div">
                <div>
                    <input className="search-input" placeholder="Search an event" />
                </div>
                <div>
                    OR
            </div>
                <div className="tag-input">
                    <Multiselect
                        isObject={false}
                        options={temp}
                        onRemove={(event) => console.log(event)}
                        onSelect={(event) => console.log(event)}
                        placeholder={"Enter Search Tag"}
                        style={{ chips: { background: "red" }, searchBox: { border: 0 } }}
                    />
                </div>
            </div>
            <div className="results-div">
                <SearchCard className="card" data={{header:"Women in Tech",name:"Faiza", uni:"The University of Texas at Dallas", club:"Society of Women Engineers", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum sapien sed aliquet ultricies. Nulla at risus sit amet libero semper sodales. Duis molestie sollicitudin neque, non commodo neque porttitor ut. Nullam gravida, turpis"}}/>
                <SearchCard className="card" data={{header:"Women in Tech",name:"Faiza", uni:"The University of Texas at Dallas", club:"Society of Women Engineers", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum sapien sed aliquet ultricies. Nulla at risus sit amet libero semper sodales. Duis molestie sollicitudin neque, non commodo neque porttitor ut. Nullam gravida, turpis"}}/>
                <SearchCard className="card" data={{header:"Women in Tech",name:"Faiza", uni:"The University of Texas at Dallas", club:"Society of Women Engineers", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum sapien sed aliquet ultricies. Nulla at risus sit amet libero semper sodales. Duis molestie sollicitudin neque, non commodo neque porttitor ut. Nullam gravida, turpis"}}/>
                <SearchCard className="card" data={{header:"Women in Tech",name:"Faiza", uni:"The University of Texas at Dallas", club:"Society of Women Engineers", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum sapien sed aliquet ultricies. Nulla at risus sit amet libero semper sodales. Duis molestie sollicitudin neque, non commodo neque porttitor ut. Nullam gravida, turpis"}}/>
                <SearchCard className="card" data={{header:"Women in Tech",name:"Faiza", uni:"The University of Texas at Dallas", club:"Society of Women Engineers", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum sapien sed aliquet ultricies. Nulla at risus sit amet libero semper sodales. Duis molestie sollicitudin neque, non commodo neque porttitor ut. Nullam gravida, turpis"}}/>
                <SearchCard className="card" data={{header:"Women in Tech",name:"Faiza", uni:"The University of Texas at Dallas", club:"Society of Women Engineers", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum sapien sed aliquet ultricies. Nulla at risus sit amet libero semper sodales. Duis molestie sollicitudin neque, non commodo neque porttitor ut. Nullam gravida, turpis"}}/>
                <SearchCard className="card" data={{header:"Women in Tech",name:"Faiza", uni:"The University of Texas at Dallas", club:"Society of Women Engineers", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum sapien sed aliquet ultricies. Nulla at risus sit amet libero semper sodales. Duis molestie sollicitudin neque, non commodo neque porttitor ut. Nullam gravida, turpis"}}/>

            </div>
        </div>
    )

}
