'use client';
import React from 'react';
import {
    Rss,
    Briefcase,
    MessageCircle,
    PhoneCall,
    Monitor,
    UserRound,
    CheckCircle,
    History
} from 'lucide-react';

const getRelativeTime = (timestamp) => {
    const now = new Date();
    const date = new Date(timestamp);
    const diffInSeconds = Math.floor((now - date) / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInDays > 0) return `${diffInDays}d ago`;
    if (diffInHours > 0) return `${diffInHours}h ago`;
    if (diffInMinutes > 0) return `${diffInMinutes}m ago`;
    return 'just now';
};

const ActivityItem = ({ type, title, action, timestamp, subType = null }) => {
    const getIcon = () => {
        const iconProps = {
            className: "w-4 h-4 flex-shrink-0"
        };

        let Icon;
        let wrapperClass;

        switch (type) {
            case 'application':
                Icon = Briefcase;
                wrapperClass = 'bg-lapis-lazuli-light/10 text-lapis-lazuli-light dark:bg-lapis-lazuli-dark/10 dark:text-lapis-lazuli-dark';
                break;
            case 'outreach':
                Icon = MessageCircle;
                wrapperClass = 'bg-coral-light/10 text-coral-light dark:bg-coral-dark/10 dark:text-coral-dark';
                break;
            case 'interview':
                Icon = subType === 'phone' ? PhoneCall : subType === 'virtual' ? Monitor : UserRound;
                wrapperClass = subType === 'phone'
                    ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-300'
                    : 'bg-orange-100 text-orange-700 dark:bg-orange-500/10 dark:text-orange-300';
                break;
            case 'task':
                Icon = CheckCircle;
                wrapperClass = 'bg-teal-100 text-teal-700 dark:bg-teal-500/10 dark:text-teal-300';
                break;
            default:
                Icon = Briefcase;
                wrapperClass = 'bg-gray-100 text-gray-700 dark:bg-gray-500/10 dark:text-gray-300';
        }

        return (
            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${wrapperClass}`}>
                <Icon {...iconProps} />
            </div>
        );
    };

    return (
        <div className="group flex items-center px-4 py-2.5 font-work-sans
                        hover:bg-background-on-hover-light dark:hover:bg-background-on-hover-dark
                        transition-colors duration-200
                        border-b border-b-border-light dark:border-b-border-dark">
            {/* Activity Icon */}
            {getIcon()}

            {/* Activity Text */}
            <div className="flex-1 ml-2">
                <span className="text-sm font-medium text-text-primary-light dark:text-text-primary-dark">
                    {title}
                    <span className="font-normal text-text-secondary-light dark:text-text-secondary-dark">
                        {' '}{action}
                    </span>
                </span>
            </div>

            {/* Timestamp */}
            <div className="flex items-center gap-0.5 text-xs font-medium text-text-secondary-light dark:text-text-secondary-dark">
                <History className="w-3.5 h-3.5" />
                <span>{getRelativeTime(timestamp)}</span>
            </div>
        </div>
    );
};

const RecentActivityBlock = () => {
    const activities = [
        {
            type: 'application',
            title: 'Senior SWE Application',
            action: 'moved to "Applied"',
            timestamp: new Date(Date.now() - 2 * 60 * 1000) // 2 minutes ago
        },
        {
            type: 'interview',
            subType: 'virtual',
            title: 'Technical Interview',
            action: 'scheduled with TechCorp',
            timestamp: new Date(Date.now() - 10 * 60 * 1000) // 10 minutes ago
        },
        {
            type: 'outreach',
            title: 'Connection request',
            action: 'sent to Engineering Manager at Google',
            timestamp: new Date(Date.now() - 30 * 60 * 1000) // 30 minutes ago
        },
        {
            type: 'task',
            title: 'Update Resume',
            action: 'marked as complete',
            timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000) // 2 hours ago
        },
        {
            type: 'interview',
            subType: 'phone',
            title: 'Phone Screening',
            action: 'completed with InnovateLabs',
            timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000) // 4 hours ago
        },
        {
            type: 'application',
            title: 'Full Stack Developer role',
            action: 'added to wishlist',
            timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000) // 1 day ago
        }
    ];

    return (
        <div className="rounded-lg border border-border-light dark:border-border-dark
                        bg-background-secondary-light dark:bg-background-secondary-dark
                        hover:border-coral-light dark:hover:border-coral-dark transition-all duration-200">
            {/* Header */}
            <div className="flex items-center gap-2 px-3 pt-3 pb-2">
                <div className="p-1">
                    <Rss className="w-5 h-5 text-coral-light dark:text-coral-dark" />
                </div>
                <h2 className="font-medium text-text-primary-light dark:text-text-primary-dark">
                    Recent Activity
                </h2>
            </div>

            {/* Activity List with scroll */}
            <div className="flex flex-col px-1 max-h-52 overflow-y-auto">
                {activities.map((activity, index) => (
                    <ActivityItem key={index} {...activity} />
                ))}
            </div>
        </div>
    );
};

export default RecentActivityBlock;
