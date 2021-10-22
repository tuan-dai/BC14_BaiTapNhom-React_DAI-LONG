import React, { Component } from 'react'
import MovieHome from './MovieHome'
import Loader from '../../../../component/Loader'
import { connect } from 'react-redux';
import { getListMoviePhanTrang } from './modules/action'

class ListMoviePhanTrang extends Component {
    componentDidMount() {
        this.props.getListMoviePhanTrang()
    }

    renderListMoviePhanTrang = () => {
        return this.props.data?.map((item) => {
            return <MovieHome key={item.maPhim} hinh_HomePage={item.hinhAnh} tenPhim_HomePage={item.tenPhim} />
        })
    }

    render() {
        return (
            <div className="container" style={{ marginTop: '4rem' }}>
                {this.props.loading ? (<Loader />) : ""}
                <h4 className="text-left">PHIM ĐANG CHIẾU</h4>
                <div className="phimdangchieu_line"></div>
                <div className="row my-5">
                    {this.renderListMoviePhanTrang()}
                </div>
            </div>
        )
    }
}

const mapDistpatchToProps = (dispatch) => {
    return {
        getListMoviePhanTrang: () => {
            dispatch(getListMoviePhanTrang())
        }
    }
}
const mapStateToProps = (state) => {
    return {
        loading: state.ListMoviePhanTrang_Reducer.loading,
        data: state.ListMoviePhanTrang_Reducer.data,
        error: state.ListMoviePhanTrang_Reducer.error,
    }
}
export default connect(mapStateToProps, mapDistpatchToProps)(ListMoviePhanTrang)