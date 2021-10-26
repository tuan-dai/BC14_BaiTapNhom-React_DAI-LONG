import React, { Component } from "react";
import { connect } from "react-redux";
import { getListStaff, deleteUser } from "./modules/actions";
import { getUser } from "./AddUser/modules/action";
import Loading from '../../../component/Loader';
import { Link } from "react-router-dom";
import SearchUser from "./Search";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";

class QuanLyNguoiDung extends Component {
    componentDidMount() {
        this.props.fetchList();
    }

    renderListStaff = () => {
        const { data, loading } = this.props;
        if (loading) return <Loading />;
        return data?.map((staff) => {
            return (
                <tr>
                    <td>{staff.maLoaiNguoiDung}</td>
                    <td>{staff.taiKhoan}</td>
                    <td>{staff.matKhau}</td>
                    <td>{staff.hoTen}</td>
                    <td>{staff.email}</td>
                    <td>{staff.soDt}</td>
                    <td className="d-flex flex-row">
                        <button
                            className="btn btn-danger "
                            onClick={() => {
                                if (
                                    window.confirm(
                                        `Bạn có muốn xóa tài khoản ${staff.taiKhoan} không?  `
                                    )
                                ) {
                                    this.props.fetchDelete(staff.taiKhoan);
                                }
                            }}
                        >
                            <DeleteOutlineIcon />
                        </button>
                        <button
                            className="btn btn-success"
                            onClick={() => {
                                this.props.fetchUser(staff.taiKhoan);
                            }}
                        >
                            <Link className="text-light" to={`/edituser/${staff.taiKhoan}`}>
                                <ModeEditOutlineOutlinedIcon />
                            </Link>
                        </button>
                    </td>
                </tr>
            );
        });
    };
    render() {
        return (
            <div className="container">
                <div className="card border-0">
                    <div className="card-body">
                        <h4 className="card-title">Quản Lý Người dùng</h4>
                        <Link to="/adduser" className="btn btn-primary" data-toggle="modal">
                            Thêm người dùng
                        </Link>
                        <SearchUser />
                        <table className="table table-bordered ">
                            <thead className="thead-inverse">
                                <tr>
                                    <th>Mã người dùng</th>
                                    <th>Tài khoản</th>
                                    <th>Mật khẩu</th>
                                    <th>Họ tên</th>
                                    <th>Email</th>
                                    <th>Số điện thoại</th>
                                    <th>Thao tác</th>
                                </tr>
                            </thead>
                            <tbody>{this.renderListStaff()}</tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchList: () => {
            dispatch(getListStaff());
        },
        fetchDelete: (user) => {
            dispatch(deleteUser(user));
        },
        fetchUser: (user) => {
            dispatch(getUser(user));
        },
    };
};
const mapStateToProps = (state) => {
    return {
        loading: state.ListStaffReducer.loading,
        data: state.ListStaffReducer.data,
        error: state.ListStaffReducer.error,
        userInfor: state.AddUserReducer.userInfor,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuanLyNguoiDung);