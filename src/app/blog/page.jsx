"use client";

import React from "react";
import Image from "next/image";
import hero from "../../../public/img/bannar1.jpg";
import { GoHome, GoArrowRight } from "react-icons/go";
import { RiArrowRightSLine, RiArticleLine } from "react-icons/ri";
import { useGetAllBlogsQuery } from "@/redux/Api/blogApi";
import Link from "next/link";

export default function BlogPage() {
  const { data: blogData, isLoading } = useGetAllBlogsQuery();
  const blogs = blogData?.data?.items || [];

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
            <RiArticleLine size={18} />
            <span>Insights & Education</span>
          </div>

          <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter shadow-sm leading-tight">
            Our Blog
          </h1>

          <p className="max-w-3xl text-lg md:text-xl text-white/90 font-medium leading-relaxed mb-10">
            Stay updated with the latest educational strategies, tutor tips, and academic success stories from the Seeds of Learning community.
          </p>

          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20 text-sm font-bold uppercase tracking-widest">
            <Link href="/" className="hover:text-[#FFD646] transition-colors flex items-center gap-1">
              <GoHome size={18} /> Home
            </Link>
            <RiArrowRightSLine className="opacity-50" />
            <span className="text-[#FFD646]">Blog</span>
          </div>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="py-24 px-6 container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-[#2d5f3f] mb-6">
            Educational Wisdom
          </h2>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            Explore articles designed to help parents and students navigate their learning journey with confidence.
          </p>
        </div>

        {!isLoading && blogs.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center bg-[#f8fdf9] rounded-[3rem] border-4 border-dashed border-[#e0f0e6]">
            <div className="bg-white p-8 rounded-full shadow-lg mb-8">
              <RiArticleLine className="text-7xl text-[#408f55]/20" />
            </div>
            <h2 className="text-3xl font-black text-[#2d5f3f] mb-4">No Stories Yet</h2>
            <p className="text-gray-500 max-w-md mb-10 font-medium">
              We're currently gathering the best insights from our educators. Check back soon for our first published piece!
            </p>
            <Link href="/" className="bg-[#408f55] hover:bg-[#2d5f3f] text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-xl hover:scale-105 active:scale-95">
              Back to Home
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="group bg-white rounded-[2.5rem] border-4 border-[#e0f0e6] hover:border-[#FFD646] shadow-2xl overflow-hidden transition-all duration-500 flex flex-col"
              >
                {/* Blog Image */}
                <div className="relative h-64 md:h-72 w-full overflow-hidden">
                  <Image
                    src={blog?.image.replace(/\\/g, "/")}
                    alt={blog?.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Blog Content */}
                <div className="p-10 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-4 text-[#408f55] font-black text-xs uppercase tracking-widest">
                    <RiArticleLine /> Updated Insights
                  </div>

                  <h3 className="text-2xl font-black text-[#2d5f3f] mb-6 leading-tight group-hover:text-[#408f55] transition-colors">
                    {blog?.title}
                  </h3>

                  <p className="text-gray-500 font-medium mb-10 text-sm leading-relaxed line-clamp-3">
                    {blog?.content?.replace(/<\/?[^>]+(>|$)/g, "")}
                  </p>

                  <div className="mt-auto">
                    <Link href={`/blog/${blog?._id}`} className="group/btn inline-flex items-center gap-3">
                      <div className="relative z-10 flex items-center gap-3 bg-[#f8fdf9] border-2 border-[#e0f0e6] group-hover/btn:border-[#FFD646] group-hover/btn:bg-[#FFD646] text-[#2d5f3f] px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-sm">
                        Read Article <GoArrowRight className="text-xl group-hover/btn:translate-x-2 transition-transform" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
