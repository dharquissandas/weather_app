import React, { Component } from 'react';
import Card from './Card';
import Label from './Label';
import '../Styles/Reset.css';

import {Link} from 'react-router-dom'

export class CurrentWeather extends Component {
    render() {
        var pos = this.props.match.params.id
        var dest = this.props.location.state.info.data
        var sdd = this.props.location.state.info.sdd

        console.log(sdd)
        console.log(dest[pos])
        return (
            <div>
                <div className="horizontalScroll">
                    {/* <Link style={marginLeft} className="navlinks linkStyle" to="/">
                        <div><p>Home</p></div>
                    </Link> */}
                    <Link style={marginLeft} id="homebtn" className="navlinks linkStyle" to={{
                        pathname: `/`
                        }}>
                            <p id="homenav">Home</p>
                    </Link>
                    <Link id="homebtn" className="navlinks linkStyle" to={{
                        pathname: `/EventSelection/${pos}`,
                        state:{info : {
                            data : dest[pos],
                            sdd : sdd
                        }}
                        }}>
                            <p id="homenav">Schedule Holiday</p>
                    </Link>
                </div>
                <div className="welcome"><Label text="Today"/></div>
                <div className="welcome">
                    <Card complex date={dest[pos].dayone.dt_txt}
                        high={dest[pos].tempmax} 
                        low={dest[pos].tempmin} 
                        wind={dest[pos].windspeed} 
                        pressure={dest[pos].pressure} 
                        feelslike={dest[pos].feelslike} 
                        desc={dest[pos].desc} 
                        title={dest[pos].name} 
                        weather={dest[pos].temp}
                        back={dest[pos].url} 
                        width="100" 
                        height="110"/>
                </div>
                <div className="horizontalScroll">
                    <Card title="Pressure" weather={dest[pos].pressure + " hPa"} width="129.33" height="110"/>
                    <Card title="Feels Like" weather={dest[pos].feelslike} width="129.33" height="110"/>
                    <Card title="Wind Speed" weather= {dest[pos].windspeed + " m/s"} width="129.33" height="110"/>
                </div>
                <Label text="Coming Days"/>
                <div className="horizontalScroll">
                    {/* <Card complex date={dest[pos].dayone.dt_txt}
                        high={dest[pos].dayone.main.temp_max}
                        low={dest[pos].dayone.main.temp_min}
                        wind={dest[pos].dayone.wind.speed} 
                        pressure={dest[pos].dayone.main.pressure} 
                        feelslike={dest[pos].dayone.main.feels_like} 
                        desc={dest[pos].dayone.weather[0].main} 
                        title="" 
                        weather={dest[pos].dayone.main.temp} 
                        width="110" 
                        height="300"/> */}
                    <Card complex date={dest[pos].daytwo.dt_txt}
                        high={dest[pos].daytwo.main.temp_max}
                        low={dest[pos].daytwo.main.temp_min}
                        wind={dest[pos].daytwo.wind.speed} 
                        pressure={dest[pos].daytwo.main.pressure} 
                        feelslike={dest[pos].daytwo.main.feels_like} 
                        desc={dest[pos].daytwo.weather[0].main} 
                        title="" 
                        weather={dest[pos].daytwo.main.temp}
                        back={dest[pos].url} 
                        width="110" 
                        height="300"/>
                    <Card complex date={dest[pos].daythree.dt_txt}
                        high={dest[pos].daythree.main.temp_max}
                        low={dest[pos].daythree.main.temp_min}
                        wind={dest[pos].daythree.wind.speed} 
                        pressure={dest[pos].daythree.main.pressure} 
                        feelslike={dest[pos].daythree.main.feels_like} 
                        desc={dest[pos].daythree.weather[0].main} 
                        title="" 
                        weather={dest[pos].daythree.main.temp}
                        back={dest[pos].url}
                        width="110" 
                        height="300"/>   
                    <Card complex date={dest[pos].dayfour.dt_txt}
                        high={dest[pos].dayfour.main.temp_max}
                        low={dest[pos].dayfour.main.temp_min}
                        wind={dest[pos].dayfour.wind.speed} 
                        pressure={dest[pos].dayfour.main.pressure} 
                        feelslike={dest[pos].dayfour.main.feels_like} 
                        desc={dest[pos].dayfour.weather[0].main} 
                        title="" 
                        weather={dest[pos].dayfour.main.temp}
                        back={dest[pos].url} 
                        width="110" 
                        height="300"/>
                    <Card complex date={dest[pos].dayfive.dt_txt}
                        high={dest[pos].dayfive.main.temp_max}
                        low={dest[pos].dayfive.main.temp_min}
                        wind={dest[pos].dayfive.wind.speed} 
                        pressure={dest[pos].dayfive.main.pressure} 
                        feelslike={dest[pos].dayfive.main.feels_like} 
                        desc={dest[pos].dayfive.weather[0].main} 
                        title="" 
                        weather={dest[pos].dayfive.main.temp}
                        back={dest[pos].url} 
                        width="110" 
                        height="300" />                                                                   
                    <Card invisible/>
                </div>
            </div>
        )
    }
}

const marginLeft = {
    marginLeft: "0.4em" 
}


export default CurrentWeather