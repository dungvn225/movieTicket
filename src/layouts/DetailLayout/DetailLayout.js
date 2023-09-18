import React, { useEffect } from 'react'
import styles from './DetailLayout.module.scss';
import className from 'classnames/bind';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'
const cx=className.bind(styles)
export default function DetailLayout({children}) {
 
 
   useEffect(()=>{
      window.scrollTo(0,0);
   },[])
  return (
    <div className={cx('wrapper')}>
        <Header />
                {children}
        <Footer/>
    </div>
  )
}


