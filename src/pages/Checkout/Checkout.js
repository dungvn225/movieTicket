import React, { useEffect } from 'react'
import styles from './Checkout.module.scss';
import className from 'classnames/bind';
import {useDispatch,useSelector} from 'react-redux'
import { bookTicketsAction, changeTabAction, getTicketDetailAction, redirectTabAction, seatAction } from '../../redux/actions/ticketManagementActions';
import {useParams} from 'react-router-dom'
import {CloseOutlined,CheckOutlined} from '@ant-design/icons';
import { Tabs } from 'antd';
import CheckoutHistory from './CheckoutHistory/CheckoutHistory';
import {Link} from 'react-router-dom'
import {config} from '../../config/config'

import { userInfoAction } from '../../redux/actions/userManagementActions';
const cx=className.bind(styles);


  export   function Checkout(props) {
  const params=useParams();
  const {ticketDetail,arrSeat}=useSelector(state=>state.ticketManagementReducer);
  const {userLogin} =useSelector(state=>state.userManagementReducer);
 
  const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getTicketDetailAction(params.id));   
    },[])
   

    const {danhSachGhe,thongTinPhim}=ticketDetail;
    const renderSeats=()=>{
      return danhSachGhe?.map((seat,index)=>{
           let Vip_seat=seat.loaiGhe=='Vip'?'vip-seat':''
           let reserved_seat=seat.daDat?'reserved-seat':''
           let reserving_seat='';
           let yourSeated=''
           let clientSeating=''
            const  position=arrSeat.findIndex(item=>item.maGhe==seat.maGhe)
            if(position!=-1){
             
              reserving_seat='reserving-seat'
              if(seat.daDat){
                yourSeated='yourSeated';
              }
            }
            if(seat.taiKhoanNguoiDat==userLogin.taiKhoan){
                yourSeated='yourSeated';
           
            }
          
          return (
             <>
              <button disabled={seat.daDat} className={cx('seat',`${reserved_seat}`,`${Vip_seat}`,`${reserving_seat}`,`${yourSeated}`,`${clientSeating}`)} 
                onClick={()=>{dispatch(seatAction(seat))}}
                key={index}
              >
                {seat.daDat? <CloseOutlined style={{marginBottom:'6px'}}/>: seat.stt}
                </button>
               {(index+1)%12==0 ? <br/> : ''}
             </>
          )
       })
    }
 return (
    <div className={cx('wrapper')}>
      
         <div className={cx('seats')}>
              <div style={{width:'80%',margin:'20px auto -20px auto',height:'10px',background:'black'}}></div>
             <div className={cx('trapezoid')}></div>
             <div style={{width:'88%',margin:'auto'}}>   {renderSeats()} </div>
             <div className={cx('note')}>
                 <div> Ghế chưa đặt: <br/> <button style={{background:' rgb(155, 153, 153)' , color:'white'}}><CheckOutlined /></button></div>
                 <div> Ghế đang đặt: <br/> <button style={{background:' var(--green-color)' , color:'white'}}><CheckOutlined /></button></div>
                 <div> Ghế đã đặt: <br/> <button style={{background:'red' , color:'white'}}><CheckOutlined /></button></div>
                 <div> Ghế vip : <br/> <button style={{background:'rgb(255, 123, 0)' , color:'white'}}><CheckOutlined /></button></div>
               <div> Ghế bạn đặt: <br/> <button style={{background:'#0000ffbd' , color:'white'}}><CheckOutlined /></button></div>
             </div>
         </div>
         <div className={cx('info')}>
             <div>
             <h3 >{arrSeat.reduce((total,seat,index)=>{
              return total+=seat.giaVe;
             },0).toLocaleString()} đ</h3>    
             <div className={cx('name')}>{thongTinPhim?.tenPhim}</div>
            <div className={cx('address')}>Địa điểm: {thongTinPhim?.diaChi}</div>
            <div className={cx('showdate')}>Ngày chiếu:{thongTinPhim?.ngayChieu}</div>
            <hr/>
            <div style={{display:'flex',alignItems:'center',color:'var(--red-color)',flexWrap:'wrap'}}>
                  Ghế: 
                   {arrSeat.sort((a,b)=>(a.stt - b.stt)).map((item,index)=>{
                    return <span style={{color:'var(--green-color)',margin:'6px'}}>{item.stt}</span>
                   })}
              
              
            </div>
            <hr/>
            <div className={cx('emall')}>email:{userLogin.email}</div>
             <hr/>
            <div className={cx('phone')}>phone:{userLogin.phone}</div>
             </div>
            <div style={{height:'100%',display:'flex',alignItems:'center'}}>
            <div style={{width:'100%',padding:'10px',background:'var(--green-color)',color:'white',textAlign:'center',cursor:'pointer'}}
              onClick={()=>{
                 
                 const data={
                  maLichChieu:params.id,
                  danhSachVe:arrSeat
                 }
                 dispatch(bookTicketsAction(data));
                
              }}
            >Đặt vé</div>
            </div>
         </div>
        
    </div>
  )
}



export default (props)=>{
  const dispatch=useDispatch();
 
  
  useEffect(()=>{
    dispatch(userInfoAction());
    return ()=>{
      dispatch(changeTabAction('1')) 
    }
 },[])
 const userInfo=useSelector(state=>state.userManagementReducer.userInfo);
 const {activeTab}=useSelector(state=>state.ticketManagementReducer);


 const onChange = (key) => {

  dispatch(changeTabAction(key))  
   
};
  return(
    <Tabs
    activeKey={activeTab}
    defaultActiveKey={'1'}
    onChange={onChange}
    items={[
      {
        label: `Chọn ghế và thanh toán`,
        key: '1',
        children: <Checkout {...props}/>,
      },
      {
        label: `Kết quả đặt vé`,
        key: '2',
        children: <CheckoutHistory  userInfo={userInfo}/> ,
      },
      {
        label: <Link style={{textDecoration:'none',color:'black'}} to={config.routers.Home} >Home</Link>,
        key: '3',
        children:'' ,
      },
    
    ]}
  />
  )
}
