import React, { useState } from 'react';
import {NavLink} from 'react-router-dom'
import { Tabs } from 'antd';
import classNames from 'classnames/bind';
import styles from './HomeMenu.module.scss';
import moment from 'moment'
const cx=classNames.bind(styles);
const arr=[
    {
      title:<img src='https://picsum.photos/200/200' />,
      content:'tab1'
  
    }
    , {
      title:<img src='https://picsum.photos/200/200' />,
      content:'tab2'
  
    }
  ]
export default function HomeMenu({arrCinemaSystem}) {
    const [tabPosition, setTabPosition] = useState('left');
const changeTabPosition = (e) => {
  setTabPosition(e.target.value);
};

  return (
    <div className={cx('wrapper')}>
        <Tabs
        tabPosition={tabPosition}
        items={ arrCinemaSystem?.map((item, index) => {
          
          return {
            label: <img src={item.logo} className={cx('logo-system')} />,
            key: index,
            children: 
            <Tabs
            tabPosition={tabPosition}
            items={ item.lstCumRap.map((cinema, index) => {
              
              return {
                label: 
                <div style={{width:'1%',display:'flex'}} > 
                <img src={item.logo}  style={{border:'0px'}} className={cx('logo-cinema')}/> <br/>
                    <div >
                    <div className={cx('name')}> {cinema.tenCumRap}  </div>
                      <div style={{textAlign:'left'}}>chi tiết</div>
                    </div>
                     
                </div>,
                key: index,
                children: cinema.danhSachPhim.slice(0,10).map((movie,index)=>{
                  return <div style={{display:'flex'}} key={index}>
                        <div  style={{background:`url(${movie.hinhAnh})  no-repeat center / cover`,  width:'30%',height:'200px', margin:'10px'} }  > </div>
                         <div style={{padding:'6px',width:'70%'} } className={cx('movie')}>
                              <div style={{fontWeight:'bold'}}>{movie.tenPhim}</div>
                              <div>{cinema.diaChi}</div>
                              
                              {movie.lstLichChieuTheoPhim?.slice(0,12).map((showtimes,index)=>{
                               
                                return <NavLink to={`/checkout/${showtimes.maLichChieu}`} style={{paddingRight:'10px'}}>{moment(showtimes.ngayChieuGioChieu).format('hh:mm:ss A')} </NavLink>
                               
                              })}
                              
                         </div>
                         <hr/>
                  </div>
                }),
              };
            })}
          />
          };
        })}
      />
    </div>
  )
}
