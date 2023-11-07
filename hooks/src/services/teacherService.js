import axios from "axios";
import { TEACHER_API_URL } from "./common";

class TeacherService{
    static getTeachers(){
        return axios.get(TEACHER_API_URL)
    }
    static getTeacher(id){
        return axios.get(`${TEACHER_API_URL}/${id}`)
    }
    static deleteTeacher(id){
        return axios.delete(`${TEACHER_API_URL}/${id}`)
    }
    static createTeacher(newTeacher){
        return axios.post(TEACHER_API_URL, newTeacher)
    }
    static modifyTeacher(editTeacher, teacherId){
        return axios.put(`${TEACHER_API_URL}/${teacherId}`, editTeacher)
    }
}

export default TeacherService;