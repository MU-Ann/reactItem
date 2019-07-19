


import React, { Component } from 'react';

class aside extends Component {
    render() {
        return (
            <div className="aside">
               {
                   this.props.nav.map((item,index)=>{
                        return <p key={index} onClick={()=>{
                            this.props.ontab(index)
                        }}>{item.type}</p>
                   })
               }
            </div>
        );
    }
}

export default aside;