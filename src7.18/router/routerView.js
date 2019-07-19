

import React, { Component } from 'react';
import {Switch,Redirect,Route} from "react-router-dom"



class routerView extends Component {
    render() {

        let {routers} = this.props;

        // 取重定向
        let Redirects =  routers.filter((item)=>{
            return item.redirect
        })

        let itemRedirect = Redirects.map((item,index)=>{
            return <Redirect key={index} from={item.path} to={item.redirect}/>
        })

        routers = routers.filter((item)=>{
            return !item.redirect
        })

        return (
            <Switch>
                {
                    routers.map((item,index)=>{
                        return <Route path={item.path} key={index} render={(props)=>{
                            return <>
                               {
                                    item.children && <item.component {...props} children={item.children}></item.component>
                               }
                               {
                                    !item.children && <item.component {...props}></item.component>
                               }
                            </>
                        }}></Route>
                    })
                }
                {
                    itemRedirect.length !== 0 && itemRedirect
                }
            </Switch>
        );
    }
}

export default routerView;