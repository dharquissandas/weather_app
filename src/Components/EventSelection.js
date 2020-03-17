import React, { Component } from 'react'
import FormCard from './FormCard'
import Label from './Label';
import '../Styles/App.css';

export class EventSelection extends Component {
    render() {
        var destination = this.props.location.state.info.data
        var sdd = this.props.location.state.info.sdd
        return (
            <div>
                {/* loads the FormCard component into the page, passing in appropriate information */}
                <div className="welcome"><Label text="Select events"/></div>
                <FormCard width="100" height="500" sdd={sdd} location={destination} events={destination.events} id={destination.id}/>
            </div>
        )
    }
}
export default EventSelection
