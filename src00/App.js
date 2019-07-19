import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Hot from "./component/hot"
import axios from "axios"


class App extends React.Component{
  render(){
    return (
      <div className="wrap">
       
        <p className="title">
          <span>搜索热点</span><span onClick={()=>{
            console.log(1)
            axios.get("/data?id="+0).then((res) => {
              this.setState({
                data: res.data
              })
            })
          }}>换一换</span>
        </p>
        <Hot></Hot>
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
