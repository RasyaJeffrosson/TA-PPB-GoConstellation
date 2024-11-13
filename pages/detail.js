import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";
import Meta from "../components/Meta";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!router.query.data) return;
    setData(JSON.parse(router.query.data).data);
  }, []);

  return (
    <div>
      <Meta title="Brightest Star : Detail" />

      <Header />

      <section class="text-gray-600 body-font bg-black">
        <div class="container mx-auto flex px-5 py-40 items-center justify-center flex-col">

          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white ">
              {data ? data.name : ""}
            </h1>
            <p class="mb-8 leading-relaxed text-slate-200">
              Rank : {data ? data.rank : ""}
            </p>
            <p class="mb-8 leading-relaxed text-slate-200">
              Visual Magnitude : {data ? data.visualMagnitude : ""}
            </p>
            <p class="mb-8 leading-relaxed text-slate-200">
              Distance : {data ? data.distance : ""}
            </p>
            <p class="mb-8 leading-relaxed text-slate-200">
              Spectral Class : {data ? data.spectralClass : ""}
            </p>
          </div>
          <Link
            href="/star"
            class="mt-3 text-indigo-500 inline-flex items-center "
          >
            Back
          </Link>
        </div>
      </section>
      <Navbar />

      <Footer />
    </div>
  );
}
