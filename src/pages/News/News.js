import React, { useEffect } from 'react'
import styles from './News.module.scss';
import classNames from 'classnames/bind';
import NewItem from './NewItem/NewItem';
import { useDispatch, useSelector } from 'react-redux';
import {  getMovieLimitAction } from '../../redux/actions/movieManagentActions';
import { createSearchParams, useNavigate,useSearchParams } from "react-router-dom";

import { Pagination } from 'antd';
const cx= classNames.bind(styles);


export default function News() {
  const navigate = useNavigate();
  const [params] =useSearchParams();
  const page=params.get('page') || 1;
  const dispatch=useDispatch();
  useEffect(()=>{
    
    dispatch(getMovieLimitAction(page))
  },[page,params])
 
  const {arrMoviesLimit}=useSelector(state=>state.movieManagementReducer);
  
  const onChangePage=(page)=>{
    navigate({
      pathname: "/news",
      search: createSearchParams({
          page
      }).toString()
  });
  }
  return (
    <div className={cx('wrapper')}>
      <div className={cx('news')}>
        {arrMoviesLimit?.items?.map((item,index)=>{
             return  <NewItem item={item} key={index}/>
        })}
        
      </div>
     <div className={cx('pagination')}>
     <Pagination onChange={onChangePage} total={arrMoviesLimit?.totalCount} />
     </div>

    </div>
  ) 
}
