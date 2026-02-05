import React from 'react';
import { Users, GraduationCap, Target, Check } from 'lucide-react';

const GroupDynamics = () => {
    const infoCards = [
        {
            icon: <Users className="w-10 h-10 text-white" />,
            title: "Group Size",
            value: "4-6",
            description: "Students per group for optimal interaction and personalized support.",
            details: [
                "Small enough for individual attention",
                "Large enough for peer learning",
                "Promotes active participation",
                "Builds social confidence"
            ]
        },
        {
            icon: <GraduationCap className="w-10 h-10 text-white" />,
            title: "Grade Ranges",
            value: "K-12",
            description: "Age-appropriate groups matched by grade level and academic ability.",
            details: [
                "Elementary (K-5)",
                "Middle School (6-8)",
                "High School (9-12)",
                "Skill-based placement"
            ]
        },
        {
            icon: <Target className="w-10 h-10 text-white" />,
            title: "Subjects Covered",
            value: "All Core",
            description: "Comprehensive subject coverage tailored to curriculum standards.",
            details: [
                "Mathematics & Algebra",
                "English & Reading",
                "Science & Lab Skills",
                "Test Preparation"
            ]
        }
    ];

    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black text-[#2d5f3f] mb-6">
                        Perfectly Sized for Success
                    </h2>
                    <p className="text-gray-500 text-xl max-w-2xl mx-auto leading-relaxed font-medium">
                        Our carefully structured groups create an ideal balance between collaborative learning and individual attention.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {infoCards.map((card, index) => (
                        <div key={index} className="bg-gradient-to-br from-[#f8fdf9] to-[#f0f5f3] p-10 rounded-[2.5rem] border-4 border-[#e0f0e6] transition-all hover:-translate-y-3 hover:shadow-2xl hover:border-[#FFD646] group relative overflow-hidden">
                            {/* Subtle visual element */}
                            <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#FFD646]/5 rounded-full blur-2xl group-hover:bg-[#FFD646]/10 transition-colors"></div>

                            <div className="w-20 h-20 bg-gradient-to-br from-[#408f55] to-[#2d5f3f] rounded-2xl flex items-center justify-center mb-8 shadow-xl group-hover:rotate-6 transition-transform">
                                {card.icon}
                            </div>

                            <h3 className="text-2xl font-black text-[#2d5f3f] mb-2">{card.title}</h3>
                            <div className="text-5xl font-black text-[#FFD646] mb-6 tracking-tighter">
                                {card.value}
                            </div>
                            <p className="text-gray-600 font-medium mb-8 leading-relaxed">
                                {card.description}
                            </p>

                            <ul className="space-y-4 pt-8 border-t border-[#e0f0e6]">
                                {card.details.map((detail, dIdx) => (
                                    <li key={dIdx} className="flex items-center gap-3 text-gray-500 font-bold text-sm">
                                        <div className="w-6 h-6 bg-[#408f55] rounded-full flex items-center justify-center shrink-0 shadow-sm">
                                            <Check size={14} className="text-white font-bold" />
                                        </div>
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GroupDynamics;
