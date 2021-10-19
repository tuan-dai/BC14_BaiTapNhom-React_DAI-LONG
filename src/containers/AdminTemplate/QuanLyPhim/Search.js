
import { actSearchMovie } from '../../HomeTemplate/Home/List Movie/modules/action'
import React, { Component } from 'react'
import { connect } from 'react-redux';

class SearchMovie extends Component {
    handleOnchange = (e) => {
        this.props.getSearchMovie(e.target.value)
    }
    render() {
        return (
            <div>
                <form className="d-flex align-items-center mb-4">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Input search text"
                        name="searchFilm"
                        onChange={this.handleOnchange}
                    ></input>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getSearchMovie: (keyword) => {
            dispatch(actSearchMovie(keyword))
        }
    }
}
export default connect(null, mapDispatchToProps)(SearchMovie)
