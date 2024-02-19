export const About = () => {
  return (
    <div className=" flex justify-center bg-white-500 mt-40 mb-40 flex-col w-full h-auto gap-8">
      <div className="flex w-full justify-center items-center h-[100px] ">
        <button className="flex justify-center ml-50 rounded-xl mt-225 bg-slate-400 w-28 h-8  ">
          About me
        </button>
      </div>
      <div className="flex justify-evenly gap-5 mb-20">
        <div>
          <img
            className="h-[480px] w-[400px]  divide-solid border-white"
            src="https://s3-alpha-sig.figma.com/img/8781/bda6/7a25952db5724f48492cd455a6e81952?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aSfhLZtcbWepE8jTdemSJ7uPJU9HXeqxJMVQPYeAgzYFOakdCRvlW9uGij7zTHRSMhYllLhW5y2hjm9ISN0CIYaKKcWzRMid12G922FrH0ZZ8Ep0gQkkzb34xcm7ABs7~iwYt17s8l-6PWEARhdfaozA~ioZ31OHmlVlcI2Lrfjh2f2oQ4X3YhYM3ECXycJ7nkD90G4Tk6ns7aAgSsdYWQPxPYH05HVEzpFAmvQmh0uuHNEZSl-zm~uzG4G22EsPyej5ECmtQfavvC18wfCw7WKYecOnsRrW08KFYDAu3AFJ6A~vdZznnLI4XLq8jop8-oJSWkbK2eItsRQ4I23-jA__"
            alt=""
          />
        </div>
        <div className="flex-column">
          <div className="text-3xl font-bold">
            Curious about me? Here you have it:
          </div>
          <div className="w-[584px] h-[634px] mt-6 gap-16">
            <div>
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.
            </div>
            <div>
              I began my journey as a web developer in 2015, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I'm building cutting-edge web applications
              using modern technologies such as Next.js, TypeScript, Nestjs,
              Tailwindcss, Supabase and much more.
            </div>
            <div>
              I am very much a progressive thinker and enjoy working on products
              end to end, from ideation all the way to development.
            </div>
            <div>
              When I'm not in full-on developer mode, you can find me hovering
              around on twitter or on indie hacker, witnessing the journey of
              early startups or enjoying some free time. You can follow me on
              Twitter where I share tech-related bites and build in public, or
              you can follow me on GitHub.
            </div>
            <div>Finally, some quick bits about me.</div>
            <div>
              B.E. in Computer Engineering Avid learner Full time freelancer
              Aspiring indie hacker
            </div>
            <div>
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite 😉
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
