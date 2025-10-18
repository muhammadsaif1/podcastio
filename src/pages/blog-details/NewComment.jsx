import { useState } from "react";

const NewComment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const { name, email, comment } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    // console.log(formData);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    setFormData({ name: "", email: "", comment: "" });
  };
  return (
    <div className="new-comment-from mt-lg-6 mt-4 p-6 rounded bgc-3">
      <div className="d-grid gap-lg-6 gap-4 ">
        <h4 className="fw-semibold">Write a Comments</h4>
        <span className="d-block border-dashed"></span>
        <form onSubmit={onSubmit} className="d-grid gap-6">
          <div className="input-wrapper alt-color-2 d-grid gap-3 w-100">
            <label htmlFor="name">Name </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={onChange}
            />
          </div>
          <div className="input-wrapper alt-color-2 d-grid gap-3 w-100">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="input-wrapper alt-color-2 d-grid gap-3 w-100">
            <label htmlFor="comment">Write a Comments</label>
            <textarea
              name="comment"
              id="comment"
              rows="4"
              placeholder="Enter your comment"
              value={comment}
              onChange={onChange}
            ></textarea>
          </div>

          <div className="mt-lg-4">
            <button type="submit" className="bttn-1 bttn-outline">
              Submit Comment
              <span className=" icon d-center icon-right">
                <i className="ti ti-arrow-narrow-right"></i>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewComment;
