import React, { Component } from 'react';
import {Button} from "antd"
import axios from "axios"
let filename = ""
class settings extends Component {
    state={
        img: localStorage.pic
    }

    render() {
        return (
            <div className="settings">
                <div className="file">
                    <input type="file"  onChange={(e)=>{
                        let fileObj=e.target.files[0]
                        filename = fileObj.name
                        let reg=/\.(png|jpg|gif|jpeg)$/
                        if(!reg.test(fileObj.name)){
                            alert('文件必须是一张图片')
                            return 
                        }
                        let renderFile = new FileReader();
                        renderFile.readAsDataURL(fileObj)
                        renderFile.onload=()=>{
                            console.log(renderFile.result)
                            this.setState({
                                img:renderFile.result
                            })
                        }
                        
                    }}/>
                    <img src={this.state.img} alt="" />
                </div>
                <Button type="primary" className="set" onClick={()=>{
                      axios.defaults.headers.common["authorization"] = localStorage.token;
                    axios.post("http://localhost:3000/api/facePhoto", { filename,}).then((res)=>{
                        console.log(res.data)
                    })
                }}>更改</Button>
            </div>
        );
    }
}

export default settings;