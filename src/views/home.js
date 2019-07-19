import React, { Component } from 'react';
import { Layout, Menu, Icon, Modal, Button } from 'antd';
// import {NavLink} from "react-router-dom"
import RouterView from "../router/RouterView"
import axios from "axios"
import "antd/dist/antd.css";
import {connect} from "react-redux"
// import {DatePicker} from 'antd';
// const { Option } = Select

// const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const { confirm } = Modal;
const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;
     class home extends Component {

    constructor(props) {
        super(props);
        this.state={
            collapsed: false,
            phone:"",
            pic:"",
            arr:[],
            index:0,
            nav:{
                index:"首页",
                settings:"设置",
                Dk:"货款订单",
                Zd:"转单订单",
                Bx:"保险订单"
            },
            
            filterDataFn :[]
        }
    }
    

    componentDidMount() {
        if(!localStorage.token){
            this.props.history.push("/login")
        }
        axios.defaults.headers.common["authorization"] = localStorage.token;
        axios.get("http://localhost:3000/api/islogin").then((res)=>{
            console.log(res.data.info)
            localStorage.pic = res.data.info.facePhoto
            this.setState({
                phone:res.data.info.phone,
                pic: res.data.info.facePhoto
            })
        })

    }

   showConfirm() {
    confirm({
        title: '确定要退出登陆吗?',
        onOk() {
            return new Promise((resolve, reject) => {
                setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
            }).catch(() => console.log('Oops errors!'));
        },
        onCancel() { },
    });
}

    getdata(order){
        console.log(order)
        return (next)=>{
            axios.get("http://localhost:3000/api/list?order="+ order).then((res)=>{
                // console.log(res.data)
                next({ type:'DATA',data:res.data})
            })
        }
    }

 
    // filterDataFn(obj){
    //     console.log(this.props.data)
    //     let data = this.props.data.filter((item)=>{
    //             return obj.endNumber > item.money && obj.startNumber < item.money && obj.states == item.handleState && obj.servers == item.serviceName && item.type == obj.Zdstates
    //         })
    //         console.log(data)
    //     return data
    // }
   
    render() {
        console.log(this.props)

        


        return (
            <div className="wrapper">
                <Layout>
                    <Sider>
                        <div className="Navtitle">
                           <div className="imgs">
                                <img src={this.state.pic} alt="" />
                           </div>
                           <p>{this.state.phone}</p>
                        </div>
                        <Menu
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                            theme="dark"
                        >
                            <Menu.Item key="1">
                                <span onClick={() => {
                                    console.log(1)
                                    this.props.history.push("/home/index")
                                    let arr = this.state.arr;
                                    arr.push({
                                        name: this.state.nav.index,
                                        path: "/home/index"
                                    })
                                    this.setState({
                                        arr,
                                    })
                                }}> {this.state.nav.index}</span>

                            </Menu.Item>
                            <Menu.Item key="2">
                                <span onClick={() => {
                                    console.log(1)
                                    this.props.history.push("/home/settings")
                                    let arr = this.state.arr;
                                    arr.push({
                                        name: this.state.nav.settings,
                                        path: "/home/settings"
                                    })
                                    this.setState({
                                        arr,
                                    })
                                }}> {this.state.nav.settings}</span>

                            </Menu.Item>
                            
                            <SubMenu
                                key="sub1"
                                title={
                                    <span>
                                        <Icon type="mail" />
                                        <span>订单管理</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="5">
                                    <span onClick={()=>{
                                        console.log(1)
                                        this.props.reqData(this.getdata(1))
                                        this.props.history.push("/home/order/Dk")
                                        let arr = this.state.arr;
                                        
                                        arr.push({
                                            name: this.state.nav.Dk,
                                            path: "/home/order/Dk"
                                        })
                                        this.setState({
                                            arr,
                                        })
                                    }}> {this.state.nav.Dk}</span>

                                    
                                    </Menu.Item>
                                <Menu.Item key="6">
                                    <span onClick={() => {
                                        this.props.reqData(this.getdata(2))
                                        this.props.history.push("/home/order/Zd")
                                        let arr = this.state.arr;

                                        arr.push({
                                            name: this.state.nav.Zd,
                                            path: "/home/order/Zd"
                                        })
                                        this.setState({
                                            arr,
                                        })
                                    }}> {this.state.nav.Zd}</span>
                                    

                                    
                                </Menu.Item>
                                <Menu.Item key="7">
                                    <span onClick={() => {
                                        this.props.reqData(this.getdata(3))
                                        this.props.history.push("/home/order/Bx")
                                        let arr = this.state.arr;

                                        arr.push({
                                            name: this.state.nav.Bx,
                                            path:"/home/order/Bx"
                                        })
                                        this.setState({
                                            arr,
                                        })
                                    }}> {this.state.nav.Bx}</span>

                                </Menu.Item>
                            </SubMenu>
                           
                        </Menu>
                        <Button onClick={this.showConfirm}>退出</Button>
                        <Button onClick={()=>{
                            this.props.history.push("/home/settings")
                        }}>设置</Button>
                    </Sider>
                    <Layout>
                        <Header>
                          {
                              this.state.arr.map((item,index)=>{
                                  return <span key={index} className={this.state.index === index?"active":""} onClick={()=>{
                                    this.setState({
                                        index,
                                    })
                                    this.props.history.push(item.path)
                                    
                                  }}>{item.name} <b onClick={()=>{
                                      let arr = this.state.arr;
                                      arr.splice(index,1)
                                      this.setState({
                                          arr,
                                      })
                                  }}>X</b></span>
                                     
                              })
                          }
                        </Header>
                        <Content>
                        
                            <div className="main_content">
                                <RouterView routers={this.props.children} ></RouterView>
                            </div>
                        </Content>
                    </Layout>
                </Layout>

               
            </div> 
        );
    }
}

let mapStateToProps = (state)=>{
    return {
        data: state.reducer.data
    }
}




let mapDispatchToProps = (dispatch)=>{
    return {
        reqData(fn){
            dispatch(fn)
        },
        filter(obj){

            dispatch({type:"FILTER_DATA",obj})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(home);