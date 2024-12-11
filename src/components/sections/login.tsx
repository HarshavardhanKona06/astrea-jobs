'use client'

import { ArrowUpRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
import ContentSlider from "@/components/layouts/login/content-slider";
import LogoBrand from "@/components/layouts/login/logo-brand";
import LoginForm from "@/components/layouts/login/login-form";

export default function LoginPage() {
    const router = useRouter()

    const handleDemoClick = () => {
        router.push('/dashboard')
    }

    return (
        <div className="flex min-h-screen w-screen overflow-hidden font-space-grotesk">
            {/* Left Half */}
            <div className="hidden md:flex md:w-1/2 bg-background-dark p-4">
                <div className="w-full h-full rounded-3xl overflow-hidden shadow-lg">
                    <ContentSlider />
                </div>
            </div>

            {/* Right Half */}
            <div className="w-full md:w-1/2 bg-background-dark">
                <div className="w-full max-w-lg mx-auto px-4 py-8 flex flex-col min-h-screen">
                    <div className="flex-1 flex flex-col items-center">
                        {/* Logo Container */}
                        <div className="flex justify-center w-full mb-16">
                            <LogoBrand />
                        </div>

                        {/* Main Content */}
                        <div className="w-full space-y-8">
                            <div className="text-center space-y-2">
                                <h1 className="text-4xl font-semibold text-text-primary-dark">
                                    Craft Your <br/>Career Journey
                                </h1>
                                <p className="text-lg text-text-secondary-dark">
                                    Streamline your job search and professional networking.
                                </p>
                            </div>

                            <LoginForm />
                        </div>

                        {/* Demo Button */}
                        <div className="mt-auto pt-8">
                            <Button
                                variant="ghost"
                                onClick={handleDemoClick}
                                className="text-md px-6 py-2 bg-background-secondary-dark text-coral-dark transition-colors rounded-full border border-border-dark hover:bg-background-secondary-dark hover:text-coral-dark hover:border-coral-dark flex items-center gap-3"
                                size="lg"
                            >
                                View Demo
                                <ArrowUpRight className="h-5 w-5 text-coral-dark hover:text-coral-dark" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
