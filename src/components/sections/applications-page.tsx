'use client';

import React from 'react';
import SubHeader from '@/components/layouts/applications/sub-header';
import KanbanView from '@/components/layouts/applications/kanban-view';
import TableView from '@/components/layouts/applications/table-view';
import TimelineView from '@/components/layouts/applications/timeline-view';

const ApplicationsPage = () => {
    const [activeView, setActiveView] = React.useState('kanban');

    // Function to render the active view
    const renderActiveView = () => {
        switch (activeView) {
            case 'kanban':
                return <KanbanView />;
            case 'table':
                return <TableView />;
            case 'timeline':
                return <TimelineView />;
            default:
                return <KanbanView />;
        }
    };

    return (
        <main className="min-h-screen bg-background-light dark:bg-background-dark">
            <SubHeader activeView={activeView} onViewChange={setActiveView} />
            {renderActiveView()}
        </main>
    );
};

export default ApplicationsPage;
