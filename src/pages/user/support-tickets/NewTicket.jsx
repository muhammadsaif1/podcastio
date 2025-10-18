import SelectOption from "@/components/Forms/SelectOption";
import TextEditor from "@/components/Forms/TextEditor";
import { FormProvider, useForm } from "react-hook-form";

const NewTicket = () => {
  const {
    formState: { errors },
  } = useForm();
  const methods = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const importanceList = ["Low", "Medium", "High"];

  return (
    <FormProvider {...methods}>
      <div className="main-content-area p-lg-6 p-sm-4 p-2 rounded-3 bgc-2 border bc-n400">
        <div className="new-ticket-area p-xxl-8 p-lg-6 p-4 border bc-n500 rounded-3 bgc-4">
          <div className="d-flex flex-wrap flex-xxl-nowrap gap-2 align-items-xxl-center justify-content-between">
            <span className="fs-four fw-semibold text-nowrap">
              Open New Ticket
            </span>
          </div>
          <span className="d-block border-dashed my-lg-6 my-4"></span>
          <form
            action="#"
            className="d-grid gap-sm-6 gap-4"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <div className="input-wrapper d-grid gap-lg-4 gap-2">
              <label htmlFor="name" className="fs-five fw-semibold">
                Full Name <span className="tcp-1">*</span>
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter name ..."
                {...methods.register("name", { required: true })}
              />
              {errors.name && (
                <span className="tcp-1">This field is required</span>
              )}
            </div>
            <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-lg-6 gap-4">
              <div className="input-wrapper d-grid gap-lg-4 gap-2 w-100">
                <label htmlFor="email" className="fs-five fw-semibold">
                  Your Email <span className="tcp-1">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter email ..."
                  {...methods.register("email", { required: true })}
                />
                {errors.email && (
                  <span className="tcp-1">This field is required</span>
                )}
              </div>
              <div className="input-wrapper d-grid gap-lg-4 gap-2 w-100">
                <label htmlFor="subject" className="fs-five fw-semibold">
                  Subject <span className="tcp-1">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Enter subject ..."
                  {...methods.register("subject", { required: true })}
                />
                {errors.subject && (
                  <span className="tcp-1">This field is required</span>
                )}
              </div>
            </div>
            <div className="d-grid gap-lg-4 gap-2">
              <label htmlFor="importance" className="fs-five fw-semibold">
                Importance <span className="tcp-1">*</span>
              </label>
              <SelectOption
                optionList={importanceList}
                placeholder="Select importance"
                name={"importance"}
              />
            </div>
            <div className="input-wrapper d-grid gap-lg-4 gap-2 input-file">
              <label htmlFor="attachments" className="fs-five fw-semibold">
                Attachments
              </label>
              <input
                className="p-lg-2 p-1"
                type="file"
                id="attachments"
                accept="image/*"
                {...methods.register("file")}
              />
              <span className="tcp-1 fs-sm">
                Acceptable File Extensions: .jpg, .jpeg, .png, .pdf, .doc, .docx
              </span>
            </div>
            {/* <!-- post details input area  --> */}
            <div className="post-details-input-area d-grid gap-lg-4 gap-2">
              <span className="fs-five fw-semibold">Description</span>
              <TextEditor />
            </div>
            <div className="mt-4 d-flex align-items-center flex-wrap gap-lg-6 gap-sm-4 gap-2">
              <button className="bttn-2 fw-semibold" type="submit">
                Create Ticket
              </button>
              <button className="bttn-2 bttn-outline fw-semibold" type="button">
                Add New File
              </button>
            </div>
          </form>
        </div>
      </div>
    </FormProvider>
  );
};

export default NewTicket;
