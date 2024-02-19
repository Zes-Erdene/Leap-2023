export const GetInTouch = () => {
  return (
    <div>
      <div className="flex w-full justify-center items-center h-[100px] ">
        <button className="flex justify-center items-center ml-50 rounded-xl mt-225 bg-slate-400 w-28 h-8  ">
          Get in touch
        </button>
      </div>
      <div className="text-center mt-10">
        <p>
          What’s next? Feel free to reach out to me if you're looking for <br />{" "}
          a developer, have a query, or simply want to connect.
        </p>
      </div>
      <div className="flex-column gap-1">
        <div className="flex justify-center mt-20 gap-5">
          <div>
            <img src="/Icon.svg" alt="" />
          </div>
          <div>reachsagarshah@gmail.com</div>
          <div>
            <img src="/Icon.jpg" alt="" />
          </div>
        </div>
        <div className="flex justify-center mt-20 gap-5">
          <div>
            <img src="/Icon copy 2.svg" alt="" />
          </div>
          <div>
            <p>+91 8980500565</p>
          </div>
          <div>
            <img src="/Icon copy.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="flex justify-center text-center mt-10">
          You may also find me on these platforms!
        </div>
      <div className="flex justify-center gap-3 mt-5">
        <div>
          <img src="/Icon copy 3.svg" alt="" />
        </div>
        <div>
          <img src="/Icon copy 4.svg" alt="" />
        </div>
        <div>
          <img src="/Icon copy 5.svg" alt="" />
        </div>
      </div>
      <div className="flex justify-center mt-28">
        <div><img src="/Icon copy 6.svg" alt="" /></div>
        <div>2023 | Designed and coded with ❤️️ by Sagar Shah</div>
      </div>
    </div>
  );
};
