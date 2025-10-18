import { useState } from "react";
import Input from "../Forms/Input";

const NewsLetterForm = ({
  iconOnly,
  placeholder = "Enter email",
  bg,
  border,
}) => {
  const [email, setEmail] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    setEmail("");
  };

  return (
    <form action="#" onSubmit={handleFormSubmit}>
      <div className={`input-area alt ${bg} ${border}`}>
        <Input
          type={"email"}
          setEmail={setEmail}
          placeholder={placeholder}
          id={"email"}
          value={email}
          autoComplete={"off"}
        />
        <button
          type="submit"
          className={`${iconOnly ? "icon-btn p-0" : "bttn-1 subscribe-btn"}`}
        >
          {iconOnly ? (
            <span className="icon alt-size fs-xl fw-bold">
              <i className="ti ti-send"></i>
            </span>
          ) : (
            <>
              <span className="text fw-semibold">Subscribe</span>
              <span className="icon d-center icon-right">
                <i className="ti ti-arrow-narrow-right"></i>
              </span>
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default NewsLetterForm;
