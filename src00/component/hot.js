import React, { Component } from 'react';
import axios from "axios"
class hot extends Component {

    constructor(props) {
        super(props);
        this.state={
            data:[]
        }
    }
    




    componentDidMount() {
        axios.get("/data?id="+1).then((res)=>{
            console.log(res.data)
            this.setState({
                data :res.data
            })
        })
    }




    render() {
        return (
            <div className="hot">
                {
                    this.state.data&&this.state.data.map((item,index)=>{
                        return <p key={index}><span>{item.title}</span><span>{item.hotNum}</span></p>
                    })
                }
            </div>
        );
    }y

    
}

export default hot;