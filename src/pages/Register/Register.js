import React from 'react'
import styles from './Register.module.scss';
import classNames from 'classnames/bind';
import { useState,useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { getUsersAction, userSignupAction } from '../../redux/actions/userManagementActions';
import {useNavigate} from 'react-router-dom'
import { config } from '../../config/config';
import { GROUP_ID_MOVIE } from '../../utils/settings/config';
const cx=classNames.bind(styles);
export default function Register() {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getUsersAction());
    },[])
   const {getUsers}=useSelector(state=>state.userManagementReducer)
 
     const [userSignup,setUserSignup]=useState({
        values:{
            username:'',
            password:'',
            name:'',
            email:'',
            phone:''
        },
        errors:{
            username:'',
            password:'',
            name:'',
            email:'',
            phone:''
        }
     });
    const onChangeSignup=(e)=>{
        const target=e.target;
          const name=target.name;
          const value=target.value;
          const type=target.type;
          let newValues= {...userSignup.values,[name]:value};
          let newErrors={...userSignup.errors};
          if(value.trim()==''){
            newErrors[name]=name+' is required';
          }else{
            newErrors[name]=''
          }
          if(type=='email'){
            const regexEmail=  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if(!regexEmail.test(value)){
                newErrors[name]=name +' is valid!';
            }else{
                newErrors[name]=''
            }
          }
          if(name=='phone'){
            if(isNaN(value)){
              newErrors[name]=name+ ' is valid!'
            }
          }

          setUserSignup({values :newValues,errors: newErrors});
    }
    const handleSignup=(e)=>{ 
          e.preventDefault();
           let checkError=false;
           for(let key in userSignup.errors){
                 if(userSignup.errors[key]!==''){
                   checkError=true;
                   break;
                 }
                 
                
           }
           for(let key in userSignup.values){
            if(userSignup.values[key]==''){
              checkError=true;
              break;
            }
            
           
      }
             
               if(!checkError){
                 let userExist=false;
                for(let user of getUsers){
                  if(user?.taiKhoan==userSignup.values.username){
                     alert("Tài khoản đã tồn tại!");
                    userExist=true;
                     break;
                  }
                  if(user?.email==userSignup.values.email){
                    alert("Email đã tồn tại!");
                    userExist=true;
                    break;
                 }
                }
                  if(!userExist){
                    const data={
                      taiKhoan: userSignup.values.username,
                      matKhau: userSignup.values.password,
                      email: userSignup.values.email,
                      soDt: userSignup.values.phone,
                      maNhom:GROUP_ID_MOVIE,
                      hoTen: userSignup.values.name
                    }
                 
                  dispatch(userSignupAction(data));
                  navigate(config.routers.Login)
                  }
               }
             
          }
        

          
    
  return (
    <div className={cx('wrapper')}>
    <h2>Register</h2>
     <form>
<div className={cx('imgcontainer')}>
 
</div>
<div className={cx('container')}>
 <label htmlFor="uname"><b>Username</b></label>
 <input type="text" placeholder="Username" name="username"    onChange={(e)=>{onChangeSignup(e)}} defaultValue={userSignup.values.username} />
  <div name="username" style={{color:'red'}}> {userSignup.errors.username}</div>
 <label htmlFor="password"><b>Password</b></label>
 <input type="text" placeholder="Password" name="password"   onChange={(e)=>{onChangeSignup(e)}} defaultValue={userSignup.values.password} />
 <div name="password" style={{color:'red'}}> {userSignup.errors.password}</div>
 <label htmlFor="name"><b>Name</b></label>
 <input type="text" placeholder="Name" name="name"    onChange={(e)=>{onChangeSignup(e)}} defaultValue={userSignup.values.name}/>
 <div name="name" style={{color:'red'}}> {userSignup.errors.name}</div>
 <label htmlFor="email"><b>Email</b></label>
 <input type="email" placeholder=" Email" name="email"   onChange={(e)=>{onChangeSignup(e)}} defaultValue={userSignup.values.email}/> 
 <div name="email" style={{color:'red'}}> {userSignup.errors.email}</div>
 <label htmlFor="phone"><b>Phone</b></label>
 <input type="text" placeholder="Phone" name="phone"    onChange={(e)=>{onChangeSignup(e)}} defaultValue={userSignup.values.phone} />
 <div name="phone" style={{color:'red'}}> {userSignup.errors.phone}</div>
 <button className={cx('btnSignup')} type="submit" style={{color:'white'}}  onClick={(e)=>{handleSignup(e)}}>Register</button>
 

</div>

</form>

 </div>
  )
}
