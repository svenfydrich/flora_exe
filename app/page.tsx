"use client";

import { Lexend } from "next/font/google";
import Image from "next/image";

const lexend = Lexend({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`min-h-screen p-4 md:p-8 bg-gray-50 ${lexend.className}`}>
      {/* Navbar */}
      <nav className="max-w-7xl mx-auto">
        <h1 className="text-black text-center text-2xl md:text-[30px]">
          <span className="font-bold">Climate</span> & Ressources
        </h1>
        <div className="mx-auto w-full max-w-[1168px] h-[3px] bg-black mt-2" />
      </nav>

      {/* Carousel / Main bild */}
      <div className="mt-6 md:mt-10 flex justify-center">
        <div className="w-full max-w-[1168px] aspect-[1168/626] relative">
          <Image
            src="/carousel/carousel_1.png"
            alt="Climate and Resources - Flora.exe"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Main section */}
      <div className="mt-20 md:mt-30 flex justify-center">
        <div className="flex flex-col md:flex-row w-full max-w-[1168px] gap-4 md:gap-6">
          {/* Left column - 7/17 width */}
          <div className="w-full md:w-[40%]">
            <h1 className="text-black text-left text-2xl md:text-[30px] font-bold">
              Projektverantwortliche
            </h1>
            <span className="text-black text-left text-xs">
              Projektmodul KI - 04. Semester
            </span>
            <ul className="text-black pt-20 pb-20">
              <li>Sven Fydrich</li>
              <li>Gloria Bichler</li>
              <li>Florian von Basse</li>
              <li>Emanuel Ostertag</li>
              <li>Katharina Brandtner</li>
            </ul>
            <div className="relative w-full aspect-[4/3] hidden md:block">
              <Image
                src="/carousel/group_image.png"
                alt="Project Team"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Vertical divider - hidden on mobile */}
          <div className="hidden md:block w-[3px] h-[941px] bg-black" />

          {/* Right column - 10/17 width */}
          <div className="w-full md:w-[60%]">
            <div className="flex flex-col md:flex-row items-start gap-30">
              {/* Text section */}
              <div className="flex flex-col">
                <h1 className="text-black text-right text-2xl md:text-[30px] font-bold">
                  Ausstellung
                </h1>
                <span className="text-black text-right text-xs mt-2">
                  Flora.exe
                </span>
              </div>

              {/* Image section */}
              <div className="relative w-full md:w-[383px] h-[500px] hidden md:block">
                <Image
                  src="/carousel/austellung.png"
                  alt="Flora.exe Ausstellung"
                  fill
                  className="object-cover object-right"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interaktion section */}
      <div className="mt-10 flex flex-col items-center pt-20">
        <h1 className="text-black text-center text-2xl md:text-[30px] font-bold">
          Interaktion
        </h1>
        <span className="text-black text-center text-xs">
          Wie reagiert die Pflanze?
        </span>
      </div>
    </div>
  );
}
