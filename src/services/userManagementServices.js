import axios from "axios"
import { DOMAIN, GROUP_ID_MOVIE } from "../utils/settings/config"
import axiosConfig from '../axiosConfig'
export const UserLoginApi=(data)=>{
   
    return axios({
        url:`${DOMAIN}QuanLyNguoiDung/DangNhap`,
        method:'POST',
        data: data,
      
    })
}




export const userInfoApi=()=>{
   
     return axiosConfig({
        url:`QuanLyNguoiDung/ThongTinTaiKhoan`,
        method:'POST',
       
     }
      )
}


export const getUsersApi=()=>{
    return axios({
        url:`${DOMAIN}QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUP_ID_MOVIE}`,
        method:'GET'
    })
}

export const userSignupApi=(data)=>{
    return axios(
        {
            url:`${DOMAIN}QuanLyNguoiDung/DangKy`,
            method:'POST',
            data
            
         }
    )
}