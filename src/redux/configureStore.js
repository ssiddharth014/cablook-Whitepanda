import {createStore, combineReducers} from 'redux';

import { Cars } from './cars';







import { Bookings} from './bookings';
import { Leaders } from './leaders';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            cars: Cars,
            bookings: Bookings,
            leaders:Leaders
        })
    );
	return store;
}
