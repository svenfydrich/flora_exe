"use client";

import { Lexend } from "next/font/google";
import Image from "next/image";

const lexend = Lexend({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`min-h-screen p-4 md:p-8 bg-white ${lexend.className}`}>
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
                src="/misc/group_image.png"
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
                <h1 className="text-black text-right text-2xl pl-5f md:text-[30px] font-bold">
                  Ausstellung
                </h1>
                <span className="text-black text-right text-xs mt-2">
                  Flora.exe
                </span>
              </div>

              {/* Image section */}
              <div className="relative w-full md:w-[383px] h-[500px] hidden md:block">
                <Image
                  src="/misc/austellung.png"
                  alt="Flora.exe Ausstellung"
                  fill
                  className="object-cover object-right"
                />
              </div>
            </div>
            <div>
              <h1 className="text-black pt-30 pl-5 pb-5 font-bold text-[30px]">
                Konzept
              </h1>
              <span className="text-black pl-5">
                Was passiert, wenn wir der Natur endlich zuhören?
              </span>
              <p className="text-black pt-5 pl-5 w-[70%]">
                Wir haben Bildschirme gebaut, die um unsere Aufmerksamkeit
                kämpfen. Aber was, wenn die Natur dasselbe tut? flora.exe lenkt
                unseren Blick zurück – auf das, wovon wir abhängen. Lorem ipsum
                blabla
              </p>
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

      {/* Banner section */}
      <div>
        <div className="flex flex-col items-center p-10">
          <Image
            src="/banners/nähe_banner.png"
            alt="Nähe"
            width={1168}
            height={259}
            className=""
          />
        </div>
        <div className="flex flex-col items-center p-10">
          <Image
            src="/banners/ablenkung_banner.png"
            alt="Nähe"
            width={1168}
            height={259}
            className=""
          />
        </div>
        <div className="flex flex-col items-center p-10">
          <Image
            src="/banners/stille_banner.png"
            alt="Nähe"
            width={1168}
            height={259}
            className=""
          />
        </div>
      </div>

      {/* Totaler Zerfall section */}
      <div className="mx-auto max-w-7xl mt-20 w-[1168px]">
        <div className="mx-auto w-full max-w-[1168px] h-[3px] bg-black" />
        <div className="flex">
          <Image
            src="/misc/totaler_zerfall.png"
            alt="Totaler Zerfall"
            width={459}
            height={594}
            className=""
          />
          <div className="flex flex-col pt-10 pl-20 w-[40%]">
            <h1 className="text-black font-bold text-[30px]">Emotionen</h1>
            <span className="text-black pt-5">
              Skalen der Gefühle der Pflanze
            </span>
            <h2 className="text-black font-bold text-[18px] pt-5">
              Benutzter prompt
            </h2>
            <span className="text-black pt-5 text-justify text-xs">
              expressionist oil painting in the style of Edvard Munch's 'The
              Scream', figure collapsing inward, mouth open in silent scream,
              colors shattered into shards of deep crimson and grey, sky
              disintegrated, bridge broken in places, figure semi-transparent as
              if fading, canvas cracked and burned, atmosphere of extreme inner
              collapse and existential panic, as if the natural world itself is
              crying out after being utterly ignored and consumed by digital
              distraction.
            </span>
            <h2 className="text-black font-bold text-[18px] pt-5">
              Wann aktiv?
            </h2>
            <span className="text-black pt-5 text-justify text-xs">
              Lorem ipsum dolor sit amet consectetur. Enim elementum nulla nunc
              posuere fermentum a id. Egestas nibh nam elit elit commodo luctus
              ipsum. Ultricies a diam sapien eu eget feugiat. Velit consequat
              orci aliquam morbi sed non sed.
            </span>
          </div>
        </div>
        <div className="mx-auto w-full max-w-[1168px] h-[3px] bg-black" />
      </div>

      {/* Trailer section */}
      <div className="mt-10 flex flex-col items-center pt-20">
        <h1 className="text-black text-center text-2xl md:text-[30px] font-bold">
          Trailer
        </h1>
        <span className="text-black text-center text-xs">
          Behind the scenes.
        </span>
      </div>

      {/* Last section */}

      <div></div>

      {/* Footer */}

      <div className="max-w-[1168px] mx-auto pt-20">
        <div className="mx-auto w-full h-[3px] bg-black" />
        <div className="flex">
          <div className="w-[60%]">
            <ul className="text-black pt-10 text-[18px]">
              <li>Sven Fydrich</li>
              <li>Gloria Bichler</li>
              <li>Florian von Basse</li>
              <li>Emanuel Ostertag</li>
              <li>Katharina Brandtner</li>
            </ul>
          </div>
          <div className="flex flex-col pl-30 pt-10">
            <span className="text-black w-[70%] text-[18px]">
              Wir bedanken uns blabla... Lorem ipsum dolor sit amet consectetur.
              Odio adipiscing vitae risus quam nascetur orci et. Magna integer
              in sem id netus. Nisl non tristique cursus eget congue. Tristique
              sagittis nisi magna nulla in tortor. Sem ornare eu interdum nulla.{" "}
            </span>
            <span className="text-black w-[70%] pt-10 text-[18px]">
              Vestibulum et tempus accumsan consectetur ullamcorper sed ac
              dignissim. Libero posuere et amet sit velit orci quis eu. Et
              rhoncus consectetur tempus viverra. Sodales duis venenatis feugiat
              sit arcu elit cons.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
