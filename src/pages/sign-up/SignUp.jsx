import { Link } from "react-router-dom";
import { useState } from "react";
import TopWave from "@/components/Shared/TopWave";
import BottomWave from "@/components/Shared/BottomWave";
import shape1 from "@/images/shape-1.png";
import shape2 from "@/images/shape-2.png";
import shape3 from "@/images/shape-3.png";
import banner from "@/images/sign-up-img.png";
import topWaveShape from "@/images/top-wave-shape-2.png";
import bottomWaveShape from "@/images/bottom-wave-shape-2.png";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    refer: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setForm({ fName: "", lName: "", email: "", password: "", refer: "" });
  };
  const togglePassword = () => {
    const x = document.getElementById("password");
    if (x.type === "password") {
      setShowPassword(true);
      x.type = "text";
    } else {
      x.type = "password";
      setShowPassword(false);
    }
  };
  return (
    <section className="sign-up auth-container inner-hero-section overflow-hidden texture-bg-1">
      <div className="top-wave-shape">
        <TopWave shapeImg={topWaveShape} />
      </div>
      <div className="circle-shape shape-1 alt d-none d-md-block">
        <img className="w-100" src={shape1} alt="shape" />
      </div>
      <div className="circle-shape shape-2 alt d-none d-md-block">
        <img className="w-100" src={shape2} alt="shape" />
      </div>
      <div className="circle-shape shape-3 alt d-none d-md-block">
        <img className="w-100" src={shape3} alt="shape" />
      </div>
      <div className="container pt-120 pb-120">
        <div className="row g-6 justify-content-between">
          <div className="col-lg-6">
            <div className="sign-up-form">
              <form
                onSubmit={handleFormSubmit}
                className="auth-form p-xl-8 p-4 bgc-2 rounded"
              >
                <div className="form-content mb-lg-10 mb-sm-8 mb-6">
                  <h3 className="mb-4">Let&#39;s Get Started!</h3>
                  <p>
                    Please Enter your Email Address to Start your Online
                    Application
                  </p>
                </div>
                <div className="d-grid gap-lg-6 gap-4">
                  <div className="d-flex flex-column flex-md-row gap-lg-6 gap-4">
                    <div className="input-wrapper alt-color d-grid gap-4 w-100">
                      <label htmlFor="fName">First Name</label>
                      <input
                        type="text"
                        id="fName"
                        placeholder="Jone"
                        name="fName"
                        onChange={handleChange}
                        value={form.fName}
                      />
                    </div>
                    <div className="input-wrapper alt-color d-grid gap-4 w-100">
                      <label htmlFor="lName">Last Name</label>
                      <input
                        type="text"
                        id="lName"
                        placeholder="Fisher"
                        name="lName"
                        onChange={handleChange}
                        value={form.lName}
                      />
                    </div>
                  </div>
                  <div className="input-wrapper alt-color d-grid gap-4 w-100">
                    <label htmlFor="email">Enter Your Email ID</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Your email ID here"
                      name="email"
                      onChange={handleChange}
                      value={form.email}
                    />
                  </div>
                  <div className="input-wrapper alt-color d-grid gap-4 w-100">
                    <label htmlFor="password">Enter Your Password</label>
                    <div className="input-password d-flex align-items-center bgc-1 rounded-pill">
                      <input
                        type="password"
                        id="password"
                        placeholder="Enter password"
                        name="password"
                        onChange={handleChange}
                        value={form.password}
                      />
                      <span
                        className="cursor-pointer px-3"
                        onClick={togglePassword}
                      >
                        {showPassword ? (
                          <i className="ti ti-eye"></i>
                        ) : (
                          <i className="ti ti-eye-closed"></i>
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="input-wrapper alt-color d-grid gap-4 w-100">
                    <label htmlFor="refer">Someone invited you over?</label>
                    <input
                      type="text"
                      id="refer"
                      placeholder="Enter the referral code"
                      name="refer"
                      onChange={handleChange}
                      value={form.refer}
                    />
                  </div>
                </div>
                <p className="my-lg-8 my-sm-6 my-4">
                  By clicking signing up, you agree to our{" "}
                  <Link to="#" className="tcp-1">
                    Terms and Conditions
                  </Link>
                  ,{" "}
                  <Link to="#" className="tcp-1">
                    {" "}
                    Privacy Policy{" "}
                  </Link>
                  , E-sign & Communication Authorization
                </p>
                <button type="submit" className="bttn-1">
                  Sign Up
                  <span className=" icon d-center icon-right">
                    <i className="ti ti-arrow-narrow-right"></i>
                  </span>
                </button>
              </form>
            </div>
          </div>
          <div className="col-xxl-5 col-lg-6">
            <div className="auth-banner">
              <img className="w-100" src={banner} alt="sign up" />
            </div>
          </div>
        </div>
      </div>
      <BottomWave shapeImg={bottomWaveShape} />
    </section>
  );
};

export default SignUp;
