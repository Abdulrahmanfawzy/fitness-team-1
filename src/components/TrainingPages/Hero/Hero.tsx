import img from "../../../assets/TrainingPage/hero.gif";

const Hero = () => {
  return (
    <div
      className="aspect-[16/9] lg:h-[589px] w-full  bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `linear-gradient(to bottom, #1E293B00, #121212), url(${img})`,
      }}
    />
  );
};

export default Hero;
