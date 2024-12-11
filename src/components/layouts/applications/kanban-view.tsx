'use client';

import React from 'react';
import {
    Send, PhoneCall, HandshakeIcon, Ban, XCircle, Ghost, MoreHorizontal, BookmarkCheck, UsersRound, Award
} from 'lucide-react';

const KanbanView = () => {
    const columns = [
        {
            id: 'wishlist',
            title: 'Wishlist',
            icon: BookmarkCheck,
            message: 'Dream jobs await! Add your wishlist positions here',
            variant: {
                bg: 'bg-blue-100/50 dark:bg-blue-500/20',
                text: 'text-blue-700 dark:text-blue-300',
                iconBg: 'bg-blue-100 dark:bg-blue-500/10'
            }
        },
        {
            id: 'applied',
            title: 'Applied',
            icon: Send,
            message: 'Applications sent! Track your submissions here',
            variant: {
                bg: 'bg-cyan-100/50 dark:bg-cyan-500/20',
                text: 'text-cyan-700 dark:text-cyan-300',
                iconBg: 'bg-cyan-100 dark:bg-cyan-500/10'
            }
        },
        {
            id: 'screening',
            title: 'Screening',
            icon: PhoneCall,
            message: 'Initial conversations in progress! Build Conversation',
            variant: {
                bg: 'bg-yellow-100/50 dark:bg-yellow-500/20',
                text: 'text-yellow-700 dark:text-yellow-300',
                iconBg: 'bg-yellow-100 dark:bg-yellow-500/10'
            }
        },
        {
            id: 'interviewing',
            title: 'Interviewing',
            icon: UsersRound,
            message: 'Show them what you\'ve got! Interview phase',
            variant: {
                bg: 'bg-orange-100/50 dark:bg-orange-500/20',
                text: 'text-orange-700 dark:text-orange-300',
                iconBg: 'bg-orange-100 dark:bg-orange-500/10'
            }
        },
        {
            id: 'offer',
            title: 'Offer',
            icon: Award,
            message: 'Offers on the table! Time to negotiate',
            variant: {
                bg: 'bg-teal-100/50 dark:bg-teal-500/20',
                text: 'text-teal-700 dark:text-teal-300',
                iconBg: 'bg-teal-100 dark:bg-teal-500/10'
            }
        },
        {
            id: 'accepted',
            title: 'Accepted',
            icon: HandshakeIcon,
            message: 'Success! Ready for your new journey',
            variant: {
                bg: 'bg-emerald-100/50 dark:bg-emerald-500/20',
                text: 'text-emerald-700 dark:text-emerald-300',
                iconBg: 'bg-emerald-100 dark:bg-emerald-500/10'
            }
        },
        {
            id: 'withdrawn',
            title: 'Withdrawn',
            icon: Ban,
            message: 'Sometimes it\'s best to move on!',
            variant: {
                bg: 'bg-zinc-100/50 dark:bg-zinc-500/20',
                text: 'text-zinc-700 dark:text-zinc-300',
                iconBg: 'bg-zinc-200 dark:bg-zinc-500/10'
            }
        },
        {
            id: 'rejected',
            title: 'Rejected',
            icon: XCircle,
            message: 'Their loss!? Keep moving forward',
            variant: {
                bg: 'bg-red-100/50 dark:bg-red-500/20',
                text: 'text-red-700 dark:text-red-300',
                iconBg: 'bg-red-100 dark:bg-red-500/10'
            }
        },
        {
            id: 'ghosted',
            title: 'Ghosted',
            icon: Ghost,
            message: 'No response? Time to focus elsewhere',
            variant: {
                bg: 'bg-purple-100/50 dark:bg-purple-500/20',
                text: 'text-purple-700 dark:text-purple-300',
                iconBg: 'bg-purple-100 dark:bg-purple-500/10'
            }
        }
    ];

    return (
        <div className="font-work-sans fixed top-32 left-0 right-0 bottom-0 bg-background-light dark:bg-background-dark">
            <div className="h-full overflow-x-auto">
                <div className="inline-flex gap-7 p-7 min-w-full">
                    {columns.map((column) => (
                        <div key={column.id} className="flex-shrink-0 w-72">
                            {/* Column Header */}
                            <div className="flex items-center justify-between px-2 mb-2">
                                <div className="flex items-center gap-2">
                                    <span className="text-md font-medium text-text-primary-light dark:text-text-primary-dark">
                                        {column.title}
                                    </span>
                                    <span className="flex items-center justify-center w-6 h-6 text-sm font-medium rounded-full bg-background-secondary-light dark:bg-background-secondary-dark text-lapis-lazuli-light dark:text-lapis-lazuli-dark">
                                        0
                                    </span>
                                </div>
                                <button className="flex items-center justify-center w-6 h-6 rounded-md transition-colors hover:bg-background-on-hover-light dark:hover:bg-background-on-hover-dark">
                                    <MoreHorizontal className="w-5 h-5 text-text-secondary-light dark:text-text-secondary-dark" />
                                </button>
                            </div>

                            {/* Empty State Card */}
                            <div className="relative group">
                                <div className={`
                                    flex flex-col items-center justify-center p-4 h-40
                                    rounded-lg border border-border-light dark:border-border-dark
                                    bg-background-secondary-light dark:bg-background-secondary-dark
                                    transition-colors duration-200
                                    hover:border-lapis-lazuli-light dark:hover:border-lapis-lazuli-dark
                                `}>
                                    <div className={`
                                        flex items-center justify-center w-12 h-12 rounded-lg mb-3
                                        ${column.variant.iconBg}
                                    `}>
                                        <column.icon className={`w-7 h-7 ${column.variant.text}`} />
                                    </div>
                                    <p className="text-md text-center text-text-secondary-light dark:text-text-secondary-dark">
                                        {column.message}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default KanbanView;
