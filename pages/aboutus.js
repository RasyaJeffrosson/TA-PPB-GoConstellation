import Image from "next/image";
import Header from "../components/Header";
import Meta from "../components/Meta";
import Footer from "../components/Footer";
import banner from "../public/assets/milkyway.jpg";
import Navbar from "../components/Navbar";
import bluestar from "../public/assets/about.jpg"

export default function Aboutus() {
  return (
    <div>
      <Meta title="About Rasya Jeffrosson" />
      <Header />
      <section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <Image alt="bluestar" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-full" src={bluestar} width={2000} height={2000}></Image>
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">

        <h1 class="text-slate-200 text-3xl title-font font-medium mb-1">Rasya Jeffrosson</h1>
        <div class="flex mb-4">
          <span class="flex items-center">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>

          </span>

        </div>
        <p class="leading-relaxed text-gray-500">
        It's not just a name; it’s a cosmic force in motion. Born from the dreams of ambition, 
        Rasya walks through life like a star, burning bright with creativity and vision. With every idea she touches, 
        she crafts worlds—shaping the impossible into reality. She can bend time, move mountains, and rearrange the stars, 
        all by daring to dream and take action. And in those dreams, she becomes not just part of the universe, but the universe itself—limitless and boundless.
</p>
        <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">


        </div>
        <div class="flex">
          
          

        </div>
      </div>
    </div>
  </div>
</section>
      <Navbar />
      <Footer />
    </div>
  );
}
