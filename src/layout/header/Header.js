import React, { Component } from 'react';
import search from '../../assets/icons/search.svg'

import { FaSearch } from "react-icons/fa";
import './header.css'



class Header extends Component {
    render(){
        return(
            <>
                <div className="search-bar">
                    <input type="search" placeholder="please inptut"/>
                    <FaSearch/>
                </div>
            </>
        )
    }
}

export default Header