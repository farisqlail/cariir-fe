"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Menu,
  X,
  Play,
  CheckCircle2,
  Globe,
  Box,
  Layers,
  Zap,
} from "lucide-react";

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between py-4">
          <Link
            href="/"
            className="flex items-center space-x-2 rtl:space-x-reverse"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="self-center text-xl font-bold whitespace-nowrap text-white">
              Cariir
            </span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="hidden md:flex space-x-4 items-center">
              <input
                type="text"
                placeholder="Cari pekerjaan..."
                className="bg-white/5 border border-white/10 text-white text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2"
              />
              <Link
                href="/login"
                className="text-white hover:text-gray-300 font-medium text-sm px-4 py-2"
              >
                Masuk
              </Link>
              <button
                type="button"
                className="text-white bg-white/10 hover:bg-white/20 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center border border-white/20"
              >
                Daftar
              </button>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-700 rounded-lg bg-gray-900 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
              {["Lowongan", "Perusahaan", "Fitur AI", "Blog", "Harga"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="block py-2 px-3 text-gray-400 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-white md:p-0 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                Temukan Karir Impian.
              </span>
              <br />
              Didukung AI.
            </h1>
            <p className="text-lg text-gray-400 mb-8 max-w-lg">
              Cukup upload CV Anda, dan biarkan AI canggih kami menganalisis keahlian Anda untuk mencocokkan dengan ribuan lowongan kerja yang paling relevan.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 focus:ring-4 focus:ring-blue-800 font-medium rounded-full text-sm px-8 py-3.5 text-center inline-flex items-center shadow-lg shadow-purple-500/30 transition-all hover:scale-105">
                Upload CV Sekarang
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <button className="text-white border border-white/20 hover:bg-white/10 focus:ring-4 focus:ring-gray-700 font-medium rounded-full text-sm px-8 py-3.5 text-center inline-flex items-center transition-all">
                <Play className="w-4 h-4 mr-2 fill-current" /> Lihat Demo
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex justify-center"
          >
            {/* Abstract Globe Representation */}
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-3xl animate-pulse"></div>
              <div className="relative w-full h-full rounded-full border border-white/10 bg-black/40 backdrop-blur-sm overflow-hidden flex items-center justify-center shadow-2xl shadow-blue-500/20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_70%)]"></div>
                {/* Simulated Grid Lines */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-30 animate-[spin_20s_linear_infinite]"
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="48"
                    fill="none"
                    stroke="url(#grad1)"
                    strokeWidth="0.5"
                  />
                  <path
                    d="M50 2 A48 48 0 0 1 50 98"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.2"
                  />
                  <path
                    d="M2 50 A48 48 0 0 1 98 50"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.2"
                  />
                  <defs>
                    <linearGradient
                      id="grad1"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        style={{ stopColor: "#a855f7", stopOpacity: 1 }}
                      />
                      <stop
                        offset="100%"
                        style={{ stopColor: "#3b82f6", stopOpacity: 1 }}
                      />
                    </linearGradient>
                  </defs>
                </svg>
                {/* Floating Dots */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)] animate-ping"></div>
                <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)] animate-pulse"></div>
                <div className="absolute top-1/2 right-10 w-2 h-2 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const LogoCloud = () => {
  return (
    <section className="py-10 border-y border-white/5 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">
          Dipercaya oleh perusahaan terkemuka
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 grayscale opacity-60 hover:opacity-100 transition-opacity duration-300">
          {/* Simple Text Placeholders for Logos as I cannot import images */}
          {["GOJEK", "TOKOPEDIA", "TRAVELOKA", "BUKALAPAK", "SHOPEE", "BLIBLI", "TELKOMSEL"].map(
            (logo) => (
              <span
                key={logo}
                className="text-xl font-bold text-gray-400 hover:text-white cursor-default"
              >
                {logo}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
};

const FeatureSection = ({
  reversed = false,
  title,
  subtitle,
  description,
  visualType = "cube",
}: {
  reversed?: boolean;
  title: string;
  subtitle: string;
  description: string;
  visualType?: "cube" | "torus" | "abstract";
}) => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col ${
            reversed ? "lg:flex-row-reverse" : "lg:flex-row"
          } items-center gap-16`}
        >
          {/* Text Content */}
          <div className="flex-1 space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                {title}
              </span>
              {subtitle}
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              {description}
            </p>
            <button className="group text-white border border-white/20 hover:border-purple-500 hover:bg-purple-500/10 focus:ring-4 focus:ring-purple-800 font-medium rounded-full text-sm px-6 py-3 text-center inline-flex items-center transition-all">
              Pelajari Lebih Lanjut
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Visual Content */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-purple-500/30 blur-[60px] rounded-full"></div>
              
              {visualType === "cube" && (
                <div className="relative w-full h-full flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
                  <div className="w-48 h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-md border border-white/20 rounded-2xl shadow-[0_0_40px_rgba(139,92,246,0.3)] flex items-center justify-center relative rotate-12 hover:rotate-0 transition-all duration-500">
                     <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent rounded-2xl"></div>
                     <Box className="w-20 h-20 text-white/80" />
                  </div>
                  <div className="absolute -z-10 w-48 h-48 bg-purple-600/10 rounded-2xl rotate-6 border border-purple-500/20"></div>
                </div>
              )}

              {visualType === "torus" && (
                <div className="relative w-full h-full flex items-center justify-center">
                   <div className="w-56 h-56 rounded-full border-[20px] border-t-purple-500 border-r-blue-500 border-b-purple-900 border-l-blue-900 blur-sm animate-[spin_10s_linear_infinite] opacity-80"></div>
                   <div className="absolute w-40 h-40 rounded-full border-[10px] border-t-white/50 border-transparent animate-[spin_5s_linear_infinite_reverse]"></div>
                </div>
              )}

               {visualType === "abstract" && (
                <div className="relative w-full h-full flex items-center justify-center">
                   <div className="absolute w-48 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-md transform rotate-45 top-1/3"></div>
                   <div className="absolute w-48 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-md transform -rotate-45 bottom-1/3"></div>
                   <div className="w-40 h-40 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl transform rotate-12 flex items-center justify-center shadow-2xl">
                      <Layers className="w-16 h-16 text-white" />
                   </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonial = () => {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500">
          <div className="bg-gray-900/90 backdrop-blur-xl rounded-[22px] p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-full bg-gradient-to-br from-gray-700 to-gray-600 border-4 border-gray-800 shadow-xl overflow-hidden">
                {/* Placeholder Avatar */}
                <div className="w-full h-full flex items-center justify-center bg-gray-800 text-3xl font-bold text-gray-500">
                  DA
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <p className="text-xl md:text-2xl font-medium text-white mb-6 italic">
                  "Saya hanya mengupload CV, dan dalam hitungan detik Cariir memberikan rekomendasi pekerjaan yang benar-benar sesuai dengan keahlian saya. Minggu depannya saya langsung diterima!"
                </p>
                <div>
                  <h4 className="text-white font-bold text-lg">
                    Dian Anggraini
                  </h4>
                  <p className="text-purple-400 text-sm">
                    Software Engineer di Startup Unicorn
                  </p>
                </div>
              </div>
            </div>
            {/* Dots */}
            <div className="flex justify-center mt-8 gap-2">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <div className="w-2 h-2 rounded-full bg-gray-600"></div>
              <div className="w-2 h-2 rounded-full bg-gray-600"></div>
              <div className="w-2 h-2 rounded-full bg-gray-600"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
          <div className="relative z-10 px-8 py-16 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1">
               <div className="w-32 h-32 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center mb-6 animate-bounce">
                  <Zap className="w-16 h-16 text-white" />
               </div>
            </div>
            <div className="flex-[2]">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
                Temukan karir impian
              </h2>
              <h2 className="text-3xl md:text-5xl font-bold text-white/80 mb-8">
                bersama <span className="text-white">Cariir AI</span>
              </h2>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Masukkan email Anda"
                  className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
                />
                <button className="px-8 py-4 rounded-full bg-black text-white font-bold hover:bg-gray-900 transition-colors shadow-lg">
                  Mulai Sekarang
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500 selection:text-white">
      <Navbar />
      <Hero />
      <LogoCloud />
      <FeatureSection
        title="Analisis CV Cerdas"
        subtitle="Ekstraksi Skill Otomatis"
        description="Teknologi AI kami membaca CV Anda (PDF/DOC) secara mendalam, mengidentifikasi keahlian, pengalaman, dan potensi tersembunyi yang mungkin Anda lewatkan."
        visualType="cube"
      />
      <FeatureSection
        reversed
        title="Pencocokan Presisi"
        subtitle="Lowongan yang Tepat"
        description="Lupakan scrolling tanpa henti. Algoritma kami mencocokkan profil unik Anda dengan lowongan kerja yang memiliki tingkat kecocokan tertinggi, menghemat waktu berharga Anda."
        visualType="torus"
      />
      <Testimonial />
      <FeatureSection
        title="Analisis Kesenjangan"
        subtitle="Tingkatkan Peluang Anda"
        description="Ketahui skill apa yang masih kurang untuk pekerjaan impian Anda. Kami memberikan saran actionable untuk menutup gap tersebut dan meningkatkan nilai jual Anda."
        visualType="abstract"
      />
      <CTA />
    </div>
  );
}
