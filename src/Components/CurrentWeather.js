import React, { Component } from 'react';
import Card from './Card';
import Label from './Label';
import '../Styles/Reset.css';
import '../Styles/HomeStyle.css';
import Header from './Header'
import {Link} from 'react-router-dom'
import { Container, Button } from 'react-floating-action-button'


export class CurrentWeather extends Component {

    pushES = () => {
        var pos = this.props.match.params.id
        var dest = this.props.location.state.info.data
        var sdd = this.props.location.state.info.sdd

        this.props.history.push({
            pathname: `/EventSelection/${pos}`,
            state:{info : {
                data : dest[pos],
                sdd : sdd
            }}
        })
    }

    render() {
        // create variables for all of the props passed into the page
        var pos = this.props.match.params.id
        var dest = this.props.location.state.info.data
        var sdd = this.props.location.state.info.sdd

        return (
            <div className="overflow">
                <Header history = {this.props.history} sdd = {sdd} />
                <div className="welcome"><Label text="Today"/></div>
                <div className="welcome">
                    {/* display more detailed weather information about the weather for the selected location */}
                    <Card complex back={dest[pos].url}
                        date={dest[pos].dayone.dt_txt}
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
                   {/* display values for pressure, wind speed, and feels like properties */}
                    <Card title="Pressure" c1={dest[pos].color1} c2={dest[pos].color2} weather={dest[pos].pressure + " hPa"} width="131" height="100" style={backGround}/>
                    <Card title="Feels Like" c1={dest[pos].color1} c2={dest[pos].color2} weather={dest[pos].feelslike} width="131" height="100" style={backGround}/>
                    <Card title="Wind Speed" c1={dest[pos].color1} c2={dest[pos].color2} weather= {dest[pos].windspeed + " m/s"} width="131" height="100" style={backGround}/>
                </div>
                <Label text="Coming Days"/>
                <div className="horizontalScroll" id="comingdays">
                    <Card complex date={dest[pos].daytwo.dt_txt}
                        high={dest[pos].daytwo.main.temp_max}
                        low={dest[pos].daytwo.main.temp_min}
                        wind={dest[pos].daytwo.wind.speed} 
                        pressure={dest[pos].daytwo.main.pressure} 
                        feelslike={dest[pos].daytwo.main.feels_like} 
                        desc={dest[pos].daytwo.weather[0].main} 
                        title="" 
                        weather={dest[pos].daytwo.main.temp}
                        width="110" 
                        height="325"
                        c1={dest[pos].color1} 
                        c2={dest[pos].color2}/>
                    <Card complex date={dest[pos].daythree.dt_txt}
                        high={dest[pos].daythree.main.temp_max}
                        low={dest[pos].daythree.main.temp_min}
                        wind={dest[pos].daythree.wind.speed} 
                        pressure={dest[pos].daythree.main.pressure} 
                        feelslike={dest[pos].daythree.main.feels_like} 
                        desc={dest[pos].daythree.weather[0].main} 
                        title="" 
                        weather={dest[pos].daythree.main.temp}
                        width="110" 
                        height="325"
                        c1={dest[pos].color1} 
                        c2={dest[pos].color2}/>   
                    <Card complex date={dest[pos].dayfour.dt_txt}
                        high={dest[pos].dayfour.main.temp_max}
                        low={dest[pos].dayfour.main.temp_min}
                        wind={dest[pos].dayfour.wind.speed} 
                        pressure={dest[pos].dayfour.main.pressure} 
                        feelslike={dest[pos].dayfour.main.feels_like} 
                        desc={dest[pos].dayfour.weather[0].main} 
                        title="" 
                        weather={dest[pos].dayfour.main.temp}
                        width="110" 
                        height="325"
                        c1={dest[pos].color1} 
                        c2={dest[pos].color2}/>
                    <Card complex date={dest[pos].dayfive.dt_txt}
                        high={dest[pos].dayfive.main.temp_max}
                        low={dest[pos].dayfive.main.temp_min}
                        wind={dest[pos].dayfive.wind.speed} 
                        pressure={dest[pos].dayfive.main.pressure} 
                        feelslike={dest[pos].dayfive.main.feels_like} 
                        desc={dest[pos].dayfive.weather[0].main} 
                        title="" 
                        weather={dest[pos].dayfive.main.temp} 
                        width="110" 
                        height="325"
                        c1={dest[pos].color1} 
                        c2={dest[pos].color2} />                                                                   
                    <Card invisible width="98"/>
                </div>
                <Container className="fabPlacement">
                    <Button
                        icon="fas fa-plus"
                        styles={{backgroundColor: dest[pos].color1 , color : "#fff"}}
                        rotate={false}
                        onClick={this.pushES} />
                </Container>
            </div>
        )
    }
}

const marginLeft = {
    marginLeft: "0.4em" 
}

const backGround = {
    background: `linear-gradient(to left, dest[pos].color1 50%, dest[pos].color2 50%)`
}

export default CurrentWeather