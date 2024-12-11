import QuickInsights from "@/components/layouts/career-dashboard/quick-insights";
import TasksAndInterviews from "@/components/layouts/career-dashboard/tasks-interviews";
import CalendarAndActivity from "@/components/layouts/career-dashboard/calendar-activity";

export default function CareerDashboardPage() {
    return (
        <main>
            <QuickInsights />
            <TasksAndInterviews />
            <CalendarAndActivity />
        </main>
    );
}
