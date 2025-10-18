const StarRating = ({ rating, style }) => {
  const filledStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - filledStars - (halfStar ? 1 : 0);

  const starsArray = Array.from({ length: filledStars }, (_, index) => (
    <i key={index} className="ti ti-star-filled"></i>
  ));

  if (halfStar) {
    starsArray.push(<i key="half" className="ti ti-star-half-filled"></i>);
  }

  starsArray.push(
    ...Array.from({ length: emptyStars }, (_, index) => (
      <i key={`empty-${index}`} className="ti ti-star"></i>
    ))
  );

  return <div className={`${style}`}>{starsArray}</div>;
};

export default StarRating;
