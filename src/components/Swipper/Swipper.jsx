import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css';
import "./Swipper.css";
import img from '../../assets/Swipper/a.jpg';
import img2 from '../../assets/Swipper/b.jpg';
import img3 from '../../assets/Swipper/c.jpg';
import img4 from '../../assets/Swipper/d.jpg';
import img5 from '../../assets/Swipper/e.jpg';
import img6 from '../../assets/Swipper/f.jpg';


function Swipper() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src={img} alt="swipper"/></SwiperSlide>
        <SwiperSlide><img src={img2} alt="swipper"/></SwiperSlide>
        <SwiperSlide><img src={img3} alt="swipper"/></SwiperSlide>
        <SwiperSlide><img src={img4} alt="swipper"/></SwiperSlide>
        <SwiperSlide><img src={img5} alt="swipper"/></SwiperSlide>
        <SwiperSlide><img src={img6} alt="swipper"/></SwiperSlide>
      </Swiper>
    </>
  );
}

export default Swipper;
