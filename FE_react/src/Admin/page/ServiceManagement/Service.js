import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import AdminHeader from "../../toolbar/AdminHeader";
import AdminMenu from "../../toolbar/AdminMenu";
import { getAllServiceforAdmin } from "../../../API/Service/Service.API";
Service.propTypes = {};

function Service(props) {
  const navigate = useNavigate();
  const handleUserProfile = () => {
    navigate("/userprofile");
  };
  const [allService, setAllService] = useState(null);
  console.log("🚀 ~ file: Service.js:27 ~ Service ~ allService:", allService);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [totalPage, setTotalPage] = useState(null);
  const [total, setTotal] = useState(0);

  const paginationButton = [];

  const handleChangePage = (index) => {
    setPage(index);
  };

  const handleChangePerPage = (event) => {
    setPerPage(event.target.value);
  };

  for (let index = 1; index <= totalPage; index++) {
    paginationButton.push(
      <Button
        onClick={() => handleChangePage(index)}
        key={index}
        variant={index === page ? "primary" : "outline-primary"}
      >
        {index}
      </Button>
    );
  }

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await getAllServiceforAdmin(page, perPage);
        const { totalPage, total, allService } = response.data.data;
        setAllService(allService);
        setTotalPage(totalPage);
        setTotal(total);
      } catch (error) {
        const message = error.response.data.message;
        toast.error(message);
      }
    };

    fetchService();
  }, [page, perPage]);
  return (
    <div className="App">
      <AdminHeader />
      <AdminMenu />
      <div
        style={{
          margin: 30,
          marginLeft: 250,
        }}
      >
        {allService !== null ? (
          <>
            <table class="table table-striped table-bordered">
              <thead>
                <tr
                  style={{
                    textAlign: "center",
                  }}
                >
                  <th scope="col">#</th>
                  <th scope="col">Tên dịch vụ</th>
                  <th scope="col">Giá tiền</th>
                  <th scope="col">Created At</th>
                </tr>
              </thead>
              <tbody>
                {allService.length > 0 &&
                  allService.map((Service) => {
                    return (
                      <tr
                        class="align-middle"
                        style={{
                          textAlign: "center",
                        }}
                      >
                        <th scope="row">{Service.id}</th>
                        <td>{Service.nameService}</td>
                        <td>{Service.priceService}</td>
                        <td>
                          {moment(Service.createdAt).format(
                            "DD/MM/YYYY h:mm:ss a"
                          )}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            <div
              style={{
                display: "flex",
                gap: 5,
                justifyContent: "flex-end",
                paddingRight: 5,
                alignItems: "center",
              }}
            >
              <div className="mx-3">Tổng số bản ghi: {total}</div>
              <Form.Select
                className="w-auto"
                onChange={handleChangePerPage}
                aria-label="Default select example"
                defaultValue={perPage}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
              </Form.Select>
              {paginationButton}
            </div>
          </>
        ) : (
          <div> </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}

export default Service;
