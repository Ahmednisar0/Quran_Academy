import Link from "next/link";
import Image from "next/image";
import { IoLogoWhatsapp } from "react-icons/io";
const Navbar = () => {
  return (
    <header>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-pink-200">
        <div className="flex title-font font-bold text-xl md:text-4xl items-center text-black">
          <div className="w-14 h-14 md:w-20 md:h-20 relative">
            <Image
              src="/images/logo.png"
              alt="Logo"
              layout="fill"
              sizes="(max-width: 768px) 100vw, 50vw" // Add the sizes prop
              className="rounded-full"
              priority
            />
          </div>
          <span className="ml-3 text-xl md:text-2xl">QURAN ACADEMY</span>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l border-black flex flex-wrap items-center text-base md:text-xl  justify-center">
          {["Home", "About", "FAQs"].map((text) => (
            <Link
              href={`/${text.toLowerCase().replace(" ", "-")}`}
              key={text}
              className="mr-5 hover:border-b hover:border-black"
            >
              {text}
            </Link>
          ))}
        </nav>
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
    </header>
  );
};

export default Navbar;
