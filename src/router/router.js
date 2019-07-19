import Login from "../views/login"
import Home from "../views/home"
import Index from "../views/index"
import Settings from "../views/settings"
import Dk from "../views/Dk"
import Zd from "../views/Zd"
import Bx from "../views/Bx"


export const routers = [{
    path:"/",
    redirect:"/home/index"
},{
    path: "/home", 
    component: Home,
        children:[{
        path:"/home/index",
        component: Index
    }, {
        path: "/home/settings",
        component: Settings
    },{
                path:"/home/order/Dk",
        component: Dk
    }, {
                path: "/home/order/Zd",
        component: Zd
    }, {
                path: "/home/order/Bx",
        component: Bx
    }]
}, {
    path: "/login", 
    component: Login
}]
