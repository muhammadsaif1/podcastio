/* eslint-disable react/prop-types */
const EpisodeNumber = ({
  episode,
  icon,
  iconSize = "fs-lg",
  iconColor = "tcp-1",
  txtColor = "tcn-n0",
}) => {
  return (
    <div className="episode-number d-flex align-items-center gap-2">
      <span className={`${iconSize} lh-0 ${iconColor}`}>{icon}</span>
      <span className={`fs-lg fw-medium text-nowrap ${txtColor}`}>
        {episode}
      </span>
    </div>
  );
};

export default EpisodeNumber;
