import { combineReducers, configureStore} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import productsReducer from './Slice/ProductsSlice'

const reducer = combineReducers({
   productsSlice: productsReducer
})

const Store = configureStore({
    reducer,
    middleware: [thunk]
})

export default Store