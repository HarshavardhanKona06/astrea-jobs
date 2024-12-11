'use client'

import { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import Image from 'next/image'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function LoginForm() {
    const [email, setEmail] = useState('')

    return (
        <Card className="w-full bg-background-secondary-dark border-border-dark rounded-3xl">
            <CardContent className="p-6 space-y-5">
                <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your Email"
                    className="bg-background-dark border-border-dark text-text-primary-dark placeholder:text-text-secondary-dark focus-visible:ring-lapis-lazuli-dark focus-visible:ring-offset-0 focus:outline-none rounded-2xl h-12"
                />

                <Button
                    className="w-full bg-lapis-lazuli-dark hover:bg-lapis-lazuli-on-hover-dark text-text-primary-dark rounded-2xl h-12"
                >
                    Continue with Email
                </Button>

                <div className="space-y-3">
                    <Button
                        variant="secondary"
                        className="w-full bg-background-dark hover:bg-background-on-hover-dark text-text-primary-dark rounded-2xl h-10"
                    >
                        <FcGoogle width={20} height={20} className="mr-3"/>
                        Continue with Google
                    </Button>

                    <Button
                        variant="secondary"
                        className="w-full bg-background-dark hover:bg-background-on-hover-dark text-text-primary-dark rounded-2xl h-10"
                    >
                        <Image
                            src="/microsoft-logo.svg"
                            alt="Microsoft"
                            width={20}
                            height={20}
                            className="mr-3"
                        />
                        Continue with Microsoft
                    </Button>
                </div>

                <p className="text-sm text-text-secondary-dark text-center">
                    By continuing, you agree to AstreaJobs&#39;s{' '}
                    <Link href="#" className="text-text-primary-dark hover:underline">
                        Terms of Service
                    </Link>
                    {' '}and{' '}
                    <Link href="#" className="text-text-primary-dark hover:underline">
                        Privacy Policy
                    </Link>
                </p>
            </CardContent>
        </Card>
    )
}