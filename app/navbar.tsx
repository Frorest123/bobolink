"use client"
import burger from '@/public/burger-menu-svgrepo-com.svg'
import Link from 'next/link'
import bobolinkLogo from '@/public/bobolinkLogoNav.png'
import Image from 'next/image'
import { ChakraWrapper } from './components/providers'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'
import { useState } from 'react'

export default function Navbar() {

    const [hamburger, setHamburger] = useState(false);


    return(
        <>
        <ChakraWrapper>
        <header className="navbarContainer">
        <div className='hamburgerPlaceholder'></div>

            <div className="larrytheworm" >
                <Link href="/"><Image className="logo" alt="Logo" src={bobolinkLogo}/></Link>
                <ul className="homeLinks">
                    <li className="Bookwrm"><Link href="/">Bobolink</Link></li>
                </ul>
            </div>
            <nav className="navbar">
                <ul className="navLinks">
                    <li className="Login"><Link href="/"></Link></li>
                    <li className="about"><Link href="/Bobolink/about">About Us</Link></li>
                    <Link className="cta" href="/Bobolink/register"><button className='contactbutton'>Join Waitlist</button></Link>
                </ul>
            </nav>
            <button className="hamburger" onClick={() => setHamburger(!hamburger)}><Image alt="menu" src={burger} width={25}/></button>
            
        
        
        </header>

        { hamburger && (
            <div className='hamburgerDropDown'>
            <div className="About"><Link href="/Bobolink/about">About Us</Link></div>
            <Link className="cta" href="/Bobolink/register"><button className='contactbutton'>Join Waitlist</button></Link>
            </div>
        )}
        

        </ChakraWrapper>
        </>
    )
}