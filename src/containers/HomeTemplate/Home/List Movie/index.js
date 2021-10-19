import MovieFullList from './MovieFullList'
import Loader from '../../../../component/Loader'
import { getListMovie } from './modules/action'
import '../style.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'

class ListMovie extends Component {
    componentDidMount() {
        this.props.getListMovie()
    }

    renderListMovie = () => {
        return this.props.data?.map((item) => {
            return <MovieFullList key={item.maPhim} maPhim_ListMovie={item.maPhim} hinh_ListMovie={item.hinhAnh} tenPhim_ListMovie={item.tenPhim} moTa_ListMovie={item.moTa} />
        })
    }
    render() {
        return (
            <div className="container" style={{ marginTop: '3rem' }}>
                {this.props.loader ? (<Loader />) : ""}
                <h4 className="text-left">PHIM ĐANG CHIẾU</h4>
                <div className="phimdangchieu_line"></div>
                <div className="row my-5">
                    {this.renderListMovie()}
                </div>
            </div>
        )
    }
}

const mapDistpatchToProps = (dispatch) => {
    return {
        getListMovie: () => {
            dispatch(getListMovie())
        },
    }
}
const mapStateToProps = (state) => {
    return {
        loading: state.ListMovie_Reducer.loading,
        data: state.ListMovie_Reducer.data,
        error: state.ListMovie_Reducer.error,
    }
}
export default connect(mapStateToProps, mapDistpatchToProps)(ListMovie)