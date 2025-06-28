"use client";

import { Lexend } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";

const lexend = Lexend({ subsets: ["latin"] });

export default function Home() {
  const [showFullPrompt, setShowFullPrompt] = useState(false);

  return (
    <div className={`min-h-screen p-8 bg-white ${lexend.className}`}>
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
          className="text-black font-extralight text-center text-2xl pt-2"
        >
          Climate & Ressources
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="mx-auto w-full max-w-[1168px] h-[1px] bg-black mt-2"
        />
      </motion.nav>

      {/* Hero section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="my-10 flex justify-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
          className="w-full max-w-[1168px] aspect-[1168/626] relative"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="w-full h-full"
            style={{ position: "absolute", inset: 0 }}
          >
            <Image
              src="/carousel/carousel_1.png"
              alt="Climate and Resources - Flora.exe"
              fill
              className="object-cover rounded-xs"
              priority
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Main section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mt-30 flex justify-center"
      >
        <div className="flex flex-col md:flex-row w-full max-w-[1168px] gap-4 md:gap-6">
          {/* Left column - 7/17 width */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
            className="w-full md:w-[40%] hidden md:block"
          >
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="text-black text-left text-4xl font-bold"
            >
              Projekt-
              <br />
              verantwortliche
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.18, ease: "easeOut" }}
              className="w-full h-[3px] bg-black mt-3 mb-5 max-w-[1168px]"
            />
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="text-[#6b6b6b] text-left text-lg"
            >
              MUC.DAI: Informatik & Design 4. Sem // Projektmodul KI
            </motion.span>
            <motion.ul
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-black pt-10 pb-40 text-xl md:pt-20 md:pb-20"
            >
              <motion.li
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.22, ease: "easeOut" }}
              >
                Sven Fydrich
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.24, ease: "easeOut" }}
              >
                Gloria Bichler
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.26, ease: "easeOut" }}
              >
                Florian von Basse
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.28, ease: "easeOut" }}
              >
                Emanuel Ostertag
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              >
                Katharina Brandtner
              </motion.li>
            </motion.ul>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.32, ease: "easeOut" }}
              className="relative w-full aspect-[4/3] hidden md:block"
            >
              <Image
                src="/misc/group_image.png"
                alt="Project Team"
                fill
                className="object-cover rounded-xs"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.34, ease: "easeOut" }}
              className="text-[#363636] mt-5"
            >
              (Links nach rechts) Gloria, Katharina, Emanuel, Sven, Florian
            </motion.p>
          </motion.div>

          {/* Vertical divider - hidden on mobile */}
          <div className="hidden md:block w-[3px] h-[941px] bg-black" />

          {/* Right column - 10/17 width */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="w-full md:w-[60%]"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
              className="flex flex-col md:flex-row items-start gap-5"
            >
              {/* Text section */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, delay: 0.14, ease: "easeOut" }}
                className="flex flex-col w-full md:w-[50%]"
              >
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.7, delay: 0.16, ease: "easeOut" }}
                  className="text-black font-bold text-4xl text-left md:text-right"
                >
                  Flora.exe
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.7, delay: 0.18, ease: "easeOut" }}
                  className="w-full h-[3px] bg-black mt-3 max-w-[1168px]"
                />
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                  className="text-[#3a3a3a] text-justify text-lg mt-5"
                >
                  Flora.exe besteht aus einer Pflanze mit Sensoren, einem
                  Gemälde, einem Fernseher und einem QR-Code der zu dieser
                  Webseite führt. Die Installation verändert sich je nach
                  Aufmerksamkeit, die man Flora entgegenbringt.
                </motion.span>
              </motion.div>

              {/* Image section */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, delay: 0.22, ease: "easeOut" }}
                className="relative w-full md:flex-1 md:max-w-[383px] aspect-[383/500] hidden md:block"
              >
                <Image
                  src="/misc/austellung.png"
                  alt="Flora.exe Ausstellung"
                  fill
                  className="object-contain object-right rounded-xs"
                />
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.24, ease: "easeOut" }}
              className="mt-30"
            >
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, delay: 0.26, ease: "easeOut" }}
                className="text-black font-bold text-4xl"
              >
                Konzept
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, delay: 0.28, ease: "easeOut" }}
                className="w-full h-[3px] bg-black mt-3 max-w-[1168px]"
              />
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                className="text-[#3a3a3a] text-justify md: text-lg mt-5"
              >
                Flora.exe handelt vom Ringen um Aufmerksamkeit. Wir schenken sie
                unseren Handys, der Technik, der Onlinewelt und vergessen dabei
                die Natur und die Pflanzen. Sie wird ausgeblendet, übersehen und
                leidet unter unserem Verhalten. In unserem Projekt steht Flora
                im Mittelpunkt. Mit Sensoren nimmt sie die Beachtung wahr, die
                ihr entgegengebracht wird. Ihre Gedanken und Hilfeschreie
                überträgt sie über einen Fernseher an den Betrachter. Erhält sie
                Aufmerksamkeit, wandelt sich das Gemälde in eine wunderschöne,
                lebendige Landschaft. Doch wenn sie bemerkt, dass Fotos von ihr
                gemacht werden wandelt sich die Stimmung. Das Bild wird düster
                und hoffnungslos. Der Widerspruch, dass die Pflanze nur über
                Technik mit uns kommunizieren kann, zeigt, wie entfremdet wir
                von der Natur sind. Sie kann nur durch den Filter der
                Technologie zu uns durchdringen, um unsere Beachtung zu
                erlangen.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Interaktion section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        className="mt-30 flex flex-col items-start md:items-center md:mt-100"
      >
        <h1 className="text-black text-left text-4xl md:text-center font-bold">
          Interaktion
        </h1>
        <div className="w-full h-[3px] bg-black mt-3 max-w-[1168px]" />
        <span className="text-[#3a3a3a] text-justify text-lg mt-5 pl-0 pr-0 md:text-center md:max-w-[1168px]">
          Was hat es mit der Pflanze auf sich? Wie kann ich mit ihr
          interagieren? Das ist unkomplizierter als es erscheinen mag, denn die
          Pflanze reagiert auf bestimmte äußere Reize. Die folgenden Aktionen
          wirken sich direkt auf die Pflanze, und somit auf das generierte Bild
          aus.
        </span>
      </motion.div>

      {/* Banner section */}
      <div className="hidden md:block">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
          className="flex flex-col items-center pt-10"
        >
          <Image
            src="/banners/nähe_banner.png"
            alt="Nähe Banner"
            width={1168}
            height={259}
            className="rounded-xs"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="flex flex-col items-center pt-10"
        >
          <Image
            src="/banners/ablenkung_banner.png"
            alt="Ablenkung Banner"
            width={1168}
            height={259}
            className="rounded-xs"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="flex flex-col items-center pt-10"
        >
          <Image
            src="/banners/stille_banner.png"
            alt="Stille Banner"
            width={1168}
            height={259}
            className="rounded-xs"
          />
        </motion.div>
      </div>

      {/* Emotionen section */}
      <div className="mx-auto w-full max-w-[1168px] mt-30 md:mt-100">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
          className="w-full h-[3px] bg-black mt-3 max-w-[1168px]"
        />
        <div className="flex flex-col md:flex-row items-center md:gap-10 my-0">
          {/* Image section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="w-full md:pt-10 md:max-w-full"
            >
              <Image
                src="/misc/totaler_zerfall.png"
                alt="Totaler Zerfall"
                width={459}
                height={594}
                className="rounded-xs w-full h-auto"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
          {/* Text section */}
          <div className="flex flex-col pt-10 md:pt-0 w-full md:w-1/2">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="text-black font-bold text-4xl"
            >
              Emotionen
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.18, ease: "easeOut" }}
              className="w-full h-[3px] bg-black mt-2 max-w-[1168px]"
            />
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.21, ease: "easeOut" }}
              className="text-[#3a3a3a] pt-10"
            >
              Die Pflanze hat unterschiedliche Emotionen, die sie je nach
              Interaktion mit ihr ausstrahlt. Streichelst du sie, und bist
              zärtlich, so zeigt sie ihre Freude un Glückseligkeit. Zückst du
              jedoch aber dein Handy und provozierst sie, so zeigt sie ihre
              verletzte und traurige Seite.
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.24, ease: "easeOut" }}
              className="text-black text-xl font-bold pt-10"
            >
              Aktuelle Emotion:
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.27, ease: "easeOut" }}
              className="text-xl text-black"
            >
              (placeholder)
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="text-black font-bold text-xl pt-10"
            >
              Benutzter prompt
            </motion.h2>
            {/* Collapsible prompt span */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.33, ease: "easeOut" }}
              className="relative"
            >
              <span
                className={`block mt-2 rounded-md bg-zinc-100 p-4 font-mono text-base text-zinc-800 transition-all duration-300 ${
                  showFullPrompt ? "" : "max-h-[3.5em] overflow-hidden"
                } relative`}
                style={{
                  WebkitLineClamp: showFullPrompt ? "unset" : 2,
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                }}
              >
                expressionist oil painting in the style of Edvard Munch&apos;s
                &apos;The Scream&apos;, figure collapsing inward, mouth open in
                silent scream, colors shattered into shards of deep crimson and
                grey, sky disintegrated, bridge broken in places, figure
                semi-transparent as if fading, canvas cracked and burned,
                atmosphere of extreme inner collapse and existential panic, as
                if the natural world itself is crying out after being utterly
                ignored and consumed by digital distraction.
                {!showFullPrompt && (
                  <span className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-zinc-100 to-transparent pointer-events-none" />
                )}
              </span>
              <button
                type="button"
                aria-label={
                  showFullPrompt ? "Weniger anzeigen" : "Mehr anzeigen"
                }
                className="absolute bottom-2 right-2 bg-white rounded-full p-1 shadow hover:bg-zinc-200 transition-colors"
                onClick={() => setShowFullPrompt((v) => !v)}
              >
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${
                    showFullPrompt ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.36, ease: "easeOut" }}
              className="text-black font-bold text-xl pt-5"
            >
              Wie wird diese Emotion ausgelöst?
            </motion.h2>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.39, ease: "easeOut" }}
              className="text-[#3a3a3a] pt-5 text-justify text-lg"
            >
              (placeholder) wird ausgelöst, wenn du placeholder-text.
            </motion.span>
          </div>
        </div>
      </div>

      <div className="hidden md:flex w-full h-[3px] bg-black max-w-[1168px] mx-auto mt-10" />

      {/* Funktionsweise section */}
      <div className="mx-auto w-full max-w-[1168px] mt-30 md:mt-90">
        {/* Headline and intro above the divider */}
        <div className="flex flex-col w-full">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
            className="text-black font-bold text-4xl"
          >
            Funktionsweise
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
            className="w-full h-[3px] bg-black mt-3 max-w-[1168px]"
          />
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.11, ease: "easeOut" }}
            className="text-[#3a3a3a] mt-6 text-justify"
          >
            Da Pflanzen normalerweise nicht mit uns kommunizieren können, nutzt
            Flora mehrere Medien um dieses Hindernis zu überwinden. Im
            grundlegenden sind es Eingabemedien, womit sie uns verstehen kann,
            und Ausgabemedien, mit denen sie sich ausdrücken kann.
          </motion.span>
        </div>
        <div className="flex flex-col gap-10 mt-6 md:flex-row md:mt-20">
          {/* Left column: Input */}
          <div className="flex flex-col w-full md:w-1/2 gap-10">
            {/* Sehen */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.14, ease: "easeOut" }}
              className="flex flex-col w-full mt-10 md:mt-0"
            >
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, delay: 0.17, ease: "easeOut" }}
                className="text-black font-bold text-4xl md:text-4xl"
              >
                Input
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="text-black text-2xl font-bold pt-5"
              >
                Sehen
              </motion.h2>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, delay: 0.23, ease: "easeOut" }}
                className="text-[#3a3a3a] text-justify"
              >
                Damit Flora sehen kann, verwendet sie eine digitale Kamera. So
                kann sie ihre Umgebung wahrnehmen und erkennt, wer ein Handy in
                der Hand hält.
              </motion.span>
            </motion.div>
            {/* Fühlen */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.26, ease: "easeOut" }}
              className="flex flex-col w-full mt-0 md:mt-10"
            >
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, delay: 0.29, ease: "easeOut" }}
                className="text-black text-2xl font-bold"
              >
                Fühlen
              </motion.h2>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, delay: 0.32, ease: "easeOut" }}
                className="text-[#3a3a3a] text-justify"
              >
                Flora ist zwar ziemlich empfindlich, aber freut sich wenn du sie
                zärtlich berührst. Mithilfe eines Midi-Controllers und ein wenig
                technischer Magie, kann sie deine Berührungen an ihren Blättern
                wahrnehmen.
              </motion.span>
            </motion.div>
          </div>

          {/* Vertical divider */}
          <div className="hidden md:flex w-[3px] bg-black self-stretch mx-2" />

          {/* Right column: Output */}
          <div className="flex flex-col w-full md:w-1/2 gap-10 md:text-right">
            {/* Sprechen (Output) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
              className="flex flex-col w-full mt-10 md:mt-0"
            >
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, delay: 0.38, ease: "easeOut" }}
                className="text-black font-bold text-4xl md:text-4xl mt-10 md:mt-0"
              >
                Output
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, delay: 0.41, ease: "easeOut" }}
                className="text-black text-2xl font-bold pt-5 md:text-right"
              >
                Sprechen
              </motion.h2>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, delay: 0.44, ease: "easeOut" }}
                className="text-[#3a3a3a] text-justify md:text-right block"
              >
                Um ihre Emotionen und Wünsche ausdrücken zu können, nutzt Flora
                einen alten Röhrenfernseher. Dadurch erhält sie eine Stimme,
                welche sie textuell ausleben kann.
              </motion.span>
            </motion.div>
            {/* Ausdrücken */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.47, ease: "easeOut" }}
              className="flex flex-col w-full mt-0 md:mt-10"
            >
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
                className="text-black text-2xl font-bold md:text-right"
              >
                Ausdrücken
              </motion.h2>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, delay: 0.53, ease: "easeOut" }}
                className="text-[#3a3a3a] text-justify md:text-right block"
              >
                Da bildliche Sprache einfacher verständlich ist, und mehr
                Interpretationsfreiraum bietet, nutzt Flora ein digitales
                Gemälde auf welches sie malerische Kunstwerke erstellen kann, um
                ihre Gefühle besser darstellen zu können.
              </motion.span>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="hidden md: w-full h-[3px] bg-black mt-10 max-w-[1168px] mx-auto" />

      {/* Danksagung / Footer */}
      <div className="max-w-[1168px] mx-auto mt-80 mb-30 md:mt-120 md:mb-10">
        <div className="flex flex-col items-center mt-10">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
            className="text-black text-center text-4xl font-bold"
          >
            Danksagung
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
            className="w-full h-[3px] bg-black mt-3"
          />
        </div>
        <div className="flex flex-col-reverse md:flex-row py-10 gap-10">
          <div className="w-full">
            <motion.ul
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.11, ease: "easeOut" }}
              className="flex flex-col-reverse md:flex-col text-black text-lg space-y-2 text-center md:text-left"
            >
              <motion.li
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.13, ease: "easeOut" }}
              >
                Sven Fydrich
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              >
                Gloria Bichler
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.17, ease: "easeOut" }}
              >
                Florian von Basse
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.19, ease: "easeOut" }}
              >
                Emanuel Ostertag
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.21, ease: "easeOut" }}
              >
                Katharina Brandtner
              </motion.li>
            </motion.ul>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.24, ease: "easeOut" }}
              className="flex justify-center md:hidden mt-2"
            >
              <Image
                src="/flora.png"
                alt="Totaler Zerfall"
                width={50}
                height={550}
                className="rounded-full"
              />
            </motion.div>
          </div>
          <div className="flex flex-col gap-10 max-w-full md:max-w-[65%]">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.27, ease: "easeOut" }}
              className="text-[#3a3a3a] text-lg text-justify"
            >
              Wir bedanken uns bei allen, die uns beim Umsetzten dieses Projekts
              unterstützt, und somit die Fertigstellung der Kunstinstallation
              ermöglicht haben. Ein besonderer Dank gilt unseren Dozenten Yves
              Peitzner und Prof. Dr. Hanna Moser, sowie der Hochschule München
              für das Bereitstellen der finanziellen Mittel und der kreativen
              Freiheit als auch das kontinuierliche Feedback, das uns bei der
              Umsetzung von Flora.exe geholfen hat.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="text-[#3a3a3a] text-lg text-justify"
            >
              Dieses Projekt entstand im Rahmen des Projektmoduls
              &apos;Künstliche Intelligenz&apos; im 4. Semester des Studiengangs
              Informatik & Design. Es erforscht die Schnittstelle von Natur,
              Mensch und Technologie und wirft Fragen über unsere Beziehung zur
              digitalen und natürlichen Welt auf.
            </motion.span>
          </div>
        </div>
      </div>
    </div>
  );
}
