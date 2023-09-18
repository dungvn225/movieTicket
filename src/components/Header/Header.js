import React,{useState,useEffect} from 'react'
import {NavLink,useNavigate} from 'react-router-dom'
import className from 'classnames/bind'
import styles from './Header.module.scss';
import { useTranslation } from 'react-i18next';
import HomeCarousel from '../../layouts/HomeLayout/HomeCarousel/HomeCarousel';
import { useSelector } from 'react-redux';
import {GlobalOutlined} from '@ant-design/icons'
import { TOKEN, USER_LOGIN } from '../../utils/settings/config';
import { images } from '../../assets/images';
import { config } from '../../config/config';
import {MenuOutlined} from '@ant-design/icons'

const cx=className.bind(styles);
export default function Header() {
  const navigate=useNavigate();
  const { t, i18n } = useTranslation();
  const {userLogin}=useSelector(state=>state.userManagementReducer);

  const handleChange=(e)=>{
    i18n.changeLanguage(e.target.value);
  }
  const [menuToggle,setMenuToggle]=useState(false);
    useEffect(()=>{
      const handleScroll=()=>{
          setMenuToggle(false);
      }
      window.addEventListener('scroll',handleScroll);

      return ()=>{
        window.removeEventListener('scroll',handleScroll);
      }
  })
  return (
    <div className={cx('wrapper')}>
       <div className={cx('wp-content')}>
       <div className={cx('content')}>
        <div className={cx('logo')}> 
        <NavLink  to={config.routers.Home}> <img style={{padding:'6px'}}  src={images.logo} /> 
               <MenuOutlined className={cx('icon-bar')} onClick={()=>{setMenuToggle(prev=>!prev)}}/> 
          </NavLink> </div>
        
        <div className={cx('menu',menuToggle?'showMenu':'')}>
             <ul className={cx('menu-list')}>
                  <li className={cx('menu-item')} onClick={()=>{setMenuToggle(prev=>!prev)}} >
                      <NavLink to='/' className={cx('menu-link')}>  {t('Home')}</NavLink>
                  </li>
                  <li className={cx('menu-item')} onClick={()=>{setMenuToggle(prev=>!prev)}}>
                      <NavLink to='/news' className={cx('menu-link')}> {t('News')}</NavLink>
                  </li>
                  <li className={cx('menu-item')} onClick={()=>{setMenuToggle(prev=>!prev)}}>
                      <NavLink to='/contact' className={cx('menu-link')}> {t('Contact')}</NavLink>
                  </li>
                  
             </ul>
        </div>
        <div className={cx('action')}>
        <GlobalOutlined />  <select defaultValue={'en'}  onChange={(e)=>handleChange(e)}>
              
               <option value={'en'}>Eng </option>
               
                <option  value={'vi'}>Vi </option>
              
             </select>
              {Object.values(userLogin).length === 0? <><NavLink to={'/login'} className={cx('login')}>{t('signin')}</NavLink> 
             <NavLink to={config.routers.register} className={cx('register')}>{t('signup')}</NavLink></> : <span style={{width:'80%',textAlign:'right'}}> <span style={{cursor:'pointer'}}>{t('hello.2')} {userLogin.hoTen}</span> 
             <span style={{margin:'0px 6px'}}>/</span><span className={cx('logout')} style={{cursor:'pointer'}}
              onClick={()=>{
                localStorage.removeItem(USER_LOGIN);  
                localStorage.removeItem(TOKEN);
                navigate('/');    
                window.location.reload();
                
              }}
             >{t('Logout')}</span> </span> }
             
             
            
        </div>
        </div>
       </div>
       
       
      
       
    </div>
  )
}
