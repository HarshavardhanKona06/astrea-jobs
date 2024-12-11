'use client';

import React from 'react';
import { ClipboardList } from 'lucide-react';

const TimelineView = () => {
    return (
        <div className="font-work-sans fixed top-32 left-0 right-0 bottom-0 bg-background-light dark:bg-background-dark">
            <div className="h-full overflow-auto">
                <div className="p-5">
                    <div className="rounded-lg border border-border-light dark:border-border-dark">
                        {/* Empty State */}
                        <div className="px-6 py-16 flex flex-col items-center justify-center bg-background-light dark:bg-background-dark">
                            <div className="flex items-center justify-center w-24 h-24 rounded-lg mb-4 bg-background-secondary-light dark:bg-background-secondary-dark">
                                <ClipboardList className="w-16 h-16 text-lapis-lazuli-light dark:text-lapis-lazuli-dark" />
                            </div>
                            <h3 className="text-lg font-medium mb-2 text-text-primary-light dark:text-text-primary-dark">
                                No Applications Yet
                            </h3>
                            <p className="text-md text-center max-w-md text-text-secondary-light dark:text-text-secondary-dark">
                                Ready to start your journey? Add your first job application and keep track of every opportunity here.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimelineView;
