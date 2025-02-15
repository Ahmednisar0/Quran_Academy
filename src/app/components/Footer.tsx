import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-pink-200">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link href="/" className="flex title-font font-medium items-center md:justify-start justify-center">
          
          <div className="w-14 h-14 md:w-20 md:h-20 relative">
            <Image
              src="/images/logo.png" // Path to your logo image in the public folder
              alt="Logo"
              width={100} // Set the width of the image
              height={100} // Set the height of the image
              className="rounded-full" 
            />
          </div>
          <span className="ml-3 text-2xl font-bold">Quran Academy</span>
        </Link>
        <p className="text-base md:text-lg sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-black sm:text-gray-900 sm:py-2 sm:mt-0 mt-4">
          © 2025 All Rights Reserved — HINA ILYAS <br />  <b>Contact No: +92 3021206203 , +92 3121227802 </b>
        
        </p>
      
      </div>
    </footer>
  );
};

export default Footer;