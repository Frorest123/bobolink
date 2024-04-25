import { ChakraWrapper } from '@/app/components/providers'
import './register.css'

export default function Math({ children }: { children:React.ReactNode }){
    return(
        <ChakraWrapper>
        {children}
        </ChakraWrapper>
    )
}