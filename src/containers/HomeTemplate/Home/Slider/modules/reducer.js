import GET_ARRAYIMG from './constant'

const initialState = {
    arraryImg: [
        {
            'maBanner': 3,
            'maPhim': 1284,
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/cuoc-chien-sinh-tu.png"
        }
    ]
}

const Slider_Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ARRAYIMG': {
            state.arraryImg = action.payload
            return { ...state }
        }
        default:
            return { ...state };
    }
}
export default Slider_Reducer