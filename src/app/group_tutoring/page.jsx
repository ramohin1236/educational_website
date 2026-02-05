import React from 'react';
import GroupHero from '@/components/GroupTutoring/GroupHero';
import GroupDynamics from '@/components/GroupTutoring/GroupDynamics';
import LearningBalance from '@/components/GroupTutoring/LearningBalance';
import PlacementProcess from '@/components/GroupTutoring/PlacementProcess';
import GroupSchedule from '@/components/GroupTutoring/GroupSchedule';
import GroupFinalCTA from '@/components/GroupTutoring/GroupFinalCTA';

const GroupTutoringPage = () => {
    return (
        <main className="min-h-screen">
            <GroupHero />
            <GroupDynamics />
            <LearningBalance />
            <PlacementProcess />
            <GroupSchedule />
            <GroupFinalCTA />
        </main>
    );
};

export default GroupTutoringPage;