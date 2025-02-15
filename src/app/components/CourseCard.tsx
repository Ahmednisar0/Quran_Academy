import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoLogoWhatsapp } from 'react-icons/io';

interface CourseCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const CourseCard: FC<CourseCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className=" rounded overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
      <div className="relative w-full h-64">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          className="object-fit rounded-t"
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl md:text-2xl mb-2">{title}</div>
        <p className="text-gray-700 text-sm md:text-base">{description}</p>
        <p className="text-gray-700 text-sm md:text-base">Book Your Trial Now Contact</p>
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
  );
};

export default CourseCard;
