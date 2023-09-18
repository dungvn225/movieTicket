import React, { useEffect, useState } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import styles from './Home.module.scss';
import className from 'classnames/bind';
import HomeMenu from './HomeMenu/HomeMenu';
import MultipleRowSlick from '../../components/RSlick/MultipleRowSlick';
import { getMovieAction } from '../../redux/actions/movieManagentActions';
import { getCinemaSystemAction } from '../../redux/actions/cinemaManagementAcitons';
import HomeCarousel from '../../layouts/HomeLayout/HomeCarousel/HomeCarousel';

import { useTranslation } from 'react-i18next';
const cx=className.bind(styles);
function Home(){
 
  const { t, i18n } = useTranslation();

   const dispatch=useDispatch();

   useEffect(()=>{
    dispatch(getMovieAction());
    dispatch(getCinemaSystemAction());
   },[])



   const arrMovies=useSelector(state=>state.movieManagementReducer.arrMovies);
   const arrCinemaSystem=useSelector(state=>state.cinemaManagementReducer.arrCinemaSystem);
  return (
    <div className={cx('wrapper')}>
      
      <HomeCarousel/>
      <div className={cx('movies')}>
      <MultipleRowSlick arrMovies={arrMovies} t={t}/>
        
      </div>
      <HomeMenu  arrCinemaSystem={arrCinemaSystem}/>
     
    </div>
  );
};
export default Home;