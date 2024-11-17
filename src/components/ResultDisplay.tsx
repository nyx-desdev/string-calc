import React from "react";

interface ResultDisplayProps {
  result: number | null;
  error: string | null;
}

export const ResultDisplay: React.FC<ResultDisplayProps> = ({
  result,
  error,
}) => {
  if (!result && !error) return null;

  if (error) {
    return (
      <div className="mt-4 p-4 bg-red-50 rounded-md">
        <p className="text-red-700">{error}</p>
      </div>
    );
  }

  return (
    <div className="mt-4 p-4 bg-green-50 rounded-md">
      <p className="text-green-700">Result: {result}</p>
    </div>
  );
};
