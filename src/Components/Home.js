import React, { Component } from 'react'
import Card from './Card';
import Label from './Label';
import '../Styles/HomeStyle.css';

import {Link} from 'react-router-dom';

export class Home extends Component {
    
    state = {
        currentLocation : "London",
        currentTemp : "",
        desc: "",
        suggesteddestinations : this.props.suggesteddestinations,
        scheduleddestinations : [],
        loaded : false
    }

    componentDidMount = () => {
        //console.log(this.props.location.state.data)
        if (this.props.location.state){
            this.setState({
                scheduleddestinations : this.props.location.state.data,
            })
        }
    }

    render(){
        console.log(this.state.suggesteddestinations)
        console.log(this.state.loaded)

        if(this.state.scheduleddestinations.length > 0){
            this.state.loaded = true
        }
        
        return (
            <div>
                <div className="welcome"><Label text="Current Weather"/></div>
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
                {!this.state.loaded ?
                    <div className="noSE">
                        {<p id="noschedule">No Scheduled Holidays. Get Planning!</p>}
                    </div>:
                <div className="horizontalScroll">
                    {this.state.scheduleddestinations.map((dest) => (
                        <Link className="linkStyle" key={dest.id} to={{
                            pathname: '/Schedule',
                            state:{
                                selectedInformation : dest
                            },
                            sdd : this.state.scheduleddestinations
                        }
                        }>
                            <Card title={dest.information.name} weather={dest.information.temp} desc={dest.information.desc} width="110" height="110"/>
                        </Link>
                    ))}
                    <Card invisible/>
                </div>
                }
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
