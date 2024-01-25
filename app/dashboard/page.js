'use client'
import { useDebugValue } from "react"
import Provider from "../components/provider"
import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react"

export default function Dashboard(){
    const {data: session, status} = useSession()
    return(<>{ session ? session.user.email : 'no session' }
    <button onClick={signOut}>Sign Out</button>
    </>)

}