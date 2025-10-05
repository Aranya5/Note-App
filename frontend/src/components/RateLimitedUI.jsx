import {ZapIcon} from "lucide-react";

const RateLimitedUI = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 min-h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        <ZapIcon className="mx-auto mb-4 size-10 text-yellow-500" />
        <h2 className="text-2xl font-bold mb-2">Rate Limit Exceeded</h2>
        <p className="text-gray-600 mb-4">
          You've made too many requests in a short period. Please wait a moment before trying again.
        </p>
        <p className="text-sm text-gray-500">
          Try again in a few minutes.
        </p>
      </div>
    </div>
  );
};

export default RateLimitedUI;   