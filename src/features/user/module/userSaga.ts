import { PayloadAction } from "@reduxjs/toolkit";
import { call, delay, put, takeLatest } from "redux-saga/effects";
import {
  LoginPayload,
  UserDataPayload,
  loginRequest,
  loginFailure,
  loginSuccess,
  JoinPayload,
  joinSuccess,
  joinFailure,
  joinRequest,
} from "features/user/reducer/userSlice";
import { userAPI  } from "features/user";


function* join( action: PayloadAction<JoinPayload>){
  try{
    alert("왔니?")
    const result : UserDataPayload = yield call(
      userAPI.joinAPI,
      action.payload
    );
    alert(JSON.stringify(result))
    yield put(joinSuccess(result));
    window.location.href = 'users/login'
  } catch (error: any){
    alert("아이디오류")
    yield put(joinFailure(error));
  }
}

function* login(action: PayloadAction<LoginPayload>) {
  
  try {
    // alert("보냈지롱")
    // fork는 비동기 call은 동기
    // fork를 쓰면 불러온것들을 result에 넣어줘야 하는데 바로 다음코드가 실행됨
    // 블로그에 있는 코드로는 yield 생성기 에러 자꾸남.... => const result = yield call(userAPI.join, action.payload);
    const result: UserDataPayload = yield call(
      userAPI.loginAPI,
      action.payload
      );
      // alert("보냈지롱2")
    //요청 성공시
    yield put(loginSuccess(result));
    // alert(JSON.stringify(result.data.user.username))
    window.localStorage.setItem('sessionUser', JSON.stringify(result.data.user.username))
    window.location.href= "/home"
  } catch (error: any) {
    alert("아이디 혹은 비밀번호가 틀렸습니다!")
    yield put(loginFailure(error));
  }
}

// Watch 함수
export function* watchLogin() {
  yield takeLatest(loginRequest.type, login);
  // loginRequest에서의 type이 실행되면 login함수가 실행되는데
  // loginRequest의 action이 있으면 그 액션이 login함수의 인자로 들어갑니다.
}
export function* watchJoin(){
  yield takeLatest(joinRequest.type, join);
}
