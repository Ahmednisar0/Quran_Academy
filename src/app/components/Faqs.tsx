"use client"

import { useState } from 'react';
import Heading2 from './Heading2';

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
    {
      question: 'Introduction of Owner and Teachers (Team Member)?',
      answer: "I'm Hina Ilyas, the founder and lead instructor of our Quranic education program. For over six years, I have been dedicated to teaching the Quran to women and children, including both boys and girls. Alongside me is a team of certified and experienced male Hafiz and female Hafiza teachers, each committed to providing valuable Quranic instruction. Together, we strive to offer comprehensive and personalized education to all our students.",
    },
    {
      question: 'How do you tailor your teaching methods to accommodate different learning styles?',
      answer: 'We employ a variety of teaching techniques, including visual aids, interactive sessions, and practical exercises, to cater to individual learning preferences.',
    },
    {
      question: 'What age groups do you teach, and do you offer lessons for beginners?',
      answer: "We provide Qaidah & Quran lessons tailored for all age groups, including young children and female students. Our teaching approach is customized to meet the specific needs and goals of each student, whether you're a beginner starting from the basics or looking to deepen your existing knowledge. For children, we create engaging and interactive lessons to foster a love for learning the Quran. For female students, we offer a comfortable and supportive learning environment, ensuring that each session is both effective and respectful of individual preferences.",
    },
    {
      question: 'How do you incorporate Tajweed into your lessons?',
      answer: 'Tajweed is integral to proper Quranic recitation. We systematically introduce Tajweed rules in our lessons, ensuring that students not only learn to recite the Quran but do so with the correct pronunciation and rhythm, enhancing their connection to the sacred text.',
    },
    {
      question: 'What materials or resources will I need for the lessons?',
      answer: "Primarily, we'll need a copy of the Quran, preferably with Tajweed notations. Additionally, we may recommend supplementary materials such as specific texts or online resources to support your learning journey.",
    },
    {
      question: 'How do you assess and track student progress?',
      answer: 'We implement regular assessments, including quizzes and recitation evaluations, to monitor your progress. These assessments help identify areas of strength and those needing improvement, allowing us to adjust the learning plan accordingly.',
    },
    {
      question: 'Can you provide references or testimonials from previous students?',
      answer: 'Certainly, we can share testimonials from former students who have benefited from our teaching. Their experiences reflect our commitment to providing quality Quranic education and fostering a supportive learning environment.',
    },
    {
      question: 'How flexible is your scheduling, and do you offer online lessons?',
      answer: "Understanding the demands of modern life, we offer flexible scheduling options, including evenings and weekends. Additionally, we conduct classes based on students' demands.",
    },
    {
      question: 'What is your approach to teaching children, and how do you keep them engaged?',
      answer: 'When teaching children, we incorporate interactive and fun activities to make learning enjoyable. This includes storytelling, games, and visual aids that capture their interest and foster a love for the Quran from an early age.',
    },
    {
      question: 'How do you handle students who may struggle with certain aspects of learning the Quran?',
      answer: 'Patience and understanding are key. We provide additional support and alternative explanations to help students overcome challenges. Our goal is to create a comfortable learning environment where students feel encouraged to ask questions and express difficulties.',
    },
    {
      question: 'Which application do you prefer for conducting online classes?',
      answer: "We offer online classes through various platforms, including Zoom, Skype, and WhatsApp, to accommodate students' preferences.",
    },
  ];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 gap-2">
     <Heading2 text="Frequently Asked Questions" />
      {faqData.map((item, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full text-left p-4 bg-gray-100 rounded-md focus:outline-none"
          >
            <div className="flex justify-center items-center flex-col">
            <p className='text-md md:text-lg underline mr-3 font-semibold'>Question:{index +1}</p>  <p className="font-medium">{item.question}</p>
              <svg
                className={`w-5 h-5 bg-blue-300 rounded-sm transform transition-transform ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </button>
          {activeIndex === index && (
            <div className="p-4 bg-white border border-gray-200 rounded-md mt-2">
             <p className='text-md md:text-lg underline font-semibold'>Answer:{index + 1}</p>
             <p> {item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
