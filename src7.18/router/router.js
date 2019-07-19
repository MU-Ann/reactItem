import Home from "../views/home"
import Movie from "../views/movie"
import Sort from "../views/sort"
import My from "../views/my"
import One from "../views/One"
const routers = [{
    path:"/",
    redirect:"/home"
},{
    path:"/home",
        component: Home,
        children: [{
            path: "/home/One",
            component: One
        }]
}, {
    path: "/movie",
    component: Movie
},{
    path: "/sort",
    component: Sort
    }, {
        path: "/my",
        component: My
    }]
export  default routers