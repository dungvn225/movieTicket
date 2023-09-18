import React from 'react'
import className from 'classnames/bind'
import styles from './CheckoutHistory.module.scss';
import moment from 'moment'
const cx=className.bind(styles)
export default function CheckoutHistory({userInfo}) {
 

  return (
    <div className={cx('wrapper')}>
      {userInfo.thongTinDatVe?.map((item,index)=>{
        return(
          <div className={cx('item')}>
        <div  className={cx('img')} >  <div style={{background:`url(${item.hinhAnh}) no-repeat center / cover`,borderRadius:'50%',marginTop:'20px'}}> <img src={item.hinhAnh} style={{width:'80%',opacity:'0'}} /></div> </div>
           <div className={cx('info')}>
              <div className={cx('name')}>{item?.tenPhim}</div>
              <div className={cx('address')}>Địa điểm:{item.danhSachGhe[0].tenHeThongRap}</div>
              <div className={cx('showDate')}>Ngày đặt:{moment(item.ngayDat).format('DD-MM-YYYY HH:MM:SS A')}</div>
              <div className={cx('rapName')}>{item.danhSachGhe[0].tenRap}</div>
              <div className={cx('seat')}>Ghế: 
                 {item.danhSachGhe.map((seat,index)=>{
                  return(
                <>  <span>{seat.tenGhe} | </span>    </>
                  )
                 })}
              </div>
           </div>
      </div>
        )
      })}
         
    </div>
  )
}
