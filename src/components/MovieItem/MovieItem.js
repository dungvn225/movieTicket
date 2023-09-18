import React from 'react'
import styles from './MovieItem.module.scss';
import className from 'classnames/bind';
const cx=className.bind(styles);
export default function MovieItem({item}) {
  return (
    <div className={cx('wrapper')}>
       <div className={cx('content')}>
           <div className={cx('content-img')} style={{background:`url(${item.hinhAnh}) no-repeat,url('https://picsum.photos/1000/200') center / cover`}}>
              <img src={item.hinhAnh} style={{opacity:'0'}}/>
           </div>
           <div className={cx('content-title')}>{item.tenPhim}</div>
           <div className={cx('content-description')}>
                {item.moTa.length>100 ? <span>{item.moTa.slice(0,100)} ...</span>: <span>{item.moTa}</span>}
               </div>
             <a href='' className={cx('content-link')}> Đặt vé</a>
       </div>
        
    </div>
  )
}



