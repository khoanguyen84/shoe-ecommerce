import React from "react";

function FormRegister() {
    return (
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
    )
}

export default FormRegister