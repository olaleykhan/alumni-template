import React from "react";
// import { FaAngleDown } from "react-icons/fa";


import "./filterBar.css"



const filterBar = (props)=>{

    const dropDown = props.select.map((item)=>{
        return  <option  value={item}>{item}</option>
    })
    return(
        <>
            <div >
            <select className="select-option" name="pets" id="pet-select">
                {dropDown}   
            </select>
                {/* <FaAngleDown/> */}
            </div>
        </>
    )
}

export default filterBar;