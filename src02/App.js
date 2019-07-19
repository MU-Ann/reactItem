import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Aside from "./components/aside"
import Content from "./components/content"
import axios from "axios"

class App extends React.Component{

  state ={
    data :[],
    num:0
  }


  componentDidMount() {
    axios.get("/data").then((res)=>{
      console.log(res.data)
      this.setState({
        data: res.data
      })
    })
  }



  render() {
    return (
      <div className="main_wrap">
        <Aside nav={this.state.data} ontab={(index)=>{
          console.log(index)
          this.setState({
            num:index
          })
        }}></Aside>
        <Content list={this.state.data[this.state.num]}></Content>
      </div>
    )
  }
}




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
