import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLongArrowAltRight } from "react-icons/fa";

const sliderItems = [
  {
    id: 1,
    img: "https://ebook-public-data.s3.amazonaws.com/669e469bf094674648c4cac8-murder-on-the-orient-express.png",
    title: "Unravel the mystery, ride the Orient Express!",
    desc: "A thrilling journey through intrigue and deception.",
  },
  {
    id: 2,
    img: "https://ebook-public-data.s3.amazonaws.com/669e469bf094674648c4cac9-to-kill-a-mockingbird.png",
    title: "Discover courage in a small town.",
    desc: "A timeless tale of justice and compassion.",
  },
  {
    id: 3,
    img: "https://ebook-public-data.s3.amazonaws.com/669e469bf094674648c4cad3-the-girl-with-the-dragon-tattoo.png",
    title: "Uncover secrets with the girl and her tattoo.",
    desc: "A gripping thriller of mystery and revenge.",
  },
  {
    id: 4,
    img: "https://ebook-public-data.s3.amazonaws.com/669e469bf094674648c4cad4-the-hunger-games.png",
    title: "Survive the games, ignite the rebellion.",
    desc: "An epic adventure of survival and resilience.",
  },
];

const HeroSlider = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Slider
      {...settings}
      className="bg-heroBg dark:bg-darkBrown px-8 py-5 flex items-center justify-center rounded-xl"
    >
      {sliderItems.map((item) => {
        const { desc, id, img, title } = item;
        return (
          <div key={id}>
            <div className="h-[24rem] w-full flex items-center justify-center">
              <div className="flex items-center justify-center">
                <div className="w-1/2 flex flex-col items-start gap-5">
                  <h1 className="text-[3rem] dark:text-white leading-[3rem] tracking-wide text-wrap  whitespace-break-spaces">
                    {title}
                  </h1>
                  <p className="text-[.9rem] dark:text-white">{desc}</p>
                  <button className="group border-2 border-primaryPink px-4 py-2 rounded-md flex items-center gap-1 text-primaryPink text-[.8rem]">
                    Learn More
                    <FaLongArrowAltRight className="group-hover:translate-x-1 transition-transform ease-in duration-200" />
                  </button>
                </div>
                <div className="w-1/2 flex justify-center">
                  <img
                    src={img}
                    alt="Book Cover"
                    className="w-[12rem] rotate-12 rounded-md"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default HeroSlider;
