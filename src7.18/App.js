import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Home from "./views/home"
import {BrowserRouter,NavLink} from "react-router-dom"
import RouterView from "./router/routerView"
import routers from "./router/router"
class App extends React.Component{
  render(){
    return (
      <div>
        <BrowserRouter>
        <header>
          <NavLink to="/home">首页</NavLink>
          <NavLink to="/movie">电影</NavLink>
          <NavLink to="/sort">榜单</NavLink>
          <NavLink to="/my">我的</NavLink>
        </header>
        {/* <Home></Home> */}
        
          <RouterView routers = {routers}></RouterView>
        </BrowserRouter>
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
