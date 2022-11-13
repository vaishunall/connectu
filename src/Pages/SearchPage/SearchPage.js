import React, { Component, useState } from 'react'
import "./SearchPage.css"
import { Multiselect } from 'multiselect-react-dropdown';
import SearchCard from '../../Components/Search-card/Search-card'
import { Tags } from './Tags';
import { Objects } from './Objects';


export default function SearchPage() {
    const [temp, setTemp] = useState([]);

    const [selectedTags, setSelectedTags] = useState([]);

    Tags.forEach(item => {
        selectedTags.push(item.tag_name);
      });
    
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
                        options={selectedTags}
                        onRemove={(event) => console.log(event)}
                        onSelect={(event) => console.log(event)}
                        placeholder={"Enter Search Tag"}
                        style={{ chips: { background: "#D26E63" }, searchBox: { border: 0 } }}
                    />
                </div>
            </div>
            
            <div className="results-div">
                {Objects.forEach(i => {
                    if(selectedTags.some(r=> i.tags.includes(r))){
                        <SearchCard className="card" data={i.tags, i.header, i.name, i.uni, i.club}/>
                    }
                    
              })}
                {/* <SearchCard className="card" data={{tags:["Diversity", "Inclusivity", "Women"], header:"Women in Tech",name:"Faiza", uni:"The University of Texas at Dallas", club:"Society of Women Engineers", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum sapien sed aliquet ultricies. Nulla at risus sit amet libero semper sodales. Duis molestie sollicitudin neque, non commodo neque porttitor ut. Nullam gravida, turpis"}}/>
                <SearchCard className="card" data={{tags:["Diversity", "Inclusivity"],header:"Women in Tech",name:"Faiza", uni:"The University of Texas at Dallas", club:"Society of Women Engineers", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum sapien sed aliquet ultricies. Nulla at risus sit amet libero semper sodales. Duis molestie sollicitudin neque, non commodo neque porttitor ut. Nullam gravida, turpis"}}/>
                <SearchCard className="card" data={{tags:["Minority"],header:"Women in Tech",name:"Faiza", uni:"The University of Texas at Dallas", club:"Society of Women Engineers", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum sapien sed aliquet ultricies. Nulla at risus sit amet libero semper sodales. Duis molestie sollicitudin neque, non commodo neque porttitor ut. Nullam gravida, turpis"}}/>
                <SearchCard className="card" data={{tags:["Minority", "Inclusivity"],header:"Women in Tech",name:"Faiza", uni:"The University of Texas at Dallas", club:"Society of Women Engineers", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum sapien sed aliquet ultricies. Nulla at risus sit amet libero semper sodales. Duis molestie sollicitudin neque, non commodo neque porttitor ut. Nullam gravida, turpis"}}/>
                <SearchCard className="card" data={{tags:["Diversity", "LGBTQ+"],header:"Women in Tech",name:"Faiza", uni:"The University of Texas at Dallas", club:"Society of Women Engineers", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum sapien sed aliquet ultricies. Nulla at risus sit amet libero semper sodales. Duis molestie sollicitudin neque, non commodo neque porttitor ut. Nullam gravida, turpis"}}/>
                <SearchCard className="card" data={{tags:["Inclusivity", "Cloud"],header:"Women in Tech",name:"Faiza", uni:"The University of Texas at Dallas", club:"Society of Women Engineers", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum sapien sed aliquet ultricies. Nulla at risus sit amet libero semper sodales. Duis molestie sollicitudin neque, non commodo neque porttitor ut. Nullam gravida, turpis"}}/>
                <SearchCard className="card" data={{tags:["Diversity", "ML"],header:"Women in Tech",name:"Faiza", uni:"The University of Texas at Dallas", club:"Society of Women Engineers", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum sapien sed aliquet ultricies. Nulla at risus sit amet libero semper sodales. Duis molestie sollicitudin neque, non commodo neque porttitor ut. Nullam gravida, turpis"}}/> */}

            </div>
        </div>
    )

}
