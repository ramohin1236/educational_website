import React from 'react';
import { ClipboardCheck, Target, Users, Rocket } from 'lucide-react';

const PlacementProcess = () => {
    const steps = [
        {
            icon: <ClipboardCheck className="w-10 h-10 text-[#408f55]" />,
            label: "Step One",
            title: "Initial Assessment",
            description: "Students complete a brief academic evaluation to identify their current skill level, learning style, and specific needs."
        },
        {
            icon: <Target className="w-10 h-10 text-[#408f55]" />,
            label: "Step Two",
            title: "Group Matching",
            description: "Our team carefully places students in groups with peers at similar academic levels to ensure balanced, productive learning."
        },
        {
            icon: <Users className="w-10 h-10 text-[#408f55]" />,
            label: "Step Three",
            title: "Trial Session",
            description: "First session is complimentary to ensure proper fit. We observe group dynamics and make adjustments if needed."
        },
        {
            icon: <Rocket className="w-10 h-10 text-[#408f55]" />,
            label: "Step Four",
            title: "Ongoing Success",
            description: "Regular progress monitoring ensures students remain appropriately challenged with options to adjust groups as they advance."
        }
    ];

    return (
        <section className="py-24 px-6 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-black text-[#2d5f3f] mb-6">
                        Student Placement Process
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
                        We carefully match each student to the right group to ensure they're challenged appropriately and set up for success.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line - Desktop Only */}
                    <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-1 bg-gradient-to-r from-[#408f55] via-[#FFD646] to-[#408f55] z-0 opacity-30"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                        {steps.map((step, idx) => (
                            <div key={idx} className="text-center group">
                                <div className="relative mb-8 inline-block">
                                    <div className="w-44 h-44 bg-white border-4 border-[#e0f0e6] rounded-full flex flex-col items-center justify-center shadow-xl group-hover:border-[#FFD646] group-hover:scale-110 transition-all duration-500 relative bg-white z-10">
                                        <div className="mb-2 group-hover:rotate-12 transition-transform">
                                            {step.icon}
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-[#408f55]">
                                            {step.label}
                                        </span>
                                    </div>

                                    {/* Step Number Badge */}
                                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#FFD646] to-[#ffb700] rounded-full flex items-center justify-center font-black text-xl text-[#2d5f3f] border-4 border-white shadow-lg z-20">
                                        {idx + 1}
                                    </div>
                                </div>

                                <h4 className="text-2xl font-black text-[#2d5f3f] mb-4 group-hover:text-[#408f55] transition-colors">
                                    {step.title}
                                </h4>
                                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlacementProcess;
