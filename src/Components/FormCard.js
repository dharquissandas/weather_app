import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import '../Styles/FormCard.css';

export class FormCard extends Component {  
    // initializes the state 
    state = {
        start: '',
        end: '',
        selections: []
    }

    // contains styling information for the card
    cardStyle = () =>{
        if (this.props.width !== "100"){
            return{
                transition: "0.3s",
                color: "#fff",
                marginLeft: "0.4em",
                marginBottom: "0.4em",
                minWidth: this.props.invisible ? "0.1px" : this.props.width + "px",
                minHeight: this.props.invisible ? "110px" : this.props.height + "px",
                textAlign: "center",
                background: this.props.invisible ? "invisible" : "#fff",
                borderRadius: "5px",
            }
        }
        else{
            return{
                transition: "0.3s",
                borderRadius: "5px",
                color: "#fff",
                marginLeft: "0.4em",
                marginRight: "0.4em",
                marginBottom: "0.4em",
                minHeight: this.props.height + "px",
                textAlign: "center"
            }
        }
    }

    // returns a string containing the current date
    getDate = () => {
        var date = new Date();

        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();

        if (month < 10) month = "0" + month;
        if (day < 10) day = "0" + day;

        var today = year + "-" + month + "-" + day;       
        return today;
    }

    //returns the maximum available end date depending on the start date
    getEndDate = (start, totalMax) => {
        var ymd = start.split("-");
        var max = totalMax.split("-");
        var newDay = parseInt(ymd[2])
        while (newDay < parseInt(max[2])){
            newDay = newDay + 1
        }
        if (newDay < 10) newDay = "0" + newDay;
        var end = ymd[0] + "-" + ymd[1] + "-" + newDay;       
        return end;
    }

    // returns the minimum end date depending on the start date
    getmin = (start) => {
        var ymd = start.split("-");
        var newDay = parseInt(ymd[2]) + 1
        if (newDay < 10) newDay = "0" + newDay;
        var end = ymd[0] + "-" + ymd[1] + "-" + newDay;       
        return end;
    }

    //returns the limit for the dates that users are allowed to pick
    // limit is set at 4 days since the weather api only goes up to 4 days
    getmax = (start) => {
        var ymd = start.split("-");
        var newDay = parseInt(ymd[2]) + 4
        if (newDay < 10) newDay = "0" + newDay;
        var end = ymd[0] + "-" + ymd[1] + "-" + newDay;       
        return end;
    }

    // sets the state with the information entered in by the user
    handleChange = (e) => {
        if (e.target.type === "checkbox") {
            if (e.target.checked){
                this.setState({
                    selections: [...this.state.selections, e.target.value]
                })
            }
        }
        else {
            this.setState({
                [e.target.id]: e.target.value  
            })
        }
    }

    // when the user clicks Create, redirect them to the schedule page 
    // and pass in the appropriate information from the form
    handleSubmit = (e) => {
        e.preventDefault();

        var selectedInformation = {
            information : this.props.location.state.info.data,
            startdate: this.state.start,
            enddate: this.state.end,
            selections : this.state.selections
        }
        this.props.sdd.push(selectedInformation)

        this.props.history.push({
            pathname: '/schedule',
            state: { 
                selectedInformation
            },
            sdd : this.props.sdd
        }
        )
    }

    render() {
        var events = this.props.events;
        return (
            <div style = {this.cardStyle()}>
                <form onSubmit={this.handleSubmit}>
                    <div className='form'>
                        {events != null && // for each of the events listed in the current destination's object
                                           // in the json file, create checkboxes
                            events.map((value, index) => {
                                return(
                                    <div className='inputGroup' key={index}>
                                        <input type="checkbox" id={index.toString()} name={index.toString()} 
                                        value = {value.activity} onChange={this.handleChange}/>
                                        <label className="checklabel" htmlFor={index.toString()}>{value.activity}</label>
                                    </div>
                                )
                            })
                        }
                        <div className='inputGroup'>
                            {/* create the input fields for the start and end date selection */}
                            <table><tr>
                            <td><div>
                                <label className='datelabelleft' htmlFor="start">Start date:</label>
                                <input type="date" id="start" name="trip-start" min={this.getDate()}
                                max={this.getmax(this.getDate())} onChange={this.handleChange} required>
                                </input>
                            </div></td>
                            <td><div>
                                <label className='datelabelright' htmlFor="end">End date:</label>
                                <input type="date" id="end" name="trip-end" min={this.getmin(this.state.start)}
                                max={this.getEndDate(this.state.start, this.getmax(this.getDate()))} onChange={this.handleChange} required>
                                </input>
                            </div></td>
                            </tr></table>
                        </div>
                        
                    </div>
                    {/* button for submitting the form */}
                    <button className="btn blue lighten-1">Create</button>
                </form>
            </div>
        )  
    }
}

export default withRouter(FormCard)
