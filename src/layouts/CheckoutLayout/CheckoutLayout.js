import React from 'react'
import classNames from 'classnames/bind'
import styles from './CheckoutLayout.module.scss';
import { USER_LOGIN } from '../../utils/settings/config';
import {Navigate,useNavigate} from 'react-router-dom'
const cx=classNames.bind(styles)
export default function CheckoutLayout({children}) {   
    const navigate=useNavigate();   
    
    if(localStorage.getItem(USER_LOGIN)){
        return (
            <div className={cx('wrapper')}>
                  {children} 
            </div>
          )
    }else{
      return  ( 
           <Navigate to='/login' /> 
      )
    }
 
}
