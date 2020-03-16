import React, { Component } from 'react'
import '../Styles/HomeStyle.css';

export class Card extends Component {
    cardStyle = () =>{
        this.checkLast()
        if (this.props.width !== "100"){
            return{
                boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                transition: "0.3s",
                color: "#000",
                marginLeft: "0.4em",
                marginBottom: "0.4em",
                minWidth: this.props.invisible ? "0.1px" : this.props.width + "px",
                minHeight: this.props.invisible ? "110px" : this.props.height + "px",
                textAlign: "center",
                backgroundImage: "url(" + this.props.back + ")",
                //background: this.props.invisible ? "invisible" : "#fff",
                borderRadius: "5px",
            }
        }
        else{
            return{
                boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                transition: "0.3s",
                borderRadius: "5px",
                backgroundImage: "url(" + this.props.back + ")",
                backgroundSize: "100% 100%",
                //background: "#fff",
                color: "#000",
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

    render() {
        console.log(this)
        if(!this.props.complex){
            return (
                <div style = {this.cardStyle()}>
                    <h4><b>{this.props.title}</b></h4>
                    <p>{this.props.weather}</p>
                    <p>{this.props.desc}</p>
                </div>
            )
        }
        else{
            return(
                <div style = {this.cardStyle()}>
                    <h4><b>{this.props.title}</b></h4>
                    <h4><b>{this.props.date}</b></h4>
                    <p>{this.props.desc}</p>
                    <p>{this.props.weather}</p>
                    <p>{"max: " + this.props.high}</p>
                    <p>{"min: " + this.props.low}</p>
                    <p>{this.props.wind + " m/s"}</p>
                    <p>{this.props.feelslike}</p>
                    <p>{this.props.pressure + " hPa" }</p>
                </div>
            )
        }
    }
}

export default Card
