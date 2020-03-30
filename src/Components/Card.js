import React, { Component } from 'react'
import '../Styles/HomeStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudShowersHeavy, faCloudSun, faCloud, faWind, faThermometerThreeQuarters, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import Moment from 'moment'

export class Card extends Component {
    state = {
        icon: faCloudSun
    }

    componentDidMount = () =>{
        const icon = this.icon()
        this.setState({
            icon: icon
        })
    }


    // styling information for the Card
    cardStyle = () =>{
        this.checkLast() // checks if the current card is the last card, in which case make it invisible
                         // used for horizontal scroll formatting
        if (this.props.width !== "100"){
            return{
                boxShadow: this.props.invisible ? null : "0 4px 8px 0 rgba(0,0,0,0.2)",
                transition: "0.3s",
                color: "#fff",
                marginLeft: "0.4em",
                marginBottom: "0.4em",
                minWidth: this.props.width + "px",
                minHeight: this.props.invisible ? "110px" : this.props.height + "px",
                maxHeight: this.props.basicInfo ? "110px" : null,
                width: this.props.scheduled ? this.props.width + "px" : null,
                height: this.props.scheduled ? this.props.height + "px" : null,
                textAlign: "center",
                backgroundImage: "url(" + this.props.back + ")",
                backgroundSize: "100% 100%",
                background: `linear-gradient(45deg, ${this.props.c1} 0%, ${this.props.c2} 100%, ${this.props.c2} 100%)`,
                borderRadius: "5px",
                fontFamily: "Arial, Helvetica, sans-serif",
                letterSpacing: "2px",
                paddingTop: "0.4em",
                fontSize: "12px"
                //filter: "brightness(50%)"
            }
        }
        else{
            return{
                boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                transition: "0.3s",
                borderRadius: "5px",
                backgroundImage: "url(" + this.props.back + ")",
                backgroundSize: "100% 100%",
                //backgroundColor: `linear-gradient(135deg, ${this.props.color1} 0%,  ${this.props.color1} 35%, ${this.props.color2} 100%)`,               
                color: "#fff",
                marginLeft: "0.4em",
                marginRight: "0.4em",
                marginBottom: "0.4em",
                minHeight: this.props.height + "px",
                textAlign: "center",
                fontFamily: "'Courier New', Courier, monospace",
                paddingTop: "0.4em",
                //letterSpacing: "6px",
                fontSize: "16px",
                //fontWeight: "550"
                //filter: "brightness(50%)"
            }
        }
    }

    // checks if the card is the last card in the horizontal scroll bar
    checkLast = () =>{
        if(this.props.last === true){
            return{
                marginRight: "0.4em"
            }
        }
    }

    icon = () => {
        if(this.props.title === "Pressure"){
            return faTachometerAlt
        }
        else if(this.props.title === "Feels Like"){
            return faThermometerThreeQuarters
        }
        else if(this.props.title === "Wind Speed"){
            return faWind
        }
        else if(this.props.desc === "Clear" || this.props.desc === "Sunny"){
            return faCloudSun
        }
        else if(this.props.desc === "Clouds"){
            return faCloud
        }
        else if(this.props.desc === "Rain"){
            return faCloudShowersHeavy
        }
    }
    
    render() {
        // if the card is not a complex card, return information for the few fields given
        if(!this.props.complex && !this.props.invisible && !this.props.basicInfo && !this.props.scheduled && !this.props.forecast){
            return (
                <div style = {this.cardStyle()}>
                    <div className="wrapper">
                        <div className="a">
                            <h4 id="headingcity2"><b>{this.props.title}</b></h4>
                        </div>
                        <div className="b">
                            <div className="temp">
                                <h4 id="desc">{this.props.weather}°C</h4>
                            </div>
                        </div>
                        <div className="d">
                            <div className="middle">
                                <FontAwesomeIcon className="size" icon={this.state.icon} />
                                <h4 id ="desc">{this.props.desc}</h4>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        // if the card is complex, return detailed information for all of the fields given
        if(this.props.complex){
            return(
                <div style = {this.cardStyle()}>
                    <div className="majorwrapper">
                        <div className="a">
                            <h4 id="headingcity2"><b>{this.props.title}</b></h4>
                            <h4 className="welcome" id="headingcity2"><b>{Moment(this.props.date).format('MMMM Do')}</b></h4>
                            <h4 id="headingcity2"><b>{Moment(this.props.date).format('YYYY')}</b></h4>
                        </div>
                        <div className="d">
                            <div className="middle majormiddle">
                                <FontAwesomeIcon className="size" icon={this.state.icon} />
                                <h4 id ="desc">{this.props.desc}</h4>
                            </div>
                        </div>
                        <div className="b">
                            <div className="temp">
                                <h4 className="currentweatherdata" id="desc">{this.props.weather}°C</h4>
                            </div>
                        </div>
                        <div className="e">
                            <div className="temp">
                                <div className="hilo">
                                    <h4 id="desc">{this.props.high}°C</h4>
                                    <h4 className="welcome" id="desc">{this.props.low}°C</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        if(this.props.invisible){return(<div style={this.cardStyle()}><p></p></div>)}
        if(this.props.basicInfo){
            return(
                <div style={this.cardStyle()}>
                    <div className="basicInfoHeader">
                        <h4>{this.props.title}</h4>
                    </div>
                    <div className="basicInfoMiddle">
                        <FontAwesomeIcon className="bisize" icon={this.icon()} />
                    </div>
                    <div className="basicInfoData">
                        <h4 className="basicinfodata">{this.props.weather}</h4>
                    </div>
                </div>
            )
        }
        if(this.props.scheduled){
            return(
                <div style={this.cardStyle()}>
                    <div className="scheduledwrapper">
                        <div className="f">
                            <h4 id="headingcity2"><b>{this.props.title}</b></h4>
                        </div>
                        <div className="g">
                            <div className="schedInfoMiddle">
                                <FontAwesomeIcon className="schedsize" icon={this.icon()} />
                            </div>
                        </div>
                        <div className="h">
                            <div className="schedData">
                                <h4 className="basicinfodata">{this.props.weather}°C</h4>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        if(this.props.forecast){
            return(
                <div style={this.cardStyle()}>
                    <div className="forcastwrapper">
                        <div className="i">
                            <h4 id="headingcity2"><b>{this.props.date}</b></h4>
                        </div>
                        <div className="j">
                            <FontAwesomeIcon className="schedsize" icon={this.icon()} />
                            <h4 id ="desc">{this.props.desc}</h4>
                        </div>
                        <div className="k">
                            <h4 id="headingcity2"><b>{Math.round(this.props.weather)}°C</b></h4>
                        </div>
                        <div className="l">
                            <h4 id="desc">{this.props.high}°C</h4>
                            <h4 className="welcome" id="desc">{this.props.low}°C</h4>
                        </div>
                        <div className="m">
                            <FontAwesomeIcon className="schedsize" icon={faTachometerAlt} />
                            <h4 className="welcome" id="desc">{this.props.pressure}hpa</h4>
                        </div>
                        <div className="n">
                            <FontAwesomeIcon className="schedsize" icon={faWind} />
                            <h4 className="welcome" id="desc">{this.props.wind}m/s</h4>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Card
