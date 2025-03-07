'use client';

import { images } from '../constants/images';
import { motion } from 'framer-motion';
import Image from 'next/image';

const SkillsSection = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center w-full relative top-10">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-smoky">
        Tech Skills
      </h1>
      <div className="flex flex-row gap-2">
        {images.map((image, idx) => (
          <motion.div
            key={'images' + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover={{
              scale: 1.1,
              rotate: 0,
              zIndex: 100,
            }}
            whileTap={{
              scale: 1.1,
              rotate: 0,
              zIndex: 100,
            }}
            className="rounded-xl -mr-4 mt-4 bg-white  shrink-0 overflow-hidden"
          >
            <Image
              src={image.image}
              alt="skills"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
