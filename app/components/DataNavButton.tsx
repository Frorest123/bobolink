"use client"
import { JSXElementConstructor, ReactNode } from "react";
import { SessionWrapper } from "./providers";
import { useSession } from "next-auth/react";
import Link from "next/link"
import "./hidden.css"

export default function DataNavButton({children}: {children: ReactNode}) {
    const session = useSession();
    return(
        <div className={((session.status === "authenticated") ? "" : "hidden")}><Link href="/admin">{children}</Link></div>
    );
}