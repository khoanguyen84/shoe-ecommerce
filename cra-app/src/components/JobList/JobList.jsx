import React, { Component } from "react";

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

class JobList extends Component {
    render() {
        return (
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
                                <tr key={job.id}>
                                    <td>{job.id}</td>
                                    <td>{job.name}</td>
                                    <td>{job.count}</td>
                                    <td><span className={`${job.status == 'Done' ? 'badge bg-success' : 'badge bg-warning'}`}>{job.status}</span></td>
                                    <td>{job.hrName}</td>
                                    <td>
                                        <button className='btn btn-outline-primary btn-sm me-1'>
                                            <i className='fa fa-eye' />
                                        </button>
                                        <button className='btn btn-outline-danger btn-sm'>
                                            <i className='fa fa-trash' />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>
        )
    }
}

export default JobList;