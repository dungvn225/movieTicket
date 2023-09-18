import { CHANGE_TAB, GET_TICKET_DETAIL, REDIRECT_TAB, SET_SEAT, SET_TICKET, SET_TICKET_FINISH } from "../types/ticketManagementTypes"


const initState={
      ticketDetail:{

      },
      arrSeat:[

      ],
      activeTab:'1',
    
     
}

export const ticketManagementReducer=(state=initState,action)=>{
    switch(action.type){
        case GET_TICKET_DETAIL:
            state.ticketDetail=action.data;
            return {...state}
        case SET_SEAT:
              let arrSeatUpdate=[...state.arrSeat]
              const index=arrSeatUpdate.findIndex(item=>item.maGhe==action.seat.maGhe);
             if(index==-1){
                arrSeatUpdate.push(action.seat)
             }else{
                arrSeatUpdate.splice(index,1);
                
             }
              state.arrSeat=arrSeatUpdate;
           
             return {...state};
         case SET_TICKET:
        
            state.ticketDetail.danhSachGhe.map((item,index)=>{
               
                 if(state.arrSeat.includes(item)){    
                   state.ticketDetail.danhSachGhe[index].daDat=true;  
                 }
            })
          
            return {...state}
            case SET_TICKET_FINISH:
                state.arrSeat=[];
                return {...state};
            case CHANGE_TAB:
                state.activeTab=action.key
              
                 return {...state};
            case REDIRECT_TAB:
                state.activeTab='2';
                return {...state} 
            
        default:
            return {...state}
    }
}

