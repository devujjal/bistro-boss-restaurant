
const Loader = () => {
    return (
        <div className="w-full border max-w-sm border-gray-200 rounded-md shadow-md">
            {/* <!-- Image Skeleton --> */}
            <div className="bg-gray-300 rounded-md min-h-[245px] w-full animate-pulse"></div>

            {/* <!-- Title Skeleton --> */}
            <div className="p-5 mt-4">
                <div className="bg-gray-300 h-4 w-3/4 rounded animate-pulse"></div>
            </div>

            {/* <!-- Description Skeleton --> */}
            <div className="px-5 mt-2 space-y-2">
                <div className="bg-gray-300 h-3 w-full rounded animate-pulse"></div>
                <div className="bg-gray-300 h-3 w-full rounded animate-pulse"></div>
                <div className="bg-gray-300 h-3 w-5/6 rounded animate-pulse"></div>
                <div className="bg-gray-300 h-3 w-2/3 rounded animate-pulse"></div>
            </div>

            {/* <!-- Button Skeleton --> */}
            <div className="mt-4">
                <div className="bg-gray-300 h-10 w-full rounded-md animate-pulse"></div>
            </div>
        </div>

    );
};

export default Loader;