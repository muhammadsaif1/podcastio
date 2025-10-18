import { useRef, useState } from "react";
import NotificationBox from "./NotificationBox";
import useOnClickOutside from "../../hooks/useOnClickOutside/useOnClickOutside";

const NotificationBtn = () => {
  const [activeModal, setActiveModal] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, () => setActiveModal(false));
  return (
    <div ref={ref}>
      <button
        className="notification"
        onClick={() => setActiveModal(!activeModal)}
      >
        <span className="d-center fs-lg">
          <i className="ti ti-bell"></i>
        </span>
        <span className="badge d-center">
          <span className="tcn-900 fs-base">0</span>
        </span>
      </button>

      <NotificationBox modal={activeModal} setModal={setActiveModal} />
    </div>
  );
};

export default NotificationBtn;
