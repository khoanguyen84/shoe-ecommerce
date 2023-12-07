import React, { useEffect, useState } from "react";
import { FaSave, FaUndo } from "react-icons/fa";
import { set, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import useFetchResource from "../../../custom-hooks/useFetchResource";
import { CATEGORY_API_URL, COLOR_API_URL, COMPANY_API_URL } from "../../../services/common";
import { useDispatch } from "react-redux";
import { editProductThunkAction } from "../../../slices/manageProductSlice";
import { toast } from "react-toastify";

const schema = yup.object({
    title: yup.string().required(),
    newPrice: yup.number().positive().required().typeError('price is a required field'),
    category: yup.string().required(),
    color: yup.string().required(),
    company: yup.string().required(),
    img: yup.string().required(),
})

function EditProductModel({ selectProduct, setSelectProduct }) {
    const companyList = useFetchResource(COMPANY_API_URL)
    const categoryList = useFetchResource(CATEGORY_API_URL)
    const colorList = useFetchResource(COLOR_API_URL)
    const [currenProduct, setCurrentProduct] = useState({})
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()
    useEffect(() => {
        setLoading(true)
        async function getProductById() {
            let productRes = await fetch(`https://jsonserver-vercel-api.vercel.app/products/${selectProduct?.id}`)
            let product = await productRes.json()
            setCurrentProduct(product)
            setLoading(false)
            setValue("title", product.title)
            setValue("newPrice", product.newPrice)
            setValue("category", product.category)
            setValue("color", product.color)
            setValue("company", product.company)
            setValue("img", product.img)
        }
        getProductById()
    }, [selectProduct?.id])

    const { register, handleSubmit, reset, formState: { errors }, setValue } = useForm({
        resolver: yupResolver(schema)
    })

    const handleCloseEditModel = () => {
        setSelectProduct({})
        reset()
    }

    const handleSaveProduct = (data) => {
        let editProduct = {
            ...currenProduct,
            ...data,
            prevPrice: Number(data.newPrice) !== Number(currenProduct.newPrice) ? currenProduct.newPrice : currenProduct.prevPrice
        }
        dispatch(editProductThunkAction(editProduct))
        toast.success('Product updated success')
        setSelectProduct({})
    }

    return (
        <>
            <div className="modal fade show" style={{ display: `${selectProduct?.id ? 'block' : 'none'}` }}>
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <form onSubmit={handleSubmit(handleSaveProduct)}>
                            <div className="modal-header">
                                <h5 className="modal-title">Modify Product</h5>
                                <button type="button" className="btn-close" onClick={handleCloseEditModel} />
                            </div>
                            <div className="modal-body">
                                {
                                    loading ? <p>Loading...</p> : (
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="form-group mb-2">
                                                    <label className="form-label">Title</label>
                                                    <input
                                                        type="text"
                                                        className={`form-control form-control-sm ${errors?.title?.message ? 'is-invalid' : ''}`}
                                                        placeholder="Title"
                                                        {...register('title')}
                                                    />
                                                    <span className="invalid-feedback">{errors?.title?.message}</span>
                                                </div>
                                                <div className="form-group mb-2">
                                                    <label className="form-label">Price</label>
                                                    <input
                                                        type="text"
                                                        className={`form-control form-control-sm ${errors?.newPrice?.message ? 'is-invalid' : ''}`}
                                                        placeholder="Price"
                                                        {...register('newPrice')}
                                                    />
                                                    <span className="invalid-feedback">{errors?.newPrice?.message}</span>
                                                </div>
                                                <div className="form-group mb-2">
                                                    <label className="form-label">Color</label>
                                                    <select
                                                        className={`form-select form-select-sm ${errors?.color?.message ? 'is-invalid' : ''}`}
                                                        defaultValue={''}
                                                        {...register('color')}
                                                    >
                                                        <option value={''} disabled>Please select color</option>
                                                        {
                                                            colorList?.map((color) => (
                                                                <option key={color.id} value={color.name}>{color.name}</option>
                                                            ))
                                                        }
                                                    </select>
                                                    <span className="invalid-feedback">{errors?.color?.message}</span>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group mb-2">
                                                    <label className="form-label">Category</label>
                                                    <select
                                                        className={`form-select form-select-sm ${errors?.category?.message ? 'is-invalid' : ''}`}
                                                        defaultValue={''}
                                                        {...register('category')}
                                                    >
                                                        <option value={''} disabled>Please select category</option>
                                                        {
                                                            categoryList?.map((cat) => (
                                                                <option key={cat.id} value={cat.name}>{cat.name}</option>
                                                            ))
                                                        }
                                                    </select>
                                                    <span className="invalid-feedback">{errors?.category?.message}</span>
                                                </div>
                                                <div className="form-group mb-2">
                                                    <label className="form-label">Company</label>
                                                    <select
                                                        className={`form-select form-select-sm ${errors?.company?.message ? 'is-invalid' : ''}`}
                                                        defaultValue={''}
                                                        {...register('company')}
                                                    >
                                                        <option value={''} disabled>Please select company</option>
                                                        {
                                                            companyList?.map((company) => (
                                                                <option key={company.id} value={company.name}>{company.name}</option>
                                                            ))
                                                        }
                                                    </select>
                                                    <span className="invalid-feedback">{errors?.company?.message}</span>
                                                </div>
                                                <div className="form-group mb-2">
                                                    <label className="form-label">Image</label>
                                                    <input
                                                        type="text"
                                                        className={`form-control form-control-sm ${errors?.img?.message ? 'is-invalid' : ''}`}
                                                        placeholder="Image"
                                                        {...register('img')}
                                                    />
                                                    <span className="invalid-feedback">{errors?.img?.message}</span>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="border-dashed d-flex align-items-center justify-content-center w-100 h-100">
                                                    <img style={{ maxWidth: '220px', maxHeight: '70%' }} src={currenProduct?.img} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-dark d-flex align-items-center"
                                    onClick={handleCloseEditModel}
                                >
                                    <FaUndo className="me-2" />
                                    Cancel
                                </button>
                                <button type="submit" className="btn btn-success d-flex align-items-center">
                                    <FaSave className="me-2" />
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditProductModel