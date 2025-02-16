import Image from 'next/image';
import Link from 'next/link';
import { IoLogoWhatsapp } from 'react-icons/io';
import { AiFillCheckSquare } from "react-icons/ai";

export default function HeroSection() {
  return (
    <section className="mx-auto rounded-lg">
      <div className="container mx-auto flex px-5 py-8 my-5 lg:flex-row flex-col items-center bg-gray-300 ">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 transition-transform duration-300 hover:scale-105">
  <Image
    className="object-cover object-center rounded"
    alt="Open Quran"
    src="/images/babyImage.jpg" // Ensure this image is in your public directory
    width={720}
    height={600}
    layout="responsive" // Use responsive layout for better control
    sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 33vw" // Adjust sizes for responsiveness
    priority // Load this image eagerly (above the fold)
  />
</div>

        <div className="mt-3 lg:mt-0 lg:flex-grow lg:w-1/2 lg:pl-16 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center transition-transform duration-300 hover:scale-105">
        <h2 className="title-font sm:text-2xl text-xl mb-4 font-bold text-gray-900"><i>Read, Learn, Memorize and Revise</i></h2>
          <h1 className="title-font sm:text-3xl text-2xl mb-4 font-extrabold text-gray-900">
          
         <i> Online Quran Courses</i>
          </h1>
          
          <p className="text-md md:text-lg">
          <b className='hover:border-b-black hover:border-2 hover:py-1'>The Prophet MUHAMMAD (P.B.U.H) said</b>: </p> 
          
          <p className="text-base md:text-lg mb-2 undeline">
          The best among you are those who learn the HOLY QURAN and teach it.
          </p>
          <div className="flex flex-col justify-center  gap-1">
            <p className='inline-flex gap-1'> <span><AiFillCheckSquare /></span>Qaidah with Tajweed</p>
            <p className='inline-flex gap-1'> <span><AiFillCheckSquare /></span>HOLY QURAN with Tajweed</p>
            <p className='inline-flex gap-1'> <span><AiFillCheckSquare /></span>Essential Duas For Daily Life</p>
            <p className='inline-flex gap-1'> <span><AiFillCheckSquare /></span>Memorization of the HOLY QURAN</p>
            <p className='inline-flex gap-1'> <span><AiFillCheckSquare /></span>Namaz Lessons</p>
            <p className='inline-flex gap-1 mb-2'> <span><AiFillCheckSquare /></span>Languages:English & Urdu</p>
          </div>
    
          <div className="flex md:flex-row flex-col justify-center gap-2">
          <Link href="/courses" className=" items-center gap-2 bg-blue-900 text-white border-0 py-1 px-3 focus:outline-none hover:bg-blue-200 hover:border-2 hover:border-black hover:text-blue-900 rounded text-lg md:text-xl mt-4 md:mt-0">
    Explore Courses
        
    
    </Link>
            <Link href="https://wa.me/qr/RJITSPSSJWAUN1" className=" inline-flex text-center items-center gap-2 bg-blue-900 text-white border-0 py-1 px-3 focus:outline-none hover:bg-blue-200 hover:border-2 hover:border-black hover:text-blue-900 rounded text-lg md:text-xl mt-4 md:mt-0 mx-auto"
        target="_blank"
        rel="noopener noreferrer">
    Whatsapp  
        <IoLogoWhatsapp />
        
    
    </Link>
          </div>
        </div>
       
      </div>
      <div className="container mx-auto w-full h-[150px] md:h-[300px] overflow-hidden relative bg-slate-300 p-3 mt-6">
            <Image
              src="/images/ayahimg.png"
              alt="image"
              fill
              sizes="100vw"
              className="object-fit object-center w-max-[500px] "
              priority
            />
          </div>
     
    </section>
  );
}
