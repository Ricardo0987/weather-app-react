import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

class ComponenteClase extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  render() {
    return (
        <div><h1>Componente Clase</h1></div>
    );
  }
}
export default ComponenteClase;
