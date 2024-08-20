import React from "react";
import PropTypes from "prop-types";
import "./ImagesList.css";
import ImageItem from "./ImageItem/ImageItem";

ImagesList.propTypes = {};

function ImagesList({ files, setFiles }) {
  const handleRemoveImage = (file) => {
    setFiles(files.filter((item) => item.name !== file.name));
  };

  return (
    <div className="images-list-container">
      {files.map((file, index) => (
        <ImageItem
          key={`${file.name}${index}`}
          file={file}
          handleRemoveImage={handleRemoveImage}
        />
      ))}
    </div>
  );
}

export default ImagesList;
