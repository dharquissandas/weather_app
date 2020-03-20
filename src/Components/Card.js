import React, { Component } from 'react'
import '../Styles/HomeStyle.css';

export class Card extends Component {
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
                //backgroundImage: "url(" + this.props.back + ")",
                background: `linear-gradient(45deg, ${this.props.c1} 0%, ${this.props.c2} 100%, ${this.props.c2} 100%)`,
                borderRadius: "5px",
                fontFamily: "sans-serif",
                paddingTop: "0.4em",
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
                fontFamily: "sans-serif",
                paddingTop: "0.4em",
                //filter: "brightness(50%)"
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

    render() {
        console.log(this)
        if(!this.props.complex){
            return (
                <div style = {this.cardStyle()}>
                    <h4 id="headingcity2"><b>{this.props.title}</b></h4>
                    <p id="desc">{this.props.weather}</p>
                    <p id="desc">{this.props.desc}</p>
                </div>
            )
        }
        else{
            return(
                <div style = {this.cardStyle()}>
                    <h4 id="heading"><b>{this.props.title}</b></h4>
                    <h4 id="heading2"><b>{this.props.date}</b></h4>
                    <p id="desc">{this.props.desc}</p>
                    <p id="desc">{this.props.weather}</p>
                    <p id="desc">{"max: " + this.props.high}</p>
                    <p id="desc">{"min: " + this.props.low}</p>
                    <p id="desc">{this.props.wind + " m/s"}</p>
                    <p id="desc">{this.props.feelslike}</p>
                    <p id="desc2">{this.props.pressure + " hPa" }</p>
                </div>
            )
        }
    }
}

export default Card
