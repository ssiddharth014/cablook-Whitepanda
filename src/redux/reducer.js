import {CARS} from '../shared/cars';
import {BOOKINGS} from '../shared/bookings';




import {LEADERS} from '../shared/leaders';

// initial state 
export const initialState = {
    cars: CARS,
    bookings: BOOKINGS,
    leaders: LEADERS
 
};

export const Reducer = (state = initialState, action) => {
    return state;
};
