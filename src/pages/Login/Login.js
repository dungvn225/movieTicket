import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import React, { useEffect,useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { getUsersAction, userLoginAction } from '../../redux/actions/userManagementActions';
import {useNavigate, useSearchParams} from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import { config } from '../../config/config';
const cx= classNames.bind(styles);

export default function Login() {
  const [params]=useSearchParams();
  const {getUsers}=useSelector(state=>state.userManagementReducer)
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const [userLogin,setUserLogin]=useState({
    username:'',
    password:''
  });
  useEffect(()=>{
    dispatch(getUsersAction());
},[userLogin])

   const redirect=params.get('redirect')
   const onChangeLogin=(e)=>{
          const target=e.target;
          const name=target.name;
          const value=target.value;

          setUserLogin({
            ...userLogin, [name]:value
          })
   }
   const handleLogin=(e)=>{ 
        e.preventDefault();
       
        let index=0;
        for(let item of getUsers){
          if(item?.taiKhoan==userLogin.username && item?.matKhau==userLogin.password){
            index++;
          
            break;
          }
        }
          if(index>0){
            const data={taiKhoan:userLogin.username, matKhau: userLogin.password}
            dispatch(userLoginAction(data));
            redirect? navigate(redirect):  navigate('/');
          }else{
            alert('tài khoản hoặc mật khẩu ko chính xác!')
           
          }
        
       
       
        

      
      
        
   }
  return (
    <div className={cx('wrapper')}>
       <h2>Login</h2>
        <form>
  <div className={cx('imgcontainer')}>
   
  </div>
  <div className={cx('container')}>
    <label htmlFor="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="username"    onChange={(e)=>{onChangeLogin(e)}} defaultValue={userLogin.username}/>
    <label htmlFor="psw"><b>Password</b></label>
    <input type="text" placeholder="Enter Password" name="password"   onChange={(e)=>{onChangeLogin(e)}} defaultValue={userLogin.password}/>
    <button className={cx('btnLogin')} type="submit" style={{color:'white'}}  onClick={(e)=>{handleLogin(e)}}>Login</button>
  
  </div>
  <div className={cx('container')} style={{backgroundColor: '#f1f1f1',display:'flex', alignItems:'center',justifyContent:'space-between' ,flexWrap:'wrap'}}>
     <div className={cx('sign-up')}> Don't have an account ? <NavLink to={config.routers.register}>Sign up</NavLink>  </div> 
    <div className={cx('psw')}>Forgot <a href="#">password?</a></div>
  </div>
</form>

    </div>
  )
}
