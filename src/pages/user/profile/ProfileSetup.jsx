import { useState } from "react";
import TextEditor from "@/components/Forms/TextEditor";
import profilePreview from "@/images/profile-preview.png";
import { useForm } from "react-hook-form";

const ProfileSetup = () => {
  const [image, setImage] = useState(profilePreview);

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleUploadImg = (e) => {
    e.preventDefault();
    // image validation
    const file = e.target.files[0];
    if (!file) {
      setImage(profilePreview);
      return;
    }
    setImage(URL.createObjectURL(file));
  };
  const handleRemoveImg = (e) => {
    e.preventDefault();
    setImage(profilePreview);
  };

  return (
    <>
      {/* <!-- profile info area  --> */}
      <div className="profile-setting-area p-lg-6 p-4 rounded-3 bgc-2 border bc-n400">
        <div className="p-xxl-8 p-lg-6 p-sm-4 p-2 rounded-3 border  bc-n500 bgc-4">
          <span className="fs-four fw-semibold">Account Setting</span>
          <span className="d-block border-dashed my-lg-6 my-4"></span>
          <form
            action="#"
            className="d-grid gap-sm-6 gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="profile-img-upload-area">
              <span className="d-block fs-xl fw-medium mb-lg-4 mb-2">
                Profile Photo
              </span>
              <div className="d-flex flex-wrap flex-sm-nowrap align-items-center gap-xxl-10 gap-xl-8 gap-lg-6 gap-4">
                <div className="preview-img">
                  <img className="w-100 h-100 rounded" src={image} alt="user" />
                </div>
                <div className="d-flex gap-xxl-10 gap-xl-8 gap-lg-6 gap-4">
                  <button
                    type="button"
                    className="bttn-2 uploadPreview fw-semibold"
                    onClick={() => document.querySelector(".inputFile").click()}
                  >
                    Upload Image
                  </button>
                  <input
                    type="file"
                    className="inputFile"
                    accept="image/*"
                    hidden
                    onChange={handleUploadImg}
                    // {...register("profileImg")}
                  />
                  <button
                    type="button"
                    className="bttn-2 bttn-outline fw-semibold"
                    onChange={handleRemoveImg}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
            <span className="d-block border-dashed"></span>
            <div className="d-flex flex-column flex-lg-row align-items-lg-center gap-lg-6 gap-4">
              <div className="input-wrapper d-grid gap-lg-4 gap-2 w-100">
                <label htmlFor="fName" className="fs-lg fw-medium">
                  First Name
                </label>
                <input
                  type="text"
                  id="fName"
                  placeholder="Jenny"
                  {...register("fName")}
                />
                {errors.fName && (
                  <p className="tcp-1">{"This field is required"}</p>
                )}
              </div>
              <div className="input-wrapper d-grid gap-lg-4 gap-2 w-100">
                <label htmlFor="lName" className="fs-lg fw-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lName"
                  placeholder="Wilson"
                  {...register("lName")}
                />
                {errors.lName && (
                  <p className="tcp-1">{"This field is required"}</p>
                )}
              </div>
            </div>
            <div className="d-flex flex-column flex-lg-row align-items-lg-center gap-lg-6 gap-4">
              <div className="input-wrapper d-grid gap-lg-4 gap-2 w-100">
                <label htmlFor="email" className="fs-lg fw-medium">
                  Gmail
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="example@gmail.com"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="tcp-1">{"This field is required"}</p>
                )}
              </div>
              <div className="input-wrapper d-grid gap-lg-4 gap-2 w-100">
                <label htmlFor="phone" className="fs-lg fw-medium">
                  Phone
                  <span className="tcn-60">(Optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="(907) 555-0101"
                  {...register("phone")}
                />
              </div>
            </div>
            <div className="d-grid gap-lg-4 gap-2">
              <span className="fs-lg fw-medium">Gender : </span>
              <div className="d-flex align-items-center gap-lg-6 gap-sm-4 gap-2">
                <label className="custom-radio alt-size">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    hidden
                    {...register("gender")}
                  />
                  <span className="form-radio-sign"></span>
                  <span className="cursor-pointer">Male</span>
                </label>
                <label className="custom-radio alt-size">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    hidden
                    {...register("gender")}
                  />
                  <span className="form-radio-sign"></span>
                  <span className="cursor-pointer">Female</span>
                </label>
              </div>
            </div>
            {/* <!-- tag line input area  --> */}
            <div className="post-details-input-area d-grid gap-lg-4 gap-2">
              <span className="fs-five fw-semibold">Description</span>
              <TextEditor placeholder="Description" />
            </div>
            {/* <!-- privacy policy, terms and conditions agreed --> */}
            <div className="d-grid gap-lg-4 gap-2">
              <label className="custom-checkbox">
                <input
                  type="checkbox"
                  name="policy"
                  hidden
                  {...register("policy")}
                />
                <span className="form-checkbox-sign"></span>
                <span>
                  I agree with the{" "}
                  <a className="link-text" href="#">
                    Privacy Policy
                  </a>
                </span>
              </label>
              <label className="custom-checkbox">
                <input
                  type="checkbox"
                  name="condition"
                  hidden
                  {...register("condition")}
                />
                <span className="form-checkbox-sign"></span>
                <span>
                  I agree with All{" "}
                  <a className="link-text" href="#">
                    Terms & Conditions
                  </a>
                </span>
              </label>
            </div>
            <div className="mt-4 d-flex align-items-center flex-wrap gap-lg-6 gap-sm-4 gap-2">
              <button className="bttn-2 fw-semibold" type="submit">
                Save Change
              </button>
              <button className="bttn-2 bttn-outline fw-semibold" type="reset">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProfileSetup;
