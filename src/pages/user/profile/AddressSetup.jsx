// import { useState } from "react";
import SelectOption from "@/components/Forms/SelectOption";
import { FormProvider, useForm } from "react-hook-form";

const AddressSetup = () => {
  const methods = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Bahrain",
    "Bangladesh",
    "Belgium",
    "Cambodia",
    "Canada",
    "China",
    "Denmark",
    "Egypt",
    "France",
    "Germany",
    "Greece",
    "Hungary",
    "India",
    "Indonesia",
    "Iran",
    "Ireland",
    "Israel",
    "Italy",
    "Japan",
    "Kazakhstan",
    "Lebanon",
    "Malaysia",
    "Mexico",
    "Morocco",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Norway",
    "Pakistan",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Romania",
    "Russia",
    "Saudi Arabia",
    "Singapore",
    "South Africa",
    "South Korea",
    "Spain",
    "Sri Lanka",
    "Sweden",
    "Switzerland",
    "Taiwan",
    "Thailand",
    "Turkey",
    "UAE",
    "Ukraine",
    "United Kingdom",
    "United States",
    "Vietnam",
    "Yemen",
  ];
  return (
    <FormProvider {...methods}>
      {/* <!-- address area  --> */}
      <div className="address-area p-lg-6 p-4 rounded-3 bgc-2 border bc-n400">
        <div className="p-xxl-8 p-lg-6 p-sm-4 p-2 rounded-3 border bc-n500 bgc-4">
          <span className="fs-four fw-semibold">Address</span>
          <span className="d-block border-dashed my-lg-6 my-4"></span>
          <form
            action="#"
            className="d-grid gap-sm-6 gap-4"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <div className="d-grid gap-lg-4 gap-2">
              <label className="fs-lg fw-medium">Location</label>
              <SelectOption
                optionList={countryList}
                name={"country"}
                placeholder="Choose a Podcast"
              />
            </div>
            <div className="d-flex flex-column flex-lg-row align-items-lg-center gap-lg-6 gap-4">
              <div className="input-wrapper d-grid gap-lg-4 gap-2 w-100">
                <label htmlFor="address1" className="fs-lg fw-medium">
                  Address 1
                </label>
                <input
                  type="text"
                  id="address1"
                  placeholder="Enter Address"
                  {...methods.register("address1")}
                />
              </div>
              <div className="input-wrapper d-grid gap-lg-4 gap-2 w-100">
                <label htmlFor="address2" className="fs-lg fw-medium">
                  Address 2 <span className="tcn-60">(optional)</span>
                </label>
                <input
                  type="text"
                  id="address2"
                  placeholder="Enter Address"
                  {...methods.register("address2")}
                />
              </div>
            </div>
            <div className="input-wrapper d-grid gap-lg-4 gap-2">
              <label htmlFor="postalCode" className="fs-lg fw-medium">
                Zip Code
              </label>
              <input
                type="text"
                id="postalCode"
                placeholder="Enter Code"
                {...methods.register("postalCode")}
              />
            </div>
            <div className="mt-4 d-flex align-items-center flex-wrap gap-lg-6 gap-sm-4 gap-2">
              <button type="submit" className="bttn-2 fw-semibold">
                Save Change
              </button>
              <button type="button" className="bttn-2 bttn-outline fw-semibold">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </FormProvider>
  );
};

export default AddressSetup;
