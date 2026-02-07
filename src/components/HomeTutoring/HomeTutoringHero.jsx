import React from 'react';
import Image from 'next/image';
import heroImg from "../../../public/img/bannar1.jpg"; // Reusing existing banner image

const HomeTutoringHero = () => {
    return (
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden font-sans">
            {/* Background Image with Green Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={heroImg}
                    alt="Home Tutoring Banner"
                    fill
                    priority
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#408f55]/85 lg:bg-[#408f55]/80" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center text-white flex flex-col items-center">
                {/* Main Heading */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 max-w-4xl tracking-tight">
                    Home Tutoring That Works
                </h1>

                {/* Tagline */}
                <p className="text-xl md:text-2xl max-w-2xl mb-12 opacity-95 leading-relaxed font-medium">
                    Personalized Tutoring in the Comfort of Your Home
                </p>

                {/* CTA Button */}
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <button className="bg-[#FFD646] hover:bg-[#ffdf70] text-black px-10 py-5 rounded-xl font-extrabold text-lg transition-all shadow-2xl hover:scale-105 active:scale-95">
                         Book a Session →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HomeTutoringHero;
