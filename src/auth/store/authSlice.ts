import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

export type User = {
    uid: string | null;
    email: string | null;
    displayName: string | null;
    photoURL: string | null;
};

interface AuthState {
    user: User | null;
    error: string;
    loading: boolean;
}

const initialState: AuthState = {
    user: null,
    error: "",
    loading: true,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess: (state, action: PayloadAction<User>) => {
            state.error = "";
            state.user = action.payload;
        },
        logoutSuccess: (state) => {
            state.user = null;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
    },
});

export const getUser = (state: RootState) => state.auth.user;
export const getError = (state: RootState) => state.auth.error;

export const { loginSuccess, logoutSuccess, setError } = authSlice.actions;
