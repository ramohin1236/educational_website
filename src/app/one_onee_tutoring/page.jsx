import React from 'react';
import OneOneHero from '@/components/OneOneTutoring/OneOneHero';
import SessionFlow from '@/components/OneOneTutoring/SessionFlow';
import CurriculumIntegration from '@/components/OneOneTutoring/CurriculumIntegration';
import FlexibilityOptions from '@/components/OneOneTutoring/FlexibilityOptions';
import ProgressTrackingPortal from '@/components/OneOneTutoring/ProgressTrackingPortal';
import OneOneFinalCTA from '@/components/OneOneTutoring/OneOneFinalCTA';

const OneOneTutoringPage = () => {
    return (
        <main className="min-h-screen">
            <OneOneHero />
            <SessionFlow />
            <CurriculumIntegration />
            <FlexibilityOptions />
            <ProgressTrackingPortal />
            <OneOneFinalCTA />
        </main>
    );
};

export default OneOneTutoringPage;