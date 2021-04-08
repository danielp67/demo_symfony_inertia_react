import React, {Component, Fragment} from 'react';


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
            <div> Hello Detail ! {this.props.prop}</div>
        )
    }
}


