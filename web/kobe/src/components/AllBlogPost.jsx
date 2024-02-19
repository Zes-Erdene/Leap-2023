const AllBlogPost = () => {
  return (
    <div className="flex-col gap-20">
      <div className="flex font-bold mt-20">
        <h2 className="flex mt-20 ml-40 mb-10 font-bold">All Blog Post</h2>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-3 items-start mb-10 ml-40 text-xs font-bold">
          <h3>All</h3>
          <h3>Design</h3>
          <h3>Travel</h3>
          <h3>Fashion</h3>
          <h3>Technology</h3>
          <h3>Branding</h3>
        </div>
        <div>
          <h3 className="flex mr-40 text-xs font-bold">View all</h3>
        </div>
      </div>
      <div className="flex-col gap-20">
        <div className="flex w-full justify-center gap-14 ">
          <div className="flex-col gap-10 ">
            <img src="/sea.svg" alt="" />
            <button className="flex justify-center items-center text-blue-700 ml-50 rounded-xl mt-225 bg-slate-200 mt-10 mb-10 w-28 h-8  ">
              Technology
            </button>
            <h2 className="font-semibold text-2xl">
              The Impact of Technology on <br /> the Workplace: How <br />{" "}
              Technology is Changing
            </h2>
            <p className="font-normal text-base mt-6 mb-10">August 20, 2022</p>
          </div>
          <div>
            <img src="/city.svg" alt="" />
            <button className="flex justify-center items-center text-blue-700 ml-50 rounded-xl mt-225 bg-slate-200 mt-10 mb-10 w-28 h-8  ">
              Design
            </button>
            <h2 className="font-semibold text-2xl">
              The Impact of Technology on <br /> the Workplace: How <br />{" "}
              Technology is Changing
            </h2>
            <p className="font-normal text-base mt-6 mb-10">August 20, 2022</p>
          </div>
          <div>
            <img src="/car.svg" alt="" />
            <button className="flex justify-center items-center text-blue-700 ml-50 rounded-xl mt-225 bg-slate-200 mt-10 mb-10 w-28 h-8  ">
              Technology
            </button>
            <h2 className="font-semibold text-2xl">
              The Impact of Technology on <br /> the Workplace: How <br />{" "}
              Technology is Changing
            </h2>
            <p className="font-normal text-base mt-6 mb-10">August 20, 2022</p>
          </div>
        </div>

        <div className="flex w-full justify-center gap-14 ">
          <div className="flex-col w-[392px] h-[476px] gap-10 border-solid bg-white  rounded-xl">
            <img src="/house.svg" alt="" />
            <button className="flex justify-center items-center text-blue-700 ml-50 rounded-xl mt-225 bg-slate-200 mt-10 mb-10 w-28 h-8  ">
              Technology
            </button>
            <h2 className="font-semibold text-2xl">
              The Impact of Technology on <br /> the Workplace: How <br />{" "}
              Technology is Changing
            </h2>
            <p className="font-normal text-base mt-6 mb-10">August 20, 2022</p>
          </div>
          <div>
            <img src="/sky.svg" alt="" />
            <button className="flex justify-center items-center text-blue-700 ml-50 rounded-xl mt-225 bg-slate-200 mt-10 mb-10 w-28 h-8  ">
              Software
            </button>
            <h2 className="font-semibold text-2xl">
              The Impact of Technology on <br /> the Workplace: How <br />{" "}
              Technology is Changing
            </h2>
            <p className="font-normal text-base mt-6 mb-10">August 20, 2022</p>
          </div>
          <div>
            <img src="/car2.svg" alt="" />
            <button className="flex justify-center items-center text-blue-700 ml-50 rounded-xl mt-225 bg-slate-200 mt-10 mb-10 w-28 h-8  ">
              Technology
            </button>
            <h2 className="font-semibold text-2xl">
              The Impact of Technology on <br /> the Workplace: How <br />{" "}
              Technology is Changing
            </h2>
            <p className="font-normal text-base mt-6 mb-10">August 20, 2022</p>
          </div>
        </div>
        <div className="flex w-full justify-center gap-14 ">
          <div className="flex-col w-[392px] h-[476px] gap-10 border-solid bg-white  rounded-xl">
            <img src="/phone.svg" alt="" />
            <button className="flex justify-center items-center text-blue-700 ml-50 rounded-xl mt-225 bg-slate-200 mt-10 mb-10 w-28 h-8  ">
              Technology
            </button>
            <h2 className="font-semibold text-2xl">
              The Impact of Technology on <br /> the Workplace: How <br />{" "}
              Technology is Changing
            </h2>
            <p className="font-normal text-base mt-6 mb-10">August 20, 2022</p>
          </div>
          <div>
            <img src="/lake.svg" alt="" />
            <button className="flex justify-center items-center text-blue-700 ml-50 rounded-xl mt-225 bg-slate-200 mt-10 mb-10 w-28 h-8  ">
              Technology
            </button>
            <h2 className="font-semibold text-2xl">
              The Impact of Technology on <br /> the Workplace: How <br />{" "}
              Technology is Changing
            </h2>
            <p className="font-normal text-base mt-6 mb-10">August 20, 2022</p>
          </div>
          <div>
            <img src="/ps.svg" alt="" />
            <button className="flex justify-center items-center text-blue-700 ml-50 rounded-xl mt-225 bg-slate-200 mt-10 mb-10 w-28 h-8  ">
              Technology
            </button>
            <h2 className="font-semibold text-2xl">
              The Impact of Technology on <br /> the Workplace: How <br />{" "}
              Technology is Changing
            </h2>
            <p className="font-normal text-base mt-6 mb-10">August 20, 2022</p>
          </div>
        </div>
      </div>

      <button className="flex mt-30 rounded-xl mt-225 border-grey-300 border-2 w-32 h-12 items-center justify-center ml-[50%]">
        Load More
      </button>
    </div>
  );
};
export default AllBlogPost;
