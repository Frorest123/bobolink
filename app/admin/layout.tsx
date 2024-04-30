import { ReactNode } from "react";
import { SessionWrapper } from "../components/providers";

export default function AdminLayout({children}: {children: ReactNode}) {
    return (
        <SessionWrapper>
            {children}
        </SessionWrapper>
    )
}