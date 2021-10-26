import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Loading from './../../../component/Loader'
import './style.css'
import { UserInfo } from './modules/action'
import { NavLink } from 'react-router-dom'

export default function AuthPage(props) {
    const loading = useSelector(state => state.AuthPageReducer.loading)
    const error = useSelector(state => state.AuthPageReducer.error)
    const dispatch = useDispatch()

    const [state, setState] = useState(
        {
            taiKhoan: '',
            matKhau: '',
        })
    const handleOnChange = (e) => {
        const { name, value } = e.target
        setState({
            ...state,
            [name]: value
        })
        console.log(name, value)
    }

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(UserInfo(state, props.history))
    }

    if (loading) return <Loading />
    const errorMessage = () => {
        if (error) {
            return (
                <p style={{
                    backgroundColor: 'slategrey',
                    color: 'white', padding: 6,
                }}>{error.response.data.content}</p>
            )
        }
    }
    return (

        <div id="login">
            <div className="container">
                <div id="login-row" className="row justify-content-center align-items-center">
                    <div id="login-column" className="col-md-6">
                        <div id="login-box" className="col-md-12">
                            <form id="login-form" className="form" onSubmit={handleLogin}>
                                <ul className="login-register mb-3">
                                    <li>ĐĂNG NHẬP</li>
                                    <li className="mx-2">/</li>
                                    <li>
                                        <NavLink className="register" to="/sign-up">ĐĂNG KÝ</NavLink>
                                    </li>
                                </ul>

                                {errorMessage()}
                                <div className="form-group">
                                    <label htmlFor="username" className="text-info">Username:</label><br />
                                    <input type="text" name="taiKhoan" className="form-control" onChange={handleOnChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="text-info">Password:</label><br />
                                    <input type="text" name="matKhau" className="form-control" onChange={handleOnChange} />
                                </div>
                                <button type="submit" className="btn btn-warning w-100 mt-4 text-light">ĐĂNG NHẬP</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
