const Heading = ({ HeadType = "span", headText, headClass, charLimit }) => {
  return (
    <HeadType className={headClass}>
      {headText?.length > charLimit
        ? headText?.substring(0, charLimit) + "..."
        : headText}
    </HeadType>
  );
};

export default Heading;
