import React from 'react';

const Heading = ({ text }: { text: string }) => {
  return (
    <div className="flex justify-center items-center md:max-w-max mx-auto h-fit  my-5 rounded-lg transition-transform duration-300 hover:scale-105" style={{
        background:'linear-gradient(90deg, #FAC67A, #CDC1FF)',
        padding:"1rem" 
      }}>
      <h1 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-pink-900 to-purple-900 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl ">
        {text}
      </h1>
    </div>
  );
};

export default Heading;