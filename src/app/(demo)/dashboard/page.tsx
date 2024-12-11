import {Metadata} from "next";
import CareerDashboardPage from "@/components/sections/career-dashboard-page";

export const metadata:Metadata = {
    title: "Career Dashboard",
}

export default function Home() {
    return (
        <main>
            <CareerDashboardPage />
        </main>
    );
}
