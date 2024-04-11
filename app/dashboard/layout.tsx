import { SessionWrapper } from "../components/providers"

export default function Layout({ children }: { children:React.ReactNode }){
    return (<SessionWrapper>
        {children}
    </SessionWrapper>)
}