export const Experience = () => {
  return (
    <div className="flex-column justify-center w-full h-auto gap-30">
      <div className="flex w-full justify-center items-center h-[100px] ">
        <button className="flex justify-center ml-50 rounded-xl mt-225 bg-slate-400 w-28 h-8  ">
          Experience
        </button>
      </div>
      <div>
        <p className="flex justify-center">
          Here is a quick summary of my most recent experiences:
        </p>
      </div>
      <div className="flex items-start justify-between">
        <div>
          <img src="/logo-upwork.svg" alt="" />
        </div>
        <div className="flex-column w-[384] h-[48] gap-20 mt-10">
          <div className="text-sm font-semibold">Sr. Frontend Developer</div>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          <div>Ut pretium arcu et massa semper, id fringilla leo semper.</div>
          <div>Sed quis justo ac magna.</div>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>

        <div>
          <p className="font-normal text-sm">Nov 2021 - Present</p>
        </div>
      </div>
      <div className="flex items-start justify-between">
        <div>
          <img src="/logo-upwork.svg" alt="" />
        </div>
        <div className="flex-column w-[384] h-[48] gap-20 mt-10">
          <div className="text-sm font-semibold">Team Lead</div>
          <div>Sed quis justo ac magna.</div>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          <div>Sed quis justo ac magna.</div>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>

        <div>
          <p className="font-normal text-sm">Jul 2017 - Oct 2021</p>
        </div>
      </div>
      <div className="flex items-start justify-between">
        <div>
          <img src="/logo-upwork.svg" alt="" />
        </div>
        <div className="flex-column w-[384] h-[48] gap-20 mt-10 mr-30">
          <div className="text-sm font-semibold">Full Stack Developer</div>
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Lorem
          ipsum dolor sit amet,
          <br /> consectetur adipiscing elit.
        </div>

        <div>
          <p className="font-normal text-sm">Dec 2015 - May 2017</p>
        </div>
      </div>
    </div>
  );
};
