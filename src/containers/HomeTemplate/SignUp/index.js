import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "./module/action";
import Loading from "../../../component/Loader";
export default function SignUp(props) {
    const [state, setState] = useState({
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: "",
        maNhom: "",
        hoTen: "",
    });
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.SignUpReducer.loading);
    const error = useSelector((state) => state.SignUpReducer.error);

    const handleSignUp = (e) => {
        e.preventDefault();
        dispatch(signUpUser(state, props.history));
        console.log(state);
    };
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value,
        });
    };
    if (loading) return <Loading />;
    const renderNoti = () => {
        error && (
            <div className="alert alert-danger">{error?.response?.data?.content}</div>
        );
    };
    return (
        <div id="login">
            <div className="container">
                <div
                    id="sign-up-row"
                    className="row justify-content-center align-items-center"
                >
                    <div id="sign-up-column" className="col-md-6">
                        <div id="sign-up-box" className="col-md-12">
                            <form id="login-form" className="form" onSubmit={handleSignUp}>
                                <ul className="login-register mb-3">
                                    <NavLink className="register" to="/admin">
                                        ĐĂNG NHẬP
                                    </NavLink>
                                    <li className="mx-2">/</li>
                                    <li>ĐĂNG KÝ</li>
                                </ul>

                                {renderNoti()}
                                <div className="form-group">
                                    <label htmlFor="taiKhoan" className="text-info">
                                        Username:
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        name="taiKhoan"
                                        className="form-control"
                                        onChange={handleOnChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="matKhau" className="text-info">
                                        Password:
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        name="matKhau"
                                        className="form-control"
                                        onChange={handleOnChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email" className="text-info">
                                        Email:
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        name="email"
                                        className="form-control"
                                        onChange={handleOnChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="soDt" className="text-info">
                                        Số ĐT:
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        name="soDt"
                                        className="form-control"
                                        onChange={handleOnChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="maNhom" className="text-info">
                                        Mã nhóm:
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        name="maNhom"
                                        className="form-control"
                                        onChange={handleOnChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="hoTen" className="text-info">
                                        Họ và tên:
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        name="hoTen"
                                        className="form-control"
                                        onChange={handleOnChange}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-warning w-100 mt-4 text-light"
                                >
                                    ĐĂNG KÝ
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}