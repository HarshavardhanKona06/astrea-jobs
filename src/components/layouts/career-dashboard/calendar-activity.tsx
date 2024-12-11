'use client';
import React from 'react';
import ActivityMap from "@/components/layouts/career-dashboard/activity-map";
import RecentActivityBlock from "@/components/layouts/career-dashboard/recent-activity";

const CalendarAndActivity = () => {
    return (
        <div className="px-6 pb-4 pt-7 grid grid-cols-1 lg:grid-cols-10 gap-4 font-work-sans">
            {/* Activity Calendar Section (2/3 width) */}
            <div className="lg:col-span-6">
                <ActivityMap />
            </div>

            {/* Recent Activity Section (1/3 width) */}
            <div className="pl-2 lg:col-span-4">
                <RecentActivityBlock />
            </div>
        </div>
    );
};

export default CalendarAndActivity;
