import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface LoginState {
    email: string | null,
    password: string | null
}

const initialState: LoginState ={
    email: null,
    password: null
}


export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setLoginState: (state, action: PayloadAction<LoginState>) => {
            state.email = action.payload.email
            state.password = action.payload.password
        }
    }
})

export const { setLoginState} = loginSlice.actions //this makes the action creators available to the store
export default loginSlice.reducer //this makes the reducer function available to the store
