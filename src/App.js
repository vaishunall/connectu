/*import './App.css';
import { Users } from './users';
import React, { useState } from 'react';
import Table from "./Table";
import Tag_Search from './Tag_Search';
import SearchBar from './SearchBar';

 function App() {
  const [query, setQuery] = useState("");
  const keys = ["first_name", "last_name", "email"];

  const search = (data) => {
    return data.filter(user=> 
      keys.some(key=>user[key].toLowerCase().startsWith(query))
      );
  }
  console.log(Users.filter(user=> user.first_name.toLowerCase().startsWith(query)));
  return (
    <div className="App">
      {/* <input type="text" placeholder="Search" className="search" onChange={event => setQuery(event.target.value)}/>
      <div className="results">
       <Table data={search(Users)}/> 
      </div> 
      <SearchBar data={Users}/>

      
      
    </div> 
    
  );
}

export default App;


import { useState } from "react";
import SelectComponent from "./SelectComponent";
import "./styles.css";
import { Users } from './users';

const options = [
  { key: 1, value: "Test 1" },
  { key: 2, value: "Test 2" },
  { key: 3, value: "Test 3" },
  { key: 4, value: "Test 4" }
];
export default function App() {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="App">
      <h1>Custom Dropdown</h1>
      <SelectComponent
        options={options}
        onChange={(item) => setSelectedOption(item)}
        selectedKey={selectedOption}
        placeholder={"type to search"}
      />
      <p>selected option: {selectedOption}</p>
    </div>
  );
}

*/


import './App.css';
import { Users } from './users';
import React, { useState } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';

function App() {
  const [temp, setTemp] = useState([]);

  Users.forEach(item => {
    temp.push(item.first_name);
  });
  return (
    <div>
      <Multiselect
        isObject={false}
        options={temp} // Options to display in the dropdown
        onRemove={(event) => console.log(event)}
        onSelect={(event) => console.log(event)}
        placeholder={"Enter Search Tag"}
        style={{chips:{background:"red"}}}
        />
    </div>
  )
}
export default App;