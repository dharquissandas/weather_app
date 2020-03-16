import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSlidersH } from '@fortawesome/free-solid-svg-icons';
import {withRouter} from 'react-router-dom';


export class Header extends Component {    
    render() {
        return (
            <div style={header}>
            <div style={inner}>
                <div style={btnContainer}><button className="btn"><FontAwesomeIcon icon={faSlidersH} /></button></div>
                <div style={searchContainer}><input className="search" type="text" placeholder="Holiday Destinations"></input></div>
                <div style={btnContainer}><button className="btn"><FontAwesomeIcon icon={faSearch} /></button></div>
            </div>
        </div>
        )
    }
}
const header = {
    backgroundColor: "#2a3d51",
    color: "#fff",
    height:"3em",
    boxShadow: "0 8px 6px -6px black",
    transition: "0.5s",
    borderRadius: "0 0 5px 5px",
}

const inner = {
    display: "flex",
    backgroudColor: "#fff",
    paddingTop: "0.2em"
}

const searchContainer = {
    flex : "3",
    textAlign: "center",
    verticalAlign: "text-bottom"
}

const btnContainer = {
    flex : "1",
    textAlign: "center"
}
export default Header