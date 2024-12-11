import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const DemoTooltip = () => {
    const [animationState, setAnimationState] = useState('hidden');

    useEffect(() => {
        const showTimer = setTimeout(() => {
            setAnimationState('showing');
        }, 1500);

        const bounceTimer = setTimeout(() => {
            setAnimationState('bouncing');
        }, 2100);

        const hideTimer = setTimeout(() => {
            setAnimationState('hiding');
        }, 8000);

        return () => {
            clearTimeout(showTimer);
            clearTimeout(bounceTimer);
            clearTimeout(hideTimer);
        };
    }, []);

    if (animationState === 'hidden') return null;

    const animationClasses = {
        showing: 'animate-message-pop-up',
        bouncing: 'translate-x-[-50%] animate-tooltip-bounce',
        hiding: 'animate-message-pop-down'
    }[animationState];

    return (
        <div className={`absolute -top-6 left-[50%] z-50 ${animationClasses}`}>
            <div className="relative inline-block">
                <Alert className="w-auto min-w-[240px] bg-background-secondary-dark border-border-dark shadow-lg py-2">
                    <div className="flex items-center">
                        <ArrowUpRight className="h-5 w-5 shrink-0 text-coral-dark mt-[1px]" />
                        <AlertDescription className="ml-1 font-work-sans font-medium text-text-primary-dark whitespace-nowrap text-sm leading-5">
                            Don&#39;t forget to check out our demo !!
                        </AlertDescription>
                    </div>
                </Alert>
                <div className="w-4 h-4 bg-background-secondary-dark rotate-45 absolute -bottom-2 left-1/2 -translate-x-1/2 border-border-dark"></div>
            </div>
        </div>
    );
};

export default DemoTooltip;
