import React, {Component, Fragment} from 'react';
import {InertiaLink} from "@inertiajs/inertia-react";


export default class Detail extends Component{
    constructor(props){
        super(props);
        this.state = {
            cartData: null,
            eventData: null,
            buttonStatus: [],
            loading:false,
        }
    }


    render() {
    console.log(this.props)
        return (
            <Fragment>

            <div> Hello Detail ! ID : {this.props.prop}</div>
        <InertiaLink  className="btn btn-dark" href="/home">Retour sur Home</InertiaLink >
            </Fragment>

    )
    }
}


