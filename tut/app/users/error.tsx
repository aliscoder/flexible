"use client";

import ErrorBoundary from "@components/ErrorBoundary";

const Error = (props: ErrorProps) => {
  return <ErrorBoundary {...props} />;
};

export default Error;
