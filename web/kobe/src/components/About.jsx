const About = () => {
  return (
    <div className="flex-col justify-evenly mt-20">
      <div className="flex justify-between items-start">
      <div className="flex-col">
        <h2 className="flex mb-10">About</h2>
        <p className="flex mb-10">
          Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed do{" "}
          <br /> eiusmod tempor incididunt ut <br /> labore et dolore magna
          aliqua. Ut <br /> enim ad minim veniam
        </p>
        <p>Email : info@jstemplate.net</p>
        <p>Phone : 880 123 456 789</p>
      </div>
      <div className="flex-col gap-5">
        <h3>Home</h3>
        <h3>Blog</h3>
        <h3>Contact</h3>
      </div>
      <div className="flex gap-6">
        <img src="fb.svg" alt="" />
        <img src="/twitter.svg" alt="" />
        <img src="/ig.svg" alt="" />
        <img src="/in.svg" alt="" />
      </div>
      </div>
      <div className="flex justify-between items-center mt-20 mb-20">
        <img src="/cr.svg" alt="" />
        <div className="flex justify-end gap-5">
          <h3>Terms of Service</h3>
          <h3>Privacy Policy</h3>
          <h3>Cookie of Policy</h3>
        </div>
      </div>
    </div>
  );
};
export default About;
