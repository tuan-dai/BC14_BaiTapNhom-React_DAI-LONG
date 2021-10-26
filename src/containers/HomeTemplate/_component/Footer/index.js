import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="bg-primary text-white text-lg-start">
        <div className="container-fluid p-4">
          <div className="row d-flex justify-content-around">
            <div className="col-lg-6 col-md-12 ">
              <h3 className="text-uppercase">LD Cinema</h3>
              <p>
                LD Cinema là một trong những công ty tư nhân đầu tiên về điện
                ảnh được thành lập từ năm 2003, đã khẳng định thương hiệu là 1
                trong 10 địa điểm vui chơi giải trí được yêu thích. Ngoài hệ
                thống rạp chiếu phim hiện đại, thu hút hàng triệu lượt người đến
                xem, LD Cinema còn hấp dẫn khán giả bởi không khí thân thiện
                cũng như chất lượng dịch vụ hàng đầu.
              </p>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h3 className="text-uppercase">Author</h3>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    <span id="author">Nguyễn Văn Long</span>
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white fs-1">
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
          © 2020 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </footer>
    </div>
  );
}
