import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

class DynamicForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  render() {
    console.log(this.state);
    return (
      <div>
        {" "}
        <CircularProgress id="loader" />
      </div>
    );
  }
}
export default DynamicForm;
