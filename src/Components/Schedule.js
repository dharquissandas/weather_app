import React, { Component } from 'react'
import Label from './Label'
import {Link} from 'react-router-dom'
import '../Styles/Schedule.css';

export class Schedule extends Component {
    // initializes the state for the component with the props passed in from the form 
    state = {
        obj : this.props.location.state.selectedInformation,
        sel : this.props.location.state.selectedInformation.selections,
        sdd : this.props.location.sdd
    }

    // deletes the current schedule and redirects to the home page
    deleteItem = () => {
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

    // gets the weather, date, and description information for the available days
    // and returns an array of daily information
    dates = () => {
        var datetime1 = this.state.obj.information.dayone.dt_txt.split(" ")
        var date1 = {date: datetime1[0], weather : this.state.obj.information.dayone.main.temp, desc : this.state.obj.information.dayone.weather[0].main}
        var datetime2 = this.state.obj.information.daytwo.dt_txt.split(" ")
        var date2 = {date: datetime2[0], weather : this.state.obj.information.daytwo.main.temp, desc : this.state.obj.information.daytwo.weather[0].main}
        var datetime3 = this.state.obj.information.daythree.dt_txt.split(" ")
        var date3 = {date: datetime3[0], weather : this.state.obj.information.daythree.main.temp, desc : this.state.obj.information.daythree.weather[0].main} 
        var datetime4 = this.state.obj.information.dayfour.dt_txt.split(" ")
        var date4 = {date: datetime4[0], weather : this.state.obj.information.dayfour.main.temp, desc : this.state.obj.information.dayfour.weather[0].main}
        var datetime5 = this.state.obj.information.dayfive.dt_txt.split(" ")
        var date5 = {date: datetime5[0], weather : this.state.obj.information.dayfive.main.temp, desc : this.state.obj.information.dayfive.weather[0].main}
        return [date1, date2, date3, date4, date5]
    }

    // function for checking the available days that each activity can be completed during
    check = (value) => {
        var dates = this.dates()
        var available = []
        var startposition
        var endposition

        // find the starting and ending postions of the days from the form in the date array
        for (var j = 0; j < dates.length; j++) {
            if(this.state.obj.startdate === dates[j].date){
                startposition = j
            }
            if (this.state.obj.enddate === dates[j].date){
                endposition = j
            }
        }
        var count = (endposition - startposition)+1
        // loop through the available events in the destination object to find a specific activity
        for (var i = 0; i < this.state.obj.information.events.length; i++){
            if(value === this.state.obj.information.events[i].activity){   
                // once the activity is found, check weather information for each of the available dates to
                // see whether the activity can be completed on that day or not   
                while(startposition<=endposition){
                    // if the weather is over 15 C, the event is outdoor, and it is not raining, then the activity
                    // can take place on that day
                    if(dates[startposition].weather > 15 && this.state.obj.information.events[i].location === "outdoor" 
                        && dates[startposition].desc !== "Rain"){
                        available.push(dates[startposition].date)
                    }
                    else{
                        // if the event is indoor in can be completed any day
                        if(this.state.obj.information.events[i].location === "indoor"){
                            available.push(dates[startposition].date)
                        }
                    }
                    startposition++
                }        
                break
            }
        }
        // if there are no available dates for the activity, return a message informing the user
        if (available.length === 0){
            available = ["The weather may not be suitable for this activity during your trip."]
        }
        // if the activity can be completed on all of the available days, return a message informing the user
        if(available.length === count){
            available = ["Any day is suitable for this activity."]
        }
        return available
    }

    render() {
        var sel = this.state.sel
        var sdd = this.state.sdd
        return (
            <div >
                <div className="horizontalScroll">
                    {/* create the home button that takes the user back to the home page */}
                    <Link style={marginLeft} id="homebtn"  className="navlinks linkStyle" to={{
                        pathname:`/`,
                        state : {
                            data : sdd
                        }
                    }}>
                        <div style={marginLeft}><p>Home</p></div>
                    </Link>

                    {/* create the delete button that deletes the current schedule */}
                    <div onClick={this.deleteItem} className="navlinks" id="homebtn" >
                        <div><p>Delete</p></div>
                    </div>
                </div>
                <div className="welcome"><Label text="Schedule for Events"/></div>
                <div className="events">
                    <div className="verticalScroll schedule">
                        {/* for each of the selected events, print the available dates that the activity
                        may be completed during, or an appropriate message if the activity can be completed
                        on all or none of the days */}
                        {sel !== null && sel.map((value, index) => {
                            return(
                                <div className ="value" key={index} >
                                    <label className="label activity">{value}</label>
                                        {this.check(value).map((date, index) => {
                                            return(
                                                <label id="schedval"  className="label days" key={index}>{date}</label>
                                            )
                                        })}
                                </div>
                            )
                        })}
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
