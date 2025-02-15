import { NextPage } from 'next';
import CourseCard from '../components/CourseCard';
import Heading from '../components/Heading';
const Courses: NextPage = () => {
  const courses = [
    {
      title: 'Qaidah Basics to Advance',
      description: 'This foundational course is designed for beginners to learn the basics of Quranic reading. Starting with the recognition and pronunciation of individual Arabic letters, students progress to forming words and sentences, laying a solid groundwork for fluent Quran recitation. This course is ideal for those seeking online Quran classes and serves as a stepping stone towards more advanced studies, such as the Quran Tajweed course.',
      imageUrl: '/images/qaidah.png',
    },
    {
      title: 'Tajweed Mastery',
      description: "This course focuses on mastering the rules of Tajweed to ensure precise and melodious Quranic recitation. Through a combination of theoretical lessons and practical exercises, students will enhance their pronunciation and understanding of the Quran's phonetic nuances. It's perfect for those aiming to improve their recitation skills through an online Quran teacher in a structured Quran learning academy.",
      imageUrl: '/images/quran.png',
    },
    {
      title: 'Wudu & Salah Essentials',
      description: 'This comprehensive course provides detailed guidance on performing Wudu (ablution) and Salah (prayer) correctly. Students will learn the prerequisites, obligatory acts, and common mistakes to avoid, ensuring their daily worship aligns with Islamic teachings. This course complements our Islamic studies curriculum and is suitable for all seeking to deepen their understanding of daily rituals.',
      imageUrl: '/images/namazbook.png',
    },
    {
      title: 'Daily Essential Duas',
      description: "This course introduces students to important daily supplications (duas) to incorporate into various aspects of life. By memorizing and understanding these duas, students can strengthen their spiritual connection and seek Allah's guidance and blessings throughout their daily activities. It's an integral part of our Quran classes for kids and adults alike, enhancing daily spiritual practice.",
      imageUrl: '/images/dua.png',
    },
    {
      title: 'Hifz Program',
      description: "Our Hifz program is designed for individuals committed to memorizing the entire Holy Quran. The structured curriculum emphasizes accurate memorization techniques, proper Tajweed pronunciation, and consistent revision for long-term retention. Guided by experienced instructors, students embark on a spiritual journey to internalize the Quran. This program is a cornerstone of our online madrasa offerings.",
      imageUrl: '/images/hifz.png',
    },
  ];

  return (
    <section> <Heading text="Our Courses" />
     <div className="container mx-auto px-4 py-8">
     
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
       {courses.map((course, index) => (
         <CourseCard
           key={index}
           title={course.title}
           description={course.description}
           imageUrl={course.imageUrl}
         />
       ))}
     </div>
   </div>
    </section>
   
  );
};

export default Courses;
