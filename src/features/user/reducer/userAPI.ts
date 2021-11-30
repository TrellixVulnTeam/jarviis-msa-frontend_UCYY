import axios from "axios";
import { ExistPayload, JoinPayload, LoginPayload } from "./userSlice";
const SERVER = "http://127.0.0.1:3001/";
const headers = {
  "Content-Type": "application/json",
  Authorization: "JWT fefege..",
};

function loginAPI(data: LoginPayload) {
  return axios.post(`${SERVER}users/login`, JSON.stringify(data), { headers });
}
function joinAPI(data: JoinPayload) {
  return axios.post(`${SERVER}users/join`, JSON.stringify(data), { headers });
}
function existAPI(data: ExistPayload) {
  return axios.get(`${SERVER}users/exist/${data}`);
}
function modifyAPI(data: "") {
  return axios.get(`${SERVER}users/modify/${data}`);
}
function removeAPI(data: "") {
  return axios.get(`${SERVER}users/remove/${data}`);
}
function listAPI(data: "") {
  return axios.get(`${SERVER}users/list/${data}`);
}
function findAPI(data: "") {
  return axios.get(`${SERVER}users/find/${data}`);
}

export default {
  loginAPI,
  joinAPI,
  existAPI,
  listAPI,
  removeAPI,
  modifyAPI,
  findAPI
  

};
