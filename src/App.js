import React, { Component } from 'react';
import {BrowserRouter} from "react-router-dom"
import RouterView from "./router/RouterView"
import {routers} from "./router/router"
import {Provider} from "react-redux"
import store from "./store/store"
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="box">
        <Provider store={store}>
        <BrowserRouter>
        <RouterView routers={routers}></RouterView>
        </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;