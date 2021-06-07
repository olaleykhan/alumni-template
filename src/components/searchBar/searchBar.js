import React from "react";
import { FaSearch } from "react-icons/fa";


import "./searchBar.css"

const searchBar = ()=>{
    return(
        <>
            <div className="search-bar">
                <input type="search" placeholder="please inptut"/>
                <FaSearch/>
            </div>
        </>
    )
}

export default searchBar;