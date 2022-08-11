import Container from "./Container"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";

import 'swiper/css';
import 'swiper/css/pagination'

import image1 from '../images/1.webp'
import image2 from '../images/2.webp'
import image3 from '../images/3.webp'
import image4 from '../images/4.webp'
import classNames from "classnames";
import Wrapper from "./Wrapper";


const Slider = ({ className }) => {
    return (
        <section className={classNames(className)}>
            <Container>
               <Wrapper>
                <Swiper
                        pagination={{
                            clickable: true
                        }}
                        loop={true}
                        modules={[Pagination]}
                        className="sm:hidden h-72 w-full rounded-3xl"
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide><img className="h-full w-full object-cover" src={image1} /></SwiperSlide>
                        <SwiperSlide><img className="h-full w-full object-cover" src={image2} /></SwiperSlide>
                        <SwiperSlide><img className="h-full w-full object-cover" src={image3} /></SwiperSlide>
                        <SwiperSlide><img className="h-full w-full object-cover" src={image4} /></SwiperSlide>
                    </Swiper>
                    <div className="hidden sm:flex sm:gap-2 max-h-[540px]">
                        <div ><img className="h-full object-cover rounded-tl-3xl rounded-bl-3xl" src={image1} /></div>
                        <div><img className="h-full object-cover" src={image2} /></div>
                        <div><img className="h-full object-cover" src={image3} /></div>
                        <div><img className="h-full object-cover rounded-tr-3xl rounded-br-3xl" src={image4} /></div>
                    </div>   
               </Wrapper>
            </Container>
        </section>
    )
}

export default Slider