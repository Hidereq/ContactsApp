import React, { Component } from "react";
import "./App.css";

class ContactItem extends Component {
   constructor(props) {
      super(props);
      this.state = {
         counter: 0,
         totalClicks: 0
      };
   }

   render() {
      const imgUrl = `https://api.adorable.io/avatars/55/${this.props.login}.png`;
      return (
         <li className="list-group-item" style={{ padding: "8px", borderTop: this.props.border }}>
            <img src={imgUrl} width="36" height="36" style={{ borderRadius: "5px", float: "left" }} alt="Avatar" />
            <div style={{ float: "left", marginLeft: "10px" }}>
               <p className="font-weight-bold" style={{ fontSize: "15px", marginBottom: "-10px" }}>
                  {this.props.name}
               </p>
               <span style={{ fontSize: "12px" }}>{this.props.department}</span>
               <span className="buttons">
                  <button onClick={this.handleIncrement} className="badge badge-warning counter-badge">
                     +
                  </button>
                  <span className="badge badge-primary counter-badge">Score: {this.state.counter}</span>
                  <span className="badge badge-danger counter-badge">Total clicks: {this.state.totalClicks}</span>
                  <button onClick={this.handleDecrement} className="badge badge-warning counter-badge">
                     -
                  </button>
               </span>
            </div>
         </li>
      );
   }

   handleIncrement = () => {
      this.setState({ counter: this.state.counter + 1 });
      this.setState({ totalClicks: this.state.totalClicks + 1 });
   };
   handleDecrement = () => {
      this.setState({ counter: this.state.counter - 1 });
      this.setState({ totalClicks: this.state.totalClicks + 1 });
   };
}

export default ContactItem;
