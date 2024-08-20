import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Carousel from 'react-bootstrap/Carousel';
import "./HomePage.css"
import { Link } from "react-router-dom";

function HomePage() {
    
    return (
        <>
            <div style={{ position: "fixed", zIndex: "1000", width: "100%" }}>
                <Header />
            </div>
            <div className="banner pt-5">
                <Carousel data-bs-theme="dark" style={{
                    height: "700px",
                    backgroundColor: "#AFEEEE"
                }}>
                    <Carousel.Item style={{ padding: "0 300px" }}>
                        <img
                            className="d-block w-100"
                            src="https://giatui247.vn/web/image/2402-b139a314/giat-ui-khach-san.png"
                            alt="First slide"
                            height="700px"
                        />
                        <Carousel.Caption style={{ color: "black", paddingBottom: "250px" }}>
                            <p style={{ fontSize: "50px", fontWeight: "bold" }}>Giặt Ủi 247</p>
                            <p style={{ fontSize: "40px" }}>Giặt ủi đồng phục cho khách sạn tại Đà Nẵng.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{ padding: "0 300px" }}>
                        <img
                            className="d-block w-100"
                            src="https://giatui247.vn/web/image/2589-bc1b6afd/dic-vu-giat-ui-cao-cap-247.png"
                            alt="Second slide"
                            height="700px"
                        />
                        <Carousel.Caption style={{ color: "red", paddingBottom: "250px" }}>
                            <h3 style={{ fontSize: "50px" }}>Đặt dịch vụ trực tuyến dễ dàng - Giao nhận tận nơi nhanh chóng ở Đà Nẵng.</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{ padding: "0 300px" }}>
                        <img
                            className="d-block w-100"
                            src="https://giatui247.vn/web/image/2503-eb472909/giat-say-quan-ao%202.png"
                            alt="Third slide"
                            height="700px"
                        />
                        <Carousel.Caption style={{ color: "yellow", paddingBottom: "250px" }}>
                            <h3 style={{ fontSize: "50px" }}>Đa dạng dịch vụ từ giặt sấy cơ bản đến giặt ủi cao cấp.</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="row align-items-center body-content">
                <div className="col-lg-8 offset-lg-2 o_colored_level mt-3" >
                    <h2 style={{ textAlign: "center", fontSize: "40px" }} className="text-primary" data-text="Đa dạng dịch vụ giặt ủi - giặt sấy cho bạn">Đa dạng dịch vụ giặt ủi - giặt sấy cho bạn</h2>
                    <blockquote>Giặt ủi 247 cung cấp đa dạng chuyên nghiệp các dịch vụ giặt ủi - làm sạch quần áo đồ vải cho bạn, từ Giặt sấy cơ bản đến Giặt ủi cao cấp. Đáp ứng nhu cầu Giặt sấy lấy liền, Giặt ủi cao cấp, Giặt hấp - giặt khô... đảm bảo Nhanh gọn - Sạch sẽ - Gọn gàng - Phẳng phiu - Thơm dịu và tạo tính thẩm mỹ cho quần áo của bạn. Giặt ủi 247 tạo dựng niềm tin và uy tín với khách hàng bởi chất lượng, sự tiện lợi của các dịch vụ mà chúng tôi đang cung cấp dưới đây. </blockquote>
                    <p style={{ textAlign: "center" }}>
                        <img loading="lazy" data-resize-width="523" aria-describedby="tooltip97785" data-bs-original-title="Giặt ủi 247 cung cấp dịch vụ giặt ủi cao cấp và chuyên nghiệp" data-mimetype="image/png" data-original-src="/web/image/2359-9f948fcd/mission-247Laundry.png" data-original-id="2359" className="img img-fluid o_we_custom_image mx-auto d-block shadow" src="https://giatui247.vn/web/image/2361-aee295d7/mission-247Laundry.png" alt="Giặt ủi 247 - Dịch vụ giặt ủi cao cấp chuyên nghiệp tại Đà Nẵng" title="Giặt ủi 247 - Dịch vụ giặt ủi cao cấp chuyên nghiệp tại Đà Nẵng" />
                        <span style={{ fontSize: "12px", textAlign: "center" }}>247 cung cấp dịch vụ giặt ủi cao cấp và chuyên nghiệp tại Đà Nẵng.</span>
                    </p>
                    <p style={{ textAlign: "center" }}>
                        <a className="btn btn-custom text-white btn-sm" href="/ve-chung-toi" title="Về Giặt ủi 247" style={{ borderWidth: "0px", borderStyle: "solid", backgroundImage: "linear-gradient(135deg, rgb(203, 94, 238) 0%, rgb(75, 225, 236) 100%)" }}><span className="fa fa-long-arrow-right" data-bs-original-title="Giặt ủi 247 giới thiệu" title="Giặt ủi 247 giới thiệu" aria-describedby="tooltip902191" style={{ padding: "2px !important" }}></span>Về Chúng Tôi</a>
                    </p>
                </div>
                <div className="pt16 pb16 o_colored_level col-lg-4">
                    <div className="s_card card w-100" title="Dịch vụ giặt ủi cao cấp" data-name="Card">
                        <div className="card-body">
                            <h3 style={{ textAlign: "center" }} data-text="Dịch vụ giặt ủi cao cấp">Dịch vụ giặt ủi cao cấp</h3>
                            <p>Giặt ủi cao cấp là dịch vụ làm sạch và chăm sóc quần áo với chất lượng cao nhất tại Giặt ủi 247 như: Giặt ủi Quần Tây - Áo Sơ Mi công sở, giặt ủi Đầm Váy dự tiệc, áo Vest, Áo thun...với sự tỉ mỉ và chuyên nghiệp nhất của 247.</p>
                            <p>
                                <img src="https://giatui247.vn/web/image/2589-bc1b6afd/dic-vu-giat-ui-cao-cap-247.png" alt="Dịch vụ giặt ủi cao cấp" className="img img-fluid o_we_custom_image mx-auto d-block rounded shadow" data-original-id="2588" data-original-src="/web/image/2588-28b7a2cb/dic-vu-giat-ui-cao-cap-247.png" data-mimetype="image/png" data-resize-width="962" data-bs-original-title="" title="Dịch vụ giặt ủi cao cấp" aria-describedby="tooltip206427" loading="lazy" />
                            </p>
                            <ul>
                                <li>Dịch vụ được thực hiện với tay nghề cao cùng kinh nghiệm dày dặn trong việc xử lý, giặt giũ quần áo thời trang cao cấp cho khách hàng của công nhân viên 247.</li>
                                <li>Chính vì giá giặt ủi hợp lý, chất lượng cao cùng phương pháp chăm sóc bảo quản tốt nhất cho quần áo của khách hàng tại Giặt ủi 247, vì vậy khi cần giặt sạch và ủi phẳng phiu những bộ đồ đi làm, đi học...thì giặt ủi tại các tiệm gần nhất của 247 là sự lựa chọn tốt nhất cho bạn.</li>
                                <li>Đặt lịch giặt ủi trực tuyến trải nghiệm chất lượng và tỉ mỉ tận tâm phục vụ tại các tiệm giặt ủi của 247.</li>
                            </ul>
                            <p style={{ textAlign: "center" }}>
                                <a className="btn btn-custom text-white btn-sm" href="/dich-vu-giat-ui" title="Chi tiết dịch vụ giặt ủi cao cấp tại 247" style={{ borderWidth: "0px", borderStyle: "solid", backgroundImage: "linear-gradient(135deg, rgb(203, 94, 238) 0%, rgb(75, 225, 236) 100%)" }}><span className="fa fa-long-arrow-right" title="Chi tiết dịch vụ giặt ủi tại 247" aria-describedby="tooltip902191" style={{ padding: "2px !important" }}></span>Chi tiết dịch vụ giặt ủi tại 247</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="pt16 pb16 o_colored_level col-lg-4 border rounded shadow o_we_force_no_transition center-box" style={{ borderWidth: "1px !important", borderRadius: "5px !important", borderColor: "rgb(206, 212, 218) !important", boxShadow: "rgb(206, 212, 218) 2px 2px 7px 1px !important" }}>
                    <div className="s_card card w-100 o_we_force_no_transition" data-name="Card">
                        <div className="card-body" title="Dịch vụ giặt sấy lấy liền">
                            <h3 style={{ textAlign: "center" }} data-text="Dịch vụ giặt sấy lấy liền">Dịch vụ giặt sấy lấy liền</h3>
                            <p>Giặt sấy là dịch vụ tiện ích cung cấp bởi Giặt ủi 247 trong việc giặt sạch - sấy khô nhanh chóng cho quần áo và các sản phẩm đồ vải của khách hàng như: Giặt sấy quần áo thường ngày, Giặt sấy chăn mền, Giặt Màn cửa tận nhà, Gấu bông cỡ lớn, Túi xách... vô cùng nhanh chóng tại các Tiệm giặt sấy của 247</p>
                            <p>
                                <img src="https://giatui247.vn/web/image/2503-eb472909/giat-say-quan-ao%202.png" alt="Dịch vụ giặt sấy lấy liền tại Giặt ủi 247" className="img img-fluid o_we_custom_image mx-auto d-block" data-original-id="2501" data-original-src="/web/image/2501-9240b7ff/giat-say-quan-ao%202.png" data-mimetype="image/png" data-resize-width="476" title="Dịch vụ giặt sấy lấy liền tại Giặt ủi 247" aria-describedby="tooltip773447" loading="lazy" />
                            </p>
                            <ul>
                                <li>Quần áo và trang phục của khách hàng sẽ được 247 Giặt sạch sẽ, sấy nhanh lẹ, xếp gọn gàng, hương thơm dịu trong thời gian nhanh nhất mang lại sự tiện lợi cho khách hàng khi giặt sấy tại 247.</li>
                                <li>Chính vì lợi ích mang lại to lớn của dịch vụ giặt sấy lấy liền giúp các gia đình, cá nhân tiết kiệm được rất nhiều công sức trong việc giặt giũ dọn dẹp nhà cửa, để có thêm nhiều thời gian làm những công việc yêu thích.</li>
                                <li>Để đáp ứng nhu cầu ngày càng cao, 247 đã triển khai dịch vụ Giặt sấy lấy liền tại các cửa hàng giặt ủi của 247 gần các khu dân cư nhất và có giao tận nhà khách hàng, sẵn sàng cung cấp dịch vụ một cách nhanh chóng và tiện lợi hơn cho khách hàng.</li>
                            </ul>
                            <p style={{ textAlign: "center" }}>
                                <Link className="btn btn-custom text-white btn-sm" to="/fast" title="Xem chi tiết dịch vụ giặt sấy lấy liền" style={{ borderWidth: "0px", borderStyle: "solid", backgroundImage: "linear-gradient(135deg, rgb(203, 94, 238) 0%, rgb(75, 225, 236) 100%)" }}><span className="fa fa-long-arrow-right" title="Chi tiết dịch vụ giặt sấy của Giặt ủi 247" aria-describedby="tooltip902191" style={{ padding: "2px !important" }}></span>Chi tiết dịch vụ giặt sấy lấy liền</Link>
                            </p>
                        </div>
                    </div>
                    <div className="s_card card w-100 o_we_force_no_transition" data-name="Card">
                        <div className="card-body" title="Dịch vụ giặt hấp (Giặt khô - là hơi)">
                            <h3 style={{ textAlign: "center" }} data-text="Dịch vụ giặt hấp (Giặt khô - là hơi)">Dịch vụ giặt hấp (Giặt khô - là hơi)</h3>
                            <p>Giặt hấp (giặt khô) là dịch vụ làm sạch, chăm sóc, vệ sinh các sản phẩm thời trang có kiểu dáng, chất liệu cao cấp đặc biệt cần sự tỉ mỉ, tận tâm, chuyên nghiệp cùng nguyên liệu - thiết bị máy móc giặt ủi chuyên biệt tại 247.</p>
                            <ul>
                                <li>Giặt hấp - giặt khô tại 247 sử dụng nguyên liệu, dung môi làm sạch nhập khẩu cùng với thiết bị cùng máy móc hiện đại trong nghành giặt ủi - giặt là cao cấp.</li>
                                <li>Nhân viên 247 có kinh nghiệm lâu năm được đào tạo tập huấn kỹ lưỡng với phương pháp phù hợp nhất cho chất liệu quần áo cao cấp của khách hàng.</li>
                            </ul>
                            <p style={{ textAlign: "center" }}>
                                <a className="btn btn-custom text-white btn-sm" href="/dich-vu-giat-hap" title="Dịch vụ giặt hấp - giặt khô" style={{ borderWidth: "0px", borderStyle: "solid", backgroundImage: "linear-gradient(135deg, rgb(203, 94, 238) 0%, rgb(75, 225, 236) 100%)" }}><span className="fa fa-long-arrow-right" title="Chi tiết dịch vụ giặt hấp - giặt khô của Giặt ủi 247" aria-describedby="tooltip902191" style={{ padding: "2px !important" }}></span>Xem chi tiết dịch vụ giặt hấp - giặt khô</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="pt16 pb16 o_colored_level col-lg-4 o_we_force_no_transition">
                    <div className="s_card card w-100 o_we_force_no_transition" data-name="Card">
                        <div className="card-body" title="Giặt ủi cho khách sạn - nhà hàng">
                            <h3 style={{ textAlign: "center" }} data-text="Giặt ủi cho Khách sạn - Nhà hàng">Giặt ủi cho Khách sạn - Nhà hàng</h3>
                            <p>Giặt ủi 247 cung cấp dịch vụ giặt ủi chuyên nghiệp cho dành riêng cho các khách sạn - nhà nghỉ....bảo đảm tốt nhiệm vụ vệ sinh, làm sạch các sản phẩm đồ vải (linen) chăn ga, mền gối, khăn tắm khăn măt... được trang bị cho phòng khách sạn.</p>
                            <p>
                                <img src="https://giatui247.vn/web/image/2402-b139a314/giat-ui-khach-san.png" className="img img-fluid o_we_custom_image mx-auto d-block shadow" data-original-id="2202" data-original-src="/web/image/2202-fd506028/giat-ui-khach-san.png" data-mimetype="image/png" data-resize-width="690" title="Dịch vụ giặt ủi cho khách sạn - nhà hàng" aria-describedby="tooltip982471" loading="lazy" alt="Dịch vụ giặt ủi cho khách sạn - nhà hàng" />
                            </p>
                            <ul>
                                <li>Với hệ thống máy móc công suất lớn (quy mô công nghiệp) và các công cụ, thiết bị giặt ủi hiện đại được sử dụng trong các khâu Giặt - Sấy - Ủi chăn, ga, gối, nệm của khách sạn... nên bảo đảm đúng tiến độ cùng chất lượng giặt ủi vượt trội.</li>
                                <li>Ngoài nhiệm vụ đảm bảo tốt tiến độ, chất lượng của dịch vụ cung cấp, Giặt ủi 247 đã hoàn thiện và số hóa các quy trình, nghiệp vụ khi cung cấp dịch vụ giặt ủi cho khách sạn.</li>
                                <li>Bên cạnh đó, 247 kết hợp một cách chặt chẽ - ăn khớp với các bộ phận buồng phòng của khách sạn qua đó đẩy nhanh được công việc giảm nhân sự mà vẫn bảo đảm việc kiểm soát, hạn chế mát hư hỏng - kéo dài thời gian sử dụng cho đồ vải của khách sạn.</li>
                            </ul>
                            <p style={{ textAlign: "center" }}>
                                <a className="btn btn-custom text-white btn-sm" href="/dich-vu-giat-ui-cho-khach-san" data-bs-original-title="" title="Xem chi tiết dịch vụ Giặt ủi cho khách sạn" style={{ borderWidth: "0px", borderStyle: "solid", backgroundImage: "linear-gradient(135deg, rgb(203, 94, 238) 0%, rgb(75, 225, 236) 100%)" }}><span className="fa fa-long-arrow-right" title="Chi tiết dịch vụ giặt ủi khách sạn - nhà hàng" aria-describedby="tooltip902191" style={{ padding: "2px !important" }}></span>Dịch vụ giặt ủi cho khách sạn</a>
                            </p>
                        </div>
                    </div>
                    <div className="s_card card w-100 o_we_force_no_transition" data-name="Card">
                        <div className="card-body" title="Giặt khăn spa - Giặt ủi đồng phục">
                            <h3 style={{ textAlign: "center" }} data-text="Dịch vụ giặt khăn Spa - Giặt ủi đồng phục">Giặt khăn Spa - Giặt ủi đồng phục</h3>
                            <p>Khi giặt khăn (các loại khăn tắm, khăn mặt) tại 247, chúng tôi bảo đảm khử sạch mùi tinh dầu, hóa chất mỹ phẩm dính trên khăn đã dùng của Spa, một đặc thù trong nghành.</p>
                            <ul>
                                <li>Với đội ngũ nhân viên giàu kinh nghiệm, khăn của Spa sau khi được giặt sấy tại 247 bảo đảm luôn bông xốp thấm hút tốt, và đặc biệt khử tới 90% mùi tinh dầu tạo hương dịu nhẹ cho chất liệu Cotton.</li>
                                <li>Hơn nữa giặt ủi 247 còn nhận tẩy trắng - làm mới khăn Spa, khăn tắm, khăn mặt của khách sạn, cơ sở thẩm mỹ và các loại vật dụng đồ vải, đồng phục cơ quan - tổ chức mang lại sự tươi mới tăng tính thẩm mỹ cho sản phẩm.</li>
                            </ul>
                            <p style={{ textAlign: "center" }}>
                                <a className="btn btn-custom text-white btn-sm" href="/shop/category/co-quan-to-chuc-6" data-bs-original-title="" title="Xem chi tiêt dịch vụ Giặt khăn Spa - Giặt ủi đồng phục tại Giặt ủi 247" style={{ borderWidth: "0px", borderStyle: "solid", backgroundImage: "linear-gradient(135deg, rgb(203, 94, 238) 0%, rgb(75, 225, 236) 100%)" }}><span className="fa fa-long-arrow-right" title="Xem chi tiết dịch vụ giặt khăn Spa - Đồng phục công ty tại Giặt ủi 247" aria-describedby="tooltip902191" style={{ padding: "2px !important" }}></span>Chi tiết dịch vụ Giặt khăn spa</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-5 row">
                    <h2 className="text-center">
                        <font className="text-gradient" style={{ backgroundImage: "linear-gradient(135deg, rgb(47, 128, 237) 0%, rgb(178, 255, 218) 100%)" }}>Giặt ủi với chất lượng dịch vụ luôn được đảm bảo</font>
                    </h2>
                    <p style={{ textAlign: "center" }}>Nhanh hơn tiện lợi hơn cho khách hàng cùng với những khác biệt về chất lượng dịch vụ khi lựa chọn giặt ủi tại 247</p>
                    <div className="row g-0 s_col_no_resize s_col_no_bgcolor s_nb_column_fixed">
                        <div className="col-lg text-lg-end">
                            <div className="row">
                                <div className="col-lg-12 pt24 pb24 o_colored_level" data-name="Block">
                                    <div className="s_showcase_title d-flex flex-lg-row-reverse mb-2">
                                        <span className="fa fa-openid s_showcase_icon fa-2x text-secondary me-3 me-lg-0 ms-lg-3"></span>
                                        <h3>Đặt lịch dịch vụ dễ dàng</h3>
                                    </div>
                                    <p>Dễ dàng đặt lịch giặt ủi cho quần áo - trang phục của bạn tại Giặt ủi 247</p>
                                </div>
                                <div className="col-lg-12 pt24 pb24 o_colored_level" data-name="Block" >
                                    <div className="s_showcase_title d-flex flex-lg-row-reverse mb-2">
                                        <span className="fa fa-sort-alpha-asc s_showcase_icon fa-2x text-secondary me-3 me-lg-0 ms-lg-3"></span>
                                        <h3>Cung cấp dịch vụ da dạng</h3>
                                    </div>
                                    <p>Giặt ủi 247 đang cung cấp các dịch vụ giặt ủi, giặt sấy, tẩy điểm, giặt ủi công nghiệp... đáp ứng mọi nhu cầu của khách hàng với chất lượng cao nhất</p>
                                </div>
                                <div className="col-lg-12 pt24 pb24 o_colored_level" data-name="Block" >
                                    <div className="s_showcase_title d-flex flex-lg-row-reverse mb-2">
                                        <span className="fa fa-street-view s_showcase_icon text-secondary me-3 me-lg-0 ms-lg-3 fa-2x"></span>
                                        <h3>Nhân viên nhiều kinh nghiệm</h3>
                                    </div>
                                    <p>Nhân viên tại 247 được đào tạo, tập huấn bài bản, nhiều năm kinh nghiệm trong từng nghiệp vụ giặt, ủi, chăm sóc vệ sinh quần áo của khách hàng với sự tậm tâm và tỉ mỉ nhất.</p>
                                </div>
                                <div className="col-lg-12 pt24 pb24 o_colored_level o_we_force_no_transition" data-name="Block" >
                                    <div className="s_showcase_title d-flex flex-lg-row-reverse mb-2">
                                        <span className="fa fa-gift s_showcase_icon text-secondary me-3 me-lg-0 ms-lg-3 fa-2x"></span>
                                        <h3>Trải nghiệm vượt trội</h3>
                                    </div>
                                    <p>Trải nghiệm vượt trội trước và sau khi sử dụng dịch vụ giặt ủi với những chương trình ưu đãi khuyến mại chỉ có tại 247.</p>
                                </div>
                            </div>
                        </div>
                        <div style={{ alignSelf: "center" }} className="col-lg-3">
                            <img src="https://giatui247.vn/web/image/2535-4b23155a/247-Laundry-guideline.png" alt="Giặt ủi với chất lượng dịch vụ tốt nhất tại 247" className="img img-fluid o_we_custom_image mx-auto d-block" data-original-id="2534" data-original-src="/web/image/2534-e2071bb7/247-Laundry-guideline.png" data-mimetype="image/png" data-resize-width="undefined" data-bs-original-title="" title="Giặt ủi với chất lượng dịch vụ tốt nhất tại 247" aria-describedby="tooltip178242" loading="lazy" />
                        </div>
                        <div className="col-lg">
                            <div className="row">
                                <div className="col-lg-12 pt24 pb24 o_colored_level o_we_force_no_transition" data-name="Block" >
                                    <div className="s_showcase_title d-flex mb-2">
                                        <span className="fa fa-gears s_showcase_icon text-secondary me-3 fa-2x"></span>
                                        <h3>Quy trình giặt ủi chặt chẽ</h3>
                                    </div>
                                    <p>Quy trình xử lý giặt ủi - làm sạch chặt chẽ hạn chế sai sót trong quá trình cung cấp dịch vụ.</p>
                                </div>
                                <div className="col-lg-12 pt24 pb24 o_colored_level" data-name="Block" >
                                    <div className="s_showcase_title d-flex mb-2">
                                        <span className="fa fa-truck s_showcase_icon text-secondary me-3 fa-2x"></span>
                                        <h3>Giao nhận tận nơi nhanh chóng</h3>
                                    </div>
                                    <p>Tiện lợi hơn, nhanh hơn nữa với dịch vụ giặt ủi giao nhận tận nhà! Đặt lịch giặt ủi trực tuyến giao nhận tận nhà cho bạn chỉ với vài click!</p>
                                </div>
                                <div className="col-lg-12 pt24 pb24 o_colored_level" data-name="Block" >
                                    <div className="s_showcase_title d-flex mb-2">
                                        <span className="fa fa-envira s_showcase_icon text-secondary me-3 fa-2x"></span>
                                        <h3>Nguyên liệu - máy móc hiện đại</h3>
                                    </div>
                                    <p>Giặt ủi với máy móc hiện đại nhất được 247 trang bị cho các tiệm giặt ủi và xưởng giặt cùng nguyên liệu thân thiện với môi trường và sức khỏe.</p>
                                </div>
                                <div className="col-lg-12 pt24 pb24 o_colored_level" data-name="Block">
                                    <div className="s_showcase_title d-flex mb-2">
                                        <span className="fa fa-file-text s_showcase_icon text-secondary me-3 fa-2x"></span>
                                        <h3>Chính sách dịch vụ rõ ràng</h3>
                                    </div>
                                    <p>247 luôn tạo dựng uy tín và niềm tin tới khách hàng với những chính sách cụ thể và rõ ràng nhất, bảo vệ quyền lợi tuyệt đối cho khách hàng khi giặt ủi tại 247. Đây chính là giá trị cốt lõi gắn bó lâu dài giữa khách hàng và 247.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="s_text_image o_cc o_cc2 o_colored_level pt0 pb0 mt-5" data-name="Text - Image" style={{ backgroundImage: "none" }}>
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-6 pt16 pb16 o_colored_level">
                                <img src="https://giatui247.vn/web_editor/shape/illustration/online-shopping-svg-594?c1=%23637BBE&unique=ea83d576" alt="Đặt giặt ủi trực tuyến - Book lịch giặt ủi tại 247" className="img img-fluid o_we_custom_image mx-auto d-block" data-original-id="594" data-original-src="/web_editor/shape/illustration/online-shopping-svg-594?c1=%23637BBE&amp;unique=ea83d576" data-mimetype="image/svg+xml" data-resize-width="undefined" title="Đặt giặt ủi trực tuyến - Book lịch giặt ủi tại 247" loading="lazy" />
                            </div>
                            <div className="col-lg-6 pt16 pb16 o_colored_level">
                                <h2 style={{ textAlign: "center" }}>Đặt Dịch Vụ - Lên Lịch Giặt Ủi Online</h2>
                                <p>Thảnh thơi nghỉ ngơi việc giặt ủi cứ để 247 lo! Đặt giặt ủi trực tuyến dễ dàng hay book lịch giặt ủi cho bất kỳ sản phẩm quần áo thời trang nào của bạn ngay tại nhà với chỉ một vài click.</p>
                                <ul>
                                    <li>Tùy chọn dịch vụ từ cơ bản tới nâng cao ứng với mỗi chất liệu và kiểu dáng quần áo của bạn khi đặt dịch vụ trực tuyến.</li>
                                    <li>Đặt lịch giặt ủi với 247 giúp bạn tùy chọn thời gian nhận và trả đồ cho bạn bất cứ khi nào!</li>
                                    <li>Yêu cầu dịch vụ của bạn đồng bộ tức thời với Tiệm giặt ủi 247 gần bạn nhất!</li>
                                </ul>
                                <p style={{ textAlign: "center" }}>
                                    <button className="btn btn-primary" title="Đặt dịch vụ giặt ủi" aria-describedby="popover669045">Đặt Dịch Vụ Ngay</button>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="s_text_image o_cc o_cc2 o_colored_level pt0 pb0 mt-5" data-snippet="s_image_text" data-name="Image - Text" style={{ backgroundImage: "none" }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 pt16 pb16 o_colored_level" >
                                <img src="https://giatui247.vn/web_editor/shape/illustration/credit-card-svg-601?c1=%23637BBE&unique=e28488e3" alt="Khuyến mãi ưu đãi dịch vụ giặt ủi tại 247" className="img img-fluid mx-auto o_we_custom_image" style={{ padding: "32px !important" }} data-original-id="601" data-original-src="/web_editor/shape/illustration/credit-card-svg-601?c1=%23637BBE&amp;unique=e28488e3" data-mimetype="image/svg+xml" data-resize-width="undefined" title="Khuyến mãi ưu đãi dịch vụ giặt ủi tại 247" loading="lazy" />
                            </div>
                            <div className="col-lg-6 pt16 pb16 o_colored_level" data-bs-original-title="Chương trình khuyến mãi giặt ủi" title="Chương trình khuyến mãi giặt ủi" aria-describedby="tooltip936458" >
                                <h2>Giặt ủi với Khuyến mãi chỉ có tại 247</h2>
                                <p>Dịch vụ giặt ủi 247 luôn tối đa lợi ích cho khách hàng bằng những ưu đãi đặc quyền, khuyến mãi vượt trội.</p>
                                <ul>
                                    <li>Mã giảm giá dịch vụ lên tới 75% (Tủy từng chương trình).</li>
                                    <li>Tích điểm và nhận Thẻ quà tặng có giá trị từ 50.000đ trở lên hàng tháng.</li>
                                    <li>Code CouPon, mã Voucher dành riêng cho khách hàng thân thiết...</li>
                                </ul>
                                <p style={{ textAlign: "center" }}>
                                    <a href="/event" className="mb-2 btn btn-primary" data-bs-original-title="" title="Xem những khuyến mãi giặt ủi đang diễn ra">Khám phá ngay</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="s_picture o_cc o_cc2 o_colored_level pt0 pb0 mt-5" data-snippet="s_picture" data-name="Picture" style={{ backgroundImage: "none" }}>
                    <div className="container">
                        <div className="row s_nb_column_fixed">
                            <div className="col-lg-10 offset-lg-1 o_colored_level pb0" style={{ textAlign: "center" }}>
                                <figure className="figure">
                                    <img src="https://giatui247.vn/web/image/1984-3102a48f/dich-vu-giat-ui-tai247.png" className="figure-img img-thumbnail padding-large img img-fluid o_we_custom_image shadow rounded" data-original-id="1982" data-original-src="/web/image/1982-f3d7aad3/dich-vu-giat-ui-tai247.png" data-mimetype="image/png" data-resize-width="724" data-bs-original-title="" title="Nhanh hơn - Tiện lợi hơn khi giặt ủi tại các Tiệm của 247" aria-describedby="tooltip605849" loading="lazy" alt="Nhanh hơn - Tiện lợi hơn khi giặt ủi tại các Tiệm của 247" />
                                    <figcaption className="figure-caption text-muted py-3">"Nhanh hơn - Tiện lợi hơn khi giặt ủi tại các Tiệm của 247"</figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="s_text_image o_cc o_cc2 o_colored_level pt0 pb0 mt-5" data-snippet="s_text_image" data-name="Text - Image" style={{ backgroundImage: "none" }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 o_colored_level pt0 pb0" >
                                <img src="https://giatui247.vn/web_editor/shape/illustration/on-the-way-svg-1402?c1=%23637BBE&unique=30725581" alt="Dịch vụ giặt ủi giao nhận tận nơi" className="img img-fluid o_we_custom_image mx-auto d-block" style={{ padding: "32px !important" }} data-original-id="1402" data-original-src="/web_editor/shape/illustration/on-the-way-svg-1402?c1=%23637BBE&amp;unique=30725581" data-mimetype="image/svg+xml" data-resize-width="undefined" title="Dịch vụ giặt ủi giao nhận tận nơi" loading="lazy" />
                            </div>
                            <div className="col-lg-6 o_colored_level pb0 pt0" data-bs-original-title="Giặt ủi giao nhận tận nơi" title="Giặt ủi giao nhận tận nhà" aria-describedby="tooltip3985">
                                <h2 style={{ textAlign: "center" }}>Dịch vụ giao tận nơi</h2>
                                <p style={{ textAlign: "center" }}>
                                    <em>
                                        <span style={{ fontSize: "14px" }}>Dịch vụ giặt ủi giao nhận tận nơi - tới tận cửa nhà bạn!</span>
                                    </em>
                                </p>
                                <ul>
                                    <li>Đặt <a href="/shop">lịch giặt ủi</a> trực tuyến cho quần áo của bạn - Ngay tại nhà bạn có thể dễ dàng lên danh sách sản phẩm tùy chọn dịch vụ giặt ủi mà không cần mang đồ tới Tiệm.</li>
                                    <li>Tiện lợi hơn nữa khi đặt dịch vụ giặt ủi tại 247 và Chúng tôi sẽ giao lại cho bạn vào bất cứ khi nào và ở đâu.</li>
                                </ul>
                                <p style={{ textAlign: "center" }}>
                                    <a href="/giao-nhan-tan-noi-chinh-sach-giao-nhan-tai-giat-ui-247" className="mb-2 btn btn-primary" data-bs-original-title="" title="Phí Giặt ủi giao nhận tận nhà">Biểu phí giao nhận</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="s_text_image o_cc o_cc2 o_colored_level pb0 pt0 o_we_force_no_transition mt-5" data-snippet="s_image_text" data-name="Image - Text" style={{ backgroundImage: "none" }}>
                    <div className="container">
                        <div className="row align-items-center o_we_force_no_transition" data-bs-original-title="" title="Thảo luận - Đánh giá - Câu hỏi khi sử dụng dịch vụ giặt ủi thời gian gần đây" aria-describedby="tooltip191547">
                            <div className="col-lg-6 pt16 pb16 o_colored_level o_we_force_no_transition">
                                <h2 style={{ textAlign: "center" }}>Thảo luận - Đánh giá</h2>
                                <p>
                                    Bạn cần thêm thông tin hay, nêu thắc mắc về dịch vụ của 247 hay của bất kỳ cửa hàng hay nhà giặt nào. Hãy đặt câu hỏi và xem những đánh giá nhận xét khách quan, câu trả lời hay nhất tại diễn đàn của 247. Mọi thông tin, chủ đề về thị trường giặt ủi hay các Tiệm giặt ủi gần đây được Chúng tôi và cộng đồng cập nhật thường xuyên tại mục <a href="/forum/thao-luan-tro-giup-1">Thảo luận/FAQs</a>. Sau đây là một số câu hỏi rất thường gặp khi bạn sử dụng dịch vụ giặt ủi của Chúng tôi:</p>
                                <ol>
                                    <li>
                                        <em>
                                            <span style={{ fontSize: "14px" }}>Tiệm giặt ủi gần đây, thông tin tiệm giặt ủi 247 gần đây nhất?</span>
                                        </em>
                                    </li>
                                    <li>
                                        <em>
                                            <span style={{ fontSize: "14px" }}>Dịch vụ giặt ủi nào gần chỗ tôi nhất?</span>
                                        </em>
                                    </li>
                                    <li>
                                        <em>
                                            <span style={{ fontSize: "14px" }}>Có tiệm giặt giặt khô nào gần đây không?</span>
                                        </em>
                                    </li>
                                    <li>
                                        <em>
                                            <span style={{ fontSize: "14px" }}>Chất lượng dịch vụ giặt ủi tại 247 có đảm bảo không? được đánh giá theo tiêu chí, tiêu chuẩn nào?</span>
                                        </em>
                                    </li>
                                    <li>
                                        <em>
                                            <span style={{ fontSize: "14px" }}>Giá giặt hấp áo Vest?</span>
                                        </em>
                                    </li>
                                    <li>
                                        <em>
                                            <span style={{ fontSize: "14px" }}>Giặt hấp sau bao lâu thì lấy được?</span>
                                        </em>
                                    </li>
                                    <li>
                                        <em>
                                            <span style={{ fontSize: "14px" }}>Dịch vụ giặt ủi nào tốt nhất cho chiếc áo lông vũ của tôi?</span>
                                        </em>
                                    </li>
                                    <li>
                                        <em>
                                            <span style={{ fontSize: "14px" }}>Giặt sấy quần áo có lấy liền được không? Sau bao lâu thì xong</span>
                                        </em>
                                    </li>
                                    <li>
                                        <em>
                                            <span style={{ fontSize: "14px" }}>Giá giặt ủi bao tiền 1 Kg?</span>
                                        </em>
                                    </li>
                                </ol>
                                <p>
                                    <a href="/forum" data-bs-original-title="" title="Thảo luận - Đánh giá - Câu hỏi khi sử dụng dịch vụ giặt ủi thời gian gần đây">
                                        <img src="https://giatui247.vn/web/image/605-5716e6c8/faq2.png" className="img img-fluid o_we_custom_image mx-auto d-block" data-original-id="604" data-original-src="/web/image/604-bf28cf78/faq2.png" data-mimetype="image/png" data-bs-original-title="" title="Thảo luận - Đánh giá - Câu hỏi khi sử dụng dịch vụ giặt ủi thời gian gần đây" aria-describedby="tooltip470644" data-resize-width="512" loading="lazy" alt="Câu hỏi thường gặp khi giặt ủi" />
                                    </a>
                                </p>
                            </div>
                            <div className="col-lg-6 pt16 pb16 o_colored_level o_we_force_no_transition">
                                <p>Nếu gần đây bạn thường xuyên giặt đồ tại các Tiệm giặt ủi hãy đăng ký nhận những bản tin mới nhất của 247 để nhận những thông tin ưu đãi - khuyến mãi dịch vụ giặt ủi vượt trội từ 247!</p>
                                <div className="s_newsletter_subscribe_form s_newsletter_list js_subscribe" data-vxml="001" data-list-id="1" data-name="Newsletter" data-snippet="s_newsletter_subscribe_form">
                                    <div className="input-group">
                                        <input type="email" name="email" className="js_subscribe_value form-control" placeholder="email của bạn..." />
                                        <a role="button" href="/" className="btn btn-primary js_subscribe_btn o_submit o_default_snippet_text">Đăng ký nhận tin</a>
                                        <a role="button" href="/" className="btn btn-success js_subscribed_btn o_submit o_default_snippet_text d-none" disabled="disabled">Cám ơn</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
            <div className="pt-5 bg-light">
                <Footer />
            </div>
        </>
    )
}

export default HomePage