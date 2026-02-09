'use client'
import React from 'react';
import Image from 'next/image';
import heroImg from "../../../public/img/bannar1.jpg"; // Reusing brand banner
import { useRouter } from 'next/navigation';

const OneOneHero = () => {
     const router = useRouter();
    const stats = [
        { number: "98%", label: "Student Satisfaction" },
        { number: "2.5+", label: "Grade Level Improvement" },
        { number: "5,000+", label: "Sessions Completed" },
        { number: "100%", label: "Certified Tutors" }
    ];

    return (
        <div>
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden font-sans">
                {/* Background Image with Green Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={heroImg}
                        alt="1:1 Tutoring Banner"
                        fill
                        priority
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#408f55]/90 lg:bg-[#408f55]/85" />
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center text-white flex flex-col items-center">
                    <div className="bg-[#FFD646] text-black px-5 py-2 rounded-full font-bold text-sm tracking-widest uppercase mb-8 shadow-lg">
                        Premium Service
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 max-w-4xl tracking-tight">
                        1:1 Personalized Tutoring
                    </h1>

                    <p className="text-xl md:text-2xl max-w-2xl mb-12 opacity-95 leading-relaxed font-medium">
                        Unlock your child's full potential with dedicated one-on-one instruction tailored to their unique learning style and academic goals.
                    </p>

                    <button    onClick={() => router.push("/1-1TutoringLink")} className="bg-[#FFD646] hover:bg-[#ffdf70] text-black px-10 py-5 rounded-xl font-extrabold text-lg transition-all shadow-2xl hover:scale-105 active:scale-95 uppercase tracking-wider">
                        Book a Session →
                    </button>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="bg-white py-12 px-6 shadow-sm border-b border-gray-100 relative z-20">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center group">
                                <div className="text-4xl md:text-5xl font-black text-[#408f55] mb-2 group-hover:scale-110 transition-transform">
                                    {stat.number}
                                </div>
                                <div className="text-gray-500 font-bold text-sm md:text-base uppercase tracking-wide">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OneOneHero;
