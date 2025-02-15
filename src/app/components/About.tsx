import Image from "next/image";
import Heading from "./Heading";
import Heading2 from "./Heading2";




const AboutSection = () => {
  return (
    <section >
 <Heading text="About Quran Academy" />
      <div className="container mx-auto flex flex-col justify-center items-center px-4">
  
       {/* <div className="relative h-[550px] grid grid-cols-1 place-items-center m-3 ">
     <video
       autoPlay
       loop
       muted
       className="absolute w-full h-full object-cover rounded-lg"
     >
       <source src="/video/video.mp4" type="video/mp4" />
     </video> 
     </div> */}
    <div className="rounded-lg w-full h-[300px] overflow-hidden relative bg-slate-300 p-3">
      <Image
        src="/images/about.png"
        alt="image"
        fill
        sizes="100vw"
        className="object-fit object-center"
        priority
      />
    </div>

        {/* Profile and Description */}
        <div className="flex flex-col mt-7 mx-auto  justify-center items-center">
          {/* Profile Card */}
          
  <div className="w-20 h-20 md:w-40 md:h-40 relative flex items-center justify-center mx-auto transition-transform duration-300 hover:scale-105">
    <Image
      src="/images/teacher.jpeg"
      alt="Logo"
      layout="fill"
      sizes="(max-width: 768px) 100vw, 50vw"
      className="rounded-full object-cover"
      priority
    />
  </div>
  <div className="flex flex-col items-center text-center justify-center">
    <h2 className="font-bold mt-4 text-gray-900 text-lg md:text-2xl">
     OWNER <br />
      <span className="font-bold mt-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-pink-600 to-purple-500 text-xl md:text-3xl " > HINA ILYAS </span> 
    </h2>
    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-2"></div>
    <p className="text-base md:text-lg">
      Passionate Quran teacher dedicated to guiding students in their spiritual journey.
      I am Fluent in English and Urdu.
    </p>
  </div>



          {/* Description */}
          <div className=" sm:pl-8 sm:py-8 sm:border-l  border-gray-200 sm:border-t-0 border-t mt-4 pt-2 sm:mt-4 text-center sm:text-left">
            <p className="leading-relaxed text-base md:text-lg mb-4">
            Assalamu Alaikum! My name is Hina Ilyas and I have been teaching the Holy Quran online since 2019. With a deep passion for imparting Quranic knowledge I strive to make learning accessible and engaging for all my students. My teaching approach focuses on Tajweed, proper pronunciation, and helping students connect with the Holy Quran and Qaidah on a profound level. I offer personalized lessons tailored to each students needs, ensuring a positive and enriching learning experience. Whether you are a beginner or an advanced learner, I am here to support you in your Quranic journey. I am fluent in both English and Urdu, enabling me to effectively teach students who speak either language. Join me in this spiritual journey to explore and understand the divine message of Islam. <br />
        
</p>


<Heading2 text="WHY CHOOSE QURAN ACADEMY:" />

<div className="container mx-auto flex px-5 py-10 lg:flex-row flex-col items-center">
  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 transition-transform duration-300 hover:scale-105">
    <Image
      className="object-cover object-center rounded"
      alt="girl"
      src="/images/girl-3.jpg" // Ensure this image is in your public directory
      width={720}
      height={600}
      layout="responsive" // Use responsive layout for better control
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" // Adjust sizes for responsiveness
      priority // Load this image eagerly (above the fold)
    />
  </div>

        <div className="lg:flex-grow md:flex- lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center  transition-transform duration-300 hover:scale-105">
        <div>
  <h1 className="text-xl md:text-2xl font-bold max-w-max hover:border-b-black hover:border-2  my-1 ">Convenience for Students and Parents:</h1>
  <p className="text-md md:text-lg"><b className="text-lg md:text-xl hover:border-b-black hover:border-2  hover:my-1 ">Current Problem:</b> Many offline academies or even basic online setups lack flexibility all over the world.</p>
  <h2 className="text-lg md:text-xl font-bold hover:border-b-black hover:border-2 max-w-max my-1 ">
  Solution: Quran Academy will focus on:</h2>
  <ol className="list-decimal list-inside   ">
    <li className="sm:text-md text-base xl:text-lg">Flexible class timings tailored to the needs of working parents, students, and overseas learners.</li>
    <li className="sm:text-md text-base xl:text-lg">Transparent pricing and convenient online payment methods to ensure smooth transactions.</li>
    <li className="sm:text-md text-base xl:text-lg">Teacher is certified and experienced in Tajweed, and Islamic Studies, ensuring students receive top-tier education.</li>
    <li className="sm:text-md text-base xl:text-lg">Female teacher is available for women and children, respecting Islamic preferences and providing a comfortable learning environment.</li>
  </ol>
</div>

       
        </div>
      </div>
          

          </div>
        </div>
      </div>
    
    </section>
  );
};

export default AboutSection;
