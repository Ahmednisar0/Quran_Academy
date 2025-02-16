
import Image from 'next/image';
import Link from 'next/link';
import { CoursesName } from '../../../types/Types';
import { IoLogoWhatsapp } from 'react-icons/io';


const CourseCard = (course : CoursesName) => {
  return (
    <div className=" overflow-hidden rounded shadow-lg transition-transform duration-300 hover:scale-105">
     <div className="relative w-full h-64">
  <Image
    src={course.imageUrl}
    alt={course.course_name}
    fill
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
    className="object-fit rounded-t" // Use object-cover to ensure the image fills the container
   
  />
</div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl md:text-2xl mb-2">{course.course_name}</div>
        <p className="text-gray-700 text-sm md:text-base">{course.description}</p>
        <div className="flex justify-center items-center gap-4 mt-4">
              <p className="text-gray-700 text-sm md:text-base bg-gray-300 rounded-md max-w-max px-1 mt-3 md:mt-0 md:py-2 md:mx-2">
                Book Your Free Trial Now:
              </p>
              <Link
                href="https://wa.me/qr/RJITSPSSJWAUN1"
                className="inline-flex items-center gap-2 bg-blue-900 text-white border-0 py-1 px-3 focus:outline-none hover:bg-blue-200 hover:border-2 hover:border-black hover:text-blue-900 rounded text-lg md:text-xl mt-4 md:mt-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Whatsapp
                <IoLogoWhatsapp />
              </Link>
            </div>
      </div>
    </div>
  );
};

export default CourseCard;
