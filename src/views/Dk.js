import React, { Component } from 'react';
import Item from "../component/item"
import { connect } from "react-redux"

class Dk extends Component {
   
    render() {
        console.log(this.props)
        return (
            <div className="Dk">
                <Item data={this.props.data}></Item>
            </div>
        );
    }
}
let mapStateToProps = (state) => {
    console.log(state.reducer.data)
    return {
        data: state.reducer.data
    }
}

export default connect(mapStateToProps)(Dk);