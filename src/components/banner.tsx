
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
const DATA_COUNT = 5
const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac', '#ffd6e7']

export default () => {
  return (
    <Swiper
      className="swiper-wrapper" 
      loop
      autoplay>
      
      {
        Array.from({ length: DATA_COUNT }).map((_, index) => (
          <SwiperSlide key={index}>
            <div className="h-60vw w-full flex justify-center items-center text-48px user-select-none color-white"
            style={{ background: colors[index % DATA_COUNT] }}>
              Slide {index + 1}
            </div>
          </SwiperSlide>
        ))
      }
  </Swiper>
  )
}