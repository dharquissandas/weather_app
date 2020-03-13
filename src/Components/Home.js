import React, { Component } from 'react'
import Card from './Card';
import Label from './Label';
import Axios from 'axios';

import {Link} from 'react-router-dom';

export class Home extends Component {
    
    state = {
        currentLocation : "London",
        currentTemp : "",
        desc: "",
        suggesteddestinations : this.props.suggesteddestinations,
        scheduleddestinations : []
    }

    render(){
        console.log(this.props.suggesteddestinations)
        console.log(this.state.suggesteddestinations.length)
        
        return (
            <div>
                <div className="welcome"><Label text="Weather"/></div>
                <Link className="linkStyle" to={{
                    pathname: `CurrentWeather/${0}`,
                    state:{info:{
                        data : this.state.suggesteddestinations,
                        sdd : this.state.scheduleddestinations
                    }}
                }}>
                    <div className="welcome"><Card title={this.state.suggesteddestinations[0].name} desc={this.state.suggesteddestinations[0].desc} weather={this.state.suggesteddestinations[0].temp} width="100" height="110"/></div>
                </Link>

                <Label text="Recently Scheduled Holidays"/>
                <div className="horizontalScroll">
                    {this.state.scheduleddestinations.map((dest) => (
                        <Card title={dest.startdate} weather="15" width="110" height="110"/>
                    ))}
                    <Card invisible/>
                </div>
                <Label text="Recommended Holiday Destinations"/>
                <div className="verticalScroll">
                    {this.state.suggesteddestinations.slice(1).map((dest) =>(
                        <Link className="linkStyle" key={dest.id} to={{
                            pathname: `CurrentWeather/${dest.id}`,
                            state:{info:{
                                data : this.state.suggesteddestinations,
                                sdd : this.state.scheduleddestinations
                            }}
                        }}>
                            <Card title={dest.name} weather={dest.temp} desc={dest.desc} width="100" height="110"/>
                        </Link>
                    ))}
                </div>
            </div>
        )
    }
}

export default Home
