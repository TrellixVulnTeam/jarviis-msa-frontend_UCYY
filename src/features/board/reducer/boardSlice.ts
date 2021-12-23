import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

//요청데이터
export interface BoardData {
    id?: number;
    title: string;
    content: string;
    created?: string;
    updated?: string;
    user?: UserData;
    
}
//요청데이터
export interface CommentData {
    id?: number;
    content: string;
    created?: string;
    updated?: string;
    board_id?: number;
    user?: UserData;
  }
//요청데이터
export interface UserData {
    id?: number;
    email?: string;
    password?: string;
    username?: string;
    created?: string;
    updated?: string;
  }
export interface CreateDataPayload{
    id?: number;
    title: string;
    content: string;
    created?: string;
    updated?: string;
    user?: UserData;
}
export interface UserState {
  boardLoading: boolean;
  boardData: any;
  error: any;
  token: null;
}
// api의 param 타입
export interface ParamType {
  email?: string;
}
const initialState: UserState = {
  boardLoading: false,
  boardData: null,
  error: null,
  token: null
};

const boardSlice = createSlice({
  name: "users",
  initialState,
  reducers: {

    // Login
    createRequest(state: UserState, _action: PayloadAction<BoardData>) {
      state.boardLoading = true;
      state.error = null;
    },

    createSuccess(state: UserState, action: PayloadAction<CreateDataPayload>) {
      state.boardLoading = false;
      state.boardData = action.payload;
    },

    createFailure(state: UserState, action: PayloadAction<{ error: any }>) {
      state.boardLoading = false;
      state.error = action.payload;
    },
   

  },
});

const store = configureStore({
  reducer: {
    board: boardSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
const { reducer, actions } = boardSlice;
export const {
  createRequest,
  createSuccess,
  createFailure

} = actions;
export default reducer;

