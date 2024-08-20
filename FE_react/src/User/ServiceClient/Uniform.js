import { FloatingLabel, Form } from "react-bootstrap";
import Footer from "../Client/Footer/Footer";
import Header from "../Client/Header/Header";
import { useEffect, useState } from "react";
import { getAllService } from "../../API/Service/Service.API";
import { ToastContainer, toast } from "react-toastify";
import { getUserProfile } from "../../API/User/User.API";
import { Button } from "react-bootstrap";
import { getCreateOrder } from "../../API/Order/Order.API";

function Uniform() {
  const [servicePrice, setServicePrice] = useState(null);
  console.log("🚀 ~ file: Uniform.js:13 ~ Uniform ~ servicePrice:", servicePrice)
  const [allService, setAllService] = useState([]);
  // console.log("🚀 ~ file: Uniform.js:13 ~ Uniform ~ allService:", allService);
  const [user, setUser] = useState(null);
  // console.log("🚀 ~ file: Uniform.js:15 ~ Uniform ~ user:", user);
  const [order, setOrder] = useState({
    nameService: null,
    unitPrice: null,
    note: null,
  });
  const [isLogined, setIsLogined] = useState(false);
  const token = localStorage.getItem("token");
  // console.log("🚀 ~ file: Uniform.js:21 ~ Uniform ~ order:", order);

  const handleChangeOrder = (event) => {
    setOrder({
      ...order,
      [event.target.name]: event.target.value,
    });
  };
  const formatName = (firstName, lastName) => {
    return (lastName || "") + " " + (firstName || "");
  };
  useEffect(() => {
    if (token){
      setIsLogined(true)
    }
    const fetchService = async () => {
      try {
        const response = await getAllService();
        const allService = response.data.data.allService;
        setAllService(allService);
      } catch (error) {
        const message = error.response.data.message;
        toast(message);
      }
    };

    const fetchUser = async () => {
      try {
        const response = await getUserProfile();
        const { detailUser } = response.data.data;
        setUser(detailUser);
      } catch (error) {
        const message = error.response.data.message;
        // toast.error(message);
      }
    };
    fetchService();
    fetchUser();
  }, []);

  const { nameService, unitPrice, note } = order;

  const handleCreateOrder = async () => {
    try {
      if(isLogined){
        if (servicePrice === null) {
          toast.error("Bạn chưa chọn dịch vụ");
        } else {
          const service = allService.find(
            (item) => item.priceService === servicePrice
          );
  
          setOrder({
            ...order,
            nameService: service.nameService,
            unitPrice: servicePrice,
          });
          const response = await getCreateOrder({
            ...order,
            nameService: service.nameService,
            unitPrice: servicePrice,
          });
          const message = response.data.message;
          toast.success(message);
        }
      }
      else{
        toast.error("Bạn chưa đăng nhập")
      }
      
    } catch (error) {
      const message = error.response.data;
      toast.error(message);
    }
  };
  return (
    <>
      <div style={{ position: "fixed", zIndex: "1000", width: "100%" }}>
        <Header />
      </div>
      <div id="wrap" className="js_sale o_wsale_products_page">
        <div
          className="oe_structure oe_empty oe_structure_not_nearest"
          id="oe_structure_website_sale_products_1"
          data-editor-message="DRAG BUILDING BLOCKS HERE"
        >
          <section
            className="s_text_image o_colored_level pb0 pt4"
            data-snippet="s_text_image"
            data-name="Text - Image"
          >
            <div className="container">
              <div
                className="row align-items-center"
                data-bs-original-title=""
                title=""
                aria-describedby="tooltip975944"
              >
                {}
                <div
                  className="col-lg-6 pt16 o_colored_level pb0"
                  style={{
                    marginTop: 70,
                  }}
                >
                  <h2>Đặt lịch giặt ủi&nbsp;(Booking)</h2>

                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">Dịch vụ</Form.Label>
                        <Form.Select
                          value={servicePrice}
                          onChange={(e) => {
                            setServicePrice(e.target.value);
                          }}
                          aria-label="Default select example"
                          defaultValue={""}
                        >
                          <option value="" disabled>Chọn dịch vụ của bạn</option>
                          {/* <option value="1000">Giat ui cap cap</option> */}
                          {allService &&
                            allService.map((service) => {
                              return (
                                <option value={service.priceService}>
                                  {service.nameService}
                                </option>
                              );
                            })}
                        </Form.Select>
                      </Form.Group>

                      {user ? (
                        <>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicName"
                          >
                            <Form.Label>Họ tên</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder=""
                              name="name"
                              value={formatName(user.firstName, user.lastName)}
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                              type="email"
                              placeholder=""
                              name="email"
                              value={user.email}
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicPhone"
                          >
                            <Form.Label>Số điện thoại</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder=""
                              name="phone"
                              value={user.phoneNumber}
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicAddress"
                          >
                            <Form.Label>Địa chỉ</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder=""
                              name="address"
                              value={user.address}
                            />
                          </Form.Group>
                        </>
                      ) : (
                        <>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicName"
                          >
                            <Form.Label>Họ tên</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder=""
                              name="name"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                              type="email"
                              placeholder=""
                              name="email"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicPhone"
                          >
                            <Form.Label>Số điện thoại</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder=""
                              name="phone"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicAddress"
                          >
                            <Form.Label>Địa chỉ</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder=""
                              name="address"
                            />
                          </Form.Group>
                        </>
                      )}
                      <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Ghi chú</Form.Label>
                        <FloatingLabel
                          controlId="floatingTextarea"
                          label="Mô tả áo quần bạn muốn giặt"
                          className="mb-3"
                        >
                          <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            name="note"
                            onChange={handleChangeOrder}
                          />
                        </FloatingLabel>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Giá tiền</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder=""
                          name="unitPrice"
                          value={servicePrice}
                        />
                      </Form.Group>

                      <div className="d-grid">
                        <Button
                          variant="primary"
                          //   type="submit"
                          style={{
                            width: 100,
                            margin: "auto",
                          }}
                          onClick={handleCreateOrder}
                        >
                          Đặt Lịch
                        </Button>
                      </div>
                    </Form>
                  </div>
                </div>
                <div className="col-lg-6 pt16 pb16 o_colored_level">
                  <img
                    src="https://giatui247.vn/web_editor/shape/illustration/online-shopping-svg-594?c1=%23637BBE&unique=ea83d576"
                    className="img img-fluid mx-auto o_we_custom_image"
                    style={{ padding: "32px !important" }}
                    data-original-id="594"
                    data-original-src="/web_editor/shape/illustration/online-shopping-svg-594?c1=%23637BBE&amp;unique=ea83d576"
                    data-mimetype="image/svg+xml"
                    data-resize-width="undefined"
                    data-bs-original-title=""
                    title="Đặt dịch vụ giặt ủi - giặt sấy - giặt hấp online ngay tại nhà"
                    aria-describedby="tooltip700625"
                    loading="lazy"
                    alt="Đặt dịch vụ giặt ủi - giặt sấy - giặt hấp online ngay tại nhà"
                  />
                  <br />
                  <em>
                    <span style={{ fontSize: "12px" }}>
                      "Nhanh hơn tiện lợi hơn - thảnh thơi nghỉ ngơi, Ngay tại
                      nhà đặt dịch vụ giặt ủi - giặt sấy - giặt hấp dễ dàng và
                      nhanh nhất!, 247 sẽ giao nhận tận cửa nhà bạn theo lịch đã
                      định sẵn."
                    </span>
                  </em>
                  <br />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div>
        <Footer />
      </div>
      <ToastContainer />
    </>
  );
}

export default Uniform;
