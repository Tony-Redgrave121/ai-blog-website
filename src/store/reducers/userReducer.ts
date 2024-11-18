import {createSlice} from "@reduxjs/toolkit";

interface IUsersState {
    userLocation: string,
    isLoading: boolean,
    error: string,
}

const initialState: IUsersState = {
    userLocation: '',
    isLoading: false,
    error: '',
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateLocation(state, action) {
            state.userLocation = action.payload
        },
        updateIsLoading(state, action) {
            state.isLoading = action.payload
        },
    }
})

export default userSlice.reducer
export const {updateLocation, updateIsLoading} = userSlice.actions