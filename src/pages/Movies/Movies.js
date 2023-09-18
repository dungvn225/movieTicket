import React from 'react'
import className from 'classnames/bind'
import styles from './Movies.module.scss';
const cx=className.bind(styles)
export default function Movies() {
  return (
    <div className={cx('wrapper')}>Movies</div>
  )
}
