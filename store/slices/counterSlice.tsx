import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0
}

export const counterSlice = createSlice({
    name: "counter", // name of the slice
    initialState, // initial state of the slice
    reducers: { // reducers is an object that contains the reducer functions for the slice
        increment: (state) => { // increment is a reducer function that takes in the state and returns the state with the value incremented by 1
            state.value +=1
        },
        decrement: (state) => { // decrement is a reducer function that takes in the state and returns the state with the value decremented by 1
            state.value -=1
        },
        incrementByAmount: (state, action: PayloadAction<number>) =>{
            state.value += action.payload
        }
    }
})

//action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount} = counterSlice.actions

// export the reducer function
export default counterSlice.reducer
