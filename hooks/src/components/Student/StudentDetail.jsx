import React from "react";
import { useParams } from "react-router";

function StudentDetail(){
    const { studentId, name } = useParams()
    return (
        <>
            <h1>Student Detail {studentId}</h1>
            <h1>Fullname: {name}</h1>
        </>

    )
}

export default StudentDetail;