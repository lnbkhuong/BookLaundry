import axios from "axios";

const CommentURL = "http://localhost:4000/comment";

export const getCommentsListService = async (postId) => {
  return await axios.get(`${CommentURL}/${postId}`);
};

export const createCommentService = async (commentPayload) => {
  const token = localStorage.getItem("token");
 
  return await axios.post(`${CommentURL}/`, commentPayload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const CreateReply = async (comment, parentId) => {
  const token = localStorage.getItem("token");
  
  return await axios.post(`${CommentURL}/${parentId}`, comment, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
