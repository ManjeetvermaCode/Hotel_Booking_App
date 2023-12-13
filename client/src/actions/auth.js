import axios from "axios";
// console.log(process.env.REACT_APP_API)
export const register=async(data)=>await axios.post(`${process.env.REACT_APP_API}/register`,data)

export const login=async(data)=>await axios.post(`${process.env.REACT_APP_API}/login`,data)