import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import { withStyles } from "@material-ui/core/styles";

import Select from "react-select";
import { countryCityUtility } from "./cities";

const { countryCitiesMap, countryCitiesList } = countryCityUtility;

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

class CityCountryInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOptions: this.props.values || []
    };
  }

  handleChange = selectedOption => {
    const selectedOptions = [...this.state.selectedOptions]; // make a copy
    const selectValue = selectedOption.value;

    if (selectValue && selectedOptions.indexOf(selectValue) < 0) {
      selectedOptions.push(selectValue);
      this.setState({ selectedOptions });
    } else {
      console.log("City duplicated !!");
    }
  };

  handleDelete = idx => {
    const selectedOptions = [...this.state.selectedOptions]; // make a copy
    selectedOptions.splice(idx, 1);
    this.setState({ selectedOptions });
  };

  render() {
    const { selectedOptions } = this.state;

    return (
      <div>
        <Paper>
          <div>
            {selectedOptions.map((tagValue, idx) => (
              <Chip
                key={idx}
                style={{ margin: "4px", width: "200" }}
                label={countryCitiesList[tagValue]}
                onDelete={() => {
                  this.handleDelete(idx);
                }}
              />
            ))}
          </div>
        </Paper>

        <Select
          onChange={this.handleChange}
          options={countryCitiesMap}
          value=""
          label="City"
        />
      </div>
    );
  }
}

export default withStyles(styles)(CityCountryInput);
