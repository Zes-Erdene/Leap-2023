import {
  Header,
  About,
  Work,
  Footer,
  Experience,
  GetInTouch,
  Profile,
  Skill,
} from "@/component/layout";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="container bg-blue-200">
        <Header />
        <Profile />
        <About />
        <Skill />
        <Experience />
        <Work />
        <GetInTouch />
        <Footer />
      </div>
    </div>
  );
}
