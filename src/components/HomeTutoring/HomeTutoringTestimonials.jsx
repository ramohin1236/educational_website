"use client";

import React, { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { MdStar } from "react-icons/md";
import { RiChatQuoteLine } from "react-icons/ri";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

const HomeTutoringTestimonials = () => {
    const splideRef = useRef(null);

    const testimonials = [
        {
            quote: "Having a tutor come to our home has been transformative for our son. He's comfortable in his own space, and the one-on-one attention has boosted his confidence tremendously. His math grades went from C's to A's in just three months!",
            authorName: "Maria Johnson",
            authorTitle: "Parent of 7th Grade Student • Mathematics Tutoring",
            authorInitials: "MJ"
        },
        {
            quote: "The professionalism and care shown by Seeds of Learning tutors is exceptional. Our tutor is always on time, prepared, and genuinely invested in our daughter's success. The detailed progress reports give us peace of mind that we made the right choice.",
            authorName: "David Kim",
            authorTitle: "Parent of 5th Grade Student • English & Reading Tutoring",
            authorInitials: "DK"
        },
        {
            quote: "As a working parent, the convenience of home tutoring is invaluable. No more rushing to appointments after school. Our tutor fits seamlessly into our routine, and my twins actually look forward to their sessions. Their reading comprehension has improved dramatically!",
            authorName: "Lisa Patterson",
            authorTitle: "Parent of 3rd Grade Twins • Reading & Comprehension",
            authorInitials: "LP"
        },
        {
            quote: "The background check process gave us complete confidence in welcoming a tutor into our home. Our tutor has been wonderful - patient, knowledgeable, and great with kids. My son went from struggling with science to being top of his class. Highly recommend!",
            authorName: "Robert Taylor",
            authorTitle: "Parent of 6th Grade Student • Science Tutoring",
            authorInitials: "RT"
        }
    ];

    const handlePrevClick = () => {
        splideRef.current?.splide.go("<");
    };

    const handleNextClick = () => {
        splideRef.current?.splide.go(">");
    };

    return (
        <section className="py-20 px-6 bg-gradient-to-b from-[#f0f5f3] to-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#2d5f3f] mb-6">
                        What Parents Are Saying
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        Real experiences from families who have chosen home-based tutoring.
                    </p>
                </div>

                <div className="relative group max-w-4xl mx-auto">
                    <Splide
                        ref={splideRef}
                        options={{
                            type: "loop",
                            perPage: 1,
                            gap: "2rem",
                            arrows: false,
                            pagination: true,
                            autoplay: true,
                            interval: 6000,
                        }}
                    >
                        {testimonials.map((item, index) => (
                            <SplideSlide key={index}>
                                <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-gray-50 flex flex-col items-center text-center">
                                    <RiChatQuoteLine className="text-6xl text-[#d4e8df] mb-6" />
                                    <p className="text-gray-700 italic text-xl md:text-2xl leading-relaxed mb-8">
                                        "{item.quote}"
                                    </p>

                                    <div className="w-full h-px bg-[#e0f0e6] mb-8"></div>

                                    <div className="flex flex-col items-center gap-4">
                                        <div className="w-16 h-16 bg-gradient-to-br from-[#408f55] to-[#2d5f3f] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                                            {item.authorInitials}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-[#2d5f3f]">{item.authorName}</h4>
                                            <p className="text-gray-500 text-sm">{item.authorTitle}</p>
                                        </div>
                                    </div>
                                </div>
                            </SplideSlide>
                        ))}
                    </Splide>

                    {/* Custom Arrows */}
                    <button
                        className="absolute top-1/2 -left-4 md:-left-20 -translate-y-1/2 w-12 h-12 bg-white text-[#408f55] rounded-full shadow-lg flex items-center justify-center hover:bg-[#408f55] hover:text-white transition-all z-10 hidden md:flex"
                        onClick={handlePrevClick}
                    >
                        <HiArrowNarrowLeft size={24} />
                    </button>
                    <button
                        className="absolute top-1/2 -right-4 md:-right-20 -translate-y-1/2 w-12 h-12 bg-white text-[#408f55] rounded-full shadow-lg flex items-center justify-center hover:bg-[#408f55] hover:text-white transition-all z-10 hidden md:flex"
                        onClick={handleNextClick}
                    >
                        <HiArrowNarrowRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HomeTutoringTestimonials;
