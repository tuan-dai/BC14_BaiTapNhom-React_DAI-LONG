import React, { Component, Fragment } from 'react'
import { actLayTTLichChieuHeThongRap } from './modules/action';
import { Tabs, Radio, Space } from 'antd';
import { connect } from 'react-redux';
import { NavLink } from 'react-bootstrap';
import moment from 'moment';

const { TabPane } = Tabs;

class LichChieuPhim extends Component {
    state = {
        tabPosition: 'left',
    };

    changeTabPosition = e => {
        this.setState({ tabPosition: e.target.value });
    };
    componentDidMount() {
        this.props.actLayTTLichChieuHeThongRap()
    }

    renderHeThongRap = () => {
        console.log(this.props.cumrap)
        return this.props.cumrap?.map((hethongRap, index) => {
            const { tabPosition } = this.state
            // load logo
            return <TabPane tab={<img src={hethongRap.logo} className="rounded-circle" width='50' />} key={index}>
                <Tabs tabPosition={tabPosition}>
                    {/* load he thong rap */}
                    {hethongRap.lstCumRap?.map((cumRap, index) => {
                        return <TabPane tab={
                            <div className="d-flex">
                                <img src="https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png" width='50' height='50' />
                                <div className="text-danger text-left ml-3">
                                    {cumRap.tenCumRap}
                                    <p>[chi tiet]</p>
                                </div>
                            </div>
                        }
                            key={index}>
                            {/* load phim tuong ung */}
                            {cumRap.danhSachPhim?.map((phim, index) => {
                                return <Fragment key={index}>
                                    <div className="mb-5">
                                        <div className="d-flex">
                                            <img width={100} src={phim.hinhAnh} />
                                            <div className="ml-3">
                                                <h5>{phim.tenPhim}</h5>
                                                <p>{cumRap.diaChi}</p>
                                                <div className="d-flex">
                                                    {phim.lstLichChieuTheoPhim?.map((lichChieu, index) => {
                                                        return <NavLink to="/" key={index}>
                                                            {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                        </NavLink>
                                                    })}

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </Fragment>
                            })}


                        </TabPane>
                    })}
                </Tabs>

            </TabPane>
        })
    }




    render() {
        const { tabPosition } = this.state;
        return (
            <>
                <Tabs tabPosition={tabPosition}>
                    {this.renderHeThongRap()}
                </Tabs>
            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        hethongrap: state.Rap_Reducer.hethongrap,
        cumrap: state.Rap_Reducer.cumrap
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        actLayTTLichChieuHeThongRap: () => {
            dispatch(actLayTTLichChieuHeThongRap())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LichChieuPhim)