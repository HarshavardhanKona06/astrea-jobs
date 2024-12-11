import {Metadata} from "next";
import LoginPage from "@/components/sections/login";

export const metadata: Metadata = {
    title: "Login",
}

export default function Home() {
    return (
        <LoginPage />
    );
}
