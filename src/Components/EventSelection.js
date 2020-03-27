import React, { Component } from 'react'
import FormCard from './FormCard'
import '../Styles/App.css';
import {Link} from 'react-router-dom'
import Header from './Header'

export class EventSelection extends Component {
    render() {
        var destination = this.props.location.state.info.data
        var sdd = this.props.location.state.info.sdd
        var pos = this.props.match.params.id
        return (
            <div>
                <Header history = {this.props.history} />
                <div className="horizontalScroll">
                    {/* creates a home button that goes back to the home page */}
                    <Link style={marginLeft} id="homebtn" className="navlinks linkStyle" to={{
                        pathname: `/Home`
                        }}>
                            <p id="homenav">Home</p>
                    </Link>
                    {/* creates a schedule holiday button for the user to create a schedule for a specific destination */}
                </div>
                {/* loads the FormCard component into the page, passing in appropriate information */}
                <FormCard c1={destination.color1} c2={destination.color2} width="100" sdd={sdd} 
                location={destination} events={destination.events} id={destination.id}/>
            </div>
        )
    }
}

const marginLeft = {
    marginLeft: "0.4em" 
}
export default EventSelection
