import { useState } from "react";
import { Link } from "react-router-dom";

import TopWave from "@/components/Shared/TopWave";
import BottomWave from "@/components/Shared/BottomWave";
import shape1 from "@/images/shape-1.png";
import shape2 from "@/images/shape-2.png";
import shape3 from "@/images/shape-3.png";
import topWaveShape from "@/images/top-wave-shape-2.png";
import bottomWaveShape from "@/images/bottom-wave-shape-2.png";
import banner from "@/images/sign-up-img.png";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    // console.log(form);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setForm({ email: "", password: "" });
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
                  <h3 className="mb-4">Welcome Back!</h3>
                  <p>Sign in to your account and join us</p>
                </div>
                <div className="d-grid gap-lg-6 gap-4">
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
                </div>
                <div className="mt-4 mb-lg-10 mb-sm-8 mb-6">
                  <Link
                    to="#"
                    className="forgot-password d-block text-end fw-normal"
                  >
                    Forgot Password?
                  </Link>
                  <p>
                    Don’t have an account?{" "}
                    <Link to="/register" className="tcp-1">
                      Sign Up
                    </Link>
                  </p>
                </div>
                <button type="submit" className="bttn-1">
                  Sign In
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

export default SignIn;
