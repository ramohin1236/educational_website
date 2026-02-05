import React from 'react';
import { Home, MapPin, Check } from 'lucide-react';

const FlexibilityOptions = () => {
    const locations = [
        {
            type: "At Home",
            icon: <Home size={48} className="text-[#408f55]" />,
            description: "Enjoy the convenience and comfort of learning in your own space with personalized in-home tutoring.",
            benefits: [
                "Familiar, distraction-free environment",
                "No commute time for busy families",
                "Access to student's own materials",
                "Parent can observe and engage",
                "Flexible scheduling around your routine"
            ]
        },
        {
            type: "In Our Tutoring Space",
            icon: <MapPin size={48} className="text-[#408f55]" />,
            description: "Visit our professional learning center designed specifically for focused, productive study sessions.",
            benefits: [
                "Dedicated learning environment",
                "Professional educational resources",
                "Minimal home distractions",
                "Collaborative learning atmosphere",
                "Safe, supervised location"
            ]
        }
    ];

    return (
        <section className="py-24 px-6 bg-gradient-to-br from-[#2d5f3f] to-[#3d7f5f] relative overflow-hidden">
            {/* Background Decorative Circles */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Learn Where You're Most Comfortable
                    </h2>
                    <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
                        Choose the learning environment that works best for your family—we offer flexible location options to fit your lifestyle.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
                    {locations.map((loc, index) => (
                        <div key={index} className="bg-white/10 backdrop-blur-md p-10 md:p-14 rounded-3xl border-2 border-white/20 hover:border-white/40 transition-all group shadow-2xl">
                            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-10 shadow-xl group-hover:scale-110 transition-transform">
                                {loc.icon}
                            </div>

                            <h3 className="text-3xl font-black text-white mb-6">{loc.type}</h3>
                            <p className="text-white/90 text-lg leading-relaxed mb-10 opacity-80 font-medium">
                                {loc.description}
                            </p>

                            <ul className="space-y-4 text-left border-t border-white/10 pt-8 mt-8">
                                {loc.benefits.map((benefit, bIndex) => (
                                    <li key={bIndex} className="flex items-center gap-4 text-white text-base font-medium">
                                        <div className="w-6 h-6 bg-[#FFD646] rounded-full flex items-center justify-center shrink-0 shadow-lg">
                                            <Check size={14} className="text-white font-bold" />
                                        </div>
                                        {benefit}
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

export default FlexibilityOptions;
