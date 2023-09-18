import React, { useEffect, useState } from "react";
import {useParams,NavLink, useLocation} from 'react-router-dom'
import { Tabs } from "antd";
import className from "classnames/bind";
import styles from "./Detail.module.scss";
import "../../assets/styles/css/circle.css";
import { Rate } from 'antd';

import moment from 'moment'
import {useDispatch,useSelector} from 'react-redux'
import { getMovieDetailAction } from "../../redux/actions/cinemaManagementAcitons";
import { createSearchParams, useNavigate,useSearchParams } from "react-router-dom";

const cx = className.bind(styles);
export default function Detail() {
  const navigate=useNavigate()
  const location=useLocation()
  const [tabPosition, setTabPosition] = useState("left");
  const dispatch=useDispatch();
  const params=useParams();
  const movieDetail=useSelector(state=>state.cinemaManagementReducer.movieDetail);
  const {isLogin} =useSelector(state=>state.userManagementReducer)
 
  useEffect(()=>{
        dispatch(getMovieDetailAction(params.id));
  },[])

 

  const onChange = (key) => {
   
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        <div className={cx("overlay")}>
            <div className={cx('content-box')}>
          <div className={cx("content-wp")}>
            <div className={cx("content-container")}>
              <div
                className={cx("content-img")}
                style={{ background: `url(${movieDetail.hinhAnh}) no-repeat center / cover` }}
              >
                {" "}
              </div>
              <div className={cx("content-info")}>
                 <div className={cx("content-date")}>ngày khỏi chiếu:{moment(movieDetail.ngayKhoiChieu).format('DD.MM.yyyy')}</div>
                <div className={cx("content-mane")}>{movieDetail.tenPhim}</div>
                <div className={cx("content-description")}>{movieDetail.moTa}</div>
              </div>
            </div>
            <div className={cx("cicle")}>
               <div style={{textAlign:'center'}}> <Rate allowHalf value={movieDetail.danhGia / 2} /> </div>        
              <div  className={cx(`c100 p${movieDetail.danhGia * 10} big `,'bigs')}>
                <span>{movieDetail.danhGia * 10}%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </div>
          </div>
            <div style={{marginTop:'20px'}}>
            <Tabs
    defaultActiveKey="1"
    onChange={onChange}
    items={[
      {
        label: `Lịch chiếu`,
        key: '1',
        children:  <Tabs
        tabPosition={tabPosition}
        items={movieDetail.heThongRapChieu?.map((cinemaSystem, index) => {
       
          return {
            label: <div style={{background:`url(${cinemaSystem.logo}) no-repeat center / cover`,width:'50px',height:'50px'}}></div>,
            key: index,
            children: cinemaSystem.cumRapChieu?.map((cinema,index)=>{
              return <div style={{display:'flex'}}>
                    <div style={{background:`url(${cinema.hinhAnh})  no-repeat center / cover`,  width:'30%',height:'200px', margin:'10px'} } > </div>
                     <div style={{padding:'6px',width:'70%'} }>
                          <div style={{fontWeight:'bold'}}>{cinema.tenCumRap}</div>
                          <div>{cinema.diaChi}</div>
                          
                          {cinema.lichChieuPhim?.slice(0,10).map((showtimes,index)=>{
                             
                           return isLogin ?  <div 
                              onClick={()=>{
                                navigate(`/checkout/${showtimes.maLichChieu}`)
                              }}
                            style={{paddingRight:'10px',color:'blue',cursor:'pointer'}}>{moment(showtimes.ngayChieuGioChieu).format('hh:mm:ss A')} </div>:
                            navigate({
                              pathname: "/login",
                              search: createSearchParams({
                                  redirect: location.pathname.toString()
                              }).toString()
                          });
                           
                          })}
                          
                     </div>
                     <hr/>
              </div>
            }),
          };
        })}
      />,
      },
      {
        label: `Thông tin`,
        key: '2',
        children: `Thông tin`,
      },
      {
        label: `Đánh giá`,
        key: '3',
        children: `Đánh giá`,
      },
    ]}
  />
           
            </div> 
            </div>
        </div>
      </div>
    </div>
  );
}


