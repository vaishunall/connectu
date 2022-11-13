import React, { Component, useState, use } from 'react'
import "./SearchPage.css"
import Select from 'react-select';
import SearchCard from '../../Components/Search-card/Search-card'
import { Tags } from './Tags';
import { Objects } from './Objects';
import DisplayCards from './DisplayCards'


export default function SearchPage() {
    const [temp, setTemp] = useState();

    const tags = [
        { value: "diversity", label: "Diversity" },
        { value: "Inclusivity", label: "Inclusivity" },
        { value: "Women", label: "Women" },
        { value: "Blockchain", label: "Blockchain" },
        { value: "Cloud", label: "Cloud" },
        { value: "LGBTQ+", label: "LGBTQ+" },
        { value: "ML", label: "ML" },
        { value: "AI", label: "AI" },
        { value: "UX", label: "UX" },
        { value: "Cyber-Security", label: "Cyber-Security" },

    ];
    const [query, setQuery] = useState("");


    const [selectedOptions, setSelectedOptions] = useState();

    function handleSelect(data) {
        setSelectedOptions(data);
        console.log("data", data);
        setTemp(data);
    }

    return (
        <div>
            <div className="search-input-div">
                <div>
                    <input className="search-input" placeholder="Search an event" onChange={event => setQuery(event.target.value)} />
                </div>
                <div>
                    OR
            </div>
                <div className="tag-input"> 
                    <Select
                        options={tags}
                        placeholder="Select Tags"
                        value={selectedOptions}
                        onChange={handleSelect}
                        isMulti
                        style={{alignText: 'left'}}
                        theme={(theme) => ({
                            ...theme,
                            borderRadius: 25,
                            borderWidth: 2,
                            fontSize: 10,
                            colors: {
                              ...theme.colors,
                              primary25: '#d26e63',
                              primary: 'black',
                              width: 600,
                            },
                          })}
                        isSearchable={true}
                    />
                </div>
            </div>

            <div className="results-div">
                <SearchCard className="card" data={{ tags: ["Diversity", "Inclusivity", "Women"], header: "Women in Tech", name: "Faiza", uni: "The University of Texas at Dallas", club: "Society of Women Engineers", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum sapien sed aliquet ultricies. Nulla at risus sit amet libero semper sodales. Duis molestie sollicitudin neque, non commodo neque porttitor ut. Nullam gravvaluea, turpis" }} />
                <SearchCard className="card" data={{ tags: ["Diversity", "Inclusivity"], header: "Women in Tech", name: "Faiza", uni: "The University of Texas at Dallas", club: "Society of Women Engineers", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum sapien sed aliquet ultricies. Nulla at risus sit amet libero semper sodales. Duis molestie sollicitudin neque, non commodo neque porttitor ut. Nullam gravvaluea, turpis" }} />
                <SearchCard className="card" data={{ tags: ["Minority"], header: "Women in Tech", name: "Faiza", uni: "The University of Texas at Dallas", club: "Society of Women Engineers", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum sapien sed aliquet ultricies. Nulla at risus sit amet libero semper sodales. Duis molestie sollicitudin neque, non commodo neque porttitor ut. Nullam gravvaluea, turpis" }} />
                <SearchCard className="card" data={{ tags: ["Minority", "Inclusivity"], header: "Women in Tech", name: "Faiza", uni: "The University of Texas at Dallas", club: "Society of Women Engineers", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum sapien sed aliquet ultricies. Nulla at risus sit amet libero semper sodales. Duis molestie sollicitudin neque, non commodo neque porttitor ut. Nullam gravvaluea, turpis" }} />
                <SearchCard className="card" data={{ tags: ["Diversity", "LGBTQ+"], header: "Women in Tech", name: "Faiza", uni: "The University of Texas at Dallas", club: "Society of Women Engineers", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum sapien sed aliquet ultricies. Nulla at risus sit amet libero semper sodales. Duis molestie sollicitudin neque, non commodo neque porttitor ut. Nullam gravvaluea, turpis" }} />
                <SearchCard className="card" data={{ tags: ["Inclusivity", "Cloud"], header: "Women in Tech", name: "Faiza", uni: "The University of Texas at Dallas", club: "Society of Women Engineers", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum sapien sed aliquet ultricies. Nulla at risus sit amet libero semper sodales. Duis molestie sollicitudin neque, non commodo neque porttitor ut. Nullam gravvaluea, turpis" }} />
                <SearchCard className="card" data={{ tags: ["Diversity", "ML"], header: "Women in Tech", name: "Faiza", uni: "The University of Texas at Dallas", club: "Society of Women Engineers", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum sapien sed aliquet ultricies. Nulla at risus sit amet libero semper sodales. Duis molestie sollicitudin neque, non commodo neque porttitor ut. Nullam gravvaluea, turpis" }} />
            </div>
        </div>
    )

}
