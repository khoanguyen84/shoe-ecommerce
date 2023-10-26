import React, { useState} from "react";

function CreateStaff(){
    const [form, setForm] = useState({
        values: {
            'fullname': '',
            'email': ''
        },
        errors: {
            'fullname': 'fullname is a required field',
            'email': 'email is a required field'
        },
        touch: {
            'fullname': false,
            'email': false
        }
    })

    const handleInputValue = (e) => {
        if(e.target.value){
            setForm({
                ...form,
                values: {
                    ...form.values,
                    [e.target.name]: e.target.value
                },
                errors: {
                    ...form.errors,
                    [e.target.name]: ''
                },
                touch: {
                    ...form.touch,
                    [e.target.name]: document.activeElement == e.target
                }
            })
        }
        else {
            setForm({
                ...form,
                values: {
                    ...form.values,
                    [e.target.name]: e.target.value
                },
                errors: {
                    ...form.errors,
                    [e.target.name]: `${e.target.name} is a required field`
                },
                touch: {
                    ...form.touch,
                    [e.target.name]: document.activeElement == e.target
                }
            })
        }
        
    }

    const handleCancel = () => {
        setForm({
            ...form,
            values: {
                ...form.values,
                fullname: '',
                email: ''
            },
            errors: {
                'fullname': 'fullname is a required field',
                'email': 'email is a required field'
            },
            touch: {
                'fullname': false,
                'email': false
            }
        })
    }
    const handleCreateStaff = (e) => {
        e.preventDefault()
        // call Login
        if(form.values.fullname && form.values.email){
            console.log(form.values);
        }
    }
    return (
        <>
            <h1>Create Staff</h1>
            <form onSubmit={handleCreateStaff}>
                <div className="form-group mb-2">
                    <label>Fullname</label>
                    <input type="text" className="form-control" 
                        name="fullname"
                        value={form.values.fullname}
                        onInput={handleInputValue}/>
                    <span className="text-danger">{form.touch.fullname && form.errors?.fullname}</span>
                </div>
                <div className="form-group mb-2">
                    <label>Email</label>
                    <input type="email" className="form-control" 
                        name="email"
                        value={form.values.email}
                        onInput={handleInputValue}/>
                    <span className="text-danger">{form.touch.email && form.errors?.email}</span>
                </div>
                <div className="form-group mb-2">
                    <label></label>
                    <button type="submit" className="btn btn-sm btn-warning me-3">Create</button>
                    <button type="cancel" className="btn btn-sm btn-dark"
                        onClick={handleCancel}
                    >Cancel</button>
                </div>
            </form>
        </>
    )
}

export default CreateStaff