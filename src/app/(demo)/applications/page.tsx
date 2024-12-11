import {Metadata} from "next";
import ApplicationsPage from "@/components/sections/applications-page";

export const metadata: Metadata = {
    title: "Applications",
}

export default function Home() {
    return (
        <main>
            <ApplicationsPage />
        </main>
    );
}
