import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import '../Styles/FormCard.css';

export class FormCard extends Component {  
    state = {
        start: '',
        end: '',
        selections: []
        // suggesteddestinations : []
    }

    // componentDidMount(){
    //     const url = "https://my-json-server.typicode.com/dharquissandas/weatherApp/suggesteddestinations";
    //     Axios.get(url)
    //     .then(contents => this.setState({suggesteddestinations: contents.data}))
    // }

    cardStyle = () =>{
        this.checkLast()
        if (this.props.width !== "100"){
            return{
                boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
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
                boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                transition: "0.3s",
                borderRadius: "5px",
                // background: "#fff",
                color: "#fff",
                marginLeft: "0.4em",
                marginRight: "0.4em",
                marginBottom: "0.4em",
                minHeight: this.props.height + "px",
                textAlign: "center"
            }
        }
    }
 
    checkLast = () =>{
        if(this.props.last === true){
            return{
                marginRight: "0.4em"
            }
        }
    }

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

    getEndDate = (start) => {
        var ymd = start.split("-");
        var newDay = parseInt(ymd[2]) + 5
        if (newDay < 10) newDay = "0" + newDay;
        var end = ymd[0] + "-" + ymd[1] + "-" + newDay;       
        return end;
    }

    getmin = (start) => {
        var ymd = start.split("-");
        var newDay = parseInt(ymd[2]) + 1
        if (newDay < 10) newDay = "0" + newDay;
        var end = ymd[0] + "-" + ymd[1] + "-" + newDay;       
        return end;
    }

    handleChange = (e) => {
        if (e.target.type === "checkbox") {
            this.setState({
                selections: [...this.state.selections, e.target.value]
            })
        }
        else {
            this.setState({
                [e.target.id]: e.target.value  
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.history.push({
            pathname: '/schedule',
            state: { 
                selectedInformation:{
                    information : this.props.location.state.info.data,
                    startdate: this.getDate(),
                    enddate: this.state.end,
                    selections : this.state.selections,
            },
            sdd : this.props.sdd
        }
        })
    }

    render() {
        var events = this.props.events;
        return (
            <div style = {this.cardStyle()}>
                <form onSubmit={this.handleSubmit}>
                    <div className='form'>
                        {events != null &&
                            events.map((value, index) => {
                                return(
                                    <div className='inputGroup' key={index}>
                                        <input type="checkbox" id={index.toString()} name={index.toString()} 
                                        value = {value} onChange={this.handleChange}/>
                                        <label className="checklabel" htmlFor={index.toString()}>{value}</label>
                                    </div>
                                )
                            })
                        }
                        <div className='inputGroup'>
                            <label className='datelabel' htmlFor="start">Start date:</label>
                            <input type="date" id="start" name="trip-start"
                                defaultValue={this.getDate()} min={this.getDate()} onChange={this.handleChange} required>
                            </input><br/>
                            <label className='datelabel' htmlFor="end">End date:</label>
                            <input type="date" id="end" name="trip-end" 
                                min={this.getmin(this.state.start)} max={this.getEndDate(this.state.start)} onChange={this.handleChange} required>
                            </input><br/>
                        </div>
                    </div>
                    <button className="btn blue lighten-1">Create</button>
                </form>
            </div>
        )  
    }
}

export default withRouter(FormCard)
