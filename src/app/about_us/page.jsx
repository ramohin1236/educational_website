"use client";

import Image from "next/image";
import React from "react";
import hero from "../../../public/img/bannar1.jpg";
import about1 from "../../../public/img/about1.jpg";
import about2 from "../../../public/img/about2.jpg";
import about3 from "../../../public/img/about3.jpg";
import icon1 from "../../../public/img/icon1.png";
import icon2 from "../../../public/img/icon2.png";
import icon3 from "../../../public/img/icon4.png";
import { GoHome } from "react-icons/go";
import { RiArrowRightSLine, RiInformationLine, RiHistoryLine } from "react-icons/ri";
import { useGetAboutUsQuery } from "@/redux/Api/aboutUsApi";
import Link from "next/link";

const AboutUs = () => {
  const { data } = useGetAboutUsQuery();
  const sanitizedContent = data?.data?.content;

  const features = [
    {
      icon: icon1,
      bg: "bg-[#e2f1ef]",
      title: "Our Purpose",
      description: "At Seeds of Learning, our purpose is to nurture every learner’s potential through personalized education, guidance, and mentorship. We believe that every child deserves the right tools and environment to grow academically and personally."
    },
    {
      icon: icon2,
      bg: "bg-[#f1ede2]",
      title: "Our Journey",
      description: "What began as a simple vision to make learning more meaningful has grown into a trusted educational community. Over the years, we’ve partnered with dedicated tutors, passionate parents, and motivated students to build a legacy of success."
    },
    {
      icon: icon3,
      bg: "bg-[#e5e2f1]",
      title: "Our Foundation",
      description: "Our foundation is built on trust, excellence, and compassion. We combine academic expertise with human understanding to make learning both effective and enjoyable. By focusing on holistic growth, we aim to instill values and discipline."
    }
  ];

  return (
    <div className="bg-white">
      {/* Premium Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[450px] flex items-center overflow-hidden">
        <Image
          src={hero}
          alt="Hero Banner"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#408f55]/85"></div>

        <div className="relative z-10 container mx-auto px-6 text-white text-center flex flex-col items-center">
          <div className="bg-[#FFD646] text-[#2d5f3f] px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest mb-6 shadow-xl flex items-center gap-2">
            <RiHistoryLine size={18} />
            <span>Our Story & Vision</span>
          </div>

          <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter shadow-sm leading-tight">
            About Us
          </h1>

          <p className="max-w-3xl text-lg md:text-xl text-white/90 font-medium leading-relaxed mb-10">
            A team of dedicated educators committed to transforming lives through personalized, data-driven, and compassionate learning experiences.
          </p>

          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20 text-sm font-bold uppercase tracking-widest">
            <Link href="/" className="hover:text-[#FFD646] transition-colors flex items-center gap-1">
              <GoHome size={18} /> Home
            </Link>
            <RiArrowRightSLine className="opacity-50" />
            <span className="text-[#FFD646]">About Us</span>
          </div>
        </div>
      </section>

      {/* Story & Philosophy Section */}
      <div className="bg-[#f8fdf9] py-24">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual Story Side */}
          <div className="space-y-6">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white transform hover:rotate-1 transition-transform duration-500">
              <Image
                className="w-full h-[350px] object-cover"
                src={about1}
                alt="Our Story"
                width={800}
                height={500}
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-[2rem] overflow-hidden shadow-xl border-4 border-white transform hover:-rotate-2 transition-transform duration-500">
                <Image src={about2} alt="Tutoring Session" width={400} height={300} className="w-full h-full object-cover" />
              </div>
              <div className="rounded-[2rem] overflow-hidden shadow-xl border-4 border-white transform hover:rotate-2 transition-transform duration-500">
                <Image src={about3} alt="Student Progress" width={400} height={300} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Text Content Side */}
          <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-xl border-2 border-[#e0f0e6]">
            {!data?.data?.content ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="bg-gray-50 p-6 rounded-full mb-6">
                  <RiInformationLine className="text-5xl text-[#408f55]/30" />
                </div>
                <h3 className="text-2xl font-black text-[#2d5f3f] mb-4">Our Story is Being Written</h3>
                <p className="text-gray-500 font-medium max-w-sm">
                  We are currently polishing our narrative. Please check back soon to learn more about our origins and mission.
                </p>
              </div>
            ) : (
              <div className="prose prose-lg max-w-none prose-headings:text-[#2d5f3f] prose-headings:font-black prose-p:text-gray-600 prose-p:font-medium prose-p:leading-relaxed">
                <p
                  className="text-gray-700"
                  dangerouslySetInnerHTML={{ __html: sanitizedContent }}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-[#2d5f3f] mb-6">
              Our Core Values
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
              The principles that guide every session, every tutor match, and every student's journey toward excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature, idx) => (
              <div key={idx} className="group bg-white p-10 rounded-[2.5rem] border-4 border-[#e0f0e6] hover:border-[#FFD646] transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-2 text-center flex flex-col items-center">
                <div className={`${feature.bg} w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform`}>
                  <Image src={feature.icon} alt={feature.title} width={48} height={48} />
                </div>
                <h3 className="text-2xl font-black text-[#2d5f3f] mb-6 group-hover:text-[#408f55] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-500 font-medium leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
