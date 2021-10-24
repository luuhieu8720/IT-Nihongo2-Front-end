import React from "react";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";

class Test extends React.Component {
  render() {
    return (
      <DropdownMultiselect
        options={["Australia", "Canada", "USA", "Poland", "Spain", "France"]}
        name="countries"
      />
    );
  }
}

export default Test;