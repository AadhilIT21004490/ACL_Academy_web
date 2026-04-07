"use client"
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import Image from 'next/image';
import sliderShape1 from '../../../public/assets/images/shapes/main-slider-shape-1.png';
import sliderShape2 from '../../../public/assets/images/shapes/main-slider-shape-2.png';
import sliderShape3 from '../../../public/assets/images/shapes/main-slider-shape-3.png';
import sliderShape4 from '../../../public/assets/images/shapes/main-slider-shape-4.png';
import sliderImg from '../../../public/assets/images/resources/main-slider-img-1-1.png';
import clientImg1 from '../../../public/assets/images/resources/main-slider-satisfied-client-1-1.jpg';
import clientImg2 from '../../../public/assets/images/resources/main-slider-satisfied-client-1-2.jpg';
import ratingLogo from '../../../public/assets/images/resources/main-slider-rating-content-logo.png';
import AdvanceCountUp from '@/components/elements/AdvanceCountUp';
import Link from 'next/link';

interface BannerSliderItem {
    id: number;
    title: string;
    titleHighlight: string;
    titleHighlight2: string;
    description: string;
    description2: string;
    buttonText: string;
    buttonLink: string;
    happyClients: number;
    positiveRating: number;
}
const sliderItems: BannerSliderItem[] = [
    {
        id: 1,
        title: 'Ai-Driven Learning for Career Success',
        titleHighlight: 'Build Your Career in the Built Environment',
        titleHighlight2: 'with Real Industry Skills & AI-Driven Learning',
        description: 'Practical training designed to simulate real project environments ',
        description2: 'combining industry expertise, digital tools, and AI to prepare you for global opportunities.',
        buttonText: 'Get Started',
        buttonLink: '/inner/contact',
        happyClients: 86,
        positiveRating: 98
    },
    {
        id: 2,
        title: 'Quantity Surveying Expertise for Your Business Success',
        titleHighlight: 'From Learning to Real Projects',
        titleHighlight2: 'Transform Your Future in the Built Environment',
        description: 'Master the built environment through practical, AI-driven simulations ',
        description2: 'that turn theory into real-world expertise.Move beyond the textbook and build your career on a foundation of professional, industry-ready experience.',
        buttonText: 'Get Started',
        buttonLink: '/inner/contact',
        happyClients: 86,
        positiveRating: 98,
    },
    {
        id: 3,
        title: 'MRICS',
        titleHighlight: 'MRICS Excellence: ',
        titleHighlight2: 'Professional Guidance for the Built Environment',
        description: 'Elevate your professional standing with mentorship that turns complex theory into Chartered ',
        description2: 'excellence. Gain specialized support in cost management, project delivery, and ethics to meet global RICS standards.',
        buttonText: 'Get Started',
        buttonLink: '/inner/contact',
        happyClients: 86,
        positiveRating: 98
    }
];

const BannerTwo: React.FC = () => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <section className="main-slider">
            <div className="main-slider__shape-bg-2"></div>
            <div className="main-slider__shape-bg"></div>
            <div className="main-slider__shape-bg-3 img-bounce"></div>
            <div className="main-slider__shape-1 zoominout">
                <Image src={sliderShape1} width={42} height={34} alt="shape-image" />
            </div>
            <div className="main-slider__shape-2 rotate-me">
                <Image src={sliderShape2} width={333} height={318} alt="shape-image" />
            </div>
            <div className="main-slider__shape-3 float-bob-x">
                <Image src={sliderShape3} width={148} height={56} alt="shape-image" />
            </div>
            <div className="main-slider__shape-4 rotate-me">
                <Image src={sliderShape4} width={122} height={83} alt="shape-image" />
            </div>
            <div className="main-slider__carousel owl-carousel owl-theme">
                <Swiper
                    modules={[Navigation, Autoplay, EffectFade]}
                    spaceBetween={0}
                    effect="fade"
                    slidesPerView={1}
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    speed={1000}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    onSwiper={setSwiperInstance}
                >
                    {sliderItems.map((item: BannerSliderItem, index) => (
                        <SwiperSlide
                            key={item.id}
                        >
                            <div className={`item ${index === activeIndex ? "active" : ""}`}>
                                <div className="main-slider__img-box">
                                    {/* <div className="main-slider__img">
                                        <Image src={sliderImg} width={630} height={734} loading="eager" alt="" />
                                        <div className="main-slider__img-shape-box ">
                                            <div className="main-slider__img-shape-1">
                                                <div className="main-slider__img-shape-2"></div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="container">
                                    <div className="main-slider__content">
                                        <div className="main-slider__title-box">
                                            <h3 className="main-slider__title">{item.titleHighlight} <span>{item.titleHighlight2}</span></h3>
                                        </div>
                                           
                                        <p className="main-slider__text">{item.description}<br />{item.description2}</p>
                                        
                                        <div className="main-slider__satisfied-client-and-rating-box">
                                            <div className="main-slider__satisfied-client-box">
                                                {/* <ul className="list-unstyled main-slider__satisfied-client-list">
                                                    <li>
                                                        <div className="main-slider__satisfied-client-img">
                                                            <Image src={clientImg1} width={42} height={42} alt="" />
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="main-slider__satisfied-client-img">
                                                            <Image src={clientImg2} width={42} height={42} alt="" />
                                                        </div>
                                                    </li>
                                                </ul> */}
                                                <div className="main-slider__satisfied-client-content">
                                                    <div className="main-slider__satisfied-client-count count-box">
                                                        <h4 className="count-text" ><AdvanceCountUp ending={item?.happyClients} /> </h4>
                                                        <span className="main-slider__satisfied-client-count-plus">+</span>
                                                    </div>
                                                    <p className="main-slider__satisfied-client-count-text">Students </p>
                                                </div>
                                            </div>
                                            <div className="main-slider__rating-box">
                                                <div className="main-slider__rating-count count-box">
                                                    <h3 className="count-text" ><AdvanceCountUp ending={item?.positiveRating} /> </h3>
                                                    <span className="main-slider__satisfied-client-count-letter">%</span>
                                                </div>
                                                <div className="main-slider__rating-content">
                                                    <p className="main-slider__rating-content-sub-title">Success Rating</p>
                                                    <div className="main-slider__rating-content-logo">
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="owl-nav " style={{ zIndex: 111 }}>
                    <button
                        onClick={() => swiperInstance?.slidePrev()}
                        className="owl-prev"
                        aria-label="Previous Slide"
                        type="button"
                    >
                        <span className="icon-right-arrow-1"></span>
                    </button>
                    <button
                        onClick={() => swiperInstance?.slideNext()}
                        className="owl-next"
                        aria-label="Next Slide"
                        type="button"
                    >
                        <span className="icon-right-arrow-1"></span>
                    </button>
                </div>

            </div>
        </section>
    );
};

export default BannerTwo;