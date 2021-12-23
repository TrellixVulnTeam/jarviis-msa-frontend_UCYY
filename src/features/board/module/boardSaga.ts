import { PayloadAction } from "@reduxjs/toolkit";
import { call, delay, put, takeLatest } from "redux-saga/effects";
import boardAPI from "../reducer/boardAPI";
import { CreateDataPayload, BoardData, createRequest, createSuccess, createFailure } from "../reducer/boardSlice";


function* create(action: PayloadAction<CreateDataPayload>) {
    try {
        alert("여긴 create")
      const result: BoardData = yield call(
        boardAPI.CreateAPI,
        action.payload
      );
      yield put(createSuccess(result));
      
    } catch (error: any) {
      yield put(createFailure(error))
    }
  }


  // Watch 함수
  export function* watchBoardCreate() {
    yield takeLatest(createRequest.type, create);
    // loginRequest에서의 type이 실행되면 login함수가 실행되는데
    // loginRequest의 action이 있으면 그 액션이 login함수의 인자로 들어갑니다.
  }
  