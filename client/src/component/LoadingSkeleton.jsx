const LoadingSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <div className="w-full max-w-4xl p-6 bg-[#273449] rounded-2xl shadow-lg space-y-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="h-10 w-1/3 rounded-lg bg-gray-700 animate-pulse" />

        <div className="space-y-4">
          <div className="h-4 w-full rounded bg-gray-700 animate-pulse" />
          <div className="h-4 w-11/12 rounded bg-gray-700 animate-pulse" />
          <div className="h-4 w-10/12 rounded bg-gray-700 animate-pulse" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="h-28 rounded-xl bg-gray-700 animate-pulse" />
          <div className="h-28 rounded-xl bg-gray-700 animate-pulse" />
          <div className="h-28 rounded-xl bg-gray-700 animate-pulse" />
        </div>
      </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
