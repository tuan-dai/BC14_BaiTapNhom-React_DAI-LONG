import React from 'react'
import { Carousel } from 'antd';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getArrayImg } from '../Slider/modules/action'

export default function Slider() {
    const arraryImg = useSelector(state => state.Slider_Reducer.arraryImg)
    const dispatch = useDispatch()

    const contentStyle = {
        height: '780px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    useEffect(() => {
        dispatch(getArrayImg())
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const renderImg = () => {
        return arraryImg.map((item, index) => {
            return (
                <div key={index}>
                    <div style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}>
                        <img className="w-full opacity-0" src={item.hinAnh} alt="" />
                    </div>
                </div>
            )
        })
    }

    return (
        <Carousel autoplay>
            {renderImg()}

        </Carousel>
    )
}