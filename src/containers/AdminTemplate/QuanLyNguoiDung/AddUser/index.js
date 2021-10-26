import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./modules/action";

export default function AddUser() {
    const dispatch = useDispatch();

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
    const handleAddUser = (e) => {
        e.preventDefault();
        dispatch(addUser(state));
    };
    return (
        <div>
            <form className="container" onSubmit={handleAddUser}>
                <h3>Add user</h3>
                <div className="form-group">
                    <span>Tài khoản</span>
                    <input
                        className="form-control"
                        name="taiKhoan"
                        onChange={handleOnchange}
                    />
                </div>
                <div className="form-group">
                    <span>Mật khẩu</span>
                    <input
                        className="form-control"
                        name="matKhau"
                        onChange={handleOnchange}
                    />
                </div>
                <div className="form-group">
                    <span>Họ tên</span>
                    <input
                        className="form-control"
                        name="hoTen"
                        onChange={handleOnchange}
                    />
                </div>
                <div className="form-group">
                    <span>Email</span>
                    <input
                        className="form-control"
                        name="email"
                        onChange={handleOnchange}
                    />
                </div>
                <div className="form-group">
                    <span>SDT</span>
                    <input
                        className="form-control"
                        name="soDt"
                        onChange={handleOnchange}
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
                        Add user
                    </button>
                </div>
            </form>
        </div>
    );
}