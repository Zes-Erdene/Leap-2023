import {
  Header,
  Profile,
  About,
  Skills,
  Experience,
  Work,
  GetInTouch,
  Footer,
} from "@/component/layout";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="container bg-blue-200">
        <Header />
        <Profile />
        <About />
        <Skills />
        <Experience />
        {/* <Work /> */}
        <GetInTouch />
        <Footer />
      </div>
    </div>
  );
}
