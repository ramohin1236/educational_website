import React from 'react';
import HomeTutoringHero from '@/components/HomeTutoring/HomeTutoringHero';
import SafetyVetting from '@/components/HomeTutoring/SafetyVetting';
import SessionStructure from '@/components/HomeTutoring/SessionStructure';
import ReportingFeature from '@/components/HomeTutoring/ReportingFeature';
import HomeTutoringTestimonials from '@/components/HomeTutoring/HomeTutoringTestimonials';
import FinalCTA from '@/components/HomeTutoring/FinalCTA';

const HomeTutoringPage = () => {
    return (
        <main className="min-h-screen">
            <HomeTutoringHero />
            <SafetyVetting />
            <SessionStructure />
            <ReportingFeature />
            <HomeTutoringTestimonials />
            <FinalCTA />
        </main>
    );
};

export default HomeTutoringPage;