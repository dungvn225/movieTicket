import React from 'react'
import className from 'classnames/bind'
import styles from './AdminLayout.module.scss';
import MenuItem from './MenuItem/MenuItem';
import { config } from '../../config/config';
import {UserOutlined,FileOutlined ,ProfileOutlined } from '@ant-design/icons'
import { images } from '../../assets/images';
const cx=className.bind(styles);
const MENU=[
  {
     title:'Users',
     to: config.routers.user,
     icon: <UserOutlined/>
  },
  {
    title:'Movies',
    to: config.routers.movies,
    icon: <FileOutlined/>
 },
 {
    title:'Showtimes',
    to: config.routers.showtimes,
    icon: <ProfileOutlined/>
 }
]
export default function AdminLayout({children}) {
  return (
    <div className={cx('wrapper')}>
         
        <div className={cx('menu')}> 
        <div className={cx('logo')}><img src={images.logo} alt={'logo'}/></div>
              <MenuItem menu={MENU}/>
        </div>
        <div className={cx('content')}>
        {children}
        </div>
       
    </div>
  )
}
