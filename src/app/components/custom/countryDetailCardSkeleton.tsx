import { Skeleton } from "../ui/skeleton";

export const CountryDetaildCardSkeleton = () => {
  return (
    <div
      data-testid="skeleton"
      className="mt-[4rem] flex items-center justify-start flex-col"
    >
      <div className="flex items-center justify-start flex-col border-2 border-gray-500 w-fit py-5 px-12 rounded-lg">
        <div className="flex items-start mb-6">
          <Skeleton className="w-[80px] h-[35px] mr-2" />
          <Skeleton className="w-[200px] h-[35px]" />
        </div>
        <div className="flex items-start mb-2">
          <Skeleton className="w-[50px] h-[30px] mr-1" />
          <Skeleton className="w-[55px] h-[30px]" />
        </div>
        <div className="flex items-start mb-2">
          <Skeleton className="w-[70px] h-[30px] mr-1" />
          <Skeleton className="w-[120px] h-[30px]" />
        </div>
        <div className="flex items-start mb-2">
          <Skeleton className="w-[75px] h-[30px] mr-1" />
          <Skeleton className="w-[65px] h-[30px]" />
        </div>
        <div className="flex items-start mb-2">
          <Skeleton className="w-[65px] h-[30px] mr-1" />
          <Skeleton className="w-[120px] h-[30px]" />
        </div>
        <div className="flex items-start mb-2">
          <Skeleton className="w-[75px] h-[30px] mr-1" />
          <Skeleton className="w-[90px] h-[30px]" />
        </div>
      </div>
      <div className="flex items-start mt-4">
        <Skeleton className="w-[70px] h-[38px]" />
      </div>
    </div>
  );
};
