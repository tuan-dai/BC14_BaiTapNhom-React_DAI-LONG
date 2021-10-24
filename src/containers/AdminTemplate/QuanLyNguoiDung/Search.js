import React, { Component } from "react";
import { connect } from "react-redux";
import { getListStaff } from './modules/actions';

class SearchUser extends Component {
    handleOnChange = (e) => {
        this.props.getListSearch(e.target.value);
    };
    render() {
        return (
            <div className="input-group my-3">
                <input
                    type="text"
                    className="form-control"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={this.handleOnChange}
                />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button">
                        Search
                    </button>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getListSearch: (user) => {
            dispatch(getListStaff(user));
        },
    };
};
export default connect(null, mapDispatchToProps)(SearchUser);