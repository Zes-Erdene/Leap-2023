import About from "@/components/About";
import Header from "@/components/Header";
import Technology from "@/components/Technology";
import Trending from "@/components/Trending";
import AllBlogPost from "@/components/AllBlogPost";
import { Component } from "@/components/Component";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";

const HomePage = () => {
  return (
    <div className=" flex justify-center  w-full mt-1 ">
      <div className="container">
        <Component />
        <Header />
        <Technology />
        <Trending />
        <AllBlogPost />
        <About />
      </div>
    </div>
  );
};

export default HomePage;
