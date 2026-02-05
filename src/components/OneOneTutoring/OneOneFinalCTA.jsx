import React from 'react';

const OneOneFinalCTA = () => {
    return (
        <section className="py-24 px-6 bg-[#408f55] relative overflow-hidden">
            {/* Decorative patterns */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFD646]/10 rounded-full -ml-32 -mb-32"></div>

            <div className="max-w-4xl mx-auto text-center relative z-10 text-white">
                <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                    Start Your Child's Success Story Today
                </h2>
                <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed max-w-2xl mx-auto font-medium">
                    Join thousands of families who have discovered the transformative power of personalized 1:1 tutoring.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <button className="bg-[#FFD646] hover:bg-[#ffdf70] text-black px-10 py-5 rounded-xl font-black text-lg transition-all shadow-2xl hover:scale-105 active:scale-95 uppercase tracking-wider w-full sm:w-auto">
                        Book a 1:1 Tutoring Session →
                    </button>
                    <button className="bg-transparent hover:bg-white hover:text-[#408f55] text-white px-10 py-5 rounded-xl font-black text-lg transition-all border-2 border-white w-full sm:w-auto">
                        Schedule Free Consultation
                    </button>
                </div>
            </div>
        </section>
    );
};

export default OneOneFinalCTA;
