// main store configuration will be here
import { configureStore} from "@reduxjs/toolkit"
import counterReducer from "./slices/counterSlice" // counterReducer is the reducer function for the counter slice
import loginReducer from "./slices/loginSlice" // loginReducer is the reducer function for the login slice
import addRequestInfoReducer from "./slices/addRequestInfoSlice" // addRequestInfoReducer is the reducer function for the addRequestInfo slice
export const store = configureStore({
    reducer: {
        counter: counterReducer, // counter is the name of the slice
        login: loginReducer, // login is the name of the slice
        addRequestState: addRequestInfoReducer // addRequestState is the name of the slice
    }
})

// infer the "RootState" and "AppDispatch" types from the store itself

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

