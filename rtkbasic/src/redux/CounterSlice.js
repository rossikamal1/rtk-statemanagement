import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter : 0
}

const counterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers : {
        incrementAction : (state) => {
            state.counter = state.counter + 1;
        },
        decrementAction : (state) => {
            state.counter = state.counter - 1;
        }
    }
});
export const {incrementAction , decrementAction } = counterSlice.actions;
export default counterSlice.reducer;