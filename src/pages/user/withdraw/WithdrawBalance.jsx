import SelectOption from "@/components/Forms/SelectOption";
import { FormProvider, useForm } from "react-hook-form";

const WithdrawBalance = () => {
  const {
    formState: { errors },
  } = useForm();
  const methods = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const paymentMethodList = ["Paypal", "Payoneer", "Stripe"];
  const currencyList = ["USD", "EUR", "RUB"];

  return (
    <FormProvider {...methods}>
      <div className="main-content-area p-lg-6 p-4 rounded-3 bgc-2 border bc-n400">
        <div className="p-lg-6 p-sm-4 p-2 rounded-3 border bc-n500 bgc-4">
          <span className="fs-four fw-semibold mb-lg-6 mb-4">
            Withdraw Balance
          </span>
          <span className="d-block border-dashed my-lg-8 my-4"></span>
          <form
            action="#"
            className="d-grid gap-lg-6 gap-4"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <div className="d-flex flex-column flex-lg-row align-items-center gap-lg-6 gap-4">
              <div className="d-grid gap-lg-4 gap-2 w-100">
                <label className="fs-lg fw-medium">
                  Withdraw Approach <span className="tcp-1">*</span>
                </label>
                <SelectOption
                  optionList={paymentMethodList}
                  placeholder={"Select Gateway"}
                  name={"paymentMethod"}
                />
              </div>
              <div className="d-grid gap-lg-4 gap-2 w-100">
                <label className="fs-lg fw-medium">
                  Currency <span className="tcp-1">*</span>
                </label>
                <SelectOption
                  optionList={currencyList}
                  placeholder={"Select Currency"}
                  name={"currency"}
                />
              </div>
            </div>
            <div className="input-wrapper d-grid gap-lg-4 gap-2">
              <label className="fs-lg fw-medium">
                Amount <span className="tcp-1">*</span>
              </label>
              <input
                type="text"
                placeholder="0000"
                {...methods.register("amount")}
              />
              {errors.amount && (
                <p className="tcp-1 fs-sm">This field is required</p>
              )}
            </div>
            <div className="d-flex align-items-center gap-lg-8 gap-sm-4 gap-2 mt-lg-8 mt-4">
              <button type="submit" className="bttn-2 fw-semibold">
                Submit
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

export default WithdrawBalance;
