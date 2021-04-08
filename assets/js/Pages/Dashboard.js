import React, {Component, Fragment} from 'react';


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
            <div> Hello Dashboard</div>
        )
    }
}


