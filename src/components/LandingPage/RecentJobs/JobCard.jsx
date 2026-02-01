



import React from "react";

const RecentJobCard = ({ job }) => {
  // timeago calculation function

  function timeAgo(dateString) {
    const now = new Date();
    const pubDate = new Date(dateString);
    const diffMs = now - pubDate; // difference in milliseconds

    const seconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
  }



  return (
    <div className="container mx-auto py-6 px-4 sm:py-8 md:py-10">
      <div className="flex flex-col gap-6 bg-zinc-100 shadow-md shadow-black/30 py-6 px-5 rounded-3xl sm:py-8 sm:px-8 md:flex-row md:justify-between md:py-10 md:px-10">
        <div className="flex flex-col gap-4">
          {/* time */}
          <div>
            <span className="inline-block text-sm sm:text-base md:text-lg lg:text-xl text-teal-700 bg-teal-100 px-2 py-1 rounded-xl">
              {timeAgo(job.publication_date)}
            </span>
          </div>

          {/* details and info */}
          <div className="flex justify-start items-start gap-3">
            <img
              src={job.company_logo}
              alt="Job logo"
              className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 object-contain "
            />
            {/* title  and company name */}
            <div className="flex gap-2 flex-col">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
                {job.title}
              </h2>
              <p className="text-sm sm:text-base text-zinc-600">
                {job.company_name}
              </p>
            </div>
          </div>

          {/* icons */}
          <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6">
            <div className="flex gap-2 items-center">
              <img
                src="recent_job/category.png"
                alt="Category icon"
                className="h-4 w-4 sm:h-5 sm:w-5"
              />
              <h3 className="text-xs sm:text-sm md:text-base font-semibold text-zinc-500">
                {job.category}
              </h3>
            </div>

            <div className="flex gap-2 items-center">
              <img
                src="recent_job/clock.png"
                alt="Time icon"
                className="h-4 w-4 sm:h-5 sm:w-5"
              />
              <h3 className="text-xs sm:text-sm md:text-base font-semibold text-zinc-500">
                {job.job_type}
              </h3>
            </div>

            <div className="flex gap-2 items-center">
              <img
                src="recent_job/salary.png"
                alt="Category icon"
                className="h-4 w-4 sm:h-5 sm:w-5"
              />
              <h3 className="text-xs sm:text-sm md:text-base font-semibold text-zinc-500">
                {job.salary}
              </h3>
            </div>

            <div className="flex gap-2 items-center">
              <img
                src="recent_job/location.png"
                alt="Category icon"
                className="h-4 w-4 sm:h-5 sm:w-5"
              />
              <h3 className="text-xs sm:text-sm md:text-base font-semibold text-zinc-500">
                {job.candidate_required_location}
              </h3>
            </div>
          </div>
        </div>

        {/* jobdetails button */}
        <div className="flex flex-row-reverse justify-between items-center gap-4 md:flex-col md:justify-between md:items-end">
          <img
            src="recent_job/bookmarks.png"
            alt="Bookmark"
            className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 cursor-pointer hover:opacity-80 transition-opacity"
          />
          <button className="px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 bg-teal-500 rounded-2xl text-zinc-50 text-sm sm:text-base font-semibold hover:bg-teal-400 cursor-pointer transition-all duration-300">
            Job Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentJobCard;