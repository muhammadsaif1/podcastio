import { useForm } from "react-hook-form";

const AccountSetup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      {/* <!-- account delete area  --> */}
      <div className="account-delete-area p-lg-6 p-4 rounded-3 bgc-2 border bc-n400">
        <div className="p-xxl-8 p-lg-6 p-sm-4 p-2 rounded-3 border bc-n500 bgc-4">
          <span className="fs-four fw-semibold">Delete your account</span>
          <span className="d-block border-dashed my-lg-6 my-4"></span>
          <form
            action="#"
            className="d-grid gap-sm-6 gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="d-grid gap-lg-4 gap-2">
              <p>
                When you delete your account, you lose access to Front account
                services, and we permanently delete your personal data. You can
                cancel the deletion for 14 days.
              </p>
              <label className="custom-checkbox">
                <input
                  type="checkbox"
                  name="agree"
                  hidden
                  {...register("agree", { required: true })}
                />
                <span className="form-checkbox-sign"></span>
                <span>Confirm that I want to delete my account.</span>
              </label>
              {errors.agree && (
                <p className="tcp-1">{"This field is required"}</p>
              )}
            </div>
            <div className="mt-4 d-flex align-items-center flex-wrap gap-lg-6 gap-sm-4 gap-2">
              <button type="submit" className="bttn-2 fw-semibold">
                Delete Account
              </button>
              <button type="reset" className="bttn-2 bttn-outline fw-semibold">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AccountSetup;
