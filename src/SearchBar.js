import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from "@mui/icons-material/Close";

function SearchBar({ data }) {
    const [selectedTag, setTags] = useState([]);

    const tagList = [];

    const addToList = (tag) => {
        tagList.push(tag);
        console.log(tagList);
    }

    const handleInput = (event) => {
       const searchWord = event.target.value;
       const newFilter = data.filter((value) => {
        return value.first_name.toLowerCase().startsWith(searchWord.toLowerCase());
      });

      setTags(newFilter);
      }
    return(
        <div className="search">
            <div className="searchInputs">
                <input type="text" placeholder="Enter tags" onChange={handleInput}/>
                <div className="searchIcon">
                    <SearchIcon/>
                </div>
            </div>
            {selectedTag.length != 0 && (
                <div className="dataResult">
                {selectedTag.map((value, key)=>{
                    return(
                        <div className="dataItem"> 
                            {value.first_name}
                        </div>
                    )
                })}

            </div>
            )}
            

        </div>
    )
}

export default SearchBar;