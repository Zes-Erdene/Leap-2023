export default function Technology() {
  return (
    <div>
      <div className="flex justify-center w-full h-[600] relative">
        <img src="./Image.svg" alt="" />
        <div className="w-[598px] h-[252px] bottom-5 left-48 rounded-xl bg-white border-sm pl-5 pb-6 absolute ">
          <div className="flex w-28 h-8 rounded-md bg-blue-500 text-white justify-center items-center mt-10">
            Technology
          </div>
          <h3 className="flex font-semibold text-4xl mt-6">
            Grid system for better <br /> Design User Interface
          </h3>
          <p className="font-normal text-sm mt-6">August 20, 2022</p>
        </div>
      </div>
    </div>
  );
}
