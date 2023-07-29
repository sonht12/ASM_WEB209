import { counterReducer } from '@/reducer/Counter';
import { productReducer } from '@/reducer/Product';
import { combineReducers, legacy_createStore as createStore } from 'redux';

const rootReducer = combineReducers({
    counter: counterReducer,
    products: productReducer
})

const store = createStore(rootReducer);

export default store;