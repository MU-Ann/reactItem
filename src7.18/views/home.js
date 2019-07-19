import React, { Component } from 'react';
import {NavLink} from "react-router-dom"
import RouterView from "../router/routerView"
class home extends Component {
    render() {
        return (
            <div>
                <div className="home">
                    <NavLink to="/home/One">排行榜</NavLink>
                    <span>排行榜</span>
                    <span>排行榜</span>
                    <span>排行榜</span>
                    <span>排行榜</span>
                    
                </div>
                <RouterView routers={this.props.children}></RouterView>
            </div>
        );
    }
}

export default home;