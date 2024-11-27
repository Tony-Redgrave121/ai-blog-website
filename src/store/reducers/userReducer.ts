import {createSlice} from "@reduxjs/toolkit";

interface IUsersState {
    userLocation: string,
    isLoading: boolean,
    error: string,
    popupState: boolean
    popupContent: string,
}

const initialState: IUsersState = {
    userLocation: '',
    isLoading: false,
    error: '',
    popupState: false,
    popupContent: ''
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
        updatePopupState(state, action) {
            state.popupState = action.payload
        },
        updatePopupContent(state, action) {
            state.popupContent = action.payload
        },
    }
})

export default userSlice.reducer
export const {updateLocation, updateIsLoading, updatePopupState, updatePopupContent} = userSlice.actions