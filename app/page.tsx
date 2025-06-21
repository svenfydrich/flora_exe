"use client";

import { Lexend } from "next/font/google";
import Image from "next/image";

const lexend = Lexend({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`min-h-screen p-8 bg-white ${lexend.className}`}>
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
            className="object-cover rounded-xs"
            priority
          />
        </div>
      </div>

      {/* Main section */}
      <div className="mt-20 md:mt-30 flex justify-center">
        <div className="flex flex-col md:flex-row w-full max-w-[1168px] gap-4 md:gap-6">
          {/* Left column - 7/17 width */}
          <div className="w-full md:w-[40%]">
            <h1 className="text-black text-left text-3xl md:text-[30px] font-bold">
              Projektverantwortliche
            </h1>
            <span className="text-[#6b6b6b] text-left text-lg">
              MUC.DAI: Informatik & Design 4. Sem // Projektmodul KI
            </span>
            <ul className="text-black pt-20 pb-20 text-xl">
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
                className="object-cover rounded-xs"
              />
            </div>
          </div>

          {/* Vertical divider - hidden on mobile */}
          <div className="hidden md:block w-[3px] h-[941px] bg-black" />

          {/* Right column - 10/17 width */}
          <div className="w-full md:w-[60%]">
            <div className="flex flex-col md:flex-row items-start gap-5">
              {/* Text section */}
              <div className="flex flex-col w-full md:w-[50%]">
                <h1 className="text-black font-bold text-6xl text-left md:text-right md:text-3xl">
                  Flora.exe
                </h1>
                <p className="text-red-600 text-xl font-bold">
                  Text überarbeiten!!
                </p>
                <span className="text-[#3a3a3a] text-justify text-lg md:text-right mt-5">
                  Eine einzigartige KI-gestützte Kunstaustellung, die die
                  Interaktion mit einer Zimmerpflanze in malerische Gemälde
                  verwandelt.
                </span>
              </div>

              {/* Image section */}
              <div className="relative w-full md:flex-1 md:max-w-[383px] aspect-[383/500] hidden md:block">
                <Image
                  src="/misc/austellung.png"
                  alt="Flora.exe Ausstellung"
                  fill
                  className="object-contain object-right rounded-xs"
                />
              </div>
            </div>
            <div className="pt-20">
              <h1 className="text-black pt-10 font-bold text-6xl md:text-3xl">
                Konzept
              </h1>
              <p className="text-red-600 text-xl font-bold">
                Text überarbeiten!!
              </p>
              <p className="text-[#3a3a3a] text-justify md: text-lg mt-5">
                Was passiert, wenn wir der Natur eine Stimme geben? <br />
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
      <div className="mt-10 flex flex-col items-start md:items-center pt-20">
        <h1 className="text-black text-left text-6xl md:text-center font-bold">
          Interaktion
        </h1>
        <span className="text-[#3a3a3a] text-justify text-lg mt-5 md:text-center">
          Was hat es mit der Pflanze auf sich? Wie kann ich mit ihr
          interagieren? Das ist unkomplizierter als es erscheinen mag, denn die
          Pflanze reagiert auf bestimmte äußere Reize. Die folgenden Aktionen
          wirken sich direkt auf die Pflanze, und somit auf das generierte Bild
          aus.
        </span>
      </div>

      {/* Banner section */}
      <div>
        <div className="flex flex-col items-center pt-10">
          <Image
            src="/banners/nähe_banner.png"
            alt="Nähe Banner"
            width={1168}
            height={259}
            className="rounded-xs"
          />
        </div>
        <div className="flex flex-col items-center pt-10">
          <Image
            src="/banners/ablenkung_banner.png"
            alt="Ablenkung Banner"
            width={1168}
            height={259}
            className="rounded-xs"
          />
        </div>
        <div className="flex flex-col items-center pt-10">
          <Image
            src="/banners/stille_banner.png"
            alt="Stille Banner"
            width={1168}
            height={259}
            className="rounded-xs"
          />
        </div>
      </div>

      {/* Totaler Zerfall section */}
      <div className="mx-auto w-full max-w-[1168px] mt-20 px-4">
        <div className="mx-auto w-full h-[3px] bg-black" />
        <div className="flex flex-col md:flex-row items-center md:gap-12 py-10">
          <div className="w-full md:w-auto flex-shrink-0">
            <Image
              src="/misc/totaler_zerfall.png"
              alt="Totaler Zerfall"
              width={459}
              height={594}
              className="w-full max-w-[459px] h-auto mx-auto rounded-xs"
            />
          </div>
          <div className="flex flex-col pt-10 md:pt-0">
            <p className="text-red-600 text-xl font-bold">
              Ganze section inhaltlich überarbeiten!! (außer prompt)
            </p>
            <h1 className="text-black font-bold text-2xl md:text-[30px]">
              Emotionen
            </h1>
            <span className="text-black pt-5">
              Skalen der Gefühle der Pflanze
            </span>
            <h2 className="text-black font-bold text-[18px] pt-5 pb-5">
              Benutzter prompt
            </h2>
            <span className="block rounded-md bg-zinc-100 p-4 font-mono text-base text-zinc-800">
              expressionist oil painting in the style of Edvard Munch&apos;s
              &apos;The Scream&apos;, figure collapsing inward, mouth open in
              silent scream, colors shattered into shards of deep crimson and
              grey, sky disintegrated, bridge broken in places, figure
              semi-transparent as if fading, canvas cracked and burned,
              atmosphere of extreme inner collapse and existential panic, as if
              the natural world itself is crying out after being utterly ignored
              and consumed by digital distraction.
            </span>
            <h2 className="text-black font-bold text-[18px] pt-5">
              Wann aktiv?
            </h2>
            <span className="text-black pt-5 text-justify text-lg">
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
        <span className="text-black text-center text-lg">
          Behind the scenes.
          <br />
          coming soon.
        </span>
      </div>

      {/* Last section */}

      <div></div>

      {/* Footer */}

      <div className="max-w-[1168px] mx-auto pt-20 px-4">
        <div className="w-full h-[3px] bg-black" />
        <div className="flex flex-col-reverse md:flex-row- py-10 gap-10">
          <div className="w-full">
            <ul className="text-black text-lg space-y-2 text-center md:text-left">
              <li>Sven Fydrich</li>
              <li>Gloria Bichler</li>
              <li>Florian von Basse</li>
              <li>Emanuel Ostertag</li>
              <li>Katharina Brandtner</li>
            </ul>
          </div>
          <div className="flex flex-col gap-10 max-w-full md:max-w-[65%]">
            <span className="text-[#3a3a3a] text-lg text-justify">
              Wir bedanken uns bei allen, die uns beim Umsetzten dieses Projekts
              unterstützt, und somit die Fertigstellung der Kunstinstallation
              ermöglicht haben. Ein besonderer Dank gilt unseren Dozenten Yves
              Peitzner und Prof. Dr. Hanna Moser, sowie der Hochschule München
              für das Bereitstellen der finanziellen Mittel und der kreativen
              Freiheit als auch das kontinuierliche Feedback, das uns bei der
              Umsetzung von Flora.exe geholfen hat.
            </span>
            <span className="text-[#3a3a3a] text-lg text-justify">
              Dieses Projekt entstand im Rahmen des Projektmoduls
              &apos;Künstliche Intelligenz&apos; im 4. Semester des Studiengangs
              Informatik & Design. Es erforscht die Schnittstelle von Natur,
              Mensch und Technologie und wirft Fragen über unsere Beziehung zur
              digitalen und natürlichen Welt auf.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
