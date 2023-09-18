import React, { Component } from "react";
import Slider from "react-slick";
import MovieFip from "../MovieFip/MovieFip";
import styles from './MultipleRowSlick.module.scss';
import {connect} from 'react-redux'
import { SET_MOVIE_COMINGSOON, SET_MOVIE_SHOWING } from "../../redux/types/movieManagementTypes";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className}  ${styles['slick-next']}`}
        style={{ ...style, display: "block"}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${styles['slick-prev']}`}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

  
 class MultipleRowSlick extends Component {
  constructor(props) {
    super(props);
    
  }
 
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      rows: 1,
      slidesPerRow: 2,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      width:'600px'
    };
  
      
        const activeShowing=this.props.isShowing? 'activeShowing': '';
        const activeComingSoon=this.props.isComingSoon? 'activeComingSoom':''
      
    return (
      <div className={styles['wrapper']}>
      
       <button  onClick={()=>{this.props.movieShowing()}} className={styles[activeShowing]}  style={{marginRight:'10px'}}>{this.props.t('The movie is playing')}</button>  
        <button onClick={()=>{this.props.movieComingSoon()}} className={styles[activeComingSoon]}  >{this.props.t('Upcoming movie')}</button>
       
        <Slider {...settings}>
         
               {this.props.arrMovies.map((item,index)=>{
                return (
                  <div className={styles['with-item']} key={index}>
                    {/* <MovieItem item={item}/> */}
                    <MovieFip item={item}/>
                   </div>
                )
               })}
        
         
          
         
        </Slider>
      </div>
    );
  }
}

const mapStateToProps=state=>{
  return{
    isShowing: state.movieManagementReducer.isShowing,
    isComingSoon: state.movieManagementReducer.isComingSoon
  }
}

const mapDispatchToProps=(dispatch)=>{
    return {
      movieShowing:()=>{
         dispatch({
          type: SET_MOVIE_SHOWING
         })
      },
      movieComingSoon:()=>{
        dispatch({
          type:SET_MOVIE_COMINGSOON
        })
      }
    }
}



export default connect(mapStateToProps,mapDispatchToProps)( MultipleRowSlick)