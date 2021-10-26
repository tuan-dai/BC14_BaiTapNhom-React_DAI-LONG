import React, { Component } from 'react'
import "../css/style.css";
import "../css/custom.css";
import "../css/main.css";
import { NavLink, Link } from "react-router-dom";

import { getListMovie, deleteMovie } from "../../HomeTemplate/Home/List Movie/modules/action";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SearchMovie from "./Search";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { connect } from 'react-redux';

class QuanLyPhim extends Component {
    componentDidMount() {
        this.props.getListMovie()
    }

    renderTableListMovie = () => {
        const { keyword } = this.props
        const newData = this.props.data?.filter(item => item.maPhim.toString().indexOf(keyword) !== -1)

        return newData?.map((item) => {
            return (
                <tr key={item.maPhim}>
                    <td>{item.maPhim}</td>
                    <td>
                        <img src={item.hinhAnh} alt="" style={{ width: 40, height: 40 }} />
                    </td>
                    <td style={{ width: "20rem" }}>{item.tenPhim}</td>
                    <td>{item.moTa}</td>
                    <td>
                        <NavLink to={`/editfilm/${item.maPhim}`}
                            className="btn text-primary">
                            <EditIcon />
                        </NavLink>
                        <button className="btn text-danger" onClick={() => {
                            if (window.confirm('Bạn có chắc muốn xóa phim: ' + item.tenPhim)) {
                                this.props.deleteMovie(item.maPhim)
                            }
                        }
                        }
                        >
                            <DeleteOutlineIcon />
                        </button>
                        <NavLink to={`/showtime/${item.maPhim}/${item.tenPhim}`} className="btn text-danger"
                            onClick={() => {
                                localStorage.setItem('Film', JSON.stringify(item))
                            }}>
                            <CalendarTodayIcon />
                        </NavLink>
                    </td>
                </tr >
            );
        });
    };

    render() {

        return (
            <div id="quanlyphim" className=" container">
                <h3>Quản Lý Phim</h3>
                <Link to='/addfilm'
                    className="btn btn-success mb-4 mt-2"
                    data-toggle="modal"
                    data-target="#addEmployeeModal"
                >
                    <AddCircleIcon />
                    Thêm Phim
                </Link>
                <SearchMovie />
                <table id="tableSinhVien" className="table table-striped">
                    <thead className="text-light" style={{ backgroundColor: "#435d7d" }}>
                        <tr>
                            <th>Mã Phim</th>
                            <th>Hình Ảnh</th>
                            <th>Tên Phim</th>
                            <th>Mô Tả</th>
                            <th>Hành Động</th>
                        </tr>
                    </thead>
                    <tbody id="tblBody">
                        {this.renderTableListMovie()}
                    </tbody>
                </table>
            </div>
        )
    }
}
const mapDistpatchToProps = (dispatch) => {
    return {
        getListMovie: () => {
            dispatch(getListMovie())
        },
        deleteMovie: (id) => {
            dispatch(deleteMovie(id))
        }
    }
}
const mapStateToProps = (state) => {
    return {
        data: state.ListMovie_Reducer.data,
        error: state.ListMovie_Reducer.error,
        keyword: state.ListMovie_Reducer.keyword,
    }
}
export default connect(mapStateToProps, mapDistpatchToProps)(QuanLyPhim)



