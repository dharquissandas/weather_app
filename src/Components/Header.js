import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome } from '@fortawesome/free-solid-svg-icons';


export class Header extends Component {
    push = () => {
        this.props.history.push({
            pathname: '/Search'
        })
    }

    pushHome = () => {
        this.props.history.push({
            pathname: '/Home',
            state: {
                data : this.props.sdd
            }
        })
    }

    render() {
        console.log(this.props.sdd)
        return (
            // returns the header component for the top of each page
            <div style={header}>
                <div style={inner}>
                    {/* creates an option menu button */}
                    <div style={btnContainer}><button onClick={this.pushHome} className="btn"><FontAwesomeIcon icon={faHome} /></button></div>
                    {/* creates a search text field */}
                    <div style={searchContainer}><p>Weather</p></div>
                    {/* creates a search button */}
                    <div style={btnContainer}><button onClick={this.push} className="btn"><FontAwesomeIcon icon={faSearch} /></button></div>
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
    verticalAlign: "text-bottom",
    marginTop: "0.8em"
}

// styling for the button
const btnContainer = {
    flex : "1",
    textAlign: "center"
}
export default Header