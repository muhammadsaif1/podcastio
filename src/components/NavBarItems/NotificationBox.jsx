const NotificationBox = ({ modal, setModal }) => {
  return (
    // <!-- notification content area -->
    <div
      className={`notification-box p-lg-5 p-sm-3 p-1 border bc-n400 rounded-3 bgc-2 ${
        modal && "active"
      }`}
    >
      <div className="notification-content">
        <div className="d-between">
          <span className="fs-five fw-medium">Notification</span>
          <button className="ntf-close-btn" onClick={() => setModal(false)}>
            <i className="ti ti-x"></i>
          </button>
        </div>
        <span className="d-block border-dashed my-lg-6 my-sm-4 my-2"></span>
        <div className="notification-list">
          <span className="fs-lg fw-medium">No New Notification</span>
        </div>
        <span className="d-block border-dashed my-lg-6 my-sm-4 my-2"></span>
        <div className="d-between">
          <button className="bttn-2">Mark all as read</button>
          <button className="bttn-2 bttn-outline">See all</button>
        </div>
      </div>
    </div>
  );
};

export default NotificationBox;
