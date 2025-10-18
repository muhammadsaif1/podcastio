import { useState } from "react";

const PasswordInput = ({ id, label, placeholder, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="input-wrapper d-grid gap-lg-4 gap-2 w-100">
      <label htmlFor={id} className="fs-lg fw-medium">
        {label}
      </label>
      <div className="input-password d-flex align-items-center rounded-pill bgc-3">
        <input
          type={showPassword ? "text" : "password"}
          className="password-field"
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        <span
          className="px-3 cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <i className="ti ti-eye-off"></i>
          ) : (
            <i className="ti ti-eye"></i>
          )}
        </span>
      </div>
    </div>
  );
};

export default PasswordInput;
