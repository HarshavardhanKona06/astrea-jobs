import React from 'react';
import { Briefcase, PhoneCall, MessageCircleReply, MessageCircle, TrendingDown, TrendingUp } from 'lucide-react';

const QuickInsightCard = ({
                              title,
                              icon: Icon,
                              metrics,
                              variant
                          }) => {
    return (
        <div className={`
            p-3 rounded-lg border border-border-light dark:border-border-dark
            bg-background-secondary-light dark:bg-background-secondary-dark
            hover:border-${variant}-light dark:hover:border-${variant}-dark 
            transition-all duration-200
        `}>
            <div className="flex items-center gap-1 mb-3">
                <div className={`
                    w-8 h-8 rounded-lg flex items-center justify-center
                    bg-${variant}-light/10 dark:bg-${variant}-dark/10
                `}>
                    <Icon
                        className={`w-5 h-5 text-${variant}-light dark:text-${variant}-dark`}
                    />
                </div>
                <h3 className="font-medium text-md text-text-primary-light dark:text-text-primary-dark">
                    {title}
                </h3>
            </div>

            <div className="grid grid-cols-3 gap-6 pl-2">
                {metrics.map((metric, index) => (
                    <div key={index} className="space-y-0.5 flex flex-col items-center tracking-tight">
                        <div className="relative inline-flex">
                            <span
                                className="text-2xl font-semibold text-text-primary-light dark:text-text-primary-dark">
                                {metric.value}
                            </span>
                            {metric.trend && (
                                <span className={`
                                    absolute -top-1 -right-6
                                    text-sm font-medium flex items-center
                                    ${metric.trend > 0
                                    ? 'text-green-500 dark:text-green-400'
                                    : metric.trend < 0
                                        ? 'text-red-500 dark:text-red-400'
                                        : 'text-text-secondary-light dark:text-text-secondary-dark'
                                    }
                                `}>
                                    {metric.trend > 0 ? (
                                        <TrendingUp className="w-3 h-3"/>
                                    ) : metric.trend < 0 ? (
                                        <TrendingDown className="w-3 h-3"/>
                                    ) : null}
                                    <span className="text-xs ml-0.5">{Math.abs(metric.trend)}</span>
                                </span>
                            )}
                        </div>
                        <span className="block text-sm font-medium text-text-primary-light dark:text-text-primary-dark">
                            {metric.label}
                        </span>
                        <span className="block text-xs text-text-secondary-light dark:text-text-secondary-dark">
                            {metric.date}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const QuickInsights = () => {
    const currentWeek = "Nov 24 - Nov 30";
    const currentMonth = "November 2024";
    const currentYear = "2024";

    const insights = [
        {
            title: "Applications",
            icon: Briefcase,
            variant: "lapis-lazuli",
            metrics: [
                {value: 5, trend: 2, label: "This Week", date: currentWeek},
                {value: 20, trend: 5, label: "This Month", date: currentMonth},
                {value: 50, label: "This Year", date: currentYear}
            ]
        },
        {
            title: "Screening & Interviews",
            icon: PhoneCall,
            variant: "lapis-lazuli",
            metrics: [
                {value: 2, trend: 1, label: "This Week", date: currentWeek},
                {value: 8, trend: 2, label: "This Month", date: currentMonth},
                {value: 25, label: "This Year", date: currentYear}
            ]
        },
        {
            title: "Outreach",
            icon: MessageCircle,
            variant: "coral",
            metrics: [
                {value: 3, trend: -1, label: "This Week", date: currentWeek},
                {value: 15, trend: 3, label: "This Month", date: currentMonth},
                {value: 30, label: "This Year", date: currentYear}
            ]
        },
        {
            title: "Outreach Responses",
            icon: MessageCircleReply,
            variant: "coral",
            metrics: [
                {value: 1, trend: 2, label: "This Week", date: currentWeek},
                {value: 5, label: "This Month", date: currentMonth},
                {value: 15, label: "This Year", date: currentYear }
            ]
        }
    ];

    return (
        <div className="pt-16 p-6 font-work-sans">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {insights.map((insight, index) => (
                    <QuickInsightCard key={index} {...insight} />
                ))}
            </div>
        </div>
    );
};

export default QuickInsights;
