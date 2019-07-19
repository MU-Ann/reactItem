import React, { Component } from 'react';
import Item from "../component/item"
import { connect } from "react-redux"
class Bx extends Component {
    render() {
        return (
            <div>
                    保险管理
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


export default connect(mapStateToProps)(Bx);