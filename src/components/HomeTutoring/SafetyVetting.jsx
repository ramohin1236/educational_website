import React from 'react';
import { ShieldCheck, CheckCircle2, GraduationCap, Briefcase } from 'lucide-react';

const SafetyVetting = () => {
    const safetyCards = [
        {
            title: "Background Checked",
            description: "All tutors undergo comprehensive background checks including criminal records and reference verification before joining our team.",
            icon: <ShieldCheck className="w-8 h-8 text-white" />,
        },
        {
            title: "Certified Professionals",
            description: "Our tutors hold relevant qualifications and teaching certifications, ensuring expert instruction in their subject areas.",
            icon: <CheckCircle2 className="w-8 h-8 text-white" />,
        },
        {
            title: "Experienced Educators",
            description: "Each tutor brings years of teaching experience and a proven track record of helping students achieve their academic goals.",
            icon: <GraduationCap className="w-8 h-8 text-white" />,
        },
        {
            title: "Professional Standards",
            description: "We maintain strict codes of conduct and professionalism, with ongoing training and quality assurance reviews.",
            icon: <Briefcase className="w-8 h-8 text-white" />,
        },
    ];

    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto text-center">
                {/* Header Section */}
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
                        Your Child's Safety Is Our Priority
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
                        Every tutor is carefully vetted to ensure the highest standards of professionalism and trustworthiness.
                    </p>
                </div>

                {/* Safety Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {safetyCards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-[#f8fdf9] p-8 rounded-2xl border-2 border-[#e0f0e6] transition-all hover:shadow-xl hover:border-[#408f55] group flex flex-col items-center text-center"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-[#408f55] to-[#2d5f3f] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {card.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#2d5f3f] mb-4">
                                {card.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SafetyVetting;
