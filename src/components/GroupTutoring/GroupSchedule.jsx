import React from 'react';
import { MapPin, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

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

    const calendarDays = [
        { day: 1, type: "inactive" },
        { day: 2, type: "session" },
        { day: 3, type: "session" },
        { day: 4, type: "session" },
        { day: 5, type: "session" },
        { day: 6, type: "active" },
        { day: 7, type: "session" },
        { day: 8, type: "active" },
        { day: 9, type: "session" },
        { day: 10, type: "session" },
        { day: 11, type: "session" },
        { day: 12, type: "session" },
        { day: 13, type: "active" },
        { day: 14, type: "session" },
        { day: 15, type: "active" },
        { day: 16, type: "session" },
        { day: 17, type: "session" },
        { day: 18, type: "session" },
        { day: 19, type: "session" },
        { day: 20, type: "active" },
        { day: 21, type: "session" },
        { day: 22, type: "active" },
        { day: 23, type: "inactive" },
        { day: 24, type: "inactive" },
        { day: 25, type: "inactive" },
        { day: 26, type: "inactive" },
        { day: 27, type: "active" },
        { day: 28, type: "active" },
        { day: 29, type: "active" },
        { day: 30, type: "session" },
        { day: 31, type: "session" }
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

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Info Side */}
                    <div className="space-y-10">
                        <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border-2 border-white/20 shadow-2xl">
                            <h3 className="text-2xl font-black mb-10 flex items-center gap-4">
                                <MapPin className="text-[#FFD646]" /> Session Locations
                            </h3>
                            <div className="space-y-6">
                                {locations.map((loc, idx) => (
                                    <div key={idx} className="flex items-center gap-6 p-4 rounded-xl hover:bg-white/5 transition-colors">
                                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-3xl shadow-lg border border-white/20">
                                            {loc.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-black text-xl">{loc.name}</h4>
                                            <p className="text-white/60 text-sm font-medium">{loc.address}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border-2 border-white/20 shadow-2xl">
                            <h3 className="text-2xl font-black mb-10 flex items-center gap-4">
                                <Clock className="text-[#FFD646]" /> Session Times
                            </h3>
                            <div className="space-y-6">
                                {times.map((time, idx) => (
                                    <div key={idx} className="flex items-center gap-6 p-4 rounded-xl hover:bg-white/5 transition-colors">
                                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-3xl shadow-lg border border-white/20">
                                            {time.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-black text-xl">{time.name}</h4>
                                            <p className="text-white/60 text-sm font-medium">{time.range}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Calendar Side */}
                    <div className="bg-white rounded-[3rem] p-10 md:p-14 shadow-2xl text-[#2d5f3f] border-8 border-[#e0f0e6]">
                        <div className="flex justify-between items-center mb-10 pb-6 border-b-4 border-[#f0f5f3]">
                            <h3 className="text-3xl font-black">December 2025</h3>
                            <div className="flex gap-4">
                                <button className="w-12 h-12 bg-[#408f55] text-white rounded-xl flex items-center justify-center hover:bg-[#2d5f3f] transition-all shadow-lg active:scale-95">
                                    <ChevronLeft size={24} />
                                </button>
                                <button className="w-12 h-12 bg-[#408f55] text-white rounded-xl flex items-center justify-center hover:bg-[#2d5f3f] transition-all shadow-lg active:scale-95">
                                    <ChevronRight size={24} />
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-7 gap-3 mb-10">
                            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                                <div key={day} className="text-center text-[10px] font-black uppercase tracking-widest text-[#408f55]/50 py-2">
                                    {day}
                                </div>
                            ))}
                            {calendarDays.map((item, idx) => (
                                <div
                                    key={idx}
                                    className={`aspect-square rounded-xl flex items-center justify-center font-black text-sm transition-all relative cursor-pointer
                    ${item.type === 'inactive' ? 'text-gray-200' : ''}
                    ${item.type === 'active' ? 'bg-[#f8fdf9] text-[#2d5f3f] hover:bg-[#e0f0e6]' : ''}
                    ${item.type === 'session' ? 'bg-[#FFD646] text-black shadow-lg scale-105 z-10 hover:scale-110' : ''}
                  `}
                                >
                                    {item.day}
                                    {item.type === 'session' && (
                                        <div className="absolute bottom-2 w-1.5 h-1.5 bg-black rounded-full"></div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 pt-10 border-t-2 border-[#f0f5f3]">
                            <div className="flex items-center gap-3">
                                <div className="w-5 h-5 bg-[#FFD646] rounded-md shadow-sm"></div>
                                <span className="text-sm font-bold text-gray-500">Group Sessions</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-5 h-5 bg-[#f8fdf9] rounded-md border border-[#e0f0e6]"></div>
                                <span className="text-sm font-bold text-gray-500">Available Days</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GroupSchedule;
