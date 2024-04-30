'use client'
import Display from "@/app/components/datadisplay/display"
import './database.css'
import { useSession } from "next-auth/react"
import Link from "next/link"

export default function Admin(){
    const session = useSession()
    
    return(
        <div className="theodore">
            {session.status === 'authenticated' ? (<Display/>) : (
                <h1>Sorry. To access this page, please <Link href="/adminAuth">Sign In</Link></h1>
            )}
        </div>
    )
}