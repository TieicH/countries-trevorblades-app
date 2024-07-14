import { Skeleton } from "./skeleton";

export const CountrySkeleton = () => {
  return (
    <div
      data-testid="skeleton"
      className="border-2 border-gray-200 rounded-md w-[350px] h-[240px] p-4"
    >
      <div className="flex items-start mb-6">
        <Skeleton className="w-[45px] h-[28px] mr-2" />
        <Skeleton className="w-[120px] h-[28px]" />
      </div>
      <div className="flex items-start mb-2">
        <Skeleton className="w-[45px] h-[20px] mr-1" />
        <Skeleton className="w-[45px] h-[20px]" />
      </div>
      <div className="flex items-start mb-2">
        <Skeleton className="w-[55px] h-[20px] mr-1" />
        <Skeleton className="w-[70px] h-[20px]" />
      </div>
      <div className="flex items-start mb-2">
        <Skeleton className="w-[55px] h-[20px] mr-1" />
        <Skeleton className="w-[90px] h-[20px]" />
      </div>
      <div className="flex items-start mb-2">
        <Skeleton className="w-[65px] h-[20px] mr-1" />
        <Skeleton className="w-[60px] h-[20px]" />
      </div>
      <div className="flex items-start mb-2">
        <Skeleton className="w-[45px] h-[20px] mr-1" />
        <Skeleton className="w-[85px] h-[20px]" />
      </div>
    </div>
  );
};
