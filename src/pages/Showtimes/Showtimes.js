import React from 'react'
import className from 'classnames/bind';
import styles from './Showtimes.module.scss';
const cx=className.bind(styles);
export default function Showtimes() {
  return (
    <div className={cx('wrapper')}>Showtimes</div>
  )
}
