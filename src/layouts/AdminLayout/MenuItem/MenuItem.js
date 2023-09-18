import React from 'react'
import className from 'classnames/bind'
import styles from './MenuItem.module.scss'
import {UserOutlined } from '@ant-design/icons'
import {NavLink} from 'react-router-dom'
import { config } from '../../../config/config'
const cx=className.bind(styles);
export default function MenuItem({menu}) {
  return (
    <div className={cx('wrapper')}>
        {menu.map((item,index)=>{
            return(
                
        <NavLink to={item.to} className={cx('content')}>
       {item.icon}<span className={cx('text')}> {item.title}</span>
        </NavLink>
            )
        })}
    </div>
  )
}
