const FooterWidget = ({ data }) => {
  // console.log(data);
  return (
    <div className="footer-widget">
      <h4 className="widget-title mb-lg-6 mb-4 fw-semibold">{data?.title}</h4>
      <ul className="footer-menu d-grid gap-3">
        {data?.items?.map((item, index) => {
          return (
            <li key={index} className="d-flex align-items-center gap-3">
              {item?.isLink ? (
                item?.hasIcon ? (
                  <span className="tcp-1 fs-lg">
                    <i className={item?.icon}></i>
                  </span>
                ) : null
              ) : item?.hasIcon ? (
                <span className="tcp-1 fs-lg">
                  <i className={item?.icon}></i>
                </span>
              ) : null}
              {item?.isLink ? (
                <a href={item?.link}>{item?.title}</a>
              ) : (
                <span>{item?.title}</span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterWidget;
