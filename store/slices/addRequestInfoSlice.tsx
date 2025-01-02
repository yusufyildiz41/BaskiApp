import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface RequestInfoState {
    district: string,
    neighborhood: string,
    street: string,
    outDoorNumber: string,
    inDoorNumber: string,
    additionalAddress: string,
    explanationOfRequest: string,
    images: any[],
    documents: any[]
}

const initialState: RequestInfoState = {
    district: "",
    neighborhood: "",
    street: "",
    outDoorNumber: "",
    inDoorNumber: "",
    additionalAddress: "",
    explanationOfRequest: "",
    images: [],
    documents: []
}

export const addRequestInfoSlice = createSlice({
    name: "addRequestState",
    initialState,
    reducers: {
        updateRequestState: (state, action: PayloadAction<RequestInfoState>) => {
            state.district = action.payload.district;
            state.neighborhood = action.payload.neighborhood;
            state.street = action.payload.street;
            state.outDoorNumber = action.payload.outDoorNumber;
            state.inDoorNumber = action.payload.inDoorNumber;
            state.additionalAddress = action.payload.additionalAddress;
            state.explanationOfRequest = action.payload.explanationOfRequest;
            state.images = action.payload.images;
            state.documents = action.payload.documents;
        },
        resetRequestState: (state) => {
            state.district = "";
            state.neighborhood = "";
            state.street = "";
            state.outDoorNumber = "";
            state.inDoorNumber = "";
            state.additionalAddress = "";
            state.explanationOfRequest = "";
            state.images = [];
            state.documents = [];
        }
    }
})

export const { updateRequestState , resetRequestState} = addRequestInfoSlice.actions;
export default addRequestInfoSlice.reducer;


