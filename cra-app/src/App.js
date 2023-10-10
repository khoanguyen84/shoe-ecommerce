import React from 'react';
import './App.css';

const profile = {
  name: "Khoa Nguyễn",
  age: 20,
  gender: "Male",
  mobile: '0935216417',
  email: "khoa.nguyen@codegym.vn",
  avatar: "https://cdn0.iconfinder.com/data/icons/avatar-78/128/3-512.png"
}


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

function App() {
  return (
    <div className="container vh-100">
      <h1 className='display-3 fw-bolder'>We are learning CRA</h1>
      <section className='mt-4'>
        <form className='row'>
          <div className='col-md-4'>
            <h3 className='display-6 fw-bolder mb-4'>Let us know about your query.</h3>
            <p>
              Fill out the form provided and we'll be in-touch within 48
              hours. Also check out our <a href='#'>Contact Us</a> page for more
              options.
            </p>
          </div>
          <div className='col-md-8'>
            <div className='row mb-3'>
              <div className='col-md-6'>
                <input type="text" className='form-control' placeholder='First Name*' />
              </div>
              <div className='col-md-6'>
                <input type="text" className='form-control' placeholder='Last Name*' />
              </div>
            </div>
            <div className='row mb-3'>
              <div className='col-md-6'>
                <input type="email" className='form-control' placeholder='Email*' />
              </div>
              <div className='col-md-6'>
                <input type="tel" className='form-control' placeholder='Telephone Number' />
              </div>
            </div>
            <div className='row mb-3'>
              <div className='col-md-12'>
                <input type="text" className='form-control' placeholder='Company Name' />
              </div>
            </div>
            <div className='row mb-3'>
              <div className='col-md-12'>
                <textarea className='form-control' cols="30" rows="10"></textarea>
              </div>
            </div>
            <div className='row mb-3'>
              <div className='col-md-12'>
                <p>*You must provide these details to submit the form</p>
              </div>
            </div>
            <div className='row mb-3'>
              <div className='col-md-12 d-flex'>
                <input type="checkbox" className='form-check-input me-2 fs-2' />
                <label className='form-check-label'>I agree to Envira Recycling processing and storing the data used
                  on this form for the purpose of responding to my enquiry.</label>
              </div>
            </div>
            <div className='row mb-3'>
              <div className='col-md-12 text-end'>
                <button className='btn btn-secondary btn-lg'>Submit</button>
              </div>
            </div>
          </div>
        </form>
      </section>
      <section>
        <div className="card mb-3" >
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-md-4">
              <img src={profile.avatar} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{profile.name}</h5>
                <ul className='list-group'>
                  <li className='list-group-item'>Age: <span className='fw-bolder'>{profile.age}</span></li>
                  <li className='list-group-item'>Gender: <span className='fw-bolder'>{profile.gender}</span></li>
                  <li className='list-group-item'>Email: <span className='fw-bolder'>{profile.email}</span></li>
                  <li className='list-group-item'>Mobile: <span className='fw-bolder'>{profile.mobile}</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
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
    </div>
  );
}

export default App;
