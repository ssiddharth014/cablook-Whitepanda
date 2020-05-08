import {createStore} from 'redux';
// create store allows to create store
import {Reducer,initialState} from './reducer';
export const ConfigureStore = () =>{
	const store = createStore(
        Reducer,
        initialState

		);
	return store;
}
