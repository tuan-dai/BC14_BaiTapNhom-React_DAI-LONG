<<<<<<< HEAD
import { GET_ARRAYIMG } from './constant'
=======
import {GET_ARRAYIMG} from './constant'
>>>>>>> cb53865a19db0d6c538f5bf1aa9a1f9a2a3bb30a

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
        case GET_ARRAYIMG: {
            state.arraryImg = action.payload
            return { ...state }
        }
        default:
            return { ...state };
    }
}
export default Slider_Reducer