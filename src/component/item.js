import React, { Component } from 'react';
import {Table, Button ,DatePicker, InputNumber, Radio,
    Select} from "antd";
const { Option } = Select

const {  RangePicker } = DatePicker;


class index extends Component {

        
    state = {
        data:undefined,
        status: ["新订单", "已接单", "未审核", "已完成", "暂无状态"],
        ZdStatus: ["信用贷", "押房贷", "房乐贷", "车乐贷"],
        server: ["张玲", "李莉", "李小冉", "李大维", "李家豪"],
        startNumber: "",
        endNumber: "",
        states: "",
        servers: "",
        Zdstates: "",
        startDate:"",
        endDate:"",
        
        columns: [
            {
                title: '订单号',
                width: 100,
                dataIndex: 'id',
                key: 'name',
                fixed: 'left',
            },
            {
                title: '下单时间',
                width: 100,
                dataIndex: 'date',
                key: 'age',
                fixed: 'left',
            },

            { title: '用户名称', dataIndex: 'customerName', key: '1' },
            { title: '手机号', dataIndex: 'phone', key: '2' },
            { title: '转单类型', dataIndex: 'type', key: '3' },
            { title: '贷款金额(万元)', dataIndex: 'money', key: '4' },
            { title: '订单状态', dataIndex: 'handleState', key: '5' },
            { title: '客服', dataIndex: 'serviceName', key: '6' },
            
            {
                title: '操作',
                key: 'operation',
                fixed: 'right',
                width: 100,
                render: () => <a href="javascript:;">...</a>,
            },
        ]
,
        // data:this.props.data,
        selectedRowKeys: [], // Check here to configure the default column
        loading: false,
    };

   getdata() {
       if(this.props.data){
           let arr = JSON.parse(JSON.stringify(this.props.data));
           arr.forEach((item) => {
               if (item.handleState === 0) {
                   item.handleState = "新订单"
               } else if (item.handleState === 1){
                   item.handleState = "已接单"
               } else if (item.handleState === 2) {
                   item.handleState = "未审核"
               } else if (item.handleState === 3) {
                   item.handleState = "已完成"
               } else if (item.handleState === 4) {
                   item.handleState = "暂无状态"
               }
           })
           return arr
       }else{
           return []
       }
     
   }
    filterDataFn(){
        
                   let obj = {
                            endNumber: this.state.endNumber,
                            startNumber: this.state.startNumber,
                            startDate: this.state.startDate,
                            endDate: this.state.endDate,
                            states: this.state.states,
                            servers: this.state.servers,
                            Zdstates: this.state.Zdstates
                        }
        let orderData = this.getdata();
       orderData = orderData.filter((item) => {
           let nowTime = new Date(item.date)*1
           //时间
           if(obj.startDate!==""&&obj.endDate!==""){
              if(nowTime<obj.startDate||nowTime>obj.endDate){
                 return false                 
              }
           }
           //金额
           if(obj.startNumber!==""){
              if(item.money<obj.startNumber){
                 return false
              }
           }

           if (obj.endNumber !== "") {
               if (item.money > obj.endNumber) {
                   return false
               }
           }
           
           //转态
           if(obj.states!==""){
               if (item.handleState!==obj.states){
                   return false
               }
           }

           //type
           if (obj.Zdstates!==""&&obj.Zdstates!=="请选择"){
               if (obj.Zdstates!==item.type){
                   return false                 
               }
           }
          //    person
           if (obj.servers !== "" && obj.servers !== "请选择") {
               if (obj.servers !== item.serviceName) {
                   return false
               }
           }
           return true
        })
        this.setState({
            data:orderData
        })
        // return orderData
    
  
    

    }




    render() {

        return (
            <div className="item">
                <div className="filter">
                    <div>
                        <span>处理时间</span>
                        <RangePicker onChange={(data, mode) => {
                            console.log(mode)
                            // let startDate = new Date(mode[0]) * 1;
                            // let endDate = new Date(mode[1]) * 1
                            this.setState({
                                startDate:new Date(mode[0]) * 1,
                                endDate : new Date(mode[1]) * 1
                            })
                            // console.log(startDate,endDate)
                        }} />
                    </div>
                    <div>
                        <span>金融范围</span>
                        <InputNumber min={0} max={10} step={1} onChange={(value) => {
                            console.log(value)
                            this.setState({
                                startNumber: value
                            })
                        }} />
                        <span>  -  </span>
                        <InputNumber min={0} max={20} step={1} onChange={(value) => {
                            console.log(value)
                            this.setState({
                                endNumber: value
                            })
                        }} />
                    </div>




                    <div>
                        <span>处理状态</span>
                        <Radio.Group defaultValue="a" buttonStyle="solid">

                            {
                                this.state.status.map((item, index) => {
                                    return <Radio.Button value={item} key={index} onChange={(e) => {
                                        this.setState({
                                            states: e.target.value
                                        })
                                        console.log(e.target.value)
                                    }}>{item}</Radio.Button>
                                })
                            }
                        </Radio.Group>
                    </div>

                    <div>
                        <span>转单类型</span>
                        <Select defaultValue="请选择" style={{ width: 120 }} onChange={(value) => {
                            console.log(value)
                            this.setState({
                                Zdstates: value
                            })
                        }}>
                            {
                                this.state.ZdStatus.map((item, index) => {
                                    return <Option value={item} key={index}>{item}</Option>
                                })
                            }
                        </Select>
                    </div>
                    <div>
                        <span>客服名称</span>
                        <Select defaultValue="请选择客服" style={{ width: 120 }} onChange={(value) => {
                            console.log(value)
                            this.setState({
                                servers: value
                            })
                        }}>
                            {
                                this.state.server.map((item, index) => {
                                    return <Option value={item} key={index}>{item}</Option>
                                })
                            }

                        </Select>
                    </div>
                    <Button type="primary" onClick={() => {
                        // let num = this.state.endNumber = this.state.startNumber
                     
                        this.filterDataFn()
                    }}>查询</Button>
                </div>
                <Table columns={this.state.columns} pagination={{pageSize:5}} position={"top"} dataSource={this.state.data?this.state.data:this.getdata()}  scroll={{ x: 1300 }} size={"middle"}  />
            </div>
        );
    }

}

// let mapStateToProps = (state)=>{
//     console.log(state.reducer.data)
//     return {
//         data: state.reducer.data
//     }
// }

export default index

// export default connect(mapStateToProps)(index);