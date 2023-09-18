import React, { useState } from 'react'
import styles from './Contact.module.scss';
import className from 'classnames/bind';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Swal from 'sweetalert2'

const cx=className.bind(styles)
export default function Contact() {
   const [payload,setPayload]=useState({
      name:'',
      email:'',
      content:''
   })
   const [errors,setErrors]=useState({})
  const onChangeValue=(e)=>{
      const name=e.target.name;
      const value=e.target.value;
      setPayload({...payload,[name]:value})
  }
    const validateForm=()=>{
       let invalid=0;
      let errors={}
        if(payload.name.trim()==''){
            errors.name='name is required!'
            invalid++;
        }
        if(payload.email.trim()==''){
          errors.email='email is required!'
          invalid++;
      }else if (!/\S+@\S+\.\S+/.test(payload.email)) {
        errors.email = 'Invalid email';
        invalid++
    }
    if(payload.content.trim()==''){
      errors.content='content is required!'
      invalid++;
  }

    setErrors(errors)
    return invalid
    }
  const handleSubmit=(e)=>{
      e.preventDefault();
      validateForm();
     
      if(validateForm()==0){
        Swal.fire({
          title: 'Thank!',
          text: 'Cảm ơn bạn bạn đã gửi phản hồi',
          icon: 'success',
          confirmButtonText: 'Ok'
        }).then(result=>{
            if(result.isConfirmed){
                setPayload({
                  name:'',
                  email:'',
                  content:''
                })
            }
      })
  }
}
  return (
    <div className={cx('wrapper')}>
        <Header/>
          <div className={cx('content')}  >
             <form>
             <input type='text' name='name' onChange={(e)=>onChangeValue(e)} value={payload.name} placeholder='Name'/>
              <div className={cx('error')}>{errors.name}</div>
              <input  type="email" name='email' onChange={(e)=>onChangeValue(e)} value={payload.email} placeholder='Email' required/>
              <div className={cx('error')}>{errors.email}</div>
              <textarea name='content' onChange={(e)=>onChangeValue(e)} value={payload.content} placeholder='Content'>
           
              </textarea>
              <div className={cx('error')}>{errors.content}</div>
              <button onClick={(e)=>handleSubmit(e)} type='content'>Gửi liên hệ</button>
             </form>
          </div>
        <div className={cx('footer')}>
         <Footer/>
      </div>
     
    </div>
  )
}
