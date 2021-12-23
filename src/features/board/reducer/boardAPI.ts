import axios from "axios";
import { BoardData } from "./boardSlice";
// const SERVER = "http://127.0.0.3:8000/api/";
const SERVER = "http://127.0.0.1:3001/";
const headers = {
  "Content-Type": "application/json",
  Authorization: "JWT fefege..",
};

function CreateAPI(data: BoardData) {
  return axios.post(`${SERVER}board/create`,JSON.stringify(data), {headers});
}

export default {
    CreateAPI,

};
