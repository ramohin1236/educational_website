import React from 'react';
import { Calendar, TrendingUp, MessageSquare, Target, Ruler, Book, FlaskConical } from 'lucide-react';

const ProgressTrackingPortal = () => {
    const portalFeatures = [
        {
            icon: <Calendar className="w-10 h-10 text-white" />,
            title: "Weekly Updates",
            description: "Receive comprehensive reports every Friday detailing session activities, concepts covered, and observed progress."
        },
        {
            icon: <TrendingUp className="w-10 h-10 text-white" />,
            title: "Real-Time Insights",
            description: "Access your personalized dashboard anytime to view attendance, assignment completion, and skill progression."
        },
        {
            icon: <MessageSquare className="w-10 h-10 text-white" />,
            title: "Direct Communication",
            description: "Message your tutor directly through the portal to discuss concerns, ask questions, or celebrate achievements."
        },
        {
            icon: <Target className="w-10 h-10 text-white" />,
            title: "Goal Tracking",
            description: "Monitor progress toward specific objectives with visual charts and milestone celebrations that keep students motivated."
        }
    ];

    const subjects = [
        { name: "Mathematics", topic: "Algebra & Geometry", progress: 78, icon: <Ruler className="text-[#2d5f3f]" /> },
        { name: "English", topic: "Reading Comprehension", progress: 85, icon: <Book className="text-[#2d5f3f]" /> },
        { name: "Science", topic: "Biology Fundamentals", progress: 92, icon: <FlaskConical className="text-[#2d5f3f]" /> }
    ];

    return (
        <section className="py-24 px-6 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#2d5f3f] mb-6">
                        Track Progress Every Step of the Way
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
                        Stay informed with detailed weekly updates and comprehensive insights through our premium parent portal.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Mockup Side */}
                    <div className="bg-gradient-to-br from-[#f0f5f3] to-[#e0f0e6] p-8 md:p-12 rounded-[3rem] border-4 border-[#408f55] shadow-2xl relative">
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                            <div className="bg-[#f8fdf9] p-6 border-b border-gray-100 flex justify-between items-center">
                                <div className="flex items-center gap-3 font-black text-[#2d5f3f]">
                                    <TrendingUp size={20} className="text-[#FFD646]" />
                                    <span>Student Progress Dashboard</span>
                                </div>
                                <div className="text-xs font-bold text-gray-400 bg-white px-3 py-1 rounded-full shadow-sm">
                                    Week of Dec 1-7
                                </div>
                            </div>

                            <div className="p-6 space-y-6">
                                {subjects.map((subj, idx) => (
                                    <div key={idx} className="bg-white p-5 rounded-xl border border-gray-50 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 bg-[#f0f5f3] rounded-lg flex items-center justify-center">
                                                {subj.icon}
                                            </div>
                                            <div>
                                                <h4 className="font-black text-[#2d5f3f]">{subj.name}</h4>
                                                <p className="text-xs text-gray-400 font-medium">{subj.topic}</p>
                                            </div>
                                        </div>

                                        <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-[#408f55] to-[#FFD646] rounded-full"
                                                style={{ width: `${subj.progress}%` }}
                                            ></div>
                                        </div>
                                        <div className="flex justify-between mt-3 text-sm">
                                            <span className="text-gray-400 font-medium">Mastery Level</span>
                                            <span className="text-[#2d5f3f] font-black">{subj.progress}% (+{(idx + 1) * 3}% improvement)</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Features Side */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
                        {portalFeatures.map((feat, idx) => (
                            <div key={idx} className="flex gap-6 group">
                                <div className="shrink-0 w-16 h-16 bg-[#FFD646] rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                                    {feat.icon}
                                </div>
                                <div>
                                    <h4 className="text-xl font-black text-[#2d5f3f] mb-2">{feat.title}</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        {feat.description}
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

export default ProgressTrackingPortal;
