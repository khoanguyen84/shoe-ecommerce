import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

function TeacherDetail() {
    const { teacherId } = useParams()
    const [teacherDetail, setTeacherDetail] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        fetch(`https://6543a6a201b5e279de20ba5b.mockapi.io/teacher/${teacherId}`)
            .then((res) => res.json())
            .then((data) => {
                setTeacherDetail(data)
                setIsLoading(false)
            })
    }, [teacherId])
    return (
        <>
            <div>
                <h3>Teacher Detail</h3>
                <Link to={"/teacher"}>Back to Teacher list</Link>
            </div>
            {
                isLoading ? <p>Loading...</p> : (
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="col-md-2">
                            <img src={teacherDetail.avatar} alt=""/>
                        </div>
                        <div className="col-md-10">
                            <div>Fullname: {teacherDetail.name}</div>
                            <div>Email: {teacherDetail.email}</div>
                            <div>Dob: {dayjs(teacherDetail.dob).format('DD/MM/YYYY')}</div>
                            <div>Gender: {teacherDetail.gender ? 'Male' : ' Female'}</div>
                            <div>Department: {teacherDetail.department?.name}</div>
                        </div>
                    </div>
                )
            }

        </>
    )
}

export default TeacherDetail
