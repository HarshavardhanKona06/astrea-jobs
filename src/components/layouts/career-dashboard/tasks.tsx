'use client';
import React, { useState } from 'react';
import {
    ListTodo,
    Circle,
    CheckCircle,
    Briefcase,
    MessageCircle,
    Clock
} from 'lucide-react';

const CustomTooltip = ({ children, content }) => {
    const [isVisible, setIsVisible] = useState(false);

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

const TaskItem = ({
                      text,
                      type,
                      linkedItem,
                      dueDate,
                      dueTime,
                      isCompleted
                  }) => {
    const getTypeStyles = (type) => {
        if (isCompleted) return 'text-teal-500 dark:text-teal-400';
        switch(type) {
            case 'application':
                return 'text-lapis-lazuli-light dark:text-lapis-lazuli-dark';
            case 'outreach':
                return 'text-coral-light dark:text-coral-dark';
            default:
                return 'text-text-secondary-light dark:text-text-secondary-dark';
        }
    };

    const getDueInfo = () => {
        const now = new Date();
        const due = new Date(dueDate);
        const diffDays = Math.ceil((due - now) / (1000 * 60 * 60 * 24));
        const fullDate = due.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit'
        });

        let display;
        let color;

        if (isCompleted) {
            color = 'teal';
            display = 'Completed';
        } else if (diffDays === 0) {
            display = dueTime ? `Due today by ${dueTime}` : 'Due today';
            color = 'red';
        } else if (diffDays === 1) {
            display = dueTime ? `Due tomorrow by ${dueTime}` : 'Due tomorrow';
            color = 'red';
        } else if (diffDays <= 5) {
            display = `Due in ${diffDays} days`;
            color = 'amber';
        } else {
            display = 'Due in a week';
            color = 'teal';
        }

        return { display, fullDate, color };
    };

    const { display, fullDate, color } = getDueInfo();

    return (
        <div className={"group flex items-center px-4 py-2.5 font-work-sans hover:bg-background-on-hover-light dark:hover:bg-background-on-hover-dark transition-colors duration-200 border-b border-b-border-light dark:border-b-border-dark"} >
            {/* Task Type Indicator */}
            {isCompleted ? (
                <CheckCircle className="w-4 h-4 flex-shrink-0 text-teal-500 dark:text-teal-400" />
            ) : (
                <Circle className={`w-4 h-4 flex-shrink-0 text-text-secondary-light dark:text-text-secondary-dark`} />
            )}

            {/* Task Text and Link Icon */}
            <div className="flex-1 flex items-center gap-2 ml-3">
                <span className={`text-sm font-medium ${
                    isCompleted
                        ? 'line-through decoration-text-secondary-light dark:decoration-text-secondary-dark text-text-secondary-light dark:text-text-secondary-dark'
                        : 'text-text-primary-light dark:text-text-primary-dark'
                }`}>
                    {text}
                </span>
                {linkedItem && (
                    <button className={`
                        flex items-center justify-center
                        ${type === 'application'
                        ? 'text-lapis-lazuli-light dark:text-lapis-lazuli-dark'
                        : 'text-coral-light dark:text-coral-dark'
                    }
                        hover:opacity-80 transition-opacity
                    `}>
                        {type === 'application' ? (
                            <Briefcase className="w-4 h-4" />
                        ) : (
                            <MessageCircle className="w-4 h-4" />
                        )}
                    </button>
                )}
            </div>

            {/* Due Date with Tooltip */}
            <CustomTooltip content={fullDate}>
                <div className={`
                    flex items-center gap-1.5 text-xs font-medium ml-4
                    ${color === 'red'
                    ? 'text-red-500 dark:text-red-400'
                    : color === 'amber'
                        ? 'text-amber-500 dark:text-amber-400'
                        : 'text-teal-500 dark:text-teal-400'
                }
                `}>
                    <Clock className="w-3.5 h-3.5" />
                    <span>{display}</span>
                </div>
            </CustomTooltip>
        </div>
    );
};

const TasksBlock = () => {
    const tasks = [
        {
            text: "Update Resume and Cover Letter",
            type: "general",
            dueDate: "2024-11-23",
            isCompleted: true
        },
        {
            text: "Complete TechCorp application",
            type: "application",
            linkedItem: "techcorp-app",
            dueDate: "2024-11-24",
            dueTime: "5:00 PM"
        },
        {
            text: "Follow up with John from InnovateLabs",
            type: "outreach",
            linkedItem: "john-contact",
            dueDate: "2024-11-25",
            dueTime: "2:00 PM"
        },
        {
            text: "Submit application to StartupXYZ",
            type: "application",
            linkedItem: "startup-app",
            dueDate: "2024-11-26",
            dueTime: "3:00 PM"
        },
        {
            text: "Connect with React Developer Community",
            type: "outreach",
            linkedItem: "community",
            dueDate: "2024-11-27"
        },
        {
            text: "Review Tech Stack Requirements",
            type: "general",
            dueDate: "2024-11-28"
        },
        {
            text: "Update portfolio website",
            type: "general",
            dueDate: "2024-11-29"
        }
    ];

    return (
        <div className="rounded-lg border border-border-light
                        dark:border-border-dark bg-background-secondary-light dark:bg-background-secondary-dark
                        hover:border-coral-light dark:hover:border-coral-dark transition-all duration-200">
            {/* Header */}
            <div className="flex items-center gap-2 px-3 pt-3 pb-2">
                <div className="p-1">
                    <ListTodo className="w-5 h-5 text-coral-light dark:text-coral-dark" />
                </div>
                <h2 className="font-medium text-text-primary-light dark:text-text-primary-dark">
                    Tasks/FollowUp
                </h2>
            </div>

            {/* Tasks List with scroll */}
            <div className="flex flex-col px-3 max-h-48 overflow-y-auto">
                {tasks.map((task, index) => (
                    <TaskItem key={index} {...task} />
                ))}
            </div>
        </div>
    );
};

export default TasksBlock;
