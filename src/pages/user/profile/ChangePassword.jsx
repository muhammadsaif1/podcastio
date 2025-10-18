import { useEffect, useState } from "react";
import PasswordInput from "./PasswordInput";

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [enterOldPassword, setEnterOldPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordStrength, setPasswordStrength] = useState([]);
  const oldPassword = "123456";

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const handleOldPassword = (e) => {
    setEnterOldPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("Confirm Password do not match");
      return;
    }
    if (oldPassword !== enterOldPassword) {
      setError("Old Password do not match");
      return;
    }
    console.log("Password Changed Successfully");

    // Reset the form
    setError("");
    setNewPassword("");
    setConfirmPassword("");
    setEnterOldPassword("");
  };

  const handleCancel = () => {
    setError("");
    setNewPassword("");
    setConfirmPassword("");
    setEnterOldPassword("");
  };

  // Validation using regex
  const passwordRegex = [
    { regex: /.{8,}/, index: 0 }, // minimum 8 characters
    { regex: /[a-z]/, index: 1 }, // At least 1 lowercase letter
    { regex: /[A-Z]/, index: 2 }, // At least 1 uppercase letter
    { regex: /[0-9]/, index: 3 }, //At least 1 number
    { regex: /[^A-Za-z0-9]/, index: 4 }, // At least 1 spacial character
  ];


  const handleValidation = (input) => {
    passwordRegex.forEach((item) => {
      const isValid = item.regex.test(input);
      if (isValid) {
        setPasswordStrength((prev) => {
          if (prev.includes(item.index)) {
            return prev;
          } else {
            return [...prev, item.index];
          }
        });
      } else {
        if (passwordStrength.includes(item.index)) {
          const filtered = passwordStrength.filter((i) => i !== item.index);
          setPasswordStrength([...filtered]);
        }
      }
    });
  };

  useEffect(() => {
    handleValidation(newPassword);
  }, [newPassword]);

  const passwordRequirements = [
    "Minimum 8 characters",
    "At least 1 lowercase letter (a-z)",
    "At least 1 uppercase letter (A-Z)",
    "At least 1 number (0-9)",
    "At least 1 spacial character (!@#$%^&*)",
  ];

  return (
    <>
      <div className="main-content-area p-lg-6 p-4 rounded-3 bgc-2 border bc-n400">
        <div className="change-password-area p-xxl-8 p-lg-6 p-sm-4 p-2 rounded-3 border bc-n500 bgc-4">
          <span className="fs-four fw-semibold">Change Password</span>
          <span className="d-block border-dashed my-lg-6 my-4"></span>
          <form
            action="#"
            className="d-grid gap-sm-6 gap-4"
            onSubmit={handleFormSubmit}
          >
            <div className="d-flex flex-column flex-lg-row align-items-lg-center gap-lg-6 gap-4">
              <PasswordInput
                label="Old Password"
                onChange={handleOldPassword}
                value={enterOldPassword}
                id="oldPassword"
                placeholder="*******"
              />
              <PasswordInput
                label="New Password"
                onChange={handleNewPassword}
                value={newPassword}
                id="newPassword"
                placeholder="*******"
              />
            </div>

            <PasswordInput
              label="Confirm Password"
              onChange={handleConfirmPassword}
              value={confirmPassword}
              id="confirmPassword"
              placeholder="*******"
            />

            {/* <!-- password error message  --> */}
            {error && (
              <div className="wrong-password-massage">
                <span className="fw-medium tcp-3">{error}</span>
              </div>
            )}

            {/* <!-- password validation message --> */}
            <div className="password-requirements mt-4 d-grid gap-lg-4 gap-2">
              <span className="fs-lg fw-medium">
                New password must contain :
              </span>
              <ul className="d-grid gap-lg-3 gap-1">
                {passwordRequirements.map((item, index) => (
                  <li
                    className={`d-flex align-items-center gap-lg-3 gap-1 ${
                      passwordStrength.includes(index) === true ? "valid" : ""
                    }`}
                    key={index}
                  >
                    <span className="dot-point"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4 d-flex align-items-center flex-wrap gap-lg-6 gap-sm-4 gap-2">
              <button type="submit" className="bttn-2 fw-medium">
                Save Change
              </button>
              <button
                type="reset"
                className="bttn-2 bttn-outline fw-medium"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
