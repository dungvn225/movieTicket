import React from 'react'
import className from 'classnames/bind'
import styles from './Users.module.scss';
const cx=className.bind(styles)
export default function Users() {
  return (
    <div className={cx('wrapper')}>Users</div>
  )
}
