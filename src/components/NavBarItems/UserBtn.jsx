import { useRef, useState } from "react";
import user from "../../images/user-1.png";
import ProfileBox from "./ProfileBox";
import useOnClickOutside from "../../hooks/useOnClickOutside/useOnClickOutside";

const UserBtn = () => {
  const [activeModal, setActiveModal] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, () => setActiveModal(false));

  return (
    <div ref={ref}>
      <button
        className="user-profile-btn"
        onClick={() => setActiveModal(!activeModal)}
      >
        <img className="w-100 rounded-circle" src={user} alt="user" />
      </button>

      <ProfileBox modal={activeModal} setModal={setActiveModal} user={user} />
    </div>
  );
};

export default UserBtn;
