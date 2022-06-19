import { CircularProgress } from "@mui/material";
import React from "react";

const withSuspense = (Component: React.ComponentType) => {
  return (
    <React.Suspense fallback={<CircularProgress />}>
      <Component />
    </React.Suspense>
  );
};

export default withSuspense;
