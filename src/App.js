import React, {Component} from 'react';
import './Styles/App.css';
import './Styles/Reset.css';
import './Styles/Mixins.less';

import {Route, BrowserRouter} from 'react-router-dom';

import Header from './Components/Header';
import Home from './Components/Home';
import CurrentWeather from './Components/CurrentWeather';
import EventSelection from './Components/EventSelection';
import Schedule from './Components/Schedule';



export class App extends Component {
    state = {
        suggesteddestinations : [],
        scheduleddestinations : [],
        loaded: false
    }

    componentDidMount = () =>{
        this.grabData()
    }

    grabData = async () =>{
        let suggestionsAPI = "https://my-json-server.typicode.com/dharquissandas/weather_app/suggesteddestinations";
        let suggestionsFetch = await fetch(suggestionsAPI)
        let suggestionData = await suggestionsFetch.json()

        for (let index = 0; index < suggestionData.length; index++){
            let city = suggestionData[index]

            let weatherFetch = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city.name}&units=metric&APPID=5afdbd7139b98ae3f70a76b0dda2b43b`)
            let weatherData = await weatherFetch.json()

            let {main, weather, wind} = weatherData.list[0]

            suggestionData[index].temp = main.temp.toString()
            suggestionData[index].desc = weather[0].main
            suggestionData[index].tempmax = main.temp_max.toString()
            suggestionData[index].tempmin = main.temp_min.toString()
            suggestionData[index].feelslike = main.feels_like.toString()
            suggestionData[index].pressure = main.pressure.toString()
            suggestionData[index].windspeed = wind.speed.toString()
            suggestionData[index].dayone = weatherData.list[0]
            suggestionData[index].daytwo = weatherData.list[1]
            suggestionData[index].daythree = weatherData.list[2]
            suggestionData[index].dayfour = weatherData.list[3]
            suggestionData[index].dayfive = weatherData.list[4]

        }

        this.setState({
            suggesteddestinations : suggestionData,
            loaded: true
        })
    }

    render (){
        console.log(this.state.suggesteddestinations)
        // console.log(this.state.loaded)
        return(
            <div>
                {this.state.loaded ? 
                <div>
                    {
                    <BrowserRouter>
                        <div className="container">
                            <Header />
                            <Route exact path="/" render={(props) =>
                                <Home {...props} suggesteddestinations={this.state.suggesteddestinations} />
                            } />
                            <Route path="/CurrentWeather/:id" component = {CurrentWeather} />
                            <Route path="/EventSelection/:id" component = {EventSelection} />
                            <Route path="/Schedule" component = {Schedule} />
                        </div>
                    </BrowserRouter>
                    }
                    </div> :  
                    <div className="container">
                        <Header />
                    </div>
                    }
                </div>   
            )
        }
    }

export default App;
