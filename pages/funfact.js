import Header from "../components/Header";
import Meta from "../components/Meta";
import Footer from "../components/Footer";
import Image from "next/image";
import Navbar from "../components/Navbar";
import image from "../public/assets/reaksibintang.jpg";
import blackhole from "../public/assets/blackhole.jpg";
import lightspeed from "../public/assets/lightspeed.jpg";
import gemini from "../public/assets/gemini.jpg";
export default function Tools() {
  return (
    <div>
      <Meta title="4 Star Funfact" />
      <Header />
      <section class="text-gray-600 bg-black body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="text-2xl font-medium title-font mb-4 text-slate-200">Star Funfact</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Beberapa fakta menarik tentang bintang.</p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <Image alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={image} width={200} height={200}/>
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-slate-200">Terbentuk dari hidrogen dan helium</h2>
            <h3 class="text-gray-500 mb-3">    </h3>
            <p class="mb-4">Adanya kandungan hidrogen dan helium pada bintang membuat benda langit yang satu ini dapat memancarkan cahayanya sendiri.</p>
            <span class="inline-flex">
             
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <Image alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={blackhole} width={100} height={100}/>
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-slate-200">Bintang akan lahir dan akan lenyap</h2>
            <h3 class="text-gray-500 mb-3"></h3>
            <p class="mb-4">Bintang akan lenyap jika kekurangan energi nuklir. Mereka akan meledak dan menghasilkan partikel lain, salah satunya adalah black hole..</p>
            <span class="inline-flex">
            
          
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <Image alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={lightspeed} width={200} height={200}/>
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-slate-200">Cahaya bintang berasal dari masa lalu</h2>
            <h3 class="text-gray-500 mb-3"></h3>
            <p class="mb-4">Karna bintang berada sangat jauh dari bumi, maka cahaya yang kita lihat sekarang berasan dari masa lalu akibat jarak yang sangat jauh tersebut.</p>
            <span class="inline-flex">
             
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <Image alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={gemini} width={200} height={200}/>
          <div class="w-full">
            <h2 class="title-font font-medium text-lg text-slate-200">Rasi bintang diamati sejak zaman dahulu</h2>
            <h3 class="text-gray-500 mb-3"></h3>
            <p class="mb-4">penduduk Yunani kuno sudah memahami rasi bintang yang memanfaatkannya untuk berbagai keperluan, seperti contohnya navigasi.</p>
            <span class="inline-flex">
              
            </span>
          </div>
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
