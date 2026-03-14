"use client"
import React, { useState } from 'react';
import { motion } from "framer-motion" 
import { accrodionItems1, accrodionItems2 } from '@/contents/faq/faq';

const FaqMain: React.FC = () => {
    const [active, setActive] = useState(2)
    return (
        <section className="faq-page">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="faq-one__right">
                            <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">

                                {
                                    accrodionItems1.map(item => <div key={item?.id} className={`accrodion ${active === item?.id ? '' : 'active'}`}>
                                        <div className="accrodion-title" onClick={() => setActive(pre => pre === item?.id ? 0 : item?.id)}>
                                            <h4>{item?.title}</h4>
                                        </div>
                                        <motion.div
                                            initial={{ y: -40, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            transition={{
                                                duration: 0.5,
                                                ease: "easeOut"
                                            }}
                                            viewport={{ amount: 0.01 }}
                                            className="accrodion-content"
                                            style={{ display: `${active === item?.id ? '' : 'none'}` }}>
                                            <div className="inner">
                                                <p>
                                                    {item?.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="faq-one__right">
                            <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                {
                                    accrodionItems2.map(item => <div key={item?.id} className={`accrodion ${active === item?.id ? '' : 'active'}`}>
                                        <div className="accrodion-title" onClick={() => setActive(pre => pre === item?.id ? 0 : item?.id)}>
                                            <h4>{item?.title}</h4>
                                        </div>
                                        <motion.div
                                            initial={{ y: -40, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            transition={{
                                                duration: 0.5,
                                                ease: "easeOut"
                                            }}
                                            viewport={{ amount: 0.01 }}
                                            className="accrodion-content"
                                            style={{ display: `${active === item?.id ? '' : 'none'}` }}>
                                            <div className="inner">
                                                <p>{item?.description} </p>
                                            </div>
                                        </motion.div>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqMain;