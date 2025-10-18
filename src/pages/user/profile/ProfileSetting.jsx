import ProfileSetup from "./ProfileSetup";
import AddressSetup from "./AddressSetup";
import PrivacySetup from "./PrivacySetup";
import AccountSetup from "./AccountSetup";

const ProfileSetting = () => {
  return (
    <>
      <div className="main-content-area d-grid gap-lg-6 gap-4">
        <ProfileSetup />
        <AddressSetup />
        <PrivacySetup />
        <AccountSetup />
      </div>
    </>
  );
};

export default ProfileSetting;
