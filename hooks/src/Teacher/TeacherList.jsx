import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { toast } from 'react-toastify'
import Swal from "sweetalert2";
import TeacherService from "../services/teacherService";
import DepartmentService from "../services/departmentService";
import NoAvatar from '../../src/asset/image/noavatar.jpg'
import FileService from "../services/fileService";

const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().required().email(),
    dob: yup.date().required().typeError('dob is a required field'),
    // avatar: yup.string().required().url(),
    gender: yup.string().required()

})
function TeacherList() {
    const [teacherList, setTeacherList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [departmentList, setDepartmentList] = useState([])
    const [toggleForm, setToggleForm] = useState(false)
    const [removeTeacher, setRemoveTeacher] = useState({})
    const [temporaryAvatar, setTemporaryAvatar] = useState()
    const [fileAvatar, setFileAvatar] = useState({})
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    })
    
    async function fetchData() {
        let teacherRes = await TeacherService.getTeachers()
        setTeacherList(teacherRes.data)
        setIsLoading(false)
    }

    useEffect(() => {
        setIsLoading(true)
        fetchData()
    }, [removeTeacher])

    useEffect(() => {
        setIsLoading(true)
        async function fetchDepartment() {
            let departRes = await DepartmentService.getDepartments();
            setDepartmentList(departRes.data)
            setIsLoading(false)
        }
        fetchDepartment();
    }, [])

    const handleAddTeacher = async (data) => {
        data.department = JSON.parse(data.department)
        data.avatar = temporaryAvatar;
        setIsLoading(true)
        let createTeacherRes = await TeacherService.createTeacher(data)
        if (createTeacherRes.data) {
            toast.success(`Teacher ${createTeacherRes.name} added success!`)
            fetchData()
            reset()
            setTemporaryAvatar()
            setFileAvatar()
        }
        setIsLoading(false)
    }
    const handleRemoveTeacher = (teacher) => {
        Swal.fire({
            title: "Are you sure remove?",
            icon: "warning",
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm",
            cancelButtonText: "No"
        }).then(async (result) => {
            if (result.isConfirmed) {
                let delTeacherRes = await TeacherService.deleteTeacher(teacher.id)
                if(delTeacherRes.data){
                    toast.success(`Teacher ${result.name} removed success`)
                    setRemoveTeacher(delTeacherRes.data)
                }
                else{
                    toast.error('System error')
                }
            }
        });
    }

    const handleSelectAvatar = (e) => {
        const temporaryAvatar = URL.createObjectURL(e.target.files[0])
        setTemporaryAvatar(temporaryAvatar)
        setFileAvatar(e.target.files[0])
    }

    const handleUploadAvatar = async () => {
        let uploadRes = await FileService.upload(fileAvatar)
        setTemporaryAvatar(uploadRes.data.secure_url)
        toast.success('Avatar uploaded success')
    }
    return (
        <>
            <div>
                <h3>Teacher List</h3>
            </div>
            <section>
                <div>
                    <button className="btn btn-sm btn-warning"
                        onClick={() => setToggleForm(!toggleForm)}
                    >Add Teacher</button>
                </div>
                <div>
                    {toggleForm && (
                        <form onSubmit={handleSubmit(handleAddTeacher)}>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="form-group mb-3">
                                        <label className="form-label">Fullname <span className="text-danger">(*)</span></label>
                                        <input type="text" className="form-control" placeholder="Fullname"
                                            {...register('name')}
                                        />
                                        <span className="text-danger">{errors.name?.message}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="form-label">Email <span className="text-danger">(*)</span></label>
                                        <input type="email" className="form-control" placeholder="Email"
                                            {...register('email')}
                                        />
                                        <span className="text-danger">{errors.email?.message}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="form-label">Dob <span className="text-danger">(*)</span></label>
                                        <input type="date" className="form-control"
                                            {...register('dob')}
                                        />
                                        <span className="text-danger">{errors.dob?.message}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-sm btn-success me-3">Create</button>
                                        <button type="button" className="btn btn-sm btn-dark me-3" onClick={() => reset()}>Cancel</button>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    {/* <div className="form-group mb-3">
                                        <label className="form-label">Avatar <span className="text-danger">(*)</span></label>
                                        <input type="url" className="form-control" placeholder="Avatar URL"
                                            {...register('avatar')}
                                        />
                                        <span className="text-danger">{errors.avatar?.message}</span>
                                    </div> */}
                                    <div className="form-group mb-3">
                                        <label className="form-label">Gender</label>
                                        <div className="mt-2">
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" value={"Male"} {...register('gender')} />
                                                <label className="form-check-label">Male</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" value={"Female"} {...register('gender')} />
                                                <label className="form-check-label">Female</label>
                                            </div>
                                        </div>
                                        <span className="text-danger">{errors.gender?.message}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="form-label">Department</label>
                                        <select className="form-control" {...register('department')}>
                                            {
                                                departmentList.map((depart) => (
                                                    <option value={JSON.stringify(depart)}>{depart.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group d-flex flex-column align-items-center">
                                        <img className="avatar-md" src={temporaryAvatar || NoAvatar} alt="" 
                                            onClick={() => document.getElementById('fileAvatar').click()}
                                        />
                                        <input id="fileAvatar" type="file" className="d-none" accept="image/*"
                                            onChange={handleSelectAvatar}
                                        />
                                        <button type="button" className="btn btn-sm btn-warning mt-1"
                                            onClick={handleUploadAvatar}
                                        >Upload</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    )}
                </div>
            </section>
            <section>
                {
                    isLoading ? <p>Loading...</p> : (
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>#ID</th>
                                    <th>Fullname</th>
                                    <th>DOB</th>
                                    <th>Email</th>
                                    <th>Gender</th>
                                    <th>Department</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    teacherList.map((teacher) => (
                                        <tr key={teacher.id}>
                                            <td>{teacher.id}</td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <img className="rounded-circle avatar-sm me-2" src={teacher.avatar} alt="" />
                                                    {teacher.name}
                                                </div>
                                            </td>
                                            <td>{dayjs(teacher.dob).format('DD/MM/YYYY')}</td>
                                            <td>{teacher.email}</td>
                                            <td>{teacher.gender}</td>
                                            <td>{teacher.department?.name}</td>
                                            <td>
                                                <Link to={`/teacher/${teacher.id}`} className="btn btn-sm btn-primary me-1">Detail</Link>
                                                <Link to={`/teacher/modify/${teacher.id}`} className="btn btn-sm btn-success me-1">Modify</Link>
                                                <button type="button" className="btn btn-sm btn-danger"
                                                    onClick={() => handleRemoveTeacher(teacher)}
                                                >Remove</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    )
                }
            </section>
        </>
    )
}

export default TeacherList;