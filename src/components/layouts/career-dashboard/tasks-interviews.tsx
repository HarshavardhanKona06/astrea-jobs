import React from 'react';
import TasksBlock from "@/components/layouts/career-dashboard/tasks";
import InterviewsBlock from "@/components/layouts/career-dashboard/interviews";

const TasksAndInterviews = () => {
    return (
        <div className="px-6 grid grid-cols-1 lg:grid-cols-2 gap-4 font-work-sans">
            {/*Tasks/FollowUp Section*/}
            <TasksBlock />

            {/* Upcoming Interviews Section */}
            <InterviewsBlock />
        </div>
    );
};

export default TasksAndInterviews;
