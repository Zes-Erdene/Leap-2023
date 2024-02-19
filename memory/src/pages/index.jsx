import {
  Header,
  Profile,
  About,
  Skills,
  Experience,
  Work,
  GetInTouch,
  Footer,
} from "@/components/layout";

export default function Home() {
  return (
    <div className=" flex justify-center items-center">
      <div className="container">
        <Header />
        <Profile />
        <About />
        <Skills />
        <Experience />
        <Work />
        <GetInTouch />
        <Footer />
      </div>
    </div>
  );
}
