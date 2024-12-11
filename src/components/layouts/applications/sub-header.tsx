'use client';
import React from 'react';
import {
    Send,
    PhoneCall,
    Award,
    ListFilter,
    Kanban, Sheet, ChartGantt, BookmarkCheck, UsersRound, History
} from 'lucide-react';

interface RefinedSubHeaderProps {
    activeView: string;
    onViewChange: (view: string) => void;
}

const SubHeader: React.FC<RefinedSubHeaderProps> = ({ activeView, onViewChange }) => {
    const [isFilterActive, setIsFilterActive] = React.useState(false);

    const viewOptions = [
        { id: 'kanban', label: 'Kanban', icon: Kanban },
        { id: 'table', label: 'Table', icon: Sheet },
        { id: 'timeline', label: 'Timeline', icon: ChartGantt }
    ];

    const statuses = [
        {
            id: 'wishlist',
            icon: BookmarkCheck,
            label: 'Wishlist',
            count: 3,
            lightColors: 'bg-blue-100 text-blue-700 hover:bg-blue-200',
            darkColors: 'dark:bg-blue-500/10 dark:text-blue-300 dark:hover:bg-blue-600/10'
        },
        {
            id: 'applied',
            icon: Send,
            label: 'Applied',
            count: 5,
            lightColors: 'bg-cyan-100 text-cyan-700 hover:bg-cyan-200',
            darkColors: 'dark:bg-cyan-500/10 dark:text-cyan-300 dark:hover:bg-cyan-600/10'
        },
        {
            id: 'screening',
            icon: PhoneCall,
            label: 'Screening',
            count: 2,
            lightColors: 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200',
            darkColors: 'dark:bg-yellow-500/10 dark:text-yellow-300 dark:hover:bg-yellow-600/10'
        },
        {
            id: 'interviewing',
            icon: UsersRound,
            label: 'Interviewing',
            count: 3,
            lightColors: 'bg-orange-100 text-orange-700 hover:bg-orange-200',
            darkColors: 'dark:bg-orange-500/10 dark:text-orange-300 dark:hover:bg-orange-600/10'
        },
        {
            id: 'offer',
            icon: Award,
            label: 'Offer',
            count: 1,
            lightColors: 'bg-teal-100 text-teal-700 hover:bg-teal-200',
            darkColors: 'dark:bg-teal-500/10 dark:text-teal-300 dark:hover:bg-teal-600/10'
        }
    ];

    return (
        <div className="fixed top-16 left-0 right-0 z-40 w-full font-work-sans bg-background-light dark:bg-background-dark">
            <div className="px-4 py-1.5 bg-background-light dark:bg-background-dark">
                <div className="pl-3 flex items-center">
                    {/* View Toggle Pills */}
                    {/*<div className="bg-background-on-hover-light dark:bg-background-on-hover-dark border border-border-light dark:border-border-dark p-2 rounded-lg flex gap-1">*/}
                    {/*    {viewOptions.map((view) => (*/}
                    {/*        <button*/}
                    {/*            key={view.id}*/}
                    {/*            onClick={() => setActiveView(view.id)}*/}
                    {/*            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md transition-all duration-200 ${*/}
                    {/*                activeView === view.id*/}
                    {/*                    ? 'bg-background-secondary-light font-medium dark:bg-background-secondary-dark text-lapis-lazuli-light dark:text-lapis-lazuli-dark'*/}
                    {/*                    : 'text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark'*/}
                    {/*            }`}*/}
                    {/*        >*/}
                    {/*            <view.icon size={15} />*/}
                    {/*            <span className="text-sm font-medium">{view.label}</span>*/}
                    {/*        </button>*/}
                    {/*    ))}*/}
                    {/*</div>*/}

                    <div
                        className="bg-background-on-hover-light dark:bg-background-on-hover-dark border border-border-light dark:border-border-dark p-2 rounded-lg flex gap-1">
                        {viewOptions.map((view) => (
                            <button
                                key={view.id}
                                onClick={() => onViewChange(view.id)}
                                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md transition-all duration-200 ${
                                    activeView === view.id
                                        ? 'bg-background-secondary-light font-medium dark:bg-background-secondary-dark text-lapis-lazuli-light dark:text-lapis-lazuli-dark'
                                        : 'text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark'
                                }`}
                            >
                                <view.icon size={15}/>
                                <span className="text-sm font-medium">{view.label}</span>
                            </button>
                        ))}
                    </div>

                    {/* Status Pills - Centered */}
                    <div className="pl-5 flex-1 flex justify-center">
                        <div
                            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-border-light dark:border-border-dark">
                            {statuses.map((status) => (
                                <div
                                    key={status.id}
                                    className={`flex items-center gap-2 px-2.5 py-1.5 rounded-md transition-colors duration-200 ${status.lightColors} ${status.darkColors}`}
                                >
                                    <status.icon
                                        size={15}
                                        className="opacity-90" // slightly softer icon
                                    />
                                    <span className="text-sm font-medium">
                    {status.label}
                </span>
                                    <span className="text-sm pl-2 font-medium opacity-80">
                    {status.count}
                </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Filter and Sync */}
                    <div className="flex items-center">
                        <button
                            onClick={() => setIsFilterActive(!isFilterActive)}
                            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors duration-200 ${
                                isFilterActive
                                    ? 'text-coral-on-hover-dark'
                                    : 'text-coral-dark hover:text-coral-on-hover-dark'
                            }`}
                        >
                            <ListFilter size={17}/>
                            <span className="text-md font-medium">Filter</span>
                        </button>

                        {/* Vertical Separator */}
                        <div className="mx-3 h-5 w-px bg-border-light dark:bg-border-dark"/>

                        <div
                            className="flex items-center gap-1.5 text-text-secondary-light dark:text-text-secondary-dark">
                            <History size={15}/>
                            <span className="text-sm">Last synced 3 mins ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubHeader;
