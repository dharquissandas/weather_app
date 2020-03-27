import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faLessThan } from '@fortawesome/free-solid-svg-icons';
import Label from './Label'
import Card from './Card'
import {Link} from 'react-router-dom'

function Search(props) {
    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);

    const handleChange = event => {
       setSearchTerm(event.target.value);
    };

    React.useEffect(() => {
        const results = props.suggesteddestinations.filter(dest =>
          dest.name.toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
      }, [searchTerm]);

    return (
        <div>
            {console.log(props)}    
            <div style={header}>
                <div style={inner}>
                    {/* creates an option menu button */}
                    <div style={btnContainer}><button onClick={props.history.goBack} className="btn"><FontAwesomeIcon icon={faLessThan} /></button></div>
                    {/* creates a search text field */}
                    <div style={searchContainer}><input value= {searchTerm} onChange= {handleChange} className="search" type="text" onfocus="this.placeholder=''" placeholder="Search Holiday Destinations"></input></div>
                    {/* creates a search button */}
                    <div style={btnContainer}><button className="btn"><FontAwesomeIcon icon={faSearch} /></button></div>
                </div>
            </div>
            <Label className="welcome" text="Search Results"/>
                <div className="verticalScrollSearch welcome">
                    {/* display all of the suggested destination cards in a vertical scroll bar 
                    with links to the current weather pages for each destination */}
                    {searchResults.length === 0 ?
                    <div className="noSE">
                        {<p id="noschedule">No Destinations Found</p>}
                    </div>:
                    searchResults.map((dest) =>(
                        <Link className="linkStyle" key={dest.id} to={{
                            pathname: `CurrentWeather/${dest.id}`,
                            state:{info:{
                                data : props.suggesteddestinations,
                                sdd : props.scheduleddestinations
                            }}
                        }}>
                            <Card back={dest.url} title={dest.name} weather={dest.temp} desc={dest.desc} width="100" height="110"/>
                        </Link>              
                    ))}
                </div>
        </div>
    )
}

//returns styling for the header
const header = {
    backgroundColor: "#2a3d51",
    color: "#fff",
    height:"3em",
    boxShadow: "0 8px 6px -6px black",
    transition: "0.5s",
    borderRadius: "0 0 5px 5px",
    marginBottom: "0.4em" 
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


export default Search
