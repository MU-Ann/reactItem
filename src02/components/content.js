



import React, { Component } from 'react';

class content extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="content">
                
                
                {
                    this.props.list&&this.props.list.list.map((item,index)=>{
                        return <p key={index}>{item}</p>
                    })
                }
            </div>
        );
    }
}

export default content;