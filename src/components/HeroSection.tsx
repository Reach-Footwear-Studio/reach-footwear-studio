import heroImage from "@/assets/heroimage.png";

const HeroSection = () => {
  return (
    <section className="w-full bg-white">
      {/* Hidden H1 for SEO – no UI change */}
      <h1 className="sr-only">
        REACH Footwear Studio – 3D Footwear Design & Visualization Software
      </h1>

      {/* Hero Wrapper */}
      <div
        className="
          relative
          w-full
          flex
          items-center
          justify-center
          overflow-hidden
        "
        style={{
          aspectRatio: "16 / 9", // keeps image proportion
        }}
      >
        {/* Hero Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
