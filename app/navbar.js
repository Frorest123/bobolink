import Link from 'next/link'

export default function Navbar() {
    return(
        <header>
            <div className="larrytheworm" style={{float:'left'}}>
                <img className="logo" src="https://cdn.discordapp.com/attachments/1116071450659536977/1190378280952528928/0.png?ex=65a1952a&is=658f202a&hm=24b61f5ecadd43f17fa61618804ae7636b3e07e7e8c20bb4ede54a743480369b&" />
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
            <Link className="cta" href="#"><button className='contactbutton'>Join Waitlist</button></Link>
        </header>
    )
}