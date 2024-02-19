import Link from "next/link";

const AllBlog = ({ blog }) => {
  return (
    <Link href={{ pathname: "/single-post", query: { id: 22222 } }}>
      <div className="flex justify-center items-center border rounded w-[200px] h-[200px] bg-purple-500">
        <div>just do it</div>
      </div>
    </Link>
  );
};
export default AllBlog;
