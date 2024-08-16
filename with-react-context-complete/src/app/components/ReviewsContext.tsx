"use client";

import React, { useState, createContext } from "react";
import { Review } from "@/api/types";

const useReviewsState = (reviews: Review[]) => useState<Review[]>(reviews);

const ReviewsContext = createContext<ReturnType<typeof useReviewsState> | null>(
  null
);

export const useReviews = () => {
  const reviews = React.useContext(ReviewsContext);
  if (!reviews) {
    throw new Error("useReviews must be used within a ReviewsProvider");
  }

  return reviews;
};

export const ReviewsProvider = ({
  children,
  initialValue,
}: {
  children: React.ReactNode;
  initialValue: Review[];
}) => {
  const [reviews, setReviews] = useReviewsState(initialValue);
  return (
    <ReviewsContext.Provider value={[reviews, setReviews]}>
      {children}
    </ReviewsContext.Provider>
  );
};
