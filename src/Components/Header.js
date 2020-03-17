import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSlidersH } from '@fortawesome/free-solid-svg-icons';
import {withRouter} from 'react-router-dom';


export class Header extends Component {    
    render() {
        return (
            // returns the header component for the top of each page
            <div style={header}>
            <div style={inner}>
                {/* creates an option menu button */}
                <div style={btnContainer}><button className="btn"><FontAwesomeIcon icon={faSlidersH} /></button></div>
                {/* creates a search text field */}
                <div style={searchContainer}><input className="search" type="text" placeholder="Holiday Destinations"></input></div>
                {/* creates a search button */}
                <div style={btnContainer}><button className="btn"><FontAwesomeIcon icon={faSearch} /></button></div>
            </div>
        </div>
        )
    }
}

//returns styling for the header
const header = {
    backgroundColor: "#2a3d51",
    color: "#fff",
    height:"3em",
    boxShadow: "0 8px 6px -6px black",
    transition: "0.5s",
    borderRadius: "0 0 5px 5px",
}

// more styling for the header
const inner = {
    display: "flex",
    backgroudColor: "#fff",
    paddingTop: "0.2em"
}

// styling for the search container
const searchContainer = {
    flex : "3",
    textAlign: "center",
    verticalAlign: "text-bottom"
}

// styling for the button
const btnContainer = {
    flex : "1",
    textAlign: "center"
}
export default Header