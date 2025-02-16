import { NextPage } from 'next';
import CourseCard from '../components/CourseCard';
import Heading from '../components/Heading';
const Courses: NextPage = () => {
  const courses = [
    {
      title: 'Qaidah Basics to Advance',
      description: 'This beginner Quran reading course teaches Arabic letter recognition, pronunciation, and word formation for fluent recitation. Perfect for online Quran classes, it builds a strong foundation for advanced Tajweed studies and help to Recite Holy Quran.',
      imageUrl: '/images/qaidah.png',
    },
    {
      title: 'Tajweed Mastery',
      description: "This course focuses on mastering Tajweed rules for accurate and melodious Quranic recitation. Through structured lessons and practical exercises, students will learn proper pronunciation elongation(Madd), stops(Waqf) & all rules .",
      imageUrl: '/images/quran.png',
    },
    {
      title: 'Wudu & Salah Essentials',
      description: 'This course offers step-by-step guidance on performing Wudu (ablution) and Salah (Namaz) accurately, covering prerequisites, obligatory acts, and common errors.Perfect for students of all levels.Namaz (Salah) is the 2nd pillar of Islam.',
      imageUrl: '/images/namazbook.png',
    },
    {
      title: 'Daily Essential Duas',
      description: "This course teaches essential daily duas to deepen spirituality and seek Allah's guidance. Perfect for kids and adults, it enhances Quran learning. An integral part of our online Quran classes.",
      imageUrl: '/images/dua.png',
    },
    {
      title: 'Hifz Program',
      description: "Our Hifz program helps students memorize the Quran with accurate Tajweed and effective revision techniques.A key offering of our online madrasa, it’s ideal for dedicated learners.",
      imageUrl: '/images/hifz.png',
    },
    {
      title: 'Ramadan Essentials Course',
      description: "Learn Sehri(pre-dawn meal) and Iftar(breaking the fast) duas, fasting rules, and spiritual tips for Ramadan. Perfect for enhancing your worship and connection with Allah during the holy month.",
      imageUrl: '/images/ramazan.png',
      },
  ];

  return (
    <section>
      
       <Heading text="Explore Our Courses" />
       
     <div className="container mx-auto px-4 py-8">
     <p className="text-center text-lg">Choose from our online Quran courses for kids and adults, designed to enhance your Quranic journey. Master Tajweed, Quranic reading, essential duas, and Salah with expert guidance. Our structured programs cater to all levels, ensuring a meaningful and enriching learning experience.</p>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
       {courses.map((course, index) => (
         <CourseCard
           key={index}
           course_name={course.title}
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
