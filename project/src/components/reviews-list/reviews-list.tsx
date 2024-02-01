import React from 'react';
import { Review } from '../../types';
import ReviewsItem from '../reviews-item/reviews-item';

type ReviewsListProps = {
  reviews?: Review[];
};

function ReviewsList({ reviews }: ReviewsListProps) {
  return (
    <ul className="reviews__list">
      {Array.isArray(reviews)
        ? reviews.map((review) => (
          <ReviewsItem key={review.id} review={review} />
        ))
        : null}
    </ul>
  );
}

export default React.memo(ReviewsList);
