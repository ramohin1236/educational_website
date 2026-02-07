import React from 'react';
import { MapPin, Clock } from 'lucide-react';

const GroupSchedule = () => {
    const locations = [
        {
            icon: "🏢",
            name: "Main Learning Center",
            address: "123 Education Lane, Suite 200"
        },
        {
            icon: "🏫",
            name: "Northside Branch",
            address: "456 Scholar Street"
        },
        {
            icon: "🌳",
            name: "Riverside Campus",
            address: "789 Academic Avenue"
        }
    ];

    const times = [
        { icon: "🌅", name: "After School", range: "3:30 PM - 5:00 PM" },
        { icon: "🌆", name: "Evening Sessions", range: "5:30 PM - 7:00 PM" },
        { icon: "☀️", name: "Weekend Options", range: "Saturday 9:00 AM - 12:00 PM" }
    ];


    return (
        <section className="py-24 px-6 bg-[#408f55] relative overflow-hidden">
            {/* Decorative patterns */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFD646]/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>

            <div className="max-w-6xl mx-auto relative z-10 text-white">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-6">Where and When We Meet</h2>
                    <p className="text-white/80 text-lg max-w-2xl mx-auto font-medium">
                        Flexible scheduling options with convenient locations to fit your family's routine.
                    </p>
                </div>

                    <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-12">
           
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-stretch justify-center">
                
                {/* Location Card */}
                <div className="flex-1 bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-3xl border-2 border-white/20 shadow-2xl">
                    <h3 className="text-2xl md:ml-4 font-black mb-8 flex items-center gap-4 text-white">
                        <MapPin className="text-[#FFD646] w-8 h-8" /> Session Locations
                    </h3>
                    <div className="space-y-6">
                        {locations.map((loc, idx) => (
                            <div key={idx} className="flex items-center gap-5 md:gap-6 p-4 rounded-xl hover:bg-white/5 transition-colors cursor-default group">
                                <div className="shrink-0 w-14 h-14 md:w-16 md:h-16 bg-white/20 rounded-2xl flex items-center justify-center text-2xl md:text-3xl shadow-lg border border-white/20 text-white group-hover:scale-105 transition-transform duration-300">
                                    {loc.icon}
                                </div>
                                <div>
                                    <h4 className="font-black text-lg md:text-xl text-white">{loc.name}</h4>
                                    <p className="text-white/60 text-sm font-medium leading-tight">{loc.address}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Time Card */}
                <div className="flex-1 bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-3xl border-2 border-white/20 shadow-2xl">
                    <h3 className="text-2xl md:ml-4 font-black mb-8 flex items-center gap-4 text-white">
                        <Clock className="text-[#FFD646] w-8 h-8" /> Session Times
                    </h3>
                    <div className="space-y-6">
                        {times.map((time, idx) => (
                            <div key={idx} className="flex items-center gap-5 md:gap-6 p-4 rounded-xl hover:bg-white/5 transition-colors cursor-default group">
                                <div className="shrink-0 w-14 h-14 md:w-16 md:h-16 bg-white/20 rounded-2xl flex items-center justify-center text-2xl md:text-3xl shadow-lg border border-white/20 text-white group-hover:scale-105 transition-transform duration-300">
                                    {time.icon}
                                </div>
                                <div>
                                    <h4 className="font-black text-lg md:text-xl text-white">{time.name}</h4>
                                    <p className="text-white/60 text-sm font-medium leading-tight">{time.range}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
            </div>
        </section>
    );
};

export default GroupSchedule;
