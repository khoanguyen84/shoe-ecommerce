import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { toast } from 'react-toastify'
import dayjs from "dayjs";

const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().required().email(),
    dob: yup.date().required().typeError('dob is a required field'),
    avatar: yup.string().required().url()
})

function ModifyTeacher() {
    const [teacherDetail, setTeacherDetail] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [departmentList, setDepartmentList] = useState([])
    const { teacherId } = useParams()
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm({
        resolver: yupResolver(schema)
    })

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://6543a6a201b5e279de20ba5b.mockapi.io/teacher/${teacherId}`)
            .then(res => res.json())
            .then(data => {
                setTeacherDetail(data)
                setValue("name", data.name)
                setValue("email", data.email)
                setValue("dob", dayjs(data.dob).format('YYYY-MM-DD'))
                setValue("avatar", data.avatar)
                setValue("gender", data.gender)
                setValue("department", JSON.stringify(data.department))

                setIsLoading(false)
            })
    }, [teacherId])

    useEffect(() => {
        setIsLoading(true)
        fetch('https://6543a6a201b5e279de20ba5b.mockapi.io/department')
            .then((response) => response.json())
            .then((data) => {
                setDepartmentList(data)
                setIsLoading(false)
            })
    }, [])

    const handleUpdateTeacher = (data) => {
        data.department = JSON.parse(data.department)
        setIsLoading(true)
        fetch(`https://6543a6a201b5e279de20ba5b.mockapi.io/teacher/${teacherId}`, {
            method: "PUT",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => res.json())
            .then((result) => {
                toast.success(`Teacher ${result.name} modified success!`)
                setIsLoading(false)
                navigate("/teacher")
                // setTeacherDetail(result)
            })
    }
    console.log(teacherDetail);
    return (
        <>
            <div>
                <h3>Modify Teacher</h3>
                <Link to={"/teacher"}>Back to Teacher list</Link>
            </div>
            <div>
                {
                    isLoading ? <p>Loading...</p> : (
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
                                    <div className="form-group mb-3">
                                        <label className="form-label">Avatar <span className="text-danger">(*)</span></label>
                                        <input type="url" className="form-control" placeholder="Avatar URL"
                                            {...register('avatar')}
                                        />
                                        <span className="text-danger">{errors.avatar?.message}</span>
                                    </div>
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
                                <div className="col-md-4 d-flex align-items-center">
                                    <img className="w-50" src={teacherDetail.avatar} alt="" />
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