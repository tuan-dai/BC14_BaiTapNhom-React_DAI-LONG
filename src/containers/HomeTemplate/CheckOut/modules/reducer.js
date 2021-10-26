import { GET_CHITIETPHONGVE, DATGHE } from "./constant";

const initialState = {
    chiTietPhongVe: {},
    danhSachGheDangDat: []
}

const QuanLyDatVe_Reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CHITIETPHONGVE: {
            state.chiTietPhongVe = action.payload
            return { ...state }
        }
        case DATGHE: {
            let newDanhSachGhe = [...state.danhSachGheDangDat]
            let index = newDanhSachGhe.findIndex(item => item.maGhe === action.payload.maGhe)
            if (index !== -1) {
                newDanhSachGhe.splice(index, 1)
            } else {
                newDanhSachGhe.push(action.payload)
            }
            state.danhSachGheDangDat = newDanhSachGhe
            return { ...state }
        }
        default:
            return { ...state }
    }
}

export default QuanLyDatVe_Reducer