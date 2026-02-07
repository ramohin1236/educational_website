import React from 'react';
import { BookOpen, Target, MessageSquare, BarChart3, Star } from 'lucide-react';

const ReportingFeature = () => {
    const features = [
        {
            title: "Academic Progress Tracking",
            description: "Detailed breakdown of topics covered, skills mastered, and learning objectives achieved in each session.",
            icon: <BookOpen className="w-6 h-6 text-white" />
        },
        {
            title: "Behavioral Insights",
            description: "Observations about engagement, focus, confidence levels, and learning attitude to support whole-child development.",
            icon: <Target className="w-6 h-6 text-white" />
        },
        {
            title: "Parent Communication",
            description: "Direct messaging with your tutor and regular check-ins to discuss concerns, goals, and celebrate achievements.",
            icon: <MessageSquare className="w-6 h-6 text-white" />
        },
        {
            title: "Progress Dashboard",
            description: "Access all reports online anytime, with visual charts showing improvement trends over time.",
            icon: <BarChart3 className="w-6 h-6 text-white" />
        }
    ];

    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#2d5f3f] mb-6">
                        Stay Connected with Detailed Progress Reports
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        Our two-part reporting system keeps you fully informed about your child's learning journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Visual Report Preview */}
                    <div className="bg-gradient-to-br from-[#f8fdf9] to-[#e8f5ed] p-8 md:p-12 rounded-[2rem] border-4 border-[#d4e8df] hover:border-[#ffd646] transition-all shadow-2xl relative overflow-hidden">
                        {/* Decorative background element */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#408f55]/5 rounded-full -mr-16 -mt-16"></div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col relative z-10">
                            <div className="flex items-center gap-4 mb-8 pb-6 border-bottom border-gray-100">
                                <div className="w-12 h-12 bg-gradient-to-br from-[#408f55] to-[#2d5f3f] rounded-xl flex items-center justify-center text-white">
                                    <BarChart3 size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-extrabold text-[#2d5f3f]">Session Report</h4>
                                    <p className="text-gray-400 text-xs font-bold uppercase">November 15, 2025</p>
                                </div>
                            </div>

                            {/* Material Covered */}
                            <div className="mb-6 p-5 bg-[#fafafa] rounded-xl border-l-4 border-[#FFD646]">
                                <h5 className="flex items-center gap-2 text-[#2d5f3f] font-bold text-sm mb-2">
                                    <BookOpen size={16} className="text-[#FFD646]" /> Material Covered
                                </h5>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    <strong>Topic:</strong> Algebraic Equations - Solving for X<br />
                                    <strong>Concepts:</strong> Two-step equations, combining like terms, distributive property
                                </p>
                            </div>

                            {/* Behavioral Observations */}
                            <div className="p-5 bg-[#fafafa] rounded-xl border-l-4 border-[#408f55]">
                                <h5 className="flex items-center gap-2 text-[#2d5f3f] font-bold text-sm mb-2">
                                    <Target size={16} className="text-[#408f55]" /> Behavioral Observations
                                </h5>
                                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                    Sarah was highly engaged and showed great improvement in confidence.
                                </p>
                                <div className="flex gap-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} size={16} fill="#ffd700" color="#ffd700" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-8">
                        {features.map((feature, index) => (
                            <div key={index} className="flex gap-6 group">
                                <div className="w-12 h-12 bg-gradient-to-br from-[#408f55] to-[#2d5f3f] rounded-full flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-[#2d5f3f] mb-2">{feature.title}</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReportingFeature;
