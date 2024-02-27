import Link from 'next/link'

export default function Navbar() {
    return(
        <header>
            <div className="larrytheworm" style={{float:'left'}}>
                <img className="logo" src="https://cdn.discordapp.com/attachments/1116071450659536977/1190378280952528928/0.png?ex=65eb692a&is=65d8f42a&hm=1a823adf1d87efcdd474bd57383390711e0ecc9336bd6bf19f0ba0cd72a87600&" />
                <ul className="homeLinks">
                    <li className="Bookwrm"><Link href="/">Bobolink</Link></li>
                </ul>
            </div>
            <nav className="navbar">
                <ul className="navLinks">
                    <li className="Login"><Link href="/math/Algebra2">Contact</Link></li>
                    <li className="About"><Link href="/math/Algebra1">About Us</Link></li>
                </ul>
            </nav>
            <Link className="cta" href="/math/register"><button className='contactbutton'>Join Waitlist</button></Link>
        </header>
    )
}