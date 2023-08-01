"use client";
import ErrorBoundary from "@components/ErrorBoundary";

function Error(props: ErrorProps) {
  return <ErrorBoundary {...props} />;
}

export default Error;
