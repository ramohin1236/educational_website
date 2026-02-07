import React from 'react';
import { Users, Star, GraduationCap, Lightbulb } from 'lucide-react';

const LearningBalance = () => {
    const benefits = [
        {
            icon: <Users className="text-white" />,
            title: "Collaborative Learning",
            description: "Students engage with core concepts together through group discussions and peer-to-peer explanations that deepen understanding."
        },
        {
            icon: <Star className="text-white" />,
            title: "Individual Check-ins",
            description: "Tutors rotate to provide one-on-one guidance, answering specific questions and ensuring each student grasps the material."
        },
        {
            icon: <GraduationCap className="text-white" />,
            title: "Peer Motivation",
            description: "Students motivate each other and develop healthy academic competition that drives everyone to perform their best."
        },
        {
            icon: <Lightbulb className="text-white" />,
            title: "Differentiated Support",
            description: "Tutors adapt instruction in real-time, providing extra support while offering advanced challenges to those ready to move ahead."
        }
    ];

    return (
        <section className="py-24 px-6 bg-gradient-to-b from-[#f0f5f3] to-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-[#2d5f3f] mb-6">
                        The Perfect Balance
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
                        Every group session combines collaborative learning with individualized attention to ensure every student thrives.
                    </p>
                </div>

                  <div>
                    
                  </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="w-full max-w-2xl mx-auto px-4 py-8">
            {/* Visual Scale Card */}
            <div className="relative p-6 md:p-10 bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl border-4 border-[#e0f0e6]">
                
                {/* Bars Container */}
                <div className="flex items-end justify-center gap-4 md:gap-8 mb-10 md:mb-12">
                    
                    {/* 60% Bar Column */}
                    <div className="flex-1 group">
                        {/* Bar - Taller Height for 60% */}
                        <div className="h-64 md:h-80 w-full bg-gradient-to-t from-[#408f55] to-[#2d5f3f] rounded-2xl flex flex-col items-center justify-end p-4 md:p-6 border-b-8 border-[#2d5f3f] shadow-xl group-hover:-translate-y-2 transition-transform duration-300 ease-out">
                            {/* Icon */}
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#FFD646] rounded-full flex items-center justify-center text-xl md:text-3xl mb-3 md:mb-4 shadow-lg border-4 border-white shrink-0">
                                👥
                            </div>
                            {/* Percentage */}
                            <div className="text-3xl md:text-5xl font-black text-white mb-1 md:mb-2">
                                60%
                            </div>
                            {/* Label */}
                            <div className="text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-wider text-center leading-tight">
                                Group Instruction
                            </div>
                        </div>
                        {/* Bottom Text */}
                        <div className="text-center mt-4 md:mt-6 font-black text-[#2d5f3f] text-sm md:text-base">
                            Shared Lessons
                        </div>
                    </div>

                    {/* 40% Bar Column */}
                    <div className="flex-1 group">
                        {/* Bar - Shorter Height for 40% */}
                        <div className="h-48 md:h-60 w-full bg-gradient-to-t from-[#FFD646] to-[#ffb700] rounded-2xl flex flex-col items-center justify-end p-4 md:p-6 border-b-8 border-[#ffb700] shadow-xl group-hover:-translate-y-2 transition-transform duration-300 ease-out">
                            {/* Icon */}
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#408f55] rounded-full flex items-center justify-center text-xl md:text-3xl mb-3 md:mb-4 shadow-lg border-4 border-white shrink-0">
                                ⭐
                            </div>
                            {/* Percentage */}
                            <div className="text-3xl md:text-5xl font-black text-[#2d5f3f] mb-1 md:mb-2">
                                40%
                            </div>
                            {/* Label */}
                            <div className="text-[#2d5f3f]/80 text-[10px] md:text-xs font-bold uppercase tracking-wider text-center leading-tight">
                                Personal Attention
                            </div>
                        </div>
                        {/* Bottom Text */}
                        <div className="text-center mt-4 md:mt-6 font-black text-[#2d5f3f] text-sm md:text-base">
                            Individual Focus
                        </div>
                    </div>
                </div>

                {/* Scale Base Line */}
                <div className="h-3 w-full bg-gradient-to-r from-[#408f55] via-[#FFD646] to-[#408f55] rounded-full shadow-inner relative">
                    <div className="absolute left-1/2 -top-5 md:-top-6 -translate-x-1/2 text-3xl md:text-4xl drop-shadow-md">
                        ⚖️
                    </div>
                </div>
            </div>
        </div>

                    {/* Benefits Side */}
                    <div className="space-y-8">
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-3xl shadow-lg border-l-8 border-[#FFD646] hover:translate-x-3 transition-transform group">
                                <div className="flex items-center gap-6 mb-4">
                                    <div className="w-14 h-14 bg-gradient-to-br from-[#408f55] to-[#2d5f3f] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                        {benefit.icon}
                                    </div>
                                    <h4 className="text-2xl font-black text-[#2d5f3f]">{benefit.title}</h4>
                                </div>
                                <p className="text-gray-600 font-medium leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LearningBalance;
