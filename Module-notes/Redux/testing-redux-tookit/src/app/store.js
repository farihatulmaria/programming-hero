import { configureStore } from '@reduxjs/toolkit'
import couterSlice from '../feature/counter/couterSlice'

const store = configureStore({
    reducer:{
        counter:couterSlice
    },
})
export default store