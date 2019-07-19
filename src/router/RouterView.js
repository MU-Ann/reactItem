import React, { Component } from 'react';

import {Redirect,Route,Switch} from "react-router-dom"


class RouterView extends Component {
    render() {

        let {routers } = this.props;
        console.log(routers)
        // 取出重定向
       let redirect= routers.filter((item,index)=>{
            return item.redirect
        })

        // 设置重定向
        let itemredirect = redirect.map((item,index)=>{
            return <Redirect key={index} from={item.path} to={item.redirect}></Redirect>
        })
         routers = routers.filter((item,index)=>{
            return !item.redirect
         })


        return (
            <Switch>
                {
                    routers.map((item,index)=>{
                        console.log(item.children)
                        return <Route path={item.path} key={index} render = {(props)=>{
                            return <>
                                {
                                    item.children&&<item.component {...props} children={item.children}></item.component>
                                }
                                {
                                    !item.children && <item.component {...props}></item.component>
                                }
                            </>
                        }}></Route>
                    })   
                }
                {
                    itemredirect.length !== 0 && itemredirect
                }
            </Switch>
        );
    }
}

export default RouterView;