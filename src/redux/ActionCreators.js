//importing every action from actiontype
import * as ActionTypes from './ActionTypes';
//similar to controllers action in nodejs
export const addBooking = (carId,firstname,lastname,email,telnumber,issue,ret) => ({
    type: ActionTypes.ADD_BOOKING,
    payload: {
        carId: carId,
        firstname:firstname,
        lastname: lastname,
        email: email,
        telnumber:telnumber,
        issue:issue,
        ret:ret
    }
});
 export const status=(carId)=>({
 	type:ActionTypes.BOOKING_STATUS,
 	payload:{
 		carId: carId

 	}
 });