"use client";

import { Lexend } from "next/font/google";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { useTheme } from "./Components/ThemeProvider";

const lexend = Lexend({ subsets: ["latin"] });

export default function Home() {
  // Carousel state for Emotionen section
  const [emotionCurrent, setEmotionCurrent] = useState(0);
  const [emotionShowFullPrompt, setEmotionShowFullPrompt] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (isVideoModalOpen && videoRef.current) {
      const video = videoRef.current;
      // Try to play and request fullscreen
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          // TypeScript: use type assertions for vendor-prefixed fullscreen methods
          const videoEl = video as HTMLVideoElement & {
            webkitRequestFullscreen?: () => Promise<void> | void;
            msRequestFullscreen?: () => Promise<void> | void;
          };
          if (video.requestFullscreen) {
            video.requestFullscreen();
          } else if (videoEl.webkitRequestFullscreen) {
            videoEl.webkitRequestFullscreen();
          } else if (videoEl.msRequestFullscreen) {
            videoEl.msRequestFullscreen();
          }
        });
      }
    }
  }, [isVideoModalOpen]);

  // Listen for fullscreen changes
  useEffect(() => {
    function handleFullscreenChange() {
      const doc = document as Document & {
        webkitFullscreenElement?: Element;
        msFullscreenElement?: Element;
      };
      const fullscreenElement =
        doc.fullscreenElement ||
        doc.webkitFullscreenElement ||
        doc.msFullscreenElement;
      setIsFullscreen(!!fullscreenElement);
    }
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("msfullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "msfullscreenchange",
        handleFullscreenChange
      );
    };
  }, []);

  // Helper to exit fullscreen
  const exitFullscreen = () => {
    const doc = document as Document & {
      webkitExitFullscreen?: () => void;
      msExitFullscreen?: () => void;
      fullscreenElement?: Element;
    };
    if (doc.fullscreenElement) {
      document.exitFullscreen();
    } else if (doc.webkitExitFullscreen) {
      doc.webkitExitFullscreen();
    } else if (doc.msExitFullscreen) {
      doc.msExitFullscreen();
    }
  };

  return (
    <div
      className={`min-h-screen p-8 ${lexend.className}`}
      style={{
        background: "var(--background)",
        color: "var(--foreground)",
        transition: "background 0.4s, color 0.4s",
      }}
    >
      {/* Floating theme toggle button */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.5 }}
        className="fixed bottom-6 left-6 z-50"
      >
        <button
          aria-label={
            theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
          }
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-500"
          style={{
            background: theme === "dark" ? "#222" : "#fff",
            color: theme === "dark" ? "#ffe066" : "#222",
            boxShadow:
              theme === "dark"
                ? "0 4px 24px 0 rgba(0,0,0,0.7)"
                : "0 4px 24px 0 rgba(0,0,0,0.15)",
            border:
              theme === "dark" ? "1.5px solid #ffe066" : "1.5px solid #222",
            cursor: "pointer",
            transition:
              "background 0.4s, color 0.4s, box-shadow 0.4s, border 0.4s",
          }}
        >
          {theme === "dark" ? (
            // Moon icon
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
            </svg>
          ) : (
            // Sun icon
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          )}
        </button>
      </motion.div>
      {/* Back to the top button */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.5 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <button
          aria-label="Back to the top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-500"
          style={{
            background: theme === "dark" ? "#222" : "#fff",
            color: theme === "dark" ? "#ffe066" : "#222",
            boxShadow:
              theme === "dark"
                ? "0 4px 24px 0 rgba(0,0,0,0.7)"
                : "0 4px 24px 0 rgba(0,0,0,0.15)",
            border:
              theme === "dark" ? "1.5px solid #ffe066" : "1.5px solid #222",
            cursor: "pointer",
            transition:
              "background 0.4s, color 0.4s, box-shadow 0.4s, border 0.4s",
          }}
        >
          {/* Up arrow icon */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 19V5" />
            <path d="M5 12l7-7 7 7" />
          </svg>
        </button>
      </motion.div>
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
          className="font-extralight text-center text-2xl pt-2"
          style={{ color: theme === "dark" ? "#fff" : "var(--foreground)" }}
        >
          Climate & Ressources
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full h-[1px] mt-3 mx-auto max-w-[1168px]"
          style={{
            background: theme === "dark" ? "#fff" : "var(--foreground)",
          }}
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
              src="/images/hero_image.png"
              alt="Climate and Resources - Flora.exe"
              fill
              className="object-cover rounded-xs"
              priority
            />
          </motion.div>
          {/* Play button */}
          <motion.button
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-200 focus:outline-none rounded-full w-16 h-16 flex items-center justify-center group hover:scale-110`}
            style={{
              cursor: "pointer",
              background: theme === "dark" ? "#222" : "#fff",
              opacity: 0.8,
              transition: "background 0.4s, opacity 0.4s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.8")}
            onClick={() => setIsVideoModalOpen(true)}
          >
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon
                points="15,10 34,22 15,34"
                fill={theme === "dark" ? "#ffe066" : "#222"}
              />
            </svg>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Video modal */}
      {isVideoModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          {/* Close button outside video, in modal overlay */}
          {!isFullscreen && (
            <button
              className="fixed top-8 right-8 z-[60] text-white hover:text-white focus:outline-none bg-black/60 rounded-full p-2"
              onClick={() => {
                setIsVideoModalOpen(false);
                exitFullscreen();
              }}
              style={{ pointerEvents: "auto" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#fff"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center"
          >
            <div className="bg-black w-[80vw] max-w-2xl aspect-video flex items-center justify-center">
              <video
                ref={videoRef}
                src="/videos/Flora%20EXE%20Trailer%20July%2006%202025.mp4"
                controls
                autoPlay
                className="w-full h-full object-contain rounded"
                style={{ background: "black" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}

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
              style={{ color: theme === "dark" ? "#fff" : "var(--foreground)" }}
            >
              Projekt-
              <br />
              verantwortliche
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="w-full h-[3px] mt-3 max-w-[1168px]"
              style={{
                background: theme === "dark" ? "#fff" : "var(--foreground)",
              }}
            />
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="text-[#6b6b6b] text-left text-lg"
              style={{
                color: theme === "dark" ? "#a9a9a9" : "var(--foreground)",
              }}
            >
              MUC.DAI: Informatik & Design 4. Sem // Projektmodul KI
            </motion.span>
            <motion.ul
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-black pt-10 pb-40 text-xl md:pt-20 md:pb-20"
              style={{ color: theme === "dark" ? "#fff" : "var(--foreground)" }}
            >
              <motion.li
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.22, ease: "easeOut" }}
                style={{
                  color: theme === "dark" ? "#fff" : "var(--foreground)",
                }}
              >
                Sven Fydrich
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.24, ease: "easeOut" }}
                style={{
                  color: theme === "dark" ? "#fff" : "var(--foreground)",
                }}
              >
                Gloria Bichler
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.26, ease: "easeOut" }}
                style={{
                  color: theme === "dark" ? "#fff" : "var(--foreground)",
                }}
              >
                Florian von Basse
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.28, ease: "easeOut" }}
                style={{
                  color: theme === "dark" ? "#fff" : "var(--foreground)",
                }}
              >
                Emanuel Ostertag
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                style={{
                  color: theme === "dark" ? "#fff" : "var(--foreground)",
                }}
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
              className="text-[#363636]"
              style={{
                color: theme === "dark" ? "#a9a9a9" : "var(--foreground)",
              }}
            >
              (Links nach rechts) Gloria, Katharina, Emanuel, Sven, Florian
            </motion.p>
          </motion.div>

          {/* Vertical divider - hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.41, ease: "easeOut" }}
            className="hidden md:flex w-[3px] self-stretch mx-2"
            style={{
              background: theme === "dark" ? "#fff" : "var(--foreground)",
            }}
          />

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
                  style={{
                    color: theme === "dark" ? "#fff" : "var(--foreground)",
                  }}
                >
                  Flora.exe
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="w-full h-[3px] mt-3 max-w-[1168px]"
                  style={{
                    background: theme === "dark" ? "#fff" : "var(--foreground)",
                  }}
                />
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                  className="text-[#3a3a3a] text-justify text-lg mt-5"
                  style={{
                    color: theme === "dark" ? "#a9a9a9" : "var(--foreground)",
                  }}
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
                style={{
                  color: theme === "dark" ? "#fff" : "var(--foreground)",
                }}
              >
                Konzept
              </motion.h1>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="w-full h-[3px] mt-3 max-w-[1168px]"
                style={{
                  background: theme === "dark" ? "#fff" : "var(--foreground)",
                }}
              />
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                className="text-[#3a3a3a] text-justify md: text-lg mt-5"
                style={{
                  color: theme === "dark" ? "#a9a9a9" : "var(--foreground)",
                }}
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
        <h1
          className="text-black text-left text-4xl md:text-center font-bold"
          style={{ color: theme === "dark" ? "#fff" : "var(--foreground)" }}
        >
          Interaktion
        </h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full h-[3px] mt-3 max-w-[1168px]"
          style={{
            background: theme === "dark" ? "#fff" : "var(--foreground)",
          }}
        />
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="text-[#3a3a3a] text-justify text-lg mt-5 pl-0 pr-0 md:text-center md:max-w-[1168px]"
          style={{
            color: theme === "dark" ? "#a9a9a9" : "var(--foreground)",
          }}
        >
          Was hat es mit der Pflanze auf sich? Wie kann ich mit ihr
          interagieren? Das ist unkomplizierter als es erscheinen mag, denn die
          Pflanze reagiert auf bestimmte äußere Reize. Die folgenden Aktionen
          wirken sich direkt auf die Pflanze, und somit auf das generierte Bild
          aus.
        </motion.p>
      </motion.div>

      {/* Banner section */}
      <div className="w-full">
        {[
          {
            src: "/banners/Nähe.png",
            alt: "Nähe Banner",
            heading: "Nähe",
            subheading: "Du näherst dich – das Bild wird lebendig.",
            description:
              "Die Pflanze spürt deine Präsenz. Formen fließen, Farben leuchten – als würde die Natur atmen.",
          },
          {
            src: "/banners/Ablenkung.png",
            alt: "Ablenkung Banner",
            heading: "Ablenkung",
            subheading: "Du greifst zum Handy – das Bild zerfällt.",
            description:
              "Dein Fokus wandert – und mit ihm zerbricht die Verbindung. Das Bild wird stumm. Die Natur auch.",
          },
          {
            src: "/banners/Stille.png",
            alt: "Stille Banner",
            heading: "Stille",
            subheading: "Du bleibst still – die Pflanze bleibt es auch.",
            description:
              "In der Ruhe liegt die Kraft. Die Pflanze verharrt, das Bild bleibt ruhig und unverändert.",
          },
        ].map((banner, i) => (
          <motion.div
            key={banner.src}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 0.7,
              delay: 0.05 + i * 0.1,
              ease: "easeOut",
            }}
            className="flex flex-col items-center pt-10"
          >
            <div
              className="
                w-full
                max-w-[1168px]
                max-h-[300px]
                overflow-hidden
                relative
                rounded-xs
                aspect-[2/3]
                md:aspect-[1168/259]
                md:max-h-none
              "
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, delay: 0.07 }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={banner.src}
                  alt={banner.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 1168px"
                  priority={i === 0}
                />
              </motion.div>
              {/* Overlay text */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="absolute inset-0 flex flex-col justify-end p-6 md:p-5 bg-gradient-to-t from-black/60 via-black/30 to-transparent"
              >
                <motion.h2
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className="text-white text-4xl font-bold mb-1 drop-shadow-md"
                >
                  {banner.heading}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.7, delay: 0.18 }}
                  className="text-white text-lg md:text-xl font-semibold mb-2 drop-shadow-md"
                >
                  {banner.subheading}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.7, delay: 0.21 }}
                  className="text-white text-base md:text-lg font-normal drop-shadow-md"
                >
                  {banner.description}
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Emotionen section as carousel */}
      <div className="mx-auto w-full max-w-[1168px] mt-30 md:mt-100">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full h-[3px] max-w-[1168px] mb-5"
          style={{
            background: theme === "dark" ? "#fff" : "var(--foreground)",
          }}
        />
        {/* Carousel logic */}
        {(() => {
          const emotions = [
            {
              name: "Totaler Zerfall",
              image: "/carousel/Totaler_Zerfall.png",
              alt: "Totaler Zerfall",
              title: "Totaler Zerfall",
              subtitle: "The Scream – Edvard Munch",
              prompt:
                "expressionist oil painting in the style of Edvard Munch's 'The Scream', figure collapsing inward, mouth open in silent scream, colors shattered into shards of deep crimson and grey, sky disintegrated, bridge broken in places, figure semi-transparent as if fading, canvas cracked and burned, atmosphere of extreme inner collapse and existential panic, as if the natural world itself is crying out after being utterly ignored and consumed by digital distraction.",
              info: 'Totaler Zerfall ist die negative, traurige beziehungsweise besonders dramatische Emotion von Flora. Das generierte Bild basiert auf dem Gemälde "The Scream" von Edvard Munch. Flora zeigt diese Emotion, wenn du mit deinem Smartphone ein Bild von ihr machst.',
              description:
                "Die Pflanze hat unterschiedliche Emotionen, die sie je nach Interaktion mit ihr ausstrahlt. Streichelst du sie, und bist zärtlich, so zeigt sie ihre Freude und Glückseligkeit. Zückst du jedoch aber dein Handy und provozierst sie, so zeigt sie ihre verletzte und traurige Seite.",
            },
            {
              name: "Stille",
              image: "/carousel/Stille.png",
              alt: "Stille",
              title: "Stille",
              subtitle: "The Milkmaid – Johannes Vermeer",
              prompt: "fehlt noch.",
              info: "Stille ist der Zustand der Ruhe und Ausgeglichenheit. Flora verharrt, das Bild bleibt ruhig und unverändert. (Platzhaltertext)",
              description:
                "Die Pflanze hat unterschiedliche Emotionen, die sie je nach Interaktion mit ihr ausstrahlt. Streichelst du sie, und bist zärtlich, so zeigt sie ihre Freude und Glückseligkeit. Zückst du jedoch aber dein Handy und provozierst sie, so zeigt sie ihre verletzte und traurige Seite.",
            },
            {
              name: "Lebensfreude im Überfluss",
              image: "/carousel/Lebensfreude_im_Überfluss.png",
              alt: "Lebensfreude im Überfluss",
              title: "Lebensfreude im Überfluss",
              subtitle: "Luncheon of the Boating Party – Pierre-Auguste Renoir",
              prompt:
                " impressionist oil painting in Renoir's style, group enjoying the late afternoon outdoors, faces smiling gently, gestures expressive but unforced, soft gold light filtering through tree branches, colors rich but painterly, not photorealistic, table adorned with a few seasonal fruits and glassware, river behind glows subtly in the distance, background nature in harmony, with blooming details slightly abstracted, brushwork warm and textured, atmosphere of full presence and mutual enjoyment – painterly, poetic and balanced)",
              info: "Lebensfreude im Überfluss ist die positive, lebensbejahende Emotion von Flora. Das Bild strahlt Freude und Energie aus und zeigt sich, wenn du Flora's Blätter sanft berührst.",
              description:
                "Die Pflanze hat unterschiedliche Emotionen, die sie je nach Interaktion mit ihr ausstrahlt. Streichelst du sie, und bist zärtlich, so zeigt sie ihre Freude und Glückseligkeit. Zückst du jedoch aber dein Handy und provozierst sie, so zeigt sie ihre verletzte und traurige Seite.",
            },
          ];
          const emotion = emotions[emotionCurrent];
          return (
            <div className="flex flex-col md:flex-row items-center md:gap-10 my-0 relative">
              {/* Image section */}
              <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
                {/* Image and overlay in fixed aspect ratio container */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                  className="w-full md:pt-10 md:max-w-full"
                >
                  <div className="relative w-full aspect-[383/500]">
                    <Image
                      src={emotion.image}
                      alt={emotion.alt}
                      fill
                      className="rounded-xs object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* White box overlay */}
                    <div
                      className="absolute bottom-40 md:bottom-60 bg-white bg-opacity-95 px-8 py-6 flex flex-col items-start w-[90%] md:w-auto"
                      style={{ minWidth: 220, maxWidth: 340 }}
                    >
                      <span className="font-bold text-2xl md:text-3xl text-black leading-tight">
                        {emotion.title}
                      </span>
                      <span className="text-black text-base md:text-lg mt-1 font-normal">
                        {emotion.subtitle}
                      </span>
                    </div>
                  </div>
                </motion.div>
                {/* Carousel controls always below image, never moving */}
                <div className="flex gap-2 mt-6 items-center justify-center">
                  <button
                    aria-label="Vorherige Emotion"
                    className="rounded-full bg-zinc-200 p-2 hover:bg-zinc-300 transition-colors cursor-pointer"
                    onClick={() => {
                      setEmotionCurrent(
                        (emotionCurrent - 1 + emotions.length) % emotions.length
                      );
                      setEmotionShowFullPrompt(false);
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      stroke="black"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  {emotions.map((e, idx) => (
                    <button
                      key={e.name}
                      aria-label={`Emotion ${e.name}`}
                      className={`w-3 h-3 rounded-full hover:cursor-pointer ${
                        idx === emotionCurrent ? "bg-zinc-800" : "bg-zinc-300"
                      } transition-colors`}
                      onClick={() => {
                        setEmotionCurrent(idx);
                        setEmotionShowFullPrompt(false);
                      }}
                    />
                  ))}
                  <button
                    aria-label="Nächste Emotion"
                    className="rounded-full bg-zinc-200 p-2 hover:bg-zinc-300 transition-colors cursor-pointer"
                    onClick={() => {
                      setEmotionCurrent((emotionCurrent + 1) % emotions.length);
                      setEmotionShowFullPrompt(false);
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      stroke="black"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              {/* Text section */}
              <div className="flex flex-col pt-10 md:pt-0 w-full md:w-1/2">
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                  className="text-black font-bold text-4xl"
                  style={{
                    color: theme === "dark" ? "#fff" : "var(--foreground)",
                  }}
                >
                  Emotionen
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="w-full h-[3px] mt-2 max-w-[1168px]"
                />
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.7, delay: 0.21, ease: "easeOut" }}
                  className="text-[#3a3a3a] pt-10"
                  style={{
                    color: theme === "dark" ? "#a9a9a9" : "var(--foreground)",
                  }}
                >
                  {emotion.description}
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.7, delay: 0.24, ease: "easeOut" }}
                  className="text-black text-xl font-bold pt-10"
                  style={{
                    color: theme === "dark" ? "#fff" : "var(--foreground)",
                  }}
                >
                  Aktuelle Emotion:
                </motion.h2>
                <motion.h2
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.7, delay: 0.27, ease: "easeOut" }}
                  className="text-xl text-black"
                  style={{
                    color: theme === "dark" ? "#a9a9a9" : "var(--foreground)",
                  }}
                >
                  {emotion.name}
                </motion.h2>
                <motion.h2
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                  className="text-black font-bold text-xl pt-10"
                  style={{
                    color: theme === "dark" ? "#fff" : "var(--foreground)",
                  }}
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
                      emotionShowFullPrompt
                        ? ""
                        : "max-h-[3.5em] overflow-hidden"
                    } relative`}
                  >
                    {emotion.prompt}
                    {!emotionShowFullPrompt && (
                      <span className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-zinc-100 to-transparent pointer-events-none" />
                    )}
                  </span>
                  <button
                    type="button"
                    aria-label={
                      emotionShowFullPrompt
                        ? "Weniger anzeigen"
                        : "Mehr anzeigen"
                    }
                    className="absolute bottom-2 right-2 bg-white text-zinc-800 rounded-full p-1 shadow hover:bg-zinc-200 transition-colors"
                    onClick={() => setEmotionShowFullPrompt((v) => !v)}
                  >
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${
                        emotionShowFullPrompt ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="black"
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
                  style={{
                    color: theme === "dark" ? "#fff" : "var(--foreground)",
                  }}
                >
                  Weitere Informationen
                </motion.h2>
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.7, delay: 0.39, ease: "easeOut" }}
                  style={{
                    color: theme === "dark" ? "#a9a9a9" : "var(--foreground)",
                  }}
                >
                  {emotion.info}
                </motion.span>
              </div>
            </div>
          );
        })()}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full h-[3px] mt-10 max-w-[1168px] mx-auto"
        style={{
          background: theme === "dark" ? "#fff" : "var(--foreground)",
        }}
      />

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
            style={{ color: theme === "dark" ? "#fff" : "var(--foreground)" }}
          >
            Funktionsweise
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full h-[3px] mt-3 max-w-[1168px]"
            style={{
              background: theme === "dark" ? "#fff" : "var(--foreground)",
            }}
          />
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.11, ease: "easeOut" }}
            className="text-[#3a3a3a] mt-6 text-justify"
            style={{
              color: theme === "dark" ? "#a9a9a9" : "var(--foreground)",
            }}
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
                style={{
                  color: theme === "dark" ? "#fff" : "var(--foreground)",
                }}
              >
                Input
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="text-black text-2xl font-bold pt-5"
                style={{
                  color: theme === "dark" ? "#fff" : "var(--foreground)",
                }}
              >
                Sehen
              </motion.h2>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, delay: 0.23, ease: "easeOut" }}
                className="text-[#3a3a3a] text-justify"
                style={{
                  color: theme === "dark" ? "#a9a9a9" : "var(--foreground)",
                }}
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
                style={{
                  color: theme === "dark" ? "#fff" : "var(--foreground)",
                }}
              >
                Fühlen
              </motion.h2>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, delay: 0.32, ease: "easeOut" }}
                className="text-[#3a3a3a] text-justify"
                style={{
                  color: theme === "dark" ? "#a9a9a9" : "var(--foreground)",
                }}
              >
                Flora ist zwar ziemlich empfindlich, aber freut sich wenn du sie
                zärtlich berührst. Mithilfe eines Midi-Controllers und ein wenig
                technischer Magie, kann sie deine Berührungen an ihren Blättern
                wahrnehmen.
              </motion.span>
            </motion.div>
          </div>

          {/* Vertical divider */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.41, ease: "easeOut" }}
            className="hidden md:flex w-[3px] self-stretch mx-2"
            style={{
              background: theme === "dark" ? "#fff" : "var(--foreground)",
            }}
          />

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
                style={{
                  color: theme === "dark" ? "#fff" : "var(--foreground)",
                }}
              >
                Output
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, delay: 0.41, ease: "easeOut" }}
                className="text-black text-2xl font-bold pt-5 md:text-right"
                style={{
                  color: theme === "dark" ? "#fff" : "var(--foreground)",
                }}
              >
                Sprechen
              </motion.h2>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, delay: 0.44, ease: "easeOut" }}
                className="text-[#3a3a3a] text-justify md:text-right block"
                style={{
                  color: theme === "dark" ? "#a9a9a9" : "var(--foreground)",
                }}
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
                style={{
                  color: theme === "dark" ? "#fff" : "var(--foreground)",
                }}
              >
                Ausdrücken
              </motion.h2>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, delay: 0.53, ease: "easeOut" }}
                className="text-[#3a3a3a] text-justify md:text-right block"
                style={{
                  color: theme === "dark" ? "#a9a9a9" : "var(--foreground)",
                }}
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
            style={{ color: theme === "dark" ? "#fff" : "var(--foreground)" }}
          >
            Danksagung
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full h-[3px] mt-3 max-w-[1168px]"
            style={{
              background: theme === "dark" ? "#fff" : "var(--foreground)",
            }}
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
              style={{ color: theme === "dark" ? "#fff" : "var(--foreground)" }}
            >
              <motion.li
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.13, ease: "easeOut" }}
                style={{
                  color: theme === "dark" ? "#fff" : "var(--foreground)",
                }}
              >
                Sven Fydrich
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                style={{
                  color: theme === "dark" ? "#fff" : "var(--foreground)",
                }}
              >
                Gloria Bichler
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.17, ease: "easeOut" }}
                style={{
                  color: theme === "dark" ? "#fff" : "var(--foreground)",
                }}
              >
                Florian von Basse
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.19, ease: "easeOut" }}
                style={{
                  color: theme === "dark" ? "#fff" : "var(--foreground)",
                }}
              >
                Emanuel Ostertag
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.21, ease: "easeOut" }}
                style={{
                  color: theme === "dark" ? "#fff" : "var(--foreground)",
                }}
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
                src="/images/flora_logo.png"
                alt="Flora"
                width={80}
                height={80}
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
              style={{
                color: theme === "dark" ? "#a9a9a9" : "var(--foreground)",
              }}
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
              style={{
                color: theme === "dark" ? "#a9a9a9" : "var(--foreground)",
              }}
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
