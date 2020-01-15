import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { Grid } from "@material-ui/core";

class DynamicForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
          </Grid>
          <Grid item xs={6}>
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Skeleton variant="rect" width={250} height={118} />
          </Grid>
          <Grid item xs={6}>
            <Skeleton variant="rect" width={250} height={118} />
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default DynamicForm;
