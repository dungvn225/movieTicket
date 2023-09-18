import axios from 'axios'
import { DOMAIN, GROUP_ID_MOVIE } from '../utils/settings/config'
export const getCarouselApi=()=>{
      return  axios({
            url:`${DOMAIN}/QuanLyPhim/LayDanhSachBanner`,   
            method:'GET'
        });
      
    }

export const getMovies=()=>{
     return axios({
        url:`${DOMAIN}/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID_MOVIE}`,
        method:'GET',
    
     });
}

export const getMoviesLimit=(page)=>{
    return axios({
       url:`${DOMAIN}/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=${GROUP_ID_MOVIE}&soTrang=${page}&soPhanTuTrenTrang=10`,
       method:'GET',
   
    });
}





