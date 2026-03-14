import React from 'react';
import catImg from "../../../public/assets/images/resources/cta-one-img-1.png";
import Image from 'next/image';
import Link from 'next/link';

const CtaCommon: React.FC = () => {
    return (
        <section className="cta-one cta-two">
            <div className="container">
                <div className="cta-one__inner">
                    <div className="cta-one__img">
                        <Image src={catImg} width={250} height={330} alt="" />
                    </div>
                    <div className="cta-one__inner-content">
                        <div className="cta-one__shape-bg" ></div>
                        <h3 className="cta-one__title">Start your journey with our <br /> exceptional services.</h3>
                        <div className="cta-one__btn">
                            <Link href="/inner/contact">Get Started <span className=" icon-right-arrow-1"></span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaCommon;