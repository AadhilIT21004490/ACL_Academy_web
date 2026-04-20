/**
 * Interfaces for ACL Academy Feedback
 */
export interface Testimonial {
  student_name: string;
  quote: string;
  summary: string;
}

export interface Feedback {
  student_name: string;
  comment: string;
}

export interface Batch04Feedback {
  academy: string;
  course: string;
  batch: "04";
  testimonials: Testimonial[];
}

export interface BatchFeedback {
  academy: string;
  course: string;
  batch: "01" | "02" | "03";
  feedback: Feedback[];
}

/**
 * Data Constants
 */
export const batch04: Batch04Feedback = {
  academy: "ACL Academy",
  course: "Quantity Surveying Practice",
  batch: "04",
  testimonials: [
    { student_name: "Arkaan", quote: "I really enjoyed this class and learned a lot. The lessons were clear, helpful, and easy to follow.", summary: "Found the course useful in improving practical knowledge and professional confidence, with tender evaluation identified as the most valuable learning area." },
    { student_name: "Haneef", quote: "Thank you for your great teaching and constant support throughout the session.", summary: "Reported increased confidence and better understanding of post-contract processes, especially payment applications, and considers the course beneficial for industry preparation." },
    { student_name: "Sajeeth", quote: "The class was highly engaging and interactive, which kept my interest throughout.", summary: "Stated that the course enhanced his industry knowledge and confidence, particularly through tender evaluation training." },
    { student_name: "Mohamed Mifras", quote: "The sessions were well-structured and helped me understand the practical workflow of a Quantity Surveyor. The real project examples made the lessons more effective. I would appreciate more practice exercises in future classes.", summary: "Found the course effective in developing practical QS skills, especially in Tender Evaluation, cost plan, payment Application, interim Payment, BOQ preparation, and takeoff measurement." },
    { student_name: "Afham Shimar", quote: "This doesn't feels like an online class. The way lecture keeps engaging with the students are highly interactive. Feels so good on everything.", summary: "Noted that the course strengthened his practical skills and confidence, particularly in tendering and BOQ preparation." },
    { student_name: "Mohammed Wafir", quote: "An excellent class that delivered practical knowledge in a simple and effective way. Highly recommended.", summary: "Found the course highly practical and confidence-building, improving his readiness to work in project environments, particularly valuing the tender evaluation sessions." },
    { student_name: "Mohamed Thaskeem", quote: "Useful knowledge is provided in a very easy way in a short time.", summary: "Stated that the course enhanced his professional confidence and project understanding, with payment application training being the most beneficial aspect." },
    { student_name: "Mohamed Aazeek", quote: "Practical concepts are taught in an easy to understand way making learning effective.", summary: "Highlighted that the course strengthened his technical knowledge and preparedness for industry roles, especially through the cost planning module." },
    { student_name: "Mohamed Raseen", quote: "An excellent and well-structured class that delivered practical knowledge in a simple and effective manner. Very useful and highly recommended.", summary: "Noted improved confidence and practical understanding of procurement processes, particularly benefiting from the tender procedure sessions." },
    { student_name: "Mohamed Zameer", quote: "I can't thank you enough for sharing your life's work with me over the last six weeks. Beyond the technical skills, you've given me the gift of confidence. I finally feel ready to take on the world of high-spec planning.", summary: "Appreciated the comprehensive learning covering cost planning, post-contract practices, and tender evaluation, which enhanced his overall project capability." }
  ]
};

export const batch03: BatchFeedback = {
  academy: "ACL Academy",
  course: "Quantity Surveying Practice",
  batch: "03",
  feedback: [
    { student_name: "Fawas Natheer", comment: "Really clearly understood" },
    { student_name: "Rifnas", comment: "Al hamdulillah learned new useful basic session" },
    { student_name: "Nuthais", comment: "The first QS class gave me a good understanding of the basics in a clear and explanatin" },
    { student_name: "Hifa", comment: "My first QS class in this career and gave me a good understanding and hope well" },
    { student_name: "Nihal Hassan", comment: "I really appreciated the way the lecturer explained the topics in a clear and organized manner. The session was interactive, and I was able to understand the basics well." },
    { student_name: "Sajeeth", comment: "Very fine explanation and guidance" },
    { student_name: "Shafny Janaura Tr", comment: "Learned something new, and got more clarification about the previous known things." },
    { student_name: "Aakeef", comment: "I initially studied in English medium at Colombo and was hoping to join your English medium classes. Unfortunately, that did not happen, so I enrolled in the Tamil medium classes instead. However now I feel quite comfortable, and I find your explanations very clear and easy to understand. I look forward to continuing my learning journey with you. Thank you, sir." },
    { student_name: "Insath", comment: "The first QS class was clear and informative, I learned useful basics." }
  ]
};

export const batch02: BatchFeedback = {
  academy: "ACL Academy",
  course: "Quantity Surveying Practice",
  batch: "02",
  feedback: [
    { student_name: "Shawqi", comment: "Very useful and satisfying" },
    { student_name: "Mustaque", comment: "Sir Today’s QS practice session was very insightful and engaging. I truly appreciate the valuable knowledge shared, and I believe the skills and techniques I learned today will greatly support my professional growth and career development. Thank you" },
    { student_name: "Zuhurey Haneefa", comment: "Very useful, and I learned many new things. The way you conducted the class was superb, and your explanations were truly awesome. I have one request: When you teach about technical reports that are actually used on site, could you please share them with us as a soft copy?" },
    { student_name: "Anonymous", comment: "The way you conduct the class is very useful and practical. You bring in real work examples and explain real-world scenarios, which makes the learning easy to understand and directly applicable. The way you teach AutoCAD and Excel is especially focused on what is really needed in work, making the lessons highly relevant and valuable for actual job requirements." },
    { student_name: "Sivan Malaravan", comment: "Used to change our knowledge about QS I learned so many things about it, your taught very friendly" },
    { student_name: "Harees", comment: "Very useful to class" },
    { student_name: "Anonymous", comment: "Your method of teaching and the way you convey concepts is really satisfying. The way you train us reflects the actual practices happening in the Gulf industry, which is very valuable. Also, your personal attention and caring approach towards each participant is truly appreciated. Thank you for making the sessions so engaging and practical." },
    { student_name: "Anonymous", comment: "This online class was a new experience for me. first thankyou for conducting this online class and for the valuable practice, questions and and answers session. We hope to receive your guidance in future and studies." }
  ]
};

export const batch01: BatchFeedback = {
  academy: "ACL Academy",
  course: "Quantity Surveying Practice",
  batch: "01",
  feedback: [
    { student_name: "Anonymous", comment: "Jazakallahu Khair for the wonderful sessions! In just 1½ months you managed to cover everything a QS needs to know in a very clear and simple way. The pace was good, and the software training was practical and super helpful for beginners. Alhamdulillah, these sessions have really boosted my confidence. Now I feel ready to apply this knowledge in real projects and even face interviews without fear. I would definitely recommend this class to anyone who wants to learn QS in a short time but in a clear and effective way." },
    { student_name: "Anonymous", comment: "Thank you for delivering such an insightful teaching method. The knowledge and practical skills I gained will be extremely useful in my career. I truly appreciate the effort, guidance, and support throughout the program." },
    { student_name: "Saraf Satheej", comment: "Mashaallah it was a good session" },
    { student_name: "Anonymous", comment: "Asselamu alaikum sir. Your teaching method was very easy and simple to understand. By learning from you I have gained complete knowledge of the QS concepts. I strongly believe that when I step into my working life this training will make things much easier for me. I hope you will continue to stay in touch with us." },
    { student_name: "Anonymous", comment: "Thank you so much. I had a great opportunity to gain the knowledge of QS. Your teaching method is extremely understandable and appreciable especially for basic level people and other categories also." },
    { student_name: "Anonymous", comment: "Assalamu alaikkum ww sir I joined your class without any prior knowledge of Qs. Now, I have gained complete knowledge of Quantity Surveying through you. With your guidance, I have already faced two interviews in biggest company in Saudi Arabia. Now I feel confident and ready to face any interview." },
    { student_name: "Anonymous", comment: "Assalamu alaikum w.w.sir.. your Educating method is really well, can get wide range of knowledge from ur class, specially Q&A sessions are awesome. You are a gem of a person who provides better career setter to QS Work persons." },
    { student_name: "Anonymous", comment: "Assalamu alaikum sir, I appreciate your teaching methodologies and for being helpful every time. Before I joined, I had zero knowledge of QS and now Alhamdulillah I learned a lot. It's totally different what we have imagined what QS is. For me personally this class is so worthy and highly recommend. Even universities won't teach like this." }
  ]
};