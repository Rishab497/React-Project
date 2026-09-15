import axios from "axios";
const API_URL = "http://localhost:5000/api/students";
export const getAllStudents = () => axios.get(API_URL);
export const createStudent = (data) => axios.post(API_URL, data);