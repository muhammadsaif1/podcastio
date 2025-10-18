import { useEffect, useState } from "react";
import SelectOption from "./SelectOption";
import previewImg from "../../images/upload-preview-2.png";
import TextEditor from "./TextEditor";
import { FormProvider, useForm } from "react-hook-form";

const CreateEpisodeForm = () => {
  const [fileType, setFileType] = useState("");
  const [selectedFileType, setSelectedFileType] = useState(0);
  const [image, setImage] = useState(previewImg);

  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMessage] = useState("");

  const handleFileType = (selectedValue) => {
    setFileType(selectedValue);
  };

  const {
    formState: { errors },
  } = useForm();
  const methods = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const fileTypeList = [
    "Audio (From Device)",
    "Video (From Device)",
    "External Link",
  ];
  const podcastList = ["Podcast Name 1", "Podcast Name 2", "Podcast Name 3"];

  useEffect(() => {
    setSelectedFileType(fileTypeList.indexOf(fileType));
  }, [fileType]);

  const handleChangeImg = (e) => {
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
    <FormProvider {...methods}>
      <form
        action="#"
        className="d-grid gap-sm-6 gap-4"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div className="input-wrapper d-grid gap-lg-4 gap-2">
          <label htmlFor="title" className="fs-five fw-medium">
            Title <span className="tcp-1">*</span>
          </label>
          <input
            type="text"
            id="title"
            placeholder="Enter Episode Title"
            {...methods.register("title", { required: true })}
          />
          {errors.title && (
            <span className="tcp-1 fs-sm">This field is required</span>
          )}
        </div>
        <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-lg-6 gap-4">
          <div className="d-grid gap-lg-4 gap-2 w-100">
            <label htmlFor="podcast" className="fs-five fw-medium">
              Podcast <span className="tcp-1">*</span>
            </label>
            <div className="podcast-list-select-area bgc-3 rounded-pill">
              <SelectOption
                optionList={podcastList}
                placeholder="Choose a Podcast"
                name="podcast"
              />
            </div>
          </div>
          <div className="d-grid gap-lg-4 gap-2 w-100">
            <label className="fs-five fw-medium">
              File Type <span className="tcp-1">*</span>
            </label>
            <div className="podcast-list-select-area bgc-3 rounded-pill">
              <SelectOption
                optionList={fileTypeList}
                placeholder="Choose a File Type"
                name="fileType"
                handleSelected={handleFileType}
              />
            </div>
          </div>
        </div>
        <div className="input-wrapper d-grid gap-lg-4 gap-2">
          {(selectedFileType === 0 || selectedFileType === -1) && (
            <div className="input-file">
              <div className="d-grid gap-lg-4 gap-2">
                <label htmlFor="audio-file" className="fs-five fw-medium">
                  File type audio and .mp3{" "}
                </label>
                <input
                  type="file"
                  className="p-lg-2 p-1"
                  id="audio-file"
                  accept="audio/*"
                  {...methods.register("audio")}
                />
              </div>
            </div>
          )}
          {selectedFileType === 1 && (
            <div className="input-file">
              <div className="d-grid gap-lg-4 gap-2">
                <label htmlFor="video-file" className="fs-five fw-medium">
                  File type video and .mp4{" "}
                </label>
                <input
                  type="file"
                  className="p-lg-2 p-1"
                  id="video-file"
                  accept="video/*"
                  {...methods.register("video")}
                />
              </div>
            </div>
          )}
          {selectedFileType === 2 && (
            <div className="input-file">
              <div className="d-grid gap-lg-4 gap-2">
                <label htmlFor="file-link" className="fs-five fw-medium">
                  Enter Your Link
                </label>
                <input
                  type="url"
                  className="py-lg-2 py-1 px-lg-6 px-2"
                  id="file-link"
                  placeholder="https://example.com"
                  {...methods.register("fileLink")}
                />
              </div>
            </div>
          )}
          <span className="tcp-1 fs-sm">
            Feel free to adjust or expand upon these rules based on your
            specific podcasting needs! Embed metadata for professionalism,
            maintain consistency, and test playback on various devices. Ensure
            legal compliance with copyrights.
          </span>
        </div>
        <div className="podcast-img-upload d-grid gap-lg-10 gap-6">
          {/* <!-- image area  --> */}
          <div className="d-grid gap-lg-4 gap-2">
            <span className="fs-five fw-medium"> Image</span>
            <div className="d-grid gap-lg-6 gap-4">
              <div className="preview-img-area-2">
                <img
                  className="w-100 h-100 rounded-3 previewImg"
                  src={image}
                  alt="preview"
                />
              </div>
              <div className="upload-img-area-2 d-grid gap-lg-6 gap-4">
                <div className="d-grid gap-2">
                  <p className="fs-sm">
                    We recommend uploading an artwork of at least 1400x1400
                    pixels and maximum 512kb. We support jpg, png, gif and tiff
                    formats.
                  </p>
                  <p className="fs-sm tcp-1">
                    A great image speaks louder than words. Don’t forget to add
                    one that you feel best represents your podcast!
                  </p>
                </div>
                <div>
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
                    onChange={handleChangeImg}
                    // {...methods.register("coverImg")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- post details input area  --> */}
        <div className="post-details-input-area d-grid gap-lg-4 gap-2">
          <span className="fs-five fw-semibold">Description</span>
          <TextEditor placeholder="Enter Description" />
          <p className="tcp-1 fs-sm">
            Listeners want to know what your podcast is about before they tune
            in. Hook them in with a persuasive description that quickly sums up
            what the main concept and structure of your podcast is.
          </p>
        </div>
        <div className="mt-4">
          <button className="bttn-1" type="submit">
            <span className="fw-semibold">Create Episode</span>
            <span className="icon  d-center icon-right">
              <i className="ti ti-arrow-right"></i>
            </span>
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default CreateEpisodeForm;
