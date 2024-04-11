import Link from 'next/link'
import bobolinkLogo from '@/public/bobolinkLogoNav.png'
import Image from 'next/image'

export default function Navbar() {
    return(
        <header>
            <div className="larrytheworm" style={{float:'left'}}>
                <Image className="logo" alt="Logo" src={bobolinkLogo}/>
                <ul className="homeLinks">
                    <li className="Bookwrm"><Link href="/">Bobolink</Link></li>
                </ul>
            </div>
            <nav className="navbar">
                <ul className="navLinks">
                    <li className="Login"><Link href="/"></Link></li>
                    <li className="About"><Link href="/Bobolink/about">About Us</Link></li>
                </ul>
            </nav>
            <Link className="cta" href="/Bobolink/register"><button className='contactbutton'>Join Waitlist</button></Link>
        </header>
    )
}