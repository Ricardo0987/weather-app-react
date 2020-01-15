import React from 'react';
import Spinner from './Spinner';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class DynamicForm extends React.Component {

    urlApiData = 'http://ppc.onetvrn.com:3000/query/tsn/D6A020F8FE4366A';

    constructor(props) {
        super(props);
        this.state = { data: { correctResponse: false,response:null } }
        console.log('El componente aun no está disponible en el DOM');
    }


    componentDidMount() {
        console.log('El componente está disponible en el DOM');
        // Pedimos algunos datos
        fetch(this.urlApiData).then(
            (res) => {
                console.log("response", res)
                // this.setState({ data: { correctResponse: true } });
                return res.json();
            }
        ).then((data) => {
            console.log("response2", data);
            this.setState({ data: { correctResponse: true, response: data } });

        })
    }


    render() {
        if (this.state.data.correctResponse) {
            return (
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField id="standard-basic" label={this.state.data.response.data.TIVO.deviceInfoSearchResponse.manufacturingInfo.type} />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField id="standard-basic" label={this.state.data.response.data.LDAP.orderCompletedEvent.srqAction} />
                        </Grid>
                    </Grid>
                    <br></br>
                    <Button variant="contained" color="primary">
                        Validar
                    </Button>
                </div>
            )
        } else {
            return <Spinner></Spinner>
        }



    }


}
export default DynamicForm;
