import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import toast, { Toaster } from "react-hot-toast";

const TwoFactorAuthentication = () => {
  const [qrCode, setQrCode] = useState("");
  const [setupKey, setSetupKey] = useState("6f9e6b6c4b6d6e6f");
  const [authKey, setAuthKey] = useState("");

  // copy setup key
  const copySetupKey = () => {
    navigator.clipboard.writeText(setupKey);
  };

  // handle auth key
  const handleAuthKey = (e) => {
    e.preventDefault();
    setAuthKey(e.target.value);
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (authKey.length < 6) {
      toast.error("Invalid code");
      return;
    }
    toast.success("Authentication successful");
  };

  useEffect(() => {
    setQrCode(setupKey);
  }, [setupKey]);
  return (
    <>
      <div className="main-content-area p-lg-6 p-4 rounded-3 bgc-2 border bc-n400">
        <div className="row g-6">
          <div className="col-md-6">
            <div className="p-lg-6 p-sm-4 p-2 rounded-3 border  bc-n500 bgc-4">
              <span className="fs-four fw-semibold mb-lg-6 mb-4">
                Two Factor Authentication
              </span>
              <p>
                Use the QR code or setup key on your Google Authentication app
                to add your account.
              </p>
              <span className="d-block border-dashed my-lg-8 my-4"></span>
              {/* <!-- qr code area  --> */}
              <div className="qr-code-area rounded bgc-3 p-xxl-8 p-lg-6 p-sm-4 p-2">
                <div className="qr-code mx-auto">
                  <QRCode className="w-100" value={qrCode} size={320} />
                </div>
              </div>
              <div className="mt-lg-8 mt-4">
                <span className="d-block fs-lg fw-medium mb-lg-4 mb-2">
                  setup key
                </span>
                <div className="d-between px-lg-6 px-sm-4 px-2 py-2 gap-2 bgc-3 rounded-pill">
                  <span className="fs-sm">{setupKey}</span>
                  <button
                    onClick={() => {
                      copySetupKey();
                      toast.success("Copied!");
                    }}
                  >
                    <i className="ti ti-copy"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-lg-6 p-sm-4 p-2 rounded-3 border bc-n500 bgc-4">
              <span className="fs-four fw-semibold mb-lg-6 mb-4">
                Enable 2FA Security
              </span>
              <p>
                Use the QR code or setup key on your Google Authentication app
                to add your account.
              </p>
              <span className="d-block border-dashed my-lg-8 my-4"></span>
              <span className="d-block fs-lg fw-medium mb-lg-4 mb-2">
                Google Authentication OTP
                <span className="tcp-3">*</span>
              </span>
              {/* <!-- Google Authentication --> */}
              <form action="#" onSubmit={handleSubmit}>
                <div className="input-wrapper">
                  <input
                    type="text"
                    placeholder="0000"
                    onChange={handleAuthKey}
                    value={authKey}
                  />
                </div>
                <button type="submit" className="bttn-2 mt-lg-8 mt-4">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
};

export default TwoFactorAuthentication;
