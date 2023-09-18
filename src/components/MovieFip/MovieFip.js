import React from 'react'
import styles from './MovieFip.module.scss'
import {NavLink} from 'react-router-dom'
import { useTranslation } from 'react-i18next';
export default function MovieFip({item}) {
 
  const {t} =useTranslation();
  return (
    <div className={styles["flip-card"]}>
    <div className={styles["flip-card-inner"]}>
      <div className={styles["flip-card-front"]} >
        <img src={item.hinhAnh} alt="Avatar" style={{width:'100%',height:'100%',marginƠ:'0px',borderRadius:'0px'}} 
         onError={(e) =>
          (e.target.onerror = null)(
            (e.target.src = "https://picsum.photos/200/200")
          )
        }
        />
      </div>
      <div className={styles["flip-card-back"]}>   
          <div className={styles['content']} style={{background:`url(${item.hinhAnh})`}}>
             <div className={styles['content-icon']} >
                 <i className="fa fa-play-circle" aria-hidden="true"></i>
             </div>
             <div className={styles['content-title']}> {item.tenPhim}</div>
          </div>
          <NavLink to={`/${item.biDanh}/${item.maPhim}`} className={styles['content-link']}>{t('book tickets')}</NavLink>
      </div>
    </div>
  </div>
  )
}


