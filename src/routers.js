import Home from "./pages/Home/Home"
import { config } from "./config/config"
import Contact from "./pages/Contact/Contact"
import Detail from "./pages/Detail/Detail"
import DetailLayout from "./layouts/DetailLayout/DetailLayout"
import Checkout from "./pages/Checkout/Checkout"
import CheckoutLayout from "./layouts/CheckoutLayout/CheckoutLayout"
import Login from "./pages/Login/Login"
import Users from "./pages/Users/Users"
import AdminLayout from "./layouts/AdminLayout/AdminLayout"
import Movies from "./pages/Movies/Movies"
import Showtimes from "./pages/Showtimes/Showtimes"
import Register from "./pages/Register/Register"
import HomeLayout from "./layouts/HomeLayout/HomeLayout"
import News from "./pages/News/News"
const publicRouters=[
    {
        path:config.routers.Home,component:Home
     },
     {
        path:config.routers.Contact,component:Contact,layout:null
     },
     {
      path:config.routers.News,component:News,layout:HomeLayout
   },
     {
      path:config.routers.Checkout,component:Checkout,layout:CheckoutLayout
     },
     {
      path:config.routers.Login,component:Login,layout:null
     },
     {
      path:config.routers.register,component:Register,layout:null
     },
     {path:config.routers.admin,component:'null', layout:AdminLayout},
     {path:config.routers.user,component:Users,layout:AdminLayout},
     {path:config.routers.movies,component:Movies,layout:AdminLayout},
     {path:config.routers.showtimes,component:Showtimes,layout:AdminLayout},

     {
      path:config.routers.Detail,component:Detail, layout:DetailLayout
   },

]


export {
    publicRouters
}