import React from 'react';
import Image from 'next/image';

const BlogSection = () => {
  return (
    <div className="bg-black py-16 md:py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-12 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Latest Blog Post</h2>
          <p className="text-lg md:text-xl text-white leading-relaxed tracking-wide mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat metus eu leo lacinia, quis rutrum velit pretium. Vivamus fringilla justo et nisl ullamcorper, at imperdiet libero dictum. Maecenas eget luctus lacus. Fusce eleifend nunc a nunc eleifend placerat. Vestibulum finibus nisi eu magna aliquam malesuada. Duis in sagittis quam. Suspendisse vitae nisl eget nisl iaculis dignissim eu non odio. Nam scelerisque arcu in malesuada vehicula. Phasellus dignissim ante magna, at dictum lorem finibus ut. Sed tincidunt quam nec orci vestibulum suscipit.
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
    </div>
  );
};

export default BlogSection;
