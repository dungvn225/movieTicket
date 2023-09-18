import React, { useEffect } from "react";
import { images } from "../../assets/images";
import  styles from './Footer.module.scss';
import className from "classnames/bind";
import {useSelector,useDispatch} from 'react-redux';
import { getCinemaSystemAction } from "../../redux/actions/cinemaManagementAcitons";

const cx=className.bind(styles);
export default function Footer() {
  const dispatch=useDispatch();
   useEffect(()=>{
      
    dispatch(getCinemaSystemAction());
   },[])
   const cinemaSystem=useSelector(state=>state.cinemaManagementReducer.arrCinemaSystem);
  return (
    <div className={cx("wrapper")}>
       <div className={cx('wp-content')}>
       <div className={cx("content1")}>
        <div className={cx("content-title")}>Faq</div>
        <ul className={cx("content-list")}>
          <li className={cx("content-item")}>
            <a className={cx("content-link")}>Bran Guidelines</a>
          </li>
          <li className={cx("content-item")}>
            <a className={cx("content-link")}>Thỏa thuận sử dụng</a>
          </li>
          <li className={cx("content-item")}>
            <a className={cx("content-link")}>Chính sách bảo mật</a>
          </li>
        </ul>
      </div>
      <div className={cx("content2")}>
        <div className={cx("content-title")}>Đối tác</div>
        <ul className={cx("content-list")}>
            {cinemaSystem?.map((item,index)=>{
            
              return (
                <li className={cx("content-item")} key={index}>
                <a className={cx("content-link")}> <img src={item.logo} alt=''/> </a>
              </li>
              )
            })}
         
         
          
        </ul>
      </div>
      <div className={cx("content3")}>
        <div className={cx("content-title")}>Mobile app</div>
        <ul className={cx("content-list")}>
          <li className={cx("content-item")}>
            <a className={cx("content-link")}> <img src={images.apple_logo} alt=''/> </a>
          </li>
          <li className={cx("content-item")}>
          <a className={cx("content-link")}> <img src={images.android_logo} alt='' /> </a>
          </li>
          
          
        </ul>
      </div>
      
       </div>
    </div>
  );
}
