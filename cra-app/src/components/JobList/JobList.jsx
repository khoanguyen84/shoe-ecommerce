import React, { Component } from "react";
import MainLayout from "../Layout/MainLayout";

const jobList = [
    {
        id: 'task-01',
        name: "Java - Spring Boot",
        status: "Looking For",
        hrName: "Khoa Nguyễn",
        count: 5
    },
    {
        id: 'task-02',
        name: "ReactJS/Angular",
        status: "Done",
        hrName: "Phương Trang",
        count: 7
    },
    {
        id: 'task-03',
        name: "PHP/Laravel",
        status: "Looking For",
        hrName: "Thương Phạm",
        count: 2
    },
    {
        id: 'task-04',
        name: ".NET Core MVC",
        status: "Done",
        hrName: "Sơn Hoàng",
        count: 4
    },
]

function JobList() {
    // const handleClick = (job) => {
    //     console.log(job);
    // }
    return (
        <MainLayout>
            <section>
                <table className='table table-striped table-hover'>
                    <thead className='table-success '>
                        <tr>
                            <th>#ID</th>
                            <th>Task Name</th>
                            <th>Count</th>
                            <th>Status</th>
                            <th>HR Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobList.map((job) => (
                                // <TableRow 
                                //     id={job.id}
                                //     name = {job.name}
                                //     count = {job.count}
                                //     status = {job.status}
                                //     hrName = {job.hrName}
                                //     onClick = { () => handleClick(job) }
                                // />
                                // <TableRow key={job.id}
                                //     {...job}
                                //     onClick = { () => handleClick(job) }
                                // />
                                <TableRow key={job.id} {...job} />
                            ))
                        }
                    </tbody>
                </table>
            </section>
        </MainLayout>
    )
}

function TableRow(props) {
    // console.log(props);
    const handleClick = (job) => {
        console.log(job);
    }
    return (
        <tr >
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.count}</td>
            <td><span className={`${props.status == 'Done' ? 'badge bg-success' : 'badge bg-warning'}`}>{props.status}</span></td>
            <td>{props.hrName}</td>
            <td>
                <button className='btn btn-outline-primary btn-sm me-1'>
                    <i className='fa fa-eye'
                        onClick={() => handleClick(props)}
                    />
                </button>
                <button className='btn btn-outline-danger btn-sm'>
                    <i className='fa fa-trash' />
                </button>
            </td>
        </tr>
    )
}

export default JobList;