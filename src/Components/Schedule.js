import React, { Component } from 'react'
import Label from './Label'
import Card from './Card'
import {Link} from 'react-router-dom'

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
                <div className="welcome"><Label text="Select events"/></div>
                <div className="welcome">
                    <div className="sdd">
                        {sel != null && sel.map((value, index) => {
                                return(
                                    <div key={index}>
                                        <p>{value}</p>
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
