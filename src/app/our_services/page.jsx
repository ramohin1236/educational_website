"use client";

import Image from "next/image";
import service1 from "../../../public/img/service1.jpg";
import service2 from "../../../public/img/service2.jpg";
import service3 from "../../../public/img/service3.jpg";
import hero from "../../../public/img/bannar1.jpg";
import icon from "../../../public/img/icon1.png";
import { GoArrowRight, GoHome } from "react-icons/go";
import { RiArrowRightSLine, RiShieldStarLine } from "react-icons/ri";
import { Users, Check } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "At Home Tutoring",
    path: "/home_tutoring",
    img: service1,
    description: "Personalized learning in the comfort and safety of your own home.",
    list: [
      "Parent Consultation",
      "Academic Assessment",
      "Personalized Lesson Plan",
      "Progress Reporting",
    ],
  },
  {
    title: "Group Tutoring",
    path: "/group_tutoring",
    img: service2,
    description: "Collaborative learning in small groups to boost confidence and social skills.",
    list: [
      "Small Group Interaction",
      "Peer Motivation",
      "Grade-Level Focused",
      "All Materials Included",
    ],
  },
  {
    title: "1-on-1 Tutoring",
    path: "/one_onee_tutoring",
    img: service3,
    description: "Dedicated attention to bridge learning gaps and accelerate understanding.",
    list: [
      "Tutor Match Guarantee",
      "Customized Curriculum",
      "Goal-Oriented Prep",
      "Flexible Scheduling",
    ],
  },
];

export default function OurServicespage() {
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
        {/* Deep Green Overlay */}
        <div className="absolute inset-0 bg-[#408f55]/85"></div>

        <div className="relative z-10 container mx-auto px-6 text-white text-center flex flex-col items-center">
          {/* Badge */}
          <div className="bg-[#FFD646] text-[#2d5f3f] px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest mb-6 shadow-xl flex items-center gap-2">
            <RiShieldStarLine size={18} />
            <span>Premium Educational Services</span>
          </div>

          <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter shadow-sm leading-tight">
            Our Services
          </h1>

          <p className="max-w-3xl text-lg md:text-xl text-white/90 font-medium leading-relaxed mb-10">
            With a team of experienced tutors and data-driven progress tracking, we ensure that education is about growth, confidence, and lifelong curiosity.
          </p>

          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20 text-sm font-bold uppercase tracking-widest">
            <Link href="/" className="hover:text-[#FFD646] transition-colors flex items-center gap-1">
              <GoHome size={18} /> Home
            </Link>
            <RiArrowRightSLine className="opacity-50" />
            <span className="text-[#FFD646]">Services</span>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <div className="container mx-auto px-6 py-24 mb-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-[#2d5f3f] mb-6">
            Explore Our Learning Paths
          </h2>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            Find the perfect environment for your child's educational journey—modeled for success and measurable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border-4 border-[#e0f0e6] hover:border-[#FFD646] transition-all duration-500 group flex flex-col"
            >
              {/* Image Container with Hover Effect */}
              <div className="h-64 w-full relative overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.title}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  {/* <span className="text-white font-black text-xs uppercase tracking-widest">Learn More Details</span> */}
                </div>
              </div>

              {/* Content Container */}
              <div className="p-10 flex flex-col flex-grow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-[#f8fdf9] rounded-2xl flex items-center justify-center border-2 border-[#e0f0e6] shadow-sm">
                    <Image src={icon} alt="icon" width={32} height={32} />
                  </div>
                  <h3 className="text-2xl font-black text-[#2d5f3f]">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-500 font-medium mb-8 text-sm leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-4 mb-10 flex-grow">
                  {service.list.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-600 font-bold text-sm">
                      <div className="w-6 h-6 bg-[#408f55] rounded-full flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-110">
                        <Check size={14} className="text-white font-bold" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Interactive Dynamic Link */}
                <div className="relative mt-auto">
                  <Link href={service.path} className="group/link inline-flex items-center gap-2">
                    <div className="relative z-10 flex items-center gap-3 bg-[#408f55] group-hover/link:bg-[#2d5f3f] text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-lg">
                      Read More <GoArrowRight className="text-xl group-hover/link:translate-x-2 transition-transform" />
                    </div>
                    <div className="absolute -inset-2 bg-[#FFD646]/20 rounded-3xl blur-md opacity-0 group-hover/link:opacity-100 transition-opacity"></div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
