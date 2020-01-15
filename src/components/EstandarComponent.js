import React from 'react';

class StandarComponent extends React.Component {


    constructor(props) {
        super(props);
        this.state = { data: [] }
        console.log('El componente aun no está disponible en el DOM');

    }

    render() {
        return <div>Soy un componente estandar</div>
    }


}
export default StandarComponent;
