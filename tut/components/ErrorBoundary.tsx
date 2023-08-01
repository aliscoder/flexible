"use client";

import { FC } from "react";

const ErrorBoundary: FC<ErrorProps> = ({ error, reset }) => {
  return (
    <div className="flex flex-1 justify-center items-center w-full h-full">
      <h2>{error.message}</h2>
      <button onClick={reset}>Try again</button>
    </div>
  );
};

export default ErrorBoundary;
