import React, { Component } from 'react';


import SearchBar from '../../components/searchBar/searchBar';
import FilterBar from '../../components/filterBar/filterBar';


import './header.css'



class Header extends Component {
    render(){
        return(
            <>
                <div className="nav-bar">
                    <SearchBar/>
                    
                    <div className="flex">
                        <FilterBar title="category" select={["All","commerce","Agric", "Medicine"]}/>
                        <FilterBar title="order" select={["default", "Ascending", "defending" ]}/>
                        <FilterBar title="date" select={["default", "Ascending", "defending" ]}/>
                        
                    </div>
            
                </div>

            </>
        )
    }
}

export default Header