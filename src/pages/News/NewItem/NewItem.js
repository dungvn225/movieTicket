import React from 'react'
import classNames from 'classnames/bind'
import styles from './NewItem.module.scss'
import { NavLink } from 'react-router-dom'
const cx=classNames.bind(styles)
export default function NewItem({item}) {
  return (
    <NavLink to={`/${item.biDanh}/${item.maPhim}`} className={cx('wrapper')}>
         <div className={cx('item')}>
             <div style={{background:`url(${item?.hinhAnh}) no-repeat center / contain`,width:'200px',height:'200px'}} ></div>
             <div className={cx('info')}>
                 <div className={cx('title')}>{item?.tenPhim}</div>
                 <div className={cx('discription')}>{item?.moTa}</div>
             </div>
         </div>
    </NavLink>
  )
}
