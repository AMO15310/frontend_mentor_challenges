import React, { Component } from "react";
import "./card.css";
import { Badge } from "react-bootstrap";

class Card extends Component {
  state = {
    name: this.props.name,
    image: this.props.image,
    showNew: this.props.showNew,
    showFTD: this.props.showFTD,
    title: this.props.title,
    country: this.props.country,
    time: this.props.time,
    day: this.props.day,
    text1: this.props.text1,
    text2: this.props.text2,
    text3: this.props.text3,
    text4: this.props.text4,
    showJS: this.props.showJS,
  };
  render() {
    return (
      <div>
        <div className="card">
          <div className="img">
            <img src={this.state.image} alt="photosnap" />
          </div>
          <div className="description">
            <div className="company">
              <span className="photosnap">{this.state.name}</span>
              <span className="new">
                {" "}
                <Badge bg="success">{this.state.showNew && "New!"}</Badge>
              </span>
              <span className="featured">
                <Badge bg="dark">{this.state.showFTD && "featured"}</Badge>
              </span>
            </div>
            <div className="name">{this.state.title}</div>
            <div className="time">
              {" "}
              <span className="days">{this.state.day} </span>{" "}
              <span className="partTime">. {this.state.time}</span>
              <span className="usa"> . {this.state.country}</span>
            </div>
          </div>
          <div className="ranks">
            <span className="first">{this.state.text1}</span>
            <span className="second">{this.state.text2}</span>
            <span className="third">{this.state.text3}</span>
            <span className="fourth">{this.state.text4}</span>
            <span className="fifth">{this.state.showJS && "Javascript"}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
