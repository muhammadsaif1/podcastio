/* eslint-disable react/prop-types */
const SectionHeading = ({
  subTxt, // sub heading
  headTxt, // heading
  HeadingType = "span",
  icon, // icon
  headFs, // heading font size
  fw = "fw-bold", // heading font weight
  headColor = "tcn-0", // heading color
  altBrdColor = "", // sub heading alternate border color
  descText, // description
  alignItems = "left", // align items
  descClass = "", // description class
  padding = "", // heading padding
  highlightWord = "", // highlight word
  highlightColor = "", // highlight color
}) => {
  return (
    <div className={`section-heading text-${alignItems}`}>
      {subTxt && (
        <span
          className={`subheading-border fs-xl fw-medium mb-4 ${altBrdColor}`}
        >
          <span className="fs-2xl">{icon}</span>
          {subTxt}
        </span>
      )}
      <HeadingType className={`${headFs} ${fw} ${padding} ${headColor}`}>
        {headTxt}
        {highlightWord && (
          <span className={`${highlightColor}`}> {highlightWord}</span>
        )}
      </HeadingType>
      {descText && <p className={`fw-normal ${descClass}`}>{descText}</p>}
    </div>
  );
};

export default SectionHeading;
