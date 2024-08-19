"use client";

import React, { useState, createContext, useContext } from "react";
import { create } from "zustand";
import { Review } from "@/api/types";

const createStore = (reviews: Review[]) =>
  create<{ reviews: Review[]; setReviews: (reviews: Review[]) => void }>(
    (set) => ({
      reviews,
      setReviews(reviews) {
        set({ reviews });
      },
    })
  );

const ReviewsContext = createContext<ReturnType<typeof createStore> | null>(
  null
);

export const useReviews = () => {
  if (!ReviewsContext) {
    throw new Error("useReviews must be used within a ReviewsProvider");
  }

  return useContext(ReviewsContext)!;
};

export const ReviewsProvider = ({
  children,
  initialValue,
}: {
  children: React.ReactNode;
  initialValue: Review[];
}) => {
  const [store] = useState(() => createStore(initialValue));
  return (
    <ReviewsContext.Provider value={store}>{children}</ReviewsContext.Provider>
  );
};
