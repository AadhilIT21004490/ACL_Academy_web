import React from 'react';
import Image from 'next/image';
import TextAnimation from '@/components/elements/TextAnimation';
import { servicesOneData } from '@/contents/service/service';
import { ServiceOneItem } from '@/contents/service/type';
import Link from 'next/link';
const ServiseInner: React.FC = () => {
    return (
        <section className="services-one">
            <div className="services-one__shape-1"></div>
            <div className="services-one__shape-2"></div>
            <div className="services-one__shape-3"></div>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box justify-content-center">
                        <div className="section-title__tagline-icon-box">
                            <div className="section-title__tagline-icon-1"></div>
                            <div className="section-title__tagline-icon-2"></div>
                        </div>
                        <span className="section-title__tagline">Our Services</span>
                    </div>
                    <h2 className="section-title__title title-animation">
                        <TextAnimation text='Transform Your Business' textColor='black' />
                        <TextAnimation text='with Proven Expertise' />
                    </h2>
                </div>
                <div className="row">
                    {servicesOneData.map((service: ServiceOneItem) => (
                        <div
                            key={service?.id}
                            className="col-xl-3 col-lg-6 col-md-6" >
                            <div className="services-one__single">
                                <div className="services-one__count"></div>
                                <div className="services-one__content-box">
                                    <div className="services-one__icon">
                                        <Image src={service?.icon} alt={service.title} />
                                    </div>
                                    <h3 className="services-one__title">
                                        <Link href={service?.link}>
                                            {service?.title.split(' & ').map((part, index) => (
                                                <React.Fragment key={index}>
                                                    {index > 0 && ' & '}
                                                    {part}
                                                    {index === 0 && <br />}
                                                </React.Fragment>
                                            ))}
                                        </Link>
                                    </h3>
                                </div>
                                <div className="services-one__more-details">
                                    <Link href={service?.link}>
                                        <i className="icon-right"></i> More Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiseInner;