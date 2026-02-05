import React from 'react';

const SessionFlow = () => {
    const steps = [
        {
            number: 1,
            icon: "🤝",
            title: "Warm-up",
            duration: "10 mins",
            description: "We begin with a friendly check-in and quick review of previous concepts to build confidence and establish learning momentum."
        },
        {
            number: 2,
            icon: "📚",
            title: "Lesson",
            duration: "30 mins",
            description: "Focused instruction on new material using interactive teaching methods adapted to your child's individual learning style."
        },
        {
            number: 3,
            icon: "✍️",
            title: "Practice",
            duration: "35 mins",
            description: "Hands-on application through guided exercises, ensuring your child can independently apply what they've learned."
        },
        {
            number: 4,
            icon: "⭐",
            title: "Feedback",
            duration: "15 mins",
            description: "Comprehensive review of progress with actionable insights and homework assignments to reinforce learning."
        }
    ];

    return (
        <section className="py-24 px-6 bg-gradient-to-b from-[#f8fdf9] via-white to-[#f8fdf9]">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#2d5f3f] mb-6">
                        How Each Session Works
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
                        Our proven four-step approach ensures consistent progress and measurable results in every tutoring session.
                    </p>
                </div>

                {/* Steps Container */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative">
                    {steps.map((step, index) => (
                        <React.Fragment key={index}>
                            {/* Step Card */}
                            <div className="flex-1 bg-white p-8 rounded-3xl text-center shadow-lg border-2 border-[#e0f0e6] transition-all hover:-translate-y-2 hover:shadow-2xl hover:border-[#408f55] relative group min-h-[350px] flex flex-col justify-between">
                                <div>
                                    <div className="relative inline-block mb-6">
                                        <div className="w-20 h-20 bg-gradient-to-br from-[#408f55] to-[#2d5f3f] rounded-full flex items-center justify-center text-4xl shadow-xl group-hover:scale-110 transition-transform">
                                            {step.icon}
                                        </div>
                                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#FFD646] text-black rounded-full flex items-center justify-center font-black border-4 border-white text-sm">
                                            {step.number}
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-black text-[#2d5f3f] mb-3">{step.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                        {step.description}
                                    </p>
                                </div>

                                <div className="inline-block bg-[#fefce8] text-[#FFD646] px-5 py-2 rounded-full font-bold text-xs uppercase tracking-widest mt-auto self-center">
                                    {step.duration}
                                </div>
                            </div>

                            {/* Connector (Arrow) - Hidden on mobile, shown between items on desktop */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:flex items-center justify-center text-[#FFD646] px-2 animate-pulse">
                                    <span className="text-3xl font-black">→</span>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SessionFlow;
