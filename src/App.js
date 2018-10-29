import React, { Component } from "react";
import "./App.css";
import CityCountryInput from "./Components/city-country-select";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cities: ["A01-001-00001"]
    };
  }

  render() {
    return (
      <div className="App">
        <div style={{ width: 500, margin: "auto", marginTop: 50 }}>
          <CityCountryInput values={this.state.cities} />
        </div>
      </div>
    );
  }
}

export default App;
