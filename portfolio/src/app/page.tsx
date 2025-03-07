import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

import { SocialMediaLinks } from './constants/items';
import { projects } from './constants/projects';
import { HeroParallax } from './ui/components/hero-parallax';

export default function Home() {
  return (
    <div className="flex flex-col gap-9 overflow-x-hidden items-center justify-center min-h-screen p-4 font-[family-name:var(--font-geist-sans)]">
      <div className="flex w-full max-w-7xl gap-10 mx-auto min-h-screen">
        {/* Social Media Section */}
        <div className="md:flex flex-col gap-3 w-[80px] sm:w-[100px] h-[60vh] hidden items-center justify-end">
          {SocialMediaLinks.map((link) => (
            <Link key={link.id} href={link.href}>
              <Image
                src={link.icon}
                height={link.height}
                width={link.width}
                alt={link.name}
                className="hover:opacity-80 duration-500 transition-transform hover:scale-125"
              />
            </Link>
          ))}
        </div>

        {/* Main Content */}
        <div className="flex flex-col gap-5 items-start justify-center flex-1">
          <div>
            <h1 className="text-2xl md:text-4xl font-extralight tracking-tight text-[#71717A]">
              Hi! I'm
            </h1>
            <h1 className="text-3xl md:text-6xl font-bold tracking-tight text-zinc-800 whitespace-nowrap [text-shadow:0_0_rgba(0,0,0,0.1)]">
              Software <span className="text-aqua">engineer</span>
            </h1>
            <div className="w-20 bg-aqua h-2 mt-2 md:mt-3 xl:mt-2"></div>
          </div>
          <div>
            <p className="max-w-2xl tracking-tight text-base md:text-lg mt-4 sm:mt-6 text-neutral-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              molestiae cum facilis ipsa beatae recusandae, fugiat itaque harum
              nam delectus incidunt vitae consectetur voluptates, perferendis
              commodi eos temporibus. Eaque, doloremque!
            </p>
          </div>
          <button className="relative inline-flex h-12 w-48 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-aqua focus:ring-offset-2 focus:ring-offset-[#60efff]">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#60efff_0%,#1f7ea1_50%,#60efff_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-smoky px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Download CV
            </span>
          </button>
        </div>

        {/* Image Section (3rd Column) */}
        <div className="hidden lg:flex flex-1 items-center justify-center">
          <Image
            src="/your-image-path.jpg"
            width={300}
            height={300}
            alt="Your Image"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="h-[95%]">
        <HeroParallax projects={projects} />
      </div>
    </div>
  );
}
