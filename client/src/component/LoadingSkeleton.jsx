const LoadingSkeleton = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      
      {/* Moving Banner */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gray-800" />
        <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-gray-500/30 to-transparent" />
      </div>

      {/* Optional Center Text */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <p className="text-gray-400 text-lg">Loading...</p>
      </div>

    </div>
  );
};

export default LoadingSkeleton;