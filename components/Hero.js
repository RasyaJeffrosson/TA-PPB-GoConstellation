import React from "react";
import Image from "next/image";
import Link from "next/link";
import matahari from '../public/assets/matahari.jpg'

export default function Hero() {
  return (
    <div>
    <section class="text-gray-600 body-font bg-black">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image class="object-cover object-center rounded" alt="hero" src={matahari} width={2000} height={200}/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-slate-200">Astronomy
        <br class="hidden lg:inline-block"/> GoConstellation
      </h1>
      <p class="mb-8 leading-relaxed text-gray-500">Astronomy is the study of everything in the universe beyond Earth’s atmosphere. That includes objects we can see with our naked eyes, like the Sun , the Moon , the planets, and the stars . It also includes objects we can only see with telescopes or other instruments, like faraway galaxies and tiny particles. And it even includes questions about things we can't see at all, like dark matter and dark energy .</p>
      <p class="mb-8 leading-relaxed text-gray-500">Stars are the most widely recognized astronomical objects, and represent the most fundamental building blocks of galaxies. The age, distribution, and composition of the stars in a galaxy trace the history, dynamics, and evolution of that galaxy. Moreover, stars are responsible for the manufacture and distribution of heavy elements such as carbon, nitrogen, and oxygen, and their characteristics are intimately tied to the characteristics of the planetary systems that may coalesce about them. Consequently, the study of the birth, life, and death of stars is central to the field of astronomy.</p>
      <div class="flex justify-center">
        <Link href="/star" class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Find More</Link>
       
      </div>
    </div>
  </div>
</section>
    </div>
  );
}
