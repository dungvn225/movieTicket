import React, { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { Carousel } from 'antd';
import { GetCarouselApiAction } from '../../../redux/actions/carouselActions';
const contentStyle = {
  height: '300px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79'

};

export default function HomeCarousel() {
  const dispatch=useDispatch();
   useEffect(()=>{
       dispatch(GetCarouselApiAction());
   },[])
   const arrImage=useSelector(state=>state.carouselReducer.arrImage)
  return (
    <Carousel autoplay>
   {arrImage.map((item,index)=>{
    return (
      <div key={index}>
      <div style={{...contentStyle,background:`url(${item.hinhAnh}) repeat center / contain `}} >
         
      </div>
    </div>
    )
   })}
   
  </Carousel>
  )
}
