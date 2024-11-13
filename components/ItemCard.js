import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import placeholder from "../public/assets/placeholder.webp";

export default function ItemCard(props) {
  const [imageError, setImageError] = useState(false);

  return (
    <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
      <Link
        href={{
          pathname: "/detail",
          query: {
            data: JSON.stringify(props),
          },
        }}
      >
        <h2 class="text-xl font-medium title-font text-slate-200 mt-5 text-white hover:text-violet-700">
          {props.data.name}
        </h2>
        <p class="text-base leading-relaxed mt-2 text-gray-500">
          {props.data.link}
        </p>
      </Link>
    </div>
  );
}
