import React, { Component } from 'react';
import axios from "axios"
class login extends Component {

    state={
        phone:"",
        pwd:"",
        checkcode:""
    }

    componentDidMount() {
        axios.get("http://localhost:3000/api/checkCode").then((res)=>{
            console.log(res.data.Verification)
            this.setState({
                checkcode : res.data.Verification
            })
        })
    }


    render() {
        return (
            <div className="wrap">
                <div className="left">
                    <p className="welcome">Welcome</p>
                    <p>赚赚金融 开创信贷“1＋N”模式的综合互联网金融服务共享平台</p>
                </div>
                <div className="right">
                    <div className="litle">
                        <div className="top">
                            <span>赚</span>
                            <p>赚赚金融渠道管理系统</p>
                        </div>
                       <div className="form">
                            <p><input type="text" placeholder="手机号"  value={this.state.phone} onChange={(e)=>{
                                this.setState({
                                    phone:e.target.value
                                })
                            }}/></p>
                            <p><input type="text" placeholder="登录密码" value={this.state.pwd} onChange={(e)=>{
                                this.setState({
                                    pwd: e.target.value
                                })
                            }}/></p>
                            <p><input type="text" placeholder="验证码" value={this.state.checkcode} onChange={(e) => {
                                this.setState({
                                    checkcode: e.target.value
                                })
                            }}/>
                                
                            </p>
                            <p><button onClick={this.login.bind(this)}>登录</button></p>
                       </div>
                    </div>
                </div>
            </div>
        );
    }
    login() {
        axios.post("http://localhost:3000/api/login", { phone: this.state.phone, password: this.state.pwd, checkcode: this.state.checkcode}).then((res)=>{
            console.log(res.data)
            localStorage.token = res.data.sessionId;
            
            this.props.history.push("/home/index")
        })
    }
}

export default login;