import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Loading from "../../../component/Loader";
import { editUser } from "./AddUser/modules/action";
export default function EditUser() {
    const dispatch = useDispatch();
    const userInfor = useSelector((state) => state.ListStaffReducer.userInfor);
    const [state, setState] = useState({
        taiKhoan: "",
        matKhau: "",
        hoTen: "",
        email: "",
        soDt: "",
        maNhom: "",
        maLoaiNguoiDung: "",
    });
    const handleOnchange = (e) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value,
        });
    };
    const handleEditUser = (e) => {
        e.preventDefault();
        dispatch(editUser(state));
    };
    // if (!userInfor) {
    //     return <Loading />;
    // }
    return (
        <div className="container">
            <form onSubmit={handleEditUser}>
                <h3>Edit user</h3>
                <div className="form-group">
                    <span>Tài khoản</span>
                    <input
                        className="form-control"
                        name="taiKhoan"
                        onChange={handleOnchange}
                        value={userInfor?.taiKhoan}
                    />
                </div>
                <div className="form-group">
                    <span>Mật khẩu</span>
                    <input
                        className="form-control"
                        name="matKhau"
                        onChange={handleOnchange}
                        value={userInfor?.matKhau}
                    />
                </div>
                <div className="form-group">
                    <span>Họ tên</span>
                    <input
                        className="form-control"
                        name="hoTen"
                        onChange={handleOnchange}
                        value={userInfor?.hoTen}
                    />
                </div>
                <div className="form-group">
                    <span>Email</span>
                    <input
                        className="form-control"
                        name="email"
                        onChange={handleOnchange}
                        value={userInfor?.email}
                    />
                </div>
                <div className="form-group">
                    <span>SDT</span>
                    <input
                        className="form-control"
                        name="soDt"
                        onChange={handleOnchange}
                        value={userInfor?.soDT}
                    />
                </div>
                <div className="form-group">
                    <span>Mã người dùng</span>
                    <select
                        className="form-control"
                        name="maNhom"
                        onChange={handleOnchange}
                    >
                        <option value="">Chọn mã nhóm</option>
                        <option value="GP01">GP01</option>
                        <option value="GP02">GP02</option>
                        <option value="GP03">GP03</option>
                        <option value="GP04">GP04</option>
                        <option value="GP05">GP05</option>
                        <option value="GP06">GP06</option>
                        <option value="GP07">GP07</option>
                        <option value="GP08">GP08</option>
                        <option value="GP09">GP09</option>
                        <option value="GP10">GP10</option>
                        <option value="GP11">GP11</option>
                        <option value="GP12">GP12</option>
                        <option value="GP13">GP13</option>
                        <option value="GP14">GP14</option>
                        <option value="GP15">GP15</option>
                    </select>
                </div>
                <div className="form-group">
                    <span>Mã loại người dùng</span>
                    <select
                        className="form-control"
                        name="maLoaiNguoiDung"
                        onChange={handleOnchange}
                    >
                        <option value="">Mã loại người dùng</option>
                        <option value="KhachHang">Khách hàng</option>
                        <option value="QuanTri">Quản trị</option>
                    </select>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-success">
                        Done
                    </button>
                </div>
            </form>
        </div>
    );
}