import Link from "next/link";
import HeaderLogo from "./logo";
const Header = () => {
  return (
    <div className="flex justify-between items-center mt-10  w-full">
      <div className="flex gap-[200px] p-[20px] w-[50%] items-center ">
        <HeaderLogo />
        <button>Home</button>
        <Link href="/ALL">
          <button>Blog</button>
        </Link>
        <button>Contact</button>
        <div className="h-[60px] p-20 text-xl gap-5 flex items-center">
          <input
            type="text"
            className=" placeholder-gray-900 text-gray-900 p-4 rounded-[10px] bg-gray-500 "
            placeholder="Search"
          />
          <button className="bg-black border-2 p-4 rounded-[20px] hover:bg-gray-500">
            🔍
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
