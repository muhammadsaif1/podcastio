import { useState } from "react";
import previewImg from "../../images/upload-preview.png";
import previewImg2 from "../../images/upload-preview-2.png";
import { Link } from "react-router-dom";
// import { useFormContext } from "react-hook-form";
const UploadImg = () => {
  const [image, setImage] = useState(previewImg);
  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMessage] = useState("");
  const [isUpgrade, setIsUpgrade] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    // image validation
    const file = e.target.files[0];
    if (!file) {
      setShowError(true);
      setErrorMessage("Please select an image file");
      setImage(previewImg);
      return;
    }
    // size validation
    if (file.size > 512000) {
      setShowError(true);
      setErrorMessage("File size should be less than or equal to 512kb");
      setImage(previewImg);
      return;
    }
    setImage(URL.createObjectURL(file));
    setShowError(false);
  };
  return (
    <div className="podcast-img-upload d-grid gap-lg-10 gap-6">
      {/* <!-- picture img area  --> */}
      <div className="d-grid gap-lg-4 gap-2">
        <label className="fs-five fw-semibold">Picture</label>
        <div className="d-flex flex-column flex-md-row align-items-md-center gap-lg-10 gap-md-6 gap-4">
          <div className="preview-img-area">
            <img
              className="w-100 h-100 rounded-3 previewImg"
              src={image}
              alt="preview"
            />
          </div>
          <div className="upload-img-area">
            <p className="fs-sm mb-lg-3 mb-2">
              We recommend uploading an artwork of at least 1400x1400 pixels and
              maximum 512kb. We support jpg, png, gif and tiff formats.
            </p>
            <p className="fs-sm tcp-1 mb-lg-8 mb-sm-6 mb-4">
              A great image speaks louder than words. Don’t forget to add one
              that you feel best represents your podcast!
            </p>
            <button
              className="bttn-2"
              type="button"
              onClick={() => document.querySelector(".inputFile").click()}
            >
              <span className="fs-xl fw-bold">
                <i className="ti ti-circle-plus"></i>
              </span>
              <span className="fw-bold">Upload Image</span>
            </button>
            {showError && (
              <span className="d-block text-danger mt-2">{errorMsg}</span>
            )}
            <input
              type="file"
              className="inputFile"
              accept="image/*"
              hidden
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      {/* <!-- cover image area  --> */}
      <div className="d-grid gap-lg-4 gap-2">
        <label className="fs-five fw-semibold">Cover Image</label>
        <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-lg-6 gap-4">
          <div className="preview-img-area-2">
            <img
              className="w-100 h-100 rounded-3 previewImg"
              src={previewImg2}
              alt="preview"
            />
          </div>
          <div className="upload-img-area-2">
            {(isUpgrade && (
              <>
                <button className="bttn-2 bttn-outline">Upload</button>
                <input
                  type="file"
                  className="inputFile"
                  accept="image/*"
                  hidden
                />
              </>
            )) || (
              <>
                <p className="fs-sm mb-lg-4 mb-2">
                  Adding a cover image is a great way to enhance your podcast
                  page. Become a Pro user to upload More.
                </p>
                <Link to="#" className="bttn-2 bttn-outline">
                  Upgrade
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadImg;
