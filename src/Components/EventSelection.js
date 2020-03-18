import React, { Component } from 'react'
import FormCard from './FormCard'
import '../Styles/App.css';

export class EventSelection extends Component {
    render() {
        var destination = this.props.location.state.info.data
        var sdd = this.props.location.state.info.sdd
        return (
            <div>
                {/* loads the FormCard component into the page, passing in appropriate information */}
                <FormCard c1={destination.color1} c2={destination.color2} width="100" sdd={sdd} 
                location={destination} events={destination.events} id={destination.id}/>
            </div>
        )
    }
}
export default EventSelection
