import React from 'react'
import styles from './SlideUp.module.scss';
import classNames from 'classnames/bind';
import {animated,useSpring} from 'react-spring'
const cx=classNames.bind(styles);
export default function SlideUp({children}) {

    const propsSpring=useSpring({
      to:{
        transform:'translateY(-100%)'
      },
      from: {
        transform:'translateY(0%)'
      },
      duration:400
    })
  return (
    <div  className={cx('slideUp')}>
        {children}
    </div>
  )
}
