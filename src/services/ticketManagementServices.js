import axios from "axios"
import { DOMAIN, TOKEN } from "../utils/settings/config"
import * as baseServices from './baseServices'
export const getTicketDetailApi=(id)=>{
    return axios({
        url:`${DOMAIN}QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`,
        method:'GET'
    })
}


export const bookTicketsApi=(data)=>{
   
    baseServices.post('QuanLyDatVe/DatVe',data);
}

