import React from 'react';
import Image from 'next/image';

const LandingPage = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/CRT-noise.gif"
          alt="Hero"
          fill
          // height={100}
          // object-fit="cover"
          quality={100}
          style={{opacity: 0.7}}
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <h1 className="text-5xl text-white font-bold">shergotty</h1>
        <p className="text-2xl text-white mt-5">impulse out on 03.30</p>
        <button className="bg-white text-black px-5 py-3 rounded-md mt-5">FUCK</button>
      </div>
    </div>
  );
};

export default LandingPage;
