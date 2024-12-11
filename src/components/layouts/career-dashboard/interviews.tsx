'use client';
import React, { useState } from 'react';
import {
    CalendarCheck2,
    Monitor,
    PhoneCall,
    UserRound,
    Briefcase,
    FileText,
    Clock
} from 'lucide-react';

interface TooltipProps {
    children: React.ReactNode;
    content: string;
}

interface InterviewItemProps {
    type: 'phone' | 'virtual' | 'onsite';
    role: string;
    company: string;
    applicationLink: string;
    resumeLink: string;
    startTime: string;
    endTime: string;
    timeZone: string;
}

type InterviewData = InterviewItemProps

const CustomTooltip: React.FC<TooltipProps> = ({ children, content }) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    return (
        <div className="relative inline-flex"
             onMouseEnter={() => setIsVisible(true)}
             onMouseLeave={() => setIsVisible(false)}>
            {children}
            {isVisible && (
                <div className="absolute bottom-full mb-2 px-2 py-1 text-xs rounded-md
                               bg-background-dark text-text-primary-dark
                               border border-border-dark shadow-lg whitespace-nowrap">
                    {content}
                </div>
            )}
        </div>
    );
};

const InterviewItem: React.FC<InterviewItemProps> = ({
                                                         type,
                                                         role,
                                                         company,
                                                         applicationLink,
                                                         resumeLink,
                                                         startTime,
                                                         endTime,
                                                         timeZone
                                                     }) => {
    const getInterviewTypeIcon = () => {
        const iconProps = {
            className: "w-3 h-3 flex-shrink-0"
        };

        const wrapperClass = type === 'phone'
            ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-300'
            : 'bg-orange-100 text-orange-700 dark:bg-orange-500/10 dark:text-orange-300';

        let Icon: React.FC<{ className: string }>;
        switch (type) {
            case 'phone':
                Icon = PhoneCall;
                break;
            case 'virtual':
                Icon = Monitor;
                break;
            case 'onsite':
                Icon = UserRound;
                break;
            default:
                Icon = PhoneCall;
        }

        return (
            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${wrapperClass}`}>
                <Icon {...iconProps} />
            </div>
        );
    };

    const getTimeColor = (): string => {
        const now = new Date();
        const interview = new Date(startTime);
        const hoursUntilInterview = (interview.getTime() - now.getTime()) / (1000 * 60 * 60);

        if (hoursUntilInterview <= 48) {
            return 'text-red-500 dark:text-red-400';
        } else if (hoursUntilInterview <= 72) {
            return 'text-amber-500 dark:text-amber-400';
        }
        return 'text-green-500 dark:text-green-400';
    };

    const formatDateTime = (): { display: string; fullDate: string } => {
        const start = new Date(startTime);
        const end = new Date(endTime);

        return {
            display: `${start.toLocaleString('en-US', {
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: '2-digit'
            })} - ${end.toLocaleString('en-US', {
                hour: 'numeric',
                minute: '2-digit'
            })} ${timeZone}`,
            fullDate: start.toLocaleString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
                year: 'numeric',
                hour: 'numeric',
                minute: '2-digit',
                timeZoneName: 'short'
            })
        };
    };

    const { display, fullDate } = formatDateTime();
    const timeColor = getTimeColor();

    return (
        <div className="group flex items-center px-4 py-2.5 font-work-sans
                        hover:bg-background-on-hover-light dark:hover:bg-background-on-hover-dark
                        transition-colors duration-200
                        border-b border-b-border-light dark:border-b-border-dark">
            {getInterviewTypeIcon()}

            <div className="flex-1 flex items-center gap-2 ml-3">
                <span className="text-sm">
                    <span className="font-medium text-text-primary-light dark:text-text-primary-dark">
                        {role}
                    </span>
                    <span className="text-text-secondary-light dark:text-text-secondary-dark mx-1">|</span>
                    <span className="text-text-primary-light dark:text-text-primary-dark">
                        {company}
                    </span>
                </span>

                <div className="flex items-center gap-2">
                    {applicationLink && (
                        <CustomTooltip content={`View application: ${applicationLink}`}>
                            <button className="text-lapis-lazuli-light dark:text-lapis-lazuli-dark
                                           hover:opacity-80 transition-opacity">
                                <Briefcase className="w-4 h-4" />
                            </button>
                        </CustomTooltip>
                    )}
                    {resumeLink && (
                        <CustomTooltip content={`View resume: ${resumeLink}`}>
                            <button className="text-coral-light dark:text-coral-dark
                                           hover:opacity-80 transition-opacity">
                                <FileText className="w-4 h-4" />
                            </button>
                        </CustomTooltip>
                    )}
                </div>
            </div>

            <CustomTooltip content={fullDate}>
                <div className={`flex items-center gap-1.5 text-xs font-medium ml-4 ${timeColor}`}>
                    <Clock className="w-3.5 h-3.5" />
                    <span>{display}</span>
                </div>
            </CustomTooltip>
        </div>
    );
};

const InterviewsBlock: React.FC = () => {
    const interviews: InterviewData[] = [
        {
            type: 'phone',
            role: 'Senior Software Engineer',
            company: 'TechCorp',
            applicationLink: 'techcorp-swe-application',
            resumeLink: 'john-doe-resume.pdf',
            startTime: '2024-11-25T14:00:00',
            endTime: '2024-11-25T15:00:00',
            timeZone: 'EST'
        },
        {
            type: 'virtual',
            role: 'Full Stack Developer',
            company: 'InnovateLabs',
            applicationLink: 'innovatelabs-fsd-application',
            resumeLink: 'john-doe-resume.pdf',
            startTime: '2024-11-27T11:00:00',
            endTime: '2024-11-27T12:30:00',
            timeZone: 'PST'
        },
        {
            type: 'onsite',
            role: 'Senior Frontend Engineer',
            company: 'StartupXYZ',
            applicationLink: 'startupxyz-sfe-application',
            resumeLink: 'john-doe-resume.pdf',
            startTime: '2024-11-30T10:00:00',
            endTime: '2024-11-30T14:00:00',
            timeZone: 'EST'
        },
        {
            type: 'phone',
            role: 'Senior Software Engineer',
            company: 'TechCorp',
            applicationLink: 'techcorp-swe-application',
            resumeLink: 'john-doe-resume.pdf',
            startTime: '2024-11-25T14:00:00',
            endTime: '2024-11-25T15:00:00',
            timeZone: 'EST'
        },
        {
            type: 'virtual',
            role: 'Full Stack Developer',
            company: 'InnovateLabs',
            applicationLink: 'innovatelabs-fsd-application',
            resumeLink: 'john-doe-resume.pdf',
            startTime: '2024-11-27T11:00:00',
            endTime: '2024-11-27T12:30:00',
            timeZone: 'PST'
        },
        {
            type: 'onsite',
            role: 'Senior Frontend Engineer',
            company: 'StartupXYZ',
            applicationLink: 'startupxyz-sfe-application',
            resumeLink: 'john-doe-resume.pdf',
            startTime: '2024-11-30T10:00:00',
            endTime: '2024-11-30T14:00:00',
            timeZone: 'EST'
        }
    ];

    return (
        <div className="rounded-lg border border-border-light dark:border-border-dark
                        bg-background-secondary-light dark:bg-background-secondary-dark
                        hover:border-lapis-lazuli-light dark:hover:border-lapis-lazuli-dark transition-all duration-200">
            <div className="flex items-center gap-2 px-3 pt-3 pb-2">
                <div className="p-1">
                    <CalendarCheck2 className="w-5 h-5 text-lapis-lazuli-light dark:text-lapis-lazuli-dark" />
                </div>
                <h2 className="font-medium text-text-primary-light dark:text-text-primary-dark">
                    Upcoming Interviews
                </h2>
            </div>

            <div className="flex flex-col px-3 max-h-48 overflow-y-auto">
                {interviews.map((interview, index) => (
                    <InterviewItem key={index} {...interview} />
                ))}
            </div>
        </div>
    );
};

export default InterviewsBlock;