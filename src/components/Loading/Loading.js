import React from 'react'
import styles from './Loading.module.scss';
import className from 'classnames/bind';
import { useSelector } from 'react-redux';
import { images } from '../../assets/images';
const cx=className.bind(styles);


export default function Loading() {
   const isLoading =  useSelector(state=>state.loadingReducer.isLoading);

   if(isLoading){
    return (
        <div className={cx('wrapper')}>
             <img src= {images.loading} alt='loading'/>
        </div>
      )
   }else{
      return ''
   }
 
}
