import React from 'react';

const GroupFinalCTA = () => {
    return (
        <section className="py-24 px-6 bg-white relative overflow-hidden text-center">
            {/* Background Decorative patterns */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#f0f5f3] rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#fefce8] rounded-full -ml-32 -mb-32"></div>

            <div className="max-w-4xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-6xl font-black text-[#2d5f3f] mb-8 leading-tight">
                    Join a Community of Learners
                </h2>
                <p className="text-xl md:text-2xl text-gray-500 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
                    Give your child the benefits of collaborative learning combined with expert instruction. Limited spots available in each group!
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <button className="bg-[#408f55] hover:bg-[#2d5f3f] text-white px-12 py-6 rounded-2xl font-black text-xl transition-all shadow-2xl hover:scale-105 active:scale-95 uppercase tracking-widest w-full sm:w-auto">
                        Enroll Now →
                    </button>
                    <button className="bg-white hover:bg-[#FFD646] text-[#2d5f3f] px-12 py-6 rounded-2xl font-black text-xl transition-all border-4 border-[#FFD646] shadow-xl hover:scale-105 active:scale-95 uppercase tracking-widest w-full sm:w-auto">
                        Schedule a Tour
                    </button>
                </div>
            </div>
        </section>
    );
};

export default GroupFinalCTA;
