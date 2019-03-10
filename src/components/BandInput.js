import React, { Component } from "react";
import { connect } from "react-redux";

class BandInput extends Component {
   constructor() {
      super();
      this.state = {
         name: "",
      };
   }

   handleInputChange = event => this.setState({ name: event.target.value });

   handleSubmit = event => {
      event.preventDefault();
      this.props.addBand(this.state);
      this.setState({ name: "" });
   };

   render() {
      return (
         <div>
            <form onSubmit={this.handleSubmit}>
               <label>Band</label>
               <input
                  type="text"
                  value={this.state.name}
                  onChange={this.handleInputChange}
               />
               <input type="submit" />
            </form>
         </div>
      );
   }
}

export default BandInput;
