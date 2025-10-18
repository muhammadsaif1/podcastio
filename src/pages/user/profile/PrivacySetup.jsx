// import { useState } from "react";
import SelectOption from "@/components/Forms/SelectOption";
import { FormProvider, useForm } from "react-hook-form";

const PrivacySetup = () => {
  const methods = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const privacyList = ["Everyone", "Subscriber", "Only Me"];

  return (
    <FormProvider {...methods}>
      {/* <!-- profile privacy setting  --> */}
      <div className="profile-privacy-area p-lg-6 p-4 rounded-3 bgc-2 border bc-n400">
        <div className="p-xxl-8 p-lg-6 p-sm-4 p-2 rounded-3 border bc-n500 bgc-4">
          <span className="fs-four fw-semibold">Privacy</span>
          <span className="d-block border-dashed my-lg-6 my-4"></span>
          <form
            action="#"
            className="d-grid gap-sm-6 gap-4"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <div className="d-grid gap-lg-4 gap-2">
              <label className="fs-lg fw-medium">
                Who can see your profile photo?
              </label>
              <SelectOption
                optionList={privacyList}
                placeholder="Choose a privacy option"
                name={"privacy"}
              />
            </div>
            <div className="mt-4 d-flex align-items-center flex-wrap gap-lg-6 gap-sm-4 gap-2">
              <button type="submit" className="bttn-2 fw-semibold">
                Save Change
              </button>
              <button type="reset" className="bttn-2 bttn-outline fw-semibold">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </FormProvider>
  );
};

export default PrivacySetup;
