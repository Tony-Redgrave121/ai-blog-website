import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import IAuthResponse from "../../utils/types/IAuthResponse";

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
    popupContent: 'register'
}

export const userCheckAuth = createAsyncThunk("user/fetch", async (_, thunkAPI) => {
    thunkAPI.dispatch(updateIsLoading(true))
    try {
        const response = await axios.get<IAuthResponse>(`http://localhost:5000/refresh`, {withCredentials: true})

        if (response?.data) {
            localStorage.setItem('token', response.data.accessToken)
            return response.data
        }
        return thunkAPI.rejectWithValue("Could not fetch user data")
    } catch (e: any) {
        return thunkAPI.rejectWithValue(e.response?.data?.message || "Could not fetch user data")
    } finally {
        thunkAPI.dispatch(updateIsLoading(false))
    }
})

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
    },
    extraReducers: (builder) => {
        builder.addCase(userCheckAuth.fulfilled, (state, action) => {
            state.userId = action.payload.user_id
            state.userName = action.payload.user_name
            state.userImg = action.payload.user_img
            state.isAuth = true
        })
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
