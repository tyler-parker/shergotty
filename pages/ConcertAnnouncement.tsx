import React from 'react';
import Image from 'next/image';

const ConcertAnnouncement = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-16 md:py-20">
      <div className="w-full md:w-2/3 px-6 md:px-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Upcoming Concert</h2>
        <p className="text-lg md:text-xl leading-relaxed">
          Join us for an evening of amazing music with our favorite musician. The concert will be held at the City Concert Hall on Saturday, April 30th, starting at 7pm. Don&apos;t miss this unique opportunity to experience the magic of live music with your friends and family!
        </p>
      </div>
      <div className="w-full md:w-1/3 flex justify-end items-center mt-8 md:mt-0">
        <div className="relative w-48 h-48 md:w-56 md:h-56">
          <Image
            src="/poster.png"
            alt="Concert Image"
            fill
            // object-fit="cover"
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default ConcertAnnouncement;
