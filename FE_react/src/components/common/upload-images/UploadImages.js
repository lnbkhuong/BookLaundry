import { useState } from "react";
import "./upload-image.css";
import ImagesList from "./images-list/ImagesList";

UploadImages.propTypes = {};

function UploadImages({ files, setFiles }) {
  function handleChange(event) {
    const fileList = event.target.files;

    setFiles([...fileList]);
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className="upload-container">
        <label for="file" class="br_dropzone">
          <input
            multiple="multiple"
            type="file"
            onChange={handleChange}
            accept="/image/*"
          />
          <input
            type="text"
            id="fileName"
            name="fileName"
            placeholder="Drop files to upload (or click)"
            readonly
          ></input>
        </label>
      </div>
      {files && <ImagesList files={files} setFiles={setFiles} />}
    </div>
  );
}

export default UploadImages;
