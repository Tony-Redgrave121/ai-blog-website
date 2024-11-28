import {createSlice} from "@reduxjs/toolkit";

interface IUsersState {
    userId: string,
    userName: string,
    userImg: string,
    isAuth: boolean,
    isLoading: boolean,
    popupState: boolean
    popupContent: string,
}

const initialState: IUsersState = {
    userId: '',
    userName: '',
    userImg: '',
    isAuth: false,
    isLoading: false,
    popupState: false,
    popupContent: ''
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateUserId(state, action) {
            state.userId = action.payload
        },
        updateUserName(state, action) {
            state.userName = action.payload
        },
        updateUserImg(state, action) {
            state.userImg = action.payload
        },
        updateIsAuth(state, action) {
            state.isAuth = action.payload
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
export const {
    updateUserId,
    updateUserName,
    updateUserImg,
    updateIsAuth,
    updateIsLoading,
    updatePopupState,
    updatePopupContent
} = userSlice.actions