import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { toast } from 'react-toastify'
import dayjs from "dayjs";
import TeacherService from "../services/teacherService";
import DepartmentService from "../services/departmentService";
import Spinner from "../component/Spinner";
import FileService from "../services/fileService";

const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().required().email(),
    dob: yup.date().required().typeError('dob is a required field'),
    // avatar: yup.string().required().url()
})

function ModifyTeacher() {
    const [teacherDetail, setTeacherDetail] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [departmentList, setDepartmentList] = useState([])
    const [temporaryAvatar, setTemporaryAvatar] = useState()
    const [newFileAvatar, setNewFileAvatar] = useState({})
    const [isUploading, setIsUploading] = useState(false)
    const { teacherId } = useParams()
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm({
        resolver: yupResolver(schema)
    })

    useEffect(() => {
        setIsLoading(true)
        async function getTeacher() {
            let teacherRes = await TeacherService.getTeacher(teacherId)
            setTeacherDetail(teacherRes.data)
            setValue("name", teacherRes.data.name)
            setValue("email", teacherRes.data.email)
            setValue("dob", dayjs(teacherRes.data.dob).format('YYYY-MM-DD'))
            setValue("avatar", teacherRes.data.avatar)
            setValue("gender", teacherRes.data.gender)
            setValue("department", JSON.stringify(teacherRes.data.department))
            setIsLoading(false)
        }
        getTeacher();
    }, [teacherId])

    useEffect(() => {
        setIsLoading(true)
        async function fetchDepartment() {
            let departRes = await DepartmentService.getDepartments();
            setDepartmentList(departRes.data)
            setIsLoading(false)
        }
        fetchDepartment();
    }, [])

    const handleUpdateTeacher = async (data) => {
        data.department = JSON.parse(data.department)
        setIsLoading(true)
        let editTeacherRes = await TeacherService.modifyTeacher(data, teacherId)
        if (editTeacherRes.data) {
            toast.success(`Teacher ${editTeacherRes.data.name} modified success!`)
            setIsLoading(false)
            navigate("/teacher")
        }
    }
    const handleChangeAvatar = (e) => {
        const temporaryAvatar = URL.createObjectURL(e.target.files[0])
        setTemporaryAvatar(temporaryAvatar)
        setNewFileAvatar(e.target.files[0])
    }

    const handleUpdateAvatar = async () => {
        if (newFileAvatar?.name) {
            setIsUploading(true)
            let uploadRes = await FileService.upload(newFileAvatar)
            if (uploadRes?.data?.secure_url) {
                await TeacherService.modifyTeacher({
                    avatar: uploadRes.data.secure_url
                }, teacherId)
                setTemporaryAvatar(uploadRes.data.secure_url)
                toast.success('Avatar changed success')
            }
            setIsUploading(false)
        }
        else {
            toast.info('You have to provider new image')
        }
    }
    return (
        <>
            <div>
                <h3>Modify Teacher</h3>
                <Link to={"/teacher"}>Back to Teacher list</Link>
            </div>
            <div>
                {
                    isLoading ? <Spinner /> : (
                        <form onSubmit={handleSubmit(handleUpdateTeacher)}>
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
                                        <button type="submit" className="btn btn-sm btn-success me-3">Update</button>
                                        <Link to={"/teacher"} className="btn btn-sm btn-dark">Cancel</Link>
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
                                            {
                                                teacherDetail.gender == "Male" ? (
                                                    <>
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="radio"
                                                                checked
                                                                value={"Male"} {...register('gender')} />
                                                            <label className="form-check-label">Male</label>
                                                        </div>
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="radio"
                                                                value={"Female"} {...register('gender')} />
                                                            <label className="form-check-label">Female</label>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <>
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="radio"
                                                                value={"Male"} {...register('gender')} />
                                                            <label className="form-check-label">Male</label>
                                                        </div>
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="radio"
                                                                checked
                                                                value={"Female"} {...register('gender')} />
                                                            <label className="form-check-label">Female</label>
                                                        </div>
                                                    </>
                                                )
                                            }

                                        </div>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="form-label">Department</label>
                                        <select className="form-control" {...register('department')}>
                                            {
                                                departmentList.map((depart) => (
                                                    <option key={depart.id} value={JSON.stringify(depart)}>{depart.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-4 d-flex align-items-center flex-column">
                                    <img className="avatar-md" src={temporaryAvatar || teacherDetail.avatar} alt=""
                                        onClick={() => document.getElementById('file-avatar').click()}
                                    />
                                    <input id="file-avatar" accept="image/*" type="file" className="d-none"
                                        onChange={handleChangeAvatar}
                                    />
                                    {
                                        isUploading ? (
                                            <button type="button" className="btn btn-sm btn-primary mt-1" disabled>
                                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                Changing Avatar
                                            </button>
                                        ) : (
                                            <button type="button" className="btn btn-sm btn-primary mt-1"
                                                onClick={handleUpdateAvatar}
                                            >Change Avatar</button>
                                        )
                                    }
                                </div>
                            </div>
                        </form>
                    )
                }
            </div>
        </>
    )
}

export default ModifyTeacher;