import React from 'react';

const SessionStructure = () => {
    const steps = [
        {
            number: 1,
            title: "Warm Welcome & Review",
            duration: "15 minutes",
            description: "The tutor arrives, settles in, and reviews homework or previous concepts. This builds rapport and assesses understanding."
        },
        {
            number: 2,
            title: "Core Instruction",
            duration: "40 minutes",
            description: "Focused teaching on new concepts with interactive examples, hands-on activities, and personalized explanations tailored to your child's learning style.",
            subjects: ["Mathematics", "English", "Science", "History"]
        },
        {
            number: 3,
            title: "Practice & Application",
            duration: "25 minutes",
            description: "Students work through problems with guided support, ensuring they can apply new knowledge independently and build confidence."
        },
        {
            number: 4,
            title: "Wrap-up & Parent Brief",
            duration: "10 minutes",
            description: "Quick summary with the student, assignment of homework, and a brief parent discussion about progress and next steps."
        }
    ];

    return (
        <section className="py-20 px-6 bg-gradient-to-b from-[#f0f5f3] to-white">
            <div className="max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#2d5f3f] mb-6">
                        Typical Session Structure
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        Each 90-minute session is thoughtfully designed to maximize learning and engagement.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#408f55] to-[#FFD646] transform md:-translate-x-1/2 hidden sm:block"></div>

                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <div key={index} className={`relative flex items-center md:justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                                {/* Number Circle */}
                                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-gradient-to-br from-[#408f55] to-[#2d5f3f] rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white font-bold text-2xl z-10">
                                    {step.number}
                                </div>

                                {/* Content Card */}
                                <div className={`ml-24 md:ml-0 w-full md:w-[45%] bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                    <h3 className="text-2xl font-bold text-[#2d5f3f] mb-2">{step.title}</h3>
                                    <p className="text-[#FFD646] font-extrabold text-sm uppercase tracking-wider mb-4">{step.duration}</p>
                                    <p className="text-gray-600 leading-relaxed mb-4">{step.description}</p>

                                    {step.subjects && (
                                        <div className="flex flex-wrap gap-2 pt-4 border-t border-[#e0f0e6]">
                                            {step.subjects.map((subject, sIdx) => (
                                                <span key={sIdx} className="bg-[#f0f5f3] text-[#2d5f3f] px-3 py-1 rounded-full text-xs font-bold">
                                                    {subject}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SessionStructure;
