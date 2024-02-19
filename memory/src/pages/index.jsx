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
// import Image from "next/image";
// import {Inter} from "next/font/google"
// import { useEffect, useState } from "react";
// import { document } from "postcss";

// const inter = Inter({subsets:["latin"]});
// export default function Home() {
//   const [isDarkMode, setDarkMode] = useState (false);

//   useEffect(() => {
//     const isDark = localStorage.getItem("darkmode") ==="true";
//     setDarkMode(isDark);
//   },[]);

//   useEffect(()=>{
//     document.documentElement.classList.toggle("dark", isDarkMode);
//     localStorage.setItem("darkMode, isDarkMode");
//     localStorage.setItem("hello", "leap");
//   },[isDarkMode]);

//   return (
//     <div>
//       <button onClick={()=>setDarkMode((prevState)=>!prevState)}>Switch dark mode{" "}</button>
//       <p className="dark:bg-green-200">{isDarkMode ? "dark":"white"}</p>
//     </div>
//   )
// }

export default function Gas() {
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
