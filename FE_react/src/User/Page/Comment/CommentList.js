import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBInputGroup,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { toast } from "react-toastify";
import moment from "moment";
import { errorHandle } from "../../../error/error.util";
import {
  CreateReply,
  createCommentService,
  getCommentsListService,
} from "../../../API/Comment/Comment.API";
import { Button } from "react-bootstrap";

CommentsList.propTypes = {};

function CommentsList({ serviceId }) {
  const token = localStorage.getItem("token");
  const [isLogined, setIsLogined] = useState(false);
  const [commentContent, setCommentContent] = useState(null);
  console.log(
    "🚀 ~ file: CommentList.js:31 ~ CommentsList ~ commentContent:",
    commentContent
  );
  const [disabledCreateComment, setDisabledCreateComment] = useState(true);
  const [replyComment, setReplyComment] = useState({});
  console.log("🚀 ~ file: CommentList.js:34 ~ replyComment:", replyComment);
  const [commentsList, setCommentsList] = useState([]);
  const handleCreateComment = async () => {
    try {
      if (isLogined) {
        const response = await createCommentService({
          content: commentContent,
          ServiceId: serviceId,
        });
        toast.success(response.data.message);
        // setTimeout(() => {
        //   window.location.reload();
        // }, [1000]);
      } else {
        toast.error("Bạn chưa đăng nhập");
      }
    } catch (error) {
      errorHandle(error, toast);
    }
  };

  const handleChangeCommentContent = (e) => {
    const content = e.target.value;
    console.log(
      "🚀 ~ file: CommentList.js:54 ~ handleChangeCommentContent ~ content:",
      content
    );

    if (content !== null || content !== "") {
      setDisabledCreateComment(false);
    }
    setCommentContent(e.target.value);
  };
  const handleChangeReplyComment = (e, id) => {
    const content = e.target.value;
    setReplyComment({ ...replyComment, [id]: content });
  };

  const handleReplyComment = async (id) => {
    try {
      if (isLogined) {
      const comment = replyComment[id];
      const response = await CreateReply(
        {
          content: comment,
          ServiceId: serviceId,
        },
        id
      );
      toast.success(response.data.message);
      // setTimeout(() => {
      //   window.location.reload();
      // }, [1000]);
    }else {
      toast.error("Bạn chưa đăng nhập");
    }
    } catch (error) {
      errorHandle(error, toast);
    }
  };
  useEffect(() => {
    if (token) {
      setIsLogined(true);
    }
    const fetchCommentsList = async () => {
      try {
        const response = await getCommentsListService(serviceId);
        setCommentsList(response.data.data.allCommentsOnPost);
      } catch (error) {}
    };

    fetchCommentsList();
  }, []);

  return (
    <section className="gradient-custom ">
      <MDBContainer className="py-5">
        <MDBRow className="justify-content-center">
          <MDBCol md="12" lg="10" xl="8">
            <MDBCard>
              <MDBCardBody className="p-4">
                <MDBTypography tag="h4" className="text-center mb-4 pb-2">
                  Bình luận
                </MDBTypography>

                <MDBInputGroup>
                  <input
                    className="form-control"
                    type="text"
                    value={commentContent}
                    onChange={handleChangeCommentContent}
                  />
                  <Button
                    disabled={disabledCreateComment}
                    onClick={handleCreateComment}
                  >
                    Create comment
                  </Button>
                </MDBInputGroup>

                <MDBRow>
                  <MDBCol>
                    {commentsList.map((comment) => {
                      return (
                        <div className="d-flex flex-start my-3 mb-4">
                          <div>
                            <MDBCardImage
                              className="rounded-circle shadow-1-strong me-3"
                              src={comment.User.avatar}
                              alt="avatar"
                              width="50"
                              height="50"
                            />
                          </div>

                          <div className="flex-grow-1 flex-shrink-1">
                            <div>
                              <div className="d-flex justify-content-between align-items-center">
                                <p className="mb-1">
                                  {comment.User.email} {"  -  "}
                                  <span className="small">
                                    {moment(comment.createdAt).format(
                                      'DD/MM/YYY HH:mm'
                                    )}
                                  </span>
                                </p>
                              </div>
                              <p className="small mb-0">{comment.content}</p>
                             
                            </div>

                            {comment.replies.length > 0 &&
                              comment.replies.map((reply) => {
                                return (
                                  <div className="d-flex flex-start mt-4">
                                    <a className="me-3" href="#">
                                      <MDBCardImage
                                        className="rounded-circle shadow-1-strong me-3"
                                        src={reply.User.avatar}
                                        alt="avatar"
                                        width="50"
                                        height="50"
                                      />
                                    </a>

                                    <div className="flex-grow-1 flex-shrink-1">
                                      <div>
                                        <div className="d-flex justify-content-between align-items-center">
                                          <p className="mb-1">
                                            {reply.User.email} {"  -  "}
                                            <span className="small">
                                              {moment(reply.createdAt).format(
                                                'DD/MM/YYY HH:mm'
                                              )}
                                            </span>
                                          </p>
                                        </div>
                                        <p className="small mb-0">
                                          {reply.content}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                               <MDBInputGroup
                                style={{ marginTop: 10, width: 600 }}
                              >
                                <input
                                  style={{ height: 30 }}
                                  className="form-control"
                                  type="text"
                                  value={replyComment[comment.id]}
                                  onChange={(e) =>
                                    handleChangeReplyComment(e, comment.id)
                                  }
                                />
                                <Button
                                  style={{ height: 30, padding: "0 10px" }}
                                  // disabled={disabledCreateComment}
                                  onClick={() => handleReplyComment(comment.id)}
                                >
                                  Create comment
                                </Button>
                              </MDBInputGroup>
                          </div>
                        </div>
                      );
                    })}
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}

export default CommentsList;
