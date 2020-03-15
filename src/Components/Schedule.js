import React, { Component } from 'react'
import Label from './Label'
import {Link} from 'react-router-dom'
import '../Styles/Schedule.css';

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

    dates = () => {
        var datetime1 = this.state.obj.information.dayone.dt_txt.split(" ")
        var date1 = {date: datetime1[0], weather : this.state.obj.information.dayone.main.temp}
        var datetime2 = this.state.obj.information.daytwo.dt_txt.split(" ")
        var date2 = {date: datetime2[0], weather : this.state.obj.information.daytwo.main.temp}
        var datetime3 = this.state.obj.information.daythree.dt_txt.split(" ")
        var date3 = {date: datetime3[0], weather : this.state.obj.information.daythree.main.temp} 
        var datetime4 = this.state.obj.information.dayfour.dt_txt.split(" ")
        var date4 = {date: datetime4[0], weather : this.state.obj.information.dayfour.main.temp}
        var datetime5 = this.state.obj.information.dayfive.dt_txt.split(" ")
        var date5 = {date: datetime5[0], weather : this.state.obj.information.dayfive.main.temp}
        return [date1, date2, date3, date4, date5]
    }

    check = (value) => {
        var dates = this.dates()
        var available = []
        var startposition
        var endposition
        for (var j = 0; j < dates.length; j++) {
            if(this.state.obj.startdate === dates[j].date){
                startposition = j
            }
            if (this.state.obj.enddate === dates[j].date){
                endposition = j
            }
        }
        var count = (endposition - startposition)+1
        for (var i = 0; i < this.state.obj.information.events.length; i++){
            if(value === this.state.obj.information.events[i].activity){                
                while(startposition<=endposition){
                    if(dates[startposition].weather > 15 && this.state.obj.information.events[i].location === "outdoor" && dates[startposition].desc !== "Rain"){
                        available.push(dates[startposition].date)
                    }
                    else{
                        if(this.state.obj.information.events[i].location === "indoor"){
                            available.push(dates[startposition].date)
                        }
                    }
                    startposition++
                }        
                break
            }
        }
        if (available.length === 0){
            available = ["The weather may not be suitable for outdoor activities during your trip."]
        }
        if(available.length === count){
            available = ["Any day is suitable for this activity."]
        }
        return available
    }

    render() {
        var sel = this.state.sel
        var sdd = this.state.sdd
        console.log(sdd)
        console.log(this.state.obj)
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
                <div className="welcome"><Label text="Schedule for Events"/></div>
                <div className="events">
                    <div className="verticalScroll schedule">
                        {sel !== null && sel.map((value, index) => {
                            return(
                                <div className ="value" key={index}>
                                    <label className="label activity">{value}</label>
                                        {this.check(value).map((date, index) => {
                                            return(
                                                <label className="label days" key={index}>{date}</label>
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
