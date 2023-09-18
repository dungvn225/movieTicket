import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { publicRouters } from './routers';
import HomeLayout from './layouts/HomeLayout/HomeLayout';
import React, { Fragment } from 'react'
import Loading from './components/Loading/Loading';

export default function App() {
  return (
  
   
      <Router>
          
          <div className='App'>
          <Loading/>
             <Routes>
                   {publicRouters.map((route,index)=>{ 
                    const Page=route.component;
                      let Layout=HomeLayout;
                      if(route.layout){
                         
                         Layout=route.layout
                      }else if(route.layout===null){
                            Layout=Fragment
                      }
                    return <Route  exact path={route.path} element={<Layout><Page/> </Layout>} key={index}/>
                   })}
             </Routes>
             </div>
         </Router>
   
  )
}