import SelectOption from "./SelectOption";
import UploadImg from "./UploadImg";
import { Link } from "react-router-dom";
import TextEditor from "./TextEditor";

import { FormProvider, useForm } from "react-hook-form";

const CreatePodcastForm = () => {
  const {
    formState: { errors },
  } = useForm();
  const methods = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const languageList = [
    "English",
    "Hindi",
    "Spanish",
    "French",
    "German",
    "Russian",
  ];

  const categoryList = [
    "Storytelling",
    "Horror",
    "Drama",
    "Tech",
    "Sports",
    "Comedy",
  ];

  const visibilityList = [
    {
      id: 1,
      name: "Public",
      des: "can be listened to by everyone",
    },
    {
      id: 2,
      name: "Private",
      des: "can't be listened to by anyone",
    },
    {
      id: 3,
      name: "Limited Access",
      des: "allows creating Paid Subscriptions",
    },
  ];

  return (
    <FormProvider {...methods}>
      <form
        action="#"
        className="d-grid gap-sm-6 gap-4"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div className="input-wrapper d-grid gap-lg-4 gap-2">
          <label htmlFor="title" className="fs-five fw-semibold">
            Title <span className="tcp-1">*</span>
          </label>
          <input
            type="text"
            id="title"
            placeholder="Enter Podcast Title"
            {...methods.register("title", { required: true })}
          />
          {errors.title && (
            <span className="tcp-1 fs-sm">This field is required</span>
          )}
        </div>
        <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-lg-6 gap-4">
          <div className="d-grid gap-lg-4 gap-2 w-100">
            <label htmlFor="language" className="fs-five fw-semibold">
              Language <span className="tcp-1">*</span>
            </label>
            <SelectOption
              optionList={languageList}
              placeholder="Select Audio Language"
              name={"language"}
            />
          </div>

          <div className="d-grid gap-lg-4 gap-2 w-100">
            <label htmlFor="category" className="fs-five fw-semibold">
              Category <span className="tcp-1">*</span>
            </label>
            <SelectOption
              optionList={categoryList}
              placeholder="Select a Category"
              name={"category"}
            />
          </div>
        </div>
        <div className="input-wrapper d-grid gap-lg-4 gap-2">
          <label htmlFor="email" className="fs-five fw-semibold">
            Email <span className="tcp-1">*</span>
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter Your Email"
            {...methods.register("email")}
          />
          <span className="tcp-1 fs-sm">
            By adding your email address here, it will be displayed on your
            podcast page and RSS feed. This email address allows you to confirm
            the ownership into platforms like Spotify and Google Podcasts
          </span>
        </div>
        <UploadImg />

        <div className="visibility-control d-grid gap-lg-4 gap-2">
          <label className="fs-five fw-semibold">Visibility</label>
          <div className="d-grid gap-lg-3 gap-1">
            <div>
              <div className="d-grid gap-lg-4 gap-2">
                {visibilityList.map((item) => {
                  return (
                    <label key={item.id} className="custom-radio">
                      <input
                        type="radio"
                        id={item.id}
                        name="visibility"
                        value={item.name}
                        hidden
                        {...methods.register("visibility", { required: true })}
                      />
                      <span className="form-radio-sign"></span>
                      <span className="cursor-pointer">
                        {item.name}{" "}
                        <span className="fw-normal tcn-40">({item.des})</span>
                      </span>
                    </label>
                  );
                })}
                {errors.visibility && (
                  <p className="tcp-1 fs-sm">This field is required</p>
                )}
              </div>
              <span className="d-block tcp-1 fs-sm mt-lg-6 mt-sm-4 mt-2">
                Do you want to share this content with just a few select
                listeners via a limited access link? Then upgrade to Broadcaster
                plan or higher!
              </span>
              <Link
                to="#"
                className="bttn-2 bttn-outline mt-lg-10 mt-ms-6 mt-4"
              >
                Upgrade
              </Link>
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
            <span className="fw-medium">Create Podcast</span>
            <span className="icon  d-center icon-right">
              <i className="ti ti-arrow-right"></i>
            </span>
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default CreatePodcastForm;
