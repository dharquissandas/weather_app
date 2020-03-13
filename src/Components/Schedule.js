import React, { Component } from 'react'
import Label from './Label'
import {Link} from 'react-router-dom'
import '../Styles/Schedule.css';

export class Schedule extends Component {
    render() {
        var sel = this.props.location.state.selectedInformation.selections
        var sdd = this.props.location.state.sdd
        sdd.push(this.props.location.state.selectedInformation)
        console.log(sdd)
        return (
            <div>
                <div className="horizontalScroll">
                    <Link style={marginLeft} className="navlinks linkStyle" to={{
                        pathname:`/`,
                        state : {
                            data : sdd
                        }
                    }}>
                        <div style={marginLeft} ><p>Home</p></div>
                    </Link>
                    <div className="navlinks"><p>Delete</p></div>
                </div>
                <div className="welcome"><Label text="Schedule for Events"/></div>
                <div className="events">
                    <div>
                        {sel != null && sel.map((value, index) => {
                                return(
                                    <div className ="value" key={index}>
                                        <label className="label">{value}</label>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const marginLeft = {
    marginLeft: "0.4em" 
}

export default Schedule
