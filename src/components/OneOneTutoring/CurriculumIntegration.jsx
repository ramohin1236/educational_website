import React from 'react';
import { BookOpen, Search, Rocket, Palette, Target } from 'lucide-react';

const CurriculumIntegration = () => {
    const features = [
        {
            icon: <BookOpen className="w-8 h-8 text-white" />,
            title: "School Curriculum Alignment",
            description: "We work directly with your child's school materials, homework, and upcoming tests to ensure tutoring reinforces classroom learning."
        },
        {
            icon: <Search className="w-8 h-8 text-white" />,
            title: "Personalized Learning Path",
            description: "Initial assessment identifies knowledge gaps and strengths, allowing us to create a customized learning plan for every student."
        },
        {
            icon: <Rocket className="w-8 h-8 text-white" />,
            title: "Goal-Driven Instruction",
            description: "Whether preparing for exams or advancing beyond grade level, we design each session to move your child toward specific objectives."
        },
        {
            icon: <Palette className="w-8 h-8 text-white" />,
            title: "Adaptive Teaching Methods",
            description: "Our tutors use multiple instructional strategies—visual aids, hands-on activities, verbal explanations—to match how your child learns."
        }
    ];

    return (
        <section className="py-24 px-6 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 lg:mb-24">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#2d5f3f] mb-6">
                        Aligned with Your Child's Academic Journey
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
                        Our tutoring seamlessly integrates with school curriculum while addressing individual learning needs through a highly personalized approach.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Visual Side */}
                    <div className="relative">
                        <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-gradient-to-br from-[#f0f5f3] to-[#e0f0e6] rounded-full flex flex-col items-center justify-center p-12 shadow-inner border-4 border-[#408f55] relative mx-auto">
                            <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-[#408f55] to-[#2d5f3f] rounded-full flex items-center justify-center text-white text-4xl shadow-2xl mb-6">
                                <Target size={48} />
                            </div>
                            <h3 className="text-xl md:text-2xl font-black text-[#2d5f3f] text-center mb-4">Student-Centered Approach</h3>
                            <p className="text-gray-600 text-center text-sm md:text-base leading-relaxed">
                                Every lesson is built around your child's specific needs, goals, and learning preferences.
                            </p>

                            {/* Orbital Icons (Illustrative) */}
                            <div className="absolute top-0 right-0 p-4 bg-white rounded-full shadow-lg border-2 border-[#FFD646] -mr-4 -mt-4 animate-bounce">📖</div>
                            <div className="absolute bottom-0 left-0 p-4 bg-white rounded-full shadow-lg border-2 border-[#FFD646] -ml-4 -mb-4">🎓</div>
                            <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 p-4 bg-white rounded-full shadow-lg border-2 border-[#408f55]">💡</div>
                            <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 p-4 bg-white rounded-full shadow-lg border-2 border-[#408f55]">📊</div>
                        </div>
                    </div>

                    {/* Features Side */}
                    <div className="space-y-8">
                        {features.map((feature, index) => (
                            <div key={index} className="flex gap-6 p-6 rounded-2xl bg-[#f8fdf9] border-l-8 border-[#408f55] transition-all hover:bg-white hover:shadow-xl group">
                                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#408f55] to-[#2d5f3f] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h4 className="text-xl font-black text-[#2d5f3f] mb-2">{feature.title}</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CurriculumIntegration;
