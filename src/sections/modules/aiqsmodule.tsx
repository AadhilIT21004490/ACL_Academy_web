"use client"
import React, { useState } from 'react';
import { motion } from "framer-motion" 
import { moduleData } from '@/data/aiqsData'; // Ensure this matches your export name

const Module: React.FC = () => {
    // Set the first item (id: 1) as active by default
    const [active, setActive] = useState<number | null>(1)

    return (
      <section className="faq-page">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="faq-one__right">
                <div className="accrodion-grp faq-one-accrodion">
                  
                  {moduleData.map((item) => (
                    <div
                      key={item.id}
                      className={`accrodion ${active === item.id ? "active" : ""}`}
                    >
                      {/* Accordion Title */}
                      <div
                        className="accrodion-title"
                        style={{ cursor: 'pointer' }}
                        onClick={() => setActive(active === item.id ? null : item.id)}
                      >
                        <h4>{item.moduleName}</h4>
                      </div>

                      {/* Accordion Content */}
                      <motion.div
                        initial={false}
                        animate={{ 
                          height: active === item.id ? "auto" : 0,
                          opacity: active === item.id ? 1 : 0 
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="accrodion-content"
                        style={{ overflow: 'hidden' }}
                      >
                        <div className="inner">
                          <div className="col-xl-12">
                            <ul className="services-details__points-1 list-unstyled">
                              {item.topics.map((topic, index) => (
                                <li key={index}>
                                  <span className="icon-check"></span>
                                  {topic}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  ))}

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Module;