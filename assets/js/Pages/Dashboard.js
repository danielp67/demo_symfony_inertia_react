import React, {Component, Fragment} from 'react';
import {InertiaLink} from "@inertiajs/inertia-react";


export default class Dashboard extends Component{
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
            <div> Hello Dashboard</div>
                <InertiaLink  className="btn btn-dark" href="/home">Retour sur Home</InertiaLink >
                <InertiaLink  className="btn btn-success" href="/detail">Aller au detail</InertiaLink >

            </Fragment>
        )
    }
}


