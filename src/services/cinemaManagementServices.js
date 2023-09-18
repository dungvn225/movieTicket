import axios from "axios"
import { DOMAIN, GROUP_ID_MOVIE } from "../utils/settings/config"

export const getCinemaSystemApi=()=>{
    return axios({
        url:`${DOMAIN}/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP_ID_MOVIE}`,
        method:'GET'
    })
}


export const getMovieDetailApi=(movieId)=>{
    return axios({
       url :`${DOMAIN}/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`,
       method:'GET'
    })
}