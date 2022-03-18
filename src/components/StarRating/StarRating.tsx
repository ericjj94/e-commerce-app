import { useMemo } from "react";

interface StarRatingInterface {
  rating: number;
}

const StarRating = ({ rating }: StarRatingInterface) => {
  if (!rating) {
    return null;
  }

  const createStarRating = useMemo(() => {
    let starsArr = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.round(rating)) {
        starsArr.push(<span className="star">&#9733;</span>);
      } else {
        starsArr.push(<span className="star">&#9734;</span>);
      }
    }
    return starsArr;
  }, [rating]);

  return <>{createStarRating}</>;
};
export default StarRating;
