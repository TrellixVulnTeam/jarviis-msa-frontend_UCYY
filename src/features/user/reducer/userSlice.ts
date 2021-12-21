import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

//받아오는 데이터//

export interface TokenDataPayload{
  password: string;
  email: string;
}
export interface UserDataPayload {
  data: {
    user: {
      username: string;
      email: string;
      phone: string;
      address: string;
      password: string;
      birth: string;
    }
  }
}
//요청하는 데이터
export interface ExistPayload{
  email: string;
}
export interface RemovePayload {
  email: string;
  password: string;
}
export interface LoginPayload {
  email: string;
  password: string;
}
export interface TokenPayload{
  email: string;
  password: string;
}
export interface ModifyPayload {
  email: string;
  phone: string;
  address: string;
  password: string;
  birth: string;
  job: string;
  user_interests: string;
}
export interface JoinPayload {
  username: string;
  email: string;
  phone: string;
  address: string;
  password: string;
  birth: string;
  job: string;
  user_interests: string;
}
//미들웨어
export interface UserState {
  userLoading: boolean;
  userData: any;
  error: any;
  token:null;
}
// api의 param 타입
export interface ParamType {
  email: number;
}
const initialState: UserState = {
  userLoading: false,
  userData: null,
  error: null,
  token:null
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    //thken
    tokenRequest(state:UserState, _action:PayloadAction<TokenDataPayload>){
      state.token = null;
    }, 
    tokenSuccess(state:UserState, action:PayloadAction<TokenPayload>){
      state.token = null;
      state.userData = action.payload;
    },
    tokenFailure(state: UserState, action: PayloadAction<{ error: any }>) {
      state.userLoading = false;
      state.error = action.payload;
    },
    // Login
    loginRequest(state: UserState, _action: PayloadAction<LoginPayload>) {
      state.userLoading = true;
      state.error = null;
    },

    loginSuccess(state: UserState, action: PayloadAction<UserDataPayload>) {
      state.userLoading = false;
      state.userData = action.payload;
    },

    loginFailure(state: UserState, action: PayloadAction<{ error: any }>) {
      state.userLoading = false;
      state.error = action.payload;
    },
    //join
    joinRequest(state: UserState, _action: PayloadAction<JoinPayload>) {
      state.userLoading = true;
      state.error = null;
    },
    joinSuccess(state: UserState, action: PayloadAction<UserDataPayload>) {
      state.userLoading = false;
      state.userData = action.payload;
    },
    joinFailure(state: UserState, action: PayloadAction<{ error: any }>) {
      state.userLoading = false;
      state.error = action.payload;
    },
     //modify
    modifyRequest(state: UserState, _action: PayloadAction<ModifyPayload>){
      state.userLoading = true;
      state.error = null;
    },
    modifySuccess(state: UserState, action: PayloadAction<UserDataPayload>){
      state.userLoading = false;
      state.userData = action.payload;
    },
    modifyFailure(state: UserState, action: PayloadAction<{ error: any }>){
      state.userLoading = false;
      state.error = action.payload;
    },
    //exist
    existRequest(state: UserState, _action:PayloadAction<ExistPayload>){
      state.userLoading = true;
      state.error = null;
    },
    existSuccess(state: UserState, action: PayloadAction<UserDataPayload>){
      state.userLoading = false;
      state.userData = action.payload;
    },
    existFailure(state: UserState, action: PayloadAction<{ error: any }>){
      state.userLoading = true;
      state.error = null;
    }

  },
});

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
const { reducer, actions } = userSlice;
export const {
  modifyRequest,
  modifyFailure,
  modifySuccess,
  existFailure,
  existRequest,
  existSuccess,
  loginRequest,
  loginSuccess,
  loginFailure,
  joinFailure,
  joinRequest,
  joinSuccess,
  tokenRequest,
  tokenSuccess,
  tokenFailure
} = actions;
export default reducer;
