import React from 'react';
import Spinner from './Spinner';
import Skeleton from './Skeleton';
import axios from 'axios';

import { Button, TextField, TextareaAutosize, Grid } from '@material-ui/core';

class DynamicForm extends React.Component {

    urlApiData = 'http://ppc.onetvrn.com:3000/query/tsn/D6A020F8FE4366A';

    constructor(props) {
        super(props);
        this.state = { data: { correctResponse: false, response: null } }
        this.handleClick = this.handleClick.bind(this);
        this.getResponse = this.getResponse.bind(this);
        console.log('El componente aun no está disponible en el DOM');
    }

    handleClick() {
        this.setState({ data: { correctResponse: false } });
        this.getResponse();
    }

    getResponse() {
       // debugger;

        axios.get(this.urlApiData)
            .then((data) => {
                console.log("response2", data);
                this.setState({ data: { correctResponse: true, response: data.data } });
            })

        // fetch(this.urlApiData).then(
        //     (res) => {
        //         console.log("response", res)
        //         return res.json();
        //     }
        // ).then((data) => {
        //     console.log("response2", data);
        //     this.setState({ data: { correctResponse: true, response: data } });

        // })
    }


    componentDidMount() {
        console.log('El componente está disponible en el DOM');
        this.getResponse();
    }


    render() {
        if (this.state.data.correctResponse) {
            return (
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField id="standard-basic" label="TIVO manufacturingInfo" value={this.state.data.response.data.TIVO.deviceInfoSearchResponse.manufacturingInfo.type} />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField id="standard-basic" label="LDAP order event" value={this.state.data.response.data.LDAP.orderCompletedEvent.srqAction} />
                        </Grid>
                       
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextareaAutosize aria-label="minimum height" rowsMin={3} rowsMax={9} placeholder={JSON.stringify(this.state.data.response.data.CUBIWARE)} />
                        </Grid>
                        <Grid item xs={6}>
                            <TextareaAutosize aria-label="minimum height" rowsMin={3} rowsMax={9} placeholder={JSON.stringify(this.state.data.response.data.LINPUB)} />
                        </Grid>
                    </Grid>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary" onClick={this.handleClick}> Reintentar </Button>
                        </Grid>
                    </Grid>
                </div>
            )
        } else {
            // return <Spinner></Spinner>
            return <Skeleton></Skeleton>
        }



    }


}
export default DynamicForm;
