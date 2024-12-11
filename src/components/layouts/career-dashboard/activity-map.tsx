'use client';
import React, { useEffect, useState } from 'react';
import {ChevronDown, Route} from 'lucide-react';

type ActivityType = 'applications' | 'interviews' | 'outreach';

interface ActivityData {
    date: string;
    count: number;
}

interface SelectProps {
    value: string;
    options: string[];
    onChange: (value: string) => void;
}

const CustomSelect: React.FC<SelectProps> = ({ value, options, onChange }) => (
    <button
        className="px-2 py-1 text-sm flex items-center gap-1 rounded-md
                 bg-background-secondary-light dark:bg-background-secondary-dark
                 border border-border-light dark:border-border-dark
                 hover:border-text-secondary-light dark:hover:border-text-secondary-dark
                 text-text-primary-light dark:text-text-primary-dark"
        onClick={() => {/* Implement dropdown */}}
    >
        {value}
        <ChevronDown className="w-4 h-4 text-text-secondary-light dark:text-text-secondary-dark" />
    </button>
);

interface ActivityCellProps {
    date: Date;
    count: number;
    type: ActivityType;
}

const ActivityCell: React.FC<ActivityCellProps> = ({ count, type }) => {
    const getBackgroundColor = () => {
        const intensity = count === 0 ? 0 : Math.min(count / 4, 1);

        switch (type) {
            case 'applications':
                return `bg-lapis-lazuli-light/[${intensity}] dark:bg-lapis-lazuli-dark/[${intensity}]`;
            case 'interviews':
                return `bg-teal-500/[${intensity}] dark:bg-teal-400/[${intensity}]`;
            case 'outreach':
                return `bg-coral-light/[${intensity}] dark:bg-coral-dark/[${intensity}]`;
            default:
                return 'bg-gray-100 dark:bg-gray-800';
        }
    };

    return (
        <div
            className={`w-3 h-3 rounded-sm ${getBackgroundColor()} 
                     hover:ring-2 hover:ring-text-primary-light dark:hover:ring-text-primary-dark
                     transition-all duration-200`}
            title={`${count} activities`}
        />
    );
};

const ActivityMap: React.FC = () => {
    const [activityData, setActivityData] = useState<ActivityData[]>([]);
    const [selectedYear, setSelectedYear] = useState('2024');
    const [selectedType, setSelectedType] = useState<ActivityType>('applications');

    // Generate calendar dates
    const generateCalendarDates = () => {
        const startDate = new Date(parseInt(selectedYear), 0, 1);
        const endDate = new Date(parseInt(selectedYear), 11, 31);
        const dates: Date[] = [];

        for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
            dates.push(new Date(d));
        }

        return dates;
    };

    // Generate initial activity data
    useEffect(() => {
        const dates = generateCalendarDates();
        const data: ActivityData[] = dates.map(date => ({
            date: date.toISOString(),
            count: Math.floor(Math.random() * 5)
        }));
        setActivityData(data);
    }, [selectedYear]);

    const weeks = generateCalendarDates().reduce<Date[][]>((acc, date) => {
        const weekIndex = Math.floor(date.getDate() / 7);
        if (!acc[weekIndex]) acc[weekIndex] = [];
        acc[weekIndex].push(date);
        return acc;
    }, []);

    return (
        <div className="rounded-lg border border-border-light dark:border-border-dark
                        bg-background-secondary-light dark:bg-background-secondary-dark
                        hover:border-lapis-lazuli-light dark:hover:border-lapis-lazuli-dark
                        transition-all duration-200">
            {/* Header */}
            <div className="flex items-center justify-between px-3 pt-3 pb-2">
                <div className="flex items-center gap-2">
                    <Route className="w-5 h-5 text-lapis-lazuli-light dark:text-lapis-lazuli-dark" />
                    <h2 className="font-medium text-text-primary-light dark:text-text-primary-dark">
                        Activity Map
                    </h2>
                </div>

                <div className="flex items-center gap-3">
                    <CustomSelect
                        value={selectedYear}
                        options={['2023', '2024']}
                        onChange={setSelectedYear}
                    />
                    <CustomSelect
                        value={selectedType}
                        options={['applications', 'interviews', 'outreach']}
                        onChange={(value) => setSelectedType(value as ActivityType)}
                    />
                </div>
            </div>

            <div className="min-h-52"></div>
        </div>
    );
};

export default ActivityMap;
