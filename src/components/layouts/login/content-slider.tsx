'use client'

import { useState, useEffect, useRef } from 'react'
import { Box, Laptop, Computer } from 'lucide-react'
import { cn } from "@/lib/utils"

export default function ContentSlider() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(false)
    const [progress, setProgress] = useState(0)
    const progressInterval = useRef<NodeJS.Timeout | null>(null)
    const SLIDE_DURATION = 5000
    const TRANSITION_DURATION = 600

    const slides = [
        {
            icon: <Box className="w-6 h-6 text-coral-dark" />,
            title: "Track Your Applications",
            content: "Keep all your job applications organized in one place.",
            image: "/illustrations/track.svg"
        },
        {
            icon: <Computer className="w-6 h-6 text-coral-dark" />,
            title: "Network Effectively",
            content: "Build and maintain professional relationships with ease.",
            image: "/illustrations/network.svg"
        },
        {
            icon: <Laptop className="w-6 h-6 text-coral-dark" />,
            title: "Analyze Your Progress",
            content: "Get insights into your job search journey with detailed analytics.",
            image: "/illustrations/analytics.svg"
        }
    ]

    useEffect(() => {
        const startProgress = () => {
            const startTime = Date.now()

            progressInterval.current = setInterval(() => {
                const elapsed = Date.now() - startTime
                const newProgress = (elapsed / SLIDE_DURATION) * 100

                if (newProgress >= 100) {
                    if (progressInterval.current) {
                        clearInterval(progressInterval.current)
                    }
                    handleSlideTransition()
                } else {
                    setProgress(newProgress)
                }
            }, 16)
        }

        if (!isTransitioning) {
            startProgress()
        }

        return () => {
            if (progressInterval.current) {
                clearInterval(progressInterval.current)
            }
        }
    }, [currentSlide, isTransitioning])

    const handleSlideTransition = () => {
        setIsTransitioning(true)
        const nextSlide = (currentSlide + 1) % slides.length

        // Set next slide immediately
        setCurrentSlide(nextSlide)
        setProgress(0)

        // Reset transition state after animation completes
        setTimeout(() => {
            setIsTransitioning(false)
        }, TRANSITION_DURATION)
    }

    const handleDotClick = (index: number) => {
        if (index === currentSlide || isTransitioning) return

        if (progressInterval.current) {
            clearInterval(progressInterval.current)
        }

        setIsTransitioning(true)
        setCurrentSlide(index)
        setProgress(0)

        setTimeout(() => {
            setIsTransitioning(false)
        }, TRANSITION_DURATION)
    }

    const SlideContent = ({ slide, index }: { slide: typeof slides[0], index: number }) => {
        const isCurrentSlide = index === currentSlide
        const wasLastSlide = index === ((currentSlide - 1 + slides.length) % slides.length)

        return (
            <div
                className={cn(
                    "absolute inset-0 flex flex-col items-center justify-center transition-all",
                    "transform",
                    isCurrentSlide
                        ? "opacity-100 translate-y-0"
                        : wasLastSlide && isTransitioning
                            ? "opacity-0 -translate-y-8"
                            : "opacity-0 translate-y-8"
                )}
                style={{
                    transitionProperty: 'all',
                    transitionDuration: `${TRANSITION_DURATION}ms`,
                    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                }}
            >
                <div className="transform transition-transform duration-500 ease-out">
                    {slide.icon}
                </div>

                <div className="text-center space-y-4 mt-8">
                    <h2 className="text-2xl font-semibold text-text-primary-dark">
                        {slide.title}
                    </h2>
                    <p className="text-lg text-text-secondary-dark">
                        {slide.content}
                    </p>
                </div>

                <div className="relative w-64 h-64 mt-8">
                    <div className="w-full h-full bg-background-dark/10 rounded-lg" />
                </div>
            </div>
        )
    }

    return (
        <div className="h-full flex flex-col justify-between p-8 bg-background-secondary-dark overflow-hidden">
            <div className="flex-1 relative">
                {slides.map((slide, index) => (
                    <SlideContent
                        key={index}
                        slide={slide}
                        index={index}
                    />
                ))}
            </div>

            <div className="flex justify-center space-x-2 mt-8">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={cn(
                            "h-2 rounded-full transition-all duration-300 relative",
                            index === currentSlide ? "w-16" : "w-2 bg-border-dark"
                        )}
                        aria-label={`Go to slide ${index + 1}`}
                    >
                        {index === currentSlide && (
                            <>
                                <div className="absolute inset-0 bg-coral-dark rounded-full" />
                                <div
                                    className="absolute inset-0 bg-lapis-lazuli-dark rounded-full origin-left"
                                    style={{ width: `${progress}%` }}
                                />
                            </>
                        )}
                    </button>
                ))}
            </div>
        </div>
    )
}
