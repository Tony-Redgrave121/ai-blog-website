import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    location: '',
    // loading: false,
    // error: null,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateLocation(state, action) {
            state.location = action.payload
        },
    }
})

export default userSlice.reducer
export const {updateLocation} = userSlice.actions