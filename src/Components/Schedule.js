import React, { Component } from 'react'
import Label from './Label'
import {Link} from 'react-router-dom'

export class Schedule extends Component {
    state = {
        obj : this.props.location.state.selectedInformation,
        sel : this.props.location.state.selectedInformation.selections,
        sdd : this.props.location.sdd
    }

    
    deleteItem = () => {
        //console.log(this.props.location.sdd)
        for(var i = 0; i < this.state.sdd.length; i++){
            if(this.state.sdd[i] === this.state.obj){
                this.setState(
                    this.state.sdd.splice(i, 1)
                )
            }
        }

        this.props.history.push({
            pathname: '/',
            state: {
                data : this.state.sdd
            }
        })
    }


    render() {
        var sel = this.state.sel
        var sdd = this.state.sdd
    
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

                    <div onClick={this.deleteItem} className="navlinks">
                        <div ><p>Delete</p></div>
                    </div>
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
