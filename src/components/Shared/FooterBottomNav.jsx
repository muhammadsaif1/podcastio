const FooterBottomNav = ({ items }) => {
  return (
    <ul className="footer-menu d-flex gap-lg-6 gap-sm-4 gap-2">
      {items?.map((item, index) => {
        return (
          <li key={index}>
            <a href={item?.link} className="link-text">
              {item?.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default FooterBottomNav;
