import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';



import {PROMOTIONS} from '../shared/promotions';

// initial state 
export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};
//reducer function
//if there are no actions to be performed then return the previous state
export const Reducer = (state = initialState, action) => {
    return state;
};