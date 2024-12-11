'use client'

import Image from 'next/image'
import Link from "next/link"

export default function LogoBrand() {
    return (
        <Link
            href="/"
            className="inline-flex items-center space-x-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-dark rounded-lg p-1 font-oxanium"
        >
            <div className="relative h-8 w-8">
                <Image src="/logo.svg" alt="CareerCraft Logo" fill className="object-contain"/>
            </div>

            <span className="text-2xl font-bold text-text-primary-dark">AstreaJobs</span>
        </Link>
    )
}
