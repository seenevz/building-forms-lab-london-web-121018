import React, { Component } from "react";
import { connect } from "react-redux";
import BandInput from "../components/BandInput";

class BandsContainer extends Component {
   render() {
      const bands = this.props.bands.map((band, id) => (
         <li key={id}>{band.name}</li>
      ));

      return (
         <div>
            <BandInput addBand={this.props.addBand} />
            <ul>{bands}</ul>
         </div>
      );
   }
}

const mapDispatchToStore = dispatch => {
   return { addBand: band => dispatch({ type: "ADD_BAND", band }) };
};

export default connect(
   state => ({ bands: state.bands }),
   mapDispatchToStore
)(BandsContainer);
