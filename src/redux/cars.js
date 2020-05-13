import {CARS} from '../shared/cars';
import * as ActionTypes from './ActionTypes';
//reduces function
export const Cars= (state=CARS,action) =>{
	switch(action.type){









		 case ActionTypes.BOOKING_STATUS:
            var d = action.payload.carId;
            CARS[d].bookingStatus=true;
            return (state);
		default :
		return state;
	}
}