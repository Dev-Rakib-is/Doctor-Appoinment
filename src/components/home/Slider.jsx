import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { sliderData } from "../../data/SliderData";
import { A11y } from "swiper/modules";

const Slider = () => {
  return (
    <section className="w-full">
      <div className="relative w-full max-w-screen-xl mx-auto">
        <div className="absolute right-12 hidden md:block"></div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, A11y]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
        >
          {sliderData.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className=" rounded-lg text-center w-full h-[300px] md:h-[500px] bg-cover bg-center bg-no-repeat"
                style={{ background: `url(${item.img})` }}
              >
                {/* overlay */}
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute top-1/2 left-1/2  transform -translate-x-1/2 -transition-y-1/2">
                  <h2 className="text-2xl font-bold text-black">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-gray-700">{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
