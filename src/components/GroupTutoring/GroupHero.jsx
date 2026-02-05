import React from 'react';
import Image from 'next/image';
import { Users } from 'lucide-react';
import heroImg from "../../../public/img/bannar1.jpg"; // Reusing brand banner

const GroupHero = () => {
    return (
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden font-sans">
            {/* Background Image with Green Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={heroImg}
                    alt="Group Tutoring Banner"
                    fill
                    priority
                    className="w-full h-full object-cover"
                />
                {/* Using the deep green overlay for brand consistency */}
                <div className="absolute inset-0 bg-[#408f55]/90 lg:bg-[#408f55]/85" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center text-white flex flex-col items-center">
                {/* Hero Badge */}
                <div className="bg-[#FFD646] text-black px-6 py-3 rounded-full font-bold text-sm tracking-widest uppercase mb-8 shadow-xl flex items-center gap-2">
                    <Users size={18} />
                    <span>Learn Together, Grow Together</span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-8 max-w-4xl tracking-tighter shadow-sm">
                    Group Tutoring
                </h1>

                <p className="text-xl md:text-3xl max-w-3xl mb-14 opacity-95 leading-relaxed font-medium">
                    Experience the power of collaborative learning in small, supportive groups where students motivate each other while receiving expert guidance.
                </p>

                <div className="flex flex-col sm:flex-row gap-6">
                    <button className="bg-[#FFD646] hover:bg-[#ffdf70] text-black px-12 py-6 rounded-2xl font-black text-xl transition-all shadow-2xl hover:scale-105 active:scale-95 uppercase tracking-widest">
                        Enroll Now →
                    </button>
                    <button className="bg-transparent hover:bg-white/10 text-white px-12 py-6 rounded-2xl font-black text-xl transition-all border-2 border-white/50 backdrop-blur-sm uppercase tracking-widest">
                        View Schedule
                    </button>
                </div>

                {/* Floating Icons Representation */}
                <div className="flex justify-center gap-4 mt-16 animate-bounce animate-duration-[3000ms]">
                    {['👩‍🎓', '👨‍🎓', '📚', '🌟'].map((icon, idx) => (
                        <div key={idx} className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-3xl border border-white/20 shadow-lg">
                            {icon}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GroupHero;
