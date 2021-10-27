import React from "react";

export default function Footer() {
    return (
        <div>
            <footer className="text-white text-lg-start" style={{ backgroundColor: '#43464b' }}>
                <div className="container-fluid">
                    <div className="row d-flex justify-content-around p-4">
                        <div className="col-lg-6 col-md-12">
                            <h3 className="text-uppercase" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>LD Cinema</h3>
                            <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                                LD Cinema là một trong những công ty tư nhân đầu tiên về điện
                                ảnh được thành lập từ năm 2003, đã khẳng định thương hiệu là 1
                                trong 10 địa điểm vui chơi giải trí được yêu thích. Ngoài hệ
                                thống rạp chiếu phim hiện đại, thu hút hàng triệu lượt người đến
                                xem, LD Cinema còn hấp dẫn khán giả bởi không khí thân thiện
                                cũng như chất lượng dịch vụ hàng đầu.
                            </p>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h3 className="text-uppercase" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Author</h3>
                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#!" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>
                                        <span id="author">Nguyễn Văn Long</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>
                                        <span id="author">La Tuấn Đại</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div
                    className="text-center p-3"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                >
                    © 2021 Copyright: LD Cinema                
                </div>
            </footer>
        </div>
    );
}