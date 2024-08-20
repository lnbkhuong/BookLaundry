import React from "react";
import PropTypes from "prop-types";
import "./ImageItem.css";
import { IoMdClose } from "react-icons/io";

ImageItem.propTypes = {};

function ImageItem({ file, handleRemoveImage }) {
  return (
    <div className="image-container">
      <div className="image-overlay">
        <IoMdClose
          onClick={() => handleRemoveImage(file)}
          size="30"
          color="#FFFFFF"
        />
      </div>
      <img src={URL.createObjectURL(file)} alt="image " />
    </div>
  );
}

export default ImageItem;
