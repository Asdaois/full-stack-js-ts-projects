import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import ImageUploader from "../components/ImageUploader";
import "../styles/CreateLevel.css";
export default function CreateLevel() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [heightWidth, setHeightWidth] = useState({ x: 0, y: 0 });

  useEffect(() => {
    try {
    } catch (e) {
      console.log(e);
    }
  }, [selectedImage]);

  const updateImg = e => {
    setHeightWidth({ x: e.target.width, y: e.target.height });
  };

  return (
    <div className="CreateLevel">
      <h2>Create Level</h2>
      <div>
        <ImageUploader
          setSelectedImage={setSelectedImage}
          setPreviewUrl={setPreviewUrl}
        />
        <div className="wrapper">
          {previewUrl !== null ? (
            <div
              style={{
                backgroundImage: `url(${previewUrl})`,
                width: heightWidth.x,
                height: heightWidth.y
              }}
              className="imageMap"
            ></div>
          ) : (
            <div>Load a image</div>
          )}
        </div>
      </div>
      <img className="hide" src={previewUrl} alt="img" onLoad={updateImg}></img>
    </div>
  );
}
